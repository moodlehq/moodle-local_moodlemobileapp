# This script is used to find untranslated strings for a particular language.
#
# It takes three arguments:
# 1. index_file.json - A JSON file containing the mapping of keys to files (usually the bmaindex.json file)
# 2. english_strings.json - A JSON file containing the English strings.
# 3. partial_translation.json - A JSON file containing the translated strings of a particular language
#
# The script has to be executed in the moodle-local_moodlemobile app repo, in the most recent langpack_X branch.
# The script will output the untranslated strings to a JSON file (output/ directory) and also create PHP files for the untranslated strings.
# Those PHP files can be used to be translated and then imported back to the Moodle language site.

import json
import sys
import os

def load_json(file_path):
    """Load a JSON file and return its content."""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            return json.load(file)
    except FileNotFoundError:
        print(f"Error: File not found - {file_path}")
        sys.exit(1)
    except json.JSONDecodeError:
        print(f"Error: Invalid JSON format in file - {file_path}")
        sys.exit(1)

def save_json(data, output_path):
    """Save the data to a JSON file."""
    try:
        with open(output_path, 'w', encoding='utf-8') as file:
            json.dump(data, file, ensure_ascii=False, indent=4)
    except Exception as e:
        print(f"Error: Unable to save the file - {output_path}\n{e}")
        sys.exit(1)

def save_file(data, output_path):
    """Save the data to any file."""
    try:
        with open(output_path, 'w', encoding='utf-8') as file:
            file.write(data)
    except Exception as e:
        print(f"Error: Unable to save the file - {output_path}\n{e}")
        sys.exit(1)

def find_untranslated_strings(english_strings, translated_strings):
    """Find strings that are not translated."""
    untranslated = {}
    for key, value in english_strings.items():
        if key not in translated_strings or not translated_strings[key]:
            untranslated[key] = value
    return untranslated

def process_translations(untranslated_strings, index_mapping):
    """Distribute untranslated strings into files based on the index mapping."""
    file_contents = {}

    for key, value in untranslated_strings.items():
        if key in index_mapping:

            target_file = index_mapping[key]
            # Check if value contains something like auth_email/pluginname.
            # If it does, split it and use the first part as the key.
            if "/" in target_file:
                target_file = target_file.split("/")[0]

            if target_file not in file_contents:
                file_contents[target_file] = "<?php\n\n"

            # Convert to format expected by the PHP file.
            # Value has to be escaped to avoid issues with special characters.
            value = value.replace("'", "\\'")

            if target_file != "local_moodlemobileapp":
                # Key in this case is the last part of the key.
                key = key.split(".")[-1]

            file_contents[target_file] +=  f"$string['{key}'] = '{value}';\n"
        else:
            print(f"Warning: Key '{key}' not found in index mapping.")

    return file_contents

def main():
    if len(sys.argv) != 4:
        print("Usage: python script.py <index_file.json> <english_strings.json> <partial_translation.json>")
        sys.exit(1)

    index_file = sys.argv[1]
    english_file = sys.argv[2]
    translation_file = sys.argv[3]

    # Load the JSON files
    index_mapping = load_json(index_file)
    english_strings = load_json(english_file)
    translated_strings = load_json(translation_file)

    # Find untranslated strings
    untranslated_strings = find_untranslated_strings(english_strings, translated_strings)

    # Process the untranslated strings
    file_contents = process_translations(untranslated_strings, index_mapping)

    for file_name, content in file_contents.items():
        translation = translation_file.replace(".json", "")
        directory = f"output/{translation}"
        # Create the directory if it doesn't exist
        if not os.path.exists(directory):
            os.makedirs(directory)

        output_path = f"{directory}/{file_name}.php"
        save_file(content, output_path)

        print(f"Created {output_path} with {len(content)} untranslated strings.")

    # Save the untranslated strings to a JSON file
    output_path = f"output/{translation}/untranslated_strings.json"
    save_json(untranslated_strings, output_path)

if __name__ == "__main__":
    main()
