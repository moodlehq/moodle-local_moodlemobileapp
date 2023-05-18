#!/bin/bash
#
# Script to parse PHP language packs and generates app json language.
# ./parse.sh [app_version]

LANGVERSION=$1
if [ -z $LANGVERSION ]; then
    echo "Please specify a correct version"
    exit 1
fi

LANGPACKSFOLDER="/tmp/moodle-langpacks" # Langpacks will be downloaded here.
SERVER_URL='https://download.moodle.org/'

# DEFAULT fallback file for unreleased versions
LANGINDEX_URL='https://raw.githubusercontent.com/moodlehq/moodle-local_moodlemobileapp/main/langindex.json'

function download_file {
    local url=$1
    local filename=$(basename ${url})

    pushd $LANGPACKSFOLDER > /dev/null

    curl -s $url --output $filename > /dev/null
    size=$(du -k "$filename" | cut -f 1)
    if [ ! -n $filename ] || [ $size -le 1 ]; then
        echo "Wrong or corrupt file $filename"
        rm $filename

        popd > /dev/null
        return
    fi

    if [[ $filename == *.zip ]]; then
        local lang="${filename%.*}"
        # Delete previous downloaded folder
        rm -R $lang > /dev/null 2>&1> /dev/null

        # Unzip
        unzip -o -u $lang.zip > /dev/null

        # Delete the zip
        rm $filename
    fi

    popd > /dev/null
}

# Download all language packs of a version.
function get_languages {
    if [ ! -d $LANGPACKSFOLDER ]; then
        mkdir $LANGPACKSFOLDER
    fi

    force=$1

    LANG_JSON=languages.json

    download_file "$SERVER_URL/langpack/$LANGVERSION/languages.md5"
    while IFS="," read -r lang md5 name
    do
        if [ -f $LANG_JSON ] && [ $force -eq 0 ]; then
            md5_old=`jq -r .\"$lang\".md5 $LANG_JSON`
            if [[ "$md5" == "$md5_old" ]]; then
                echo "Same Md5 on $name ($lang) language, skipping..."
                continue;
            fi
        fi

        echo "Getting $name ($lang) language..."
        download_file "$SERVER_URL/download.php/direct/langpack/$LANGVERSION/$lang.zip"
    done < $LANGPACKSFOLDER/languages.md5
}

if [ ! -z $GIT_TOKEN ] && [ ! -z $GITHUB_REPOSITORY ]; then
    # Set up Github Actions bot user
    # See https://github.community/t/github-actions-bot-email-address/17204/6
    git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
    git config --local user.name "github-actions[bot]"

    git remote set-url origin https://$GIT_TOKEN@github.com/$GITHUB_REPOSITORY.git
    git fetch -q origin

    mkdir /tmp/runtimefiles
    cp parser/*.php /tmp/runtimefiles

    git checkout $LANGVERSION
    if [ $? -ne 0 ]; then
        # Branch does not exists yet.
        git checkout --orphan $LANGVERSION
        git rm --cached -r .
    fi

    cp /tmp/runtimefiles/*.php ./
fi


if [ ! -f 'langindex.json' ]; then
    echo "Langindex not found, downloading a fallback one..."

    download_file "$LANGINDEX_URL"

    cp $LANGPACKSFOLDER langindex.json
fi

langindexupdate=`date -r langindex.json +%s`
currenttime=`date +%s`
ellapsedtime=$((currenttime - langindexupdate))
force=0
if [ $ellapsedtime -lt 3600 ]; then
    echo 'Recently updated, force update all languages'
    force=1
fi

get_languages $force

# Divide execution in chunks of 50 langs to avoid php memory limit errors.
lang_count=`cat $LANGPACKSFOLDER/languages.md5 | wc -l`
rounds=`echo "($lang_count + 50 - 1)/50" | bc` # Ceil division
n=0
while [[ $n -lt $rounds ]]; do
    echo "Execution $n"
    php -f moodle_to_json.php $currenttime
    if [ $? -ne 0 ]; then
        echo "Moodle2Json execution failed"
        exit 1
    fi
    n=$((n+1))
done

if [ ! -z $GIT_TOKEN ] && [ ! -z $GITHUB_REPOSITORY ]; then
    # Commit changes, except langindex.json
    git add *.json
    git restore --staged langindex.json

    git commit -m "[auto-generated] Update lang files for version $LANGVERSION"

    git push -u origin $LANGVERSION
fi

echo "All done!";
