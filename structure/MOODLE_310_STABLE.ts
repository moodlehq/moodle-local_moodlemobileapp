
/**
 * Params of block_recentlyaccesseditems_get_recent_items WS.
 */
export type BlockRecentlyaccesseditemsGetRecentItemsWSParams = {
    limit?: number; // Result set limit.
};

/**
 * Data returned by block_recentlyaccesseditems_get_recent_items WS.
 */
export type BlockRecentlyaccesseditemsGetRecentItemsWSResponse = { // The most recently accessed activities/resources by the logged user.
    id: number; // Id.
    courseid: number; // Courseid.
    cmid: number; // Cmid.
    userid: number; // Userid.
    modname: string; // Modname.
    name: string; // Name.
    coursename: string; // Coursename.
    timeaccess: number; // Timeaccess.
    viewurl: string; // Viewurl.
    courseviewurl: string; // Courseviewurl.
    icon: string; // Icon.
}[];

/**
 * Params of block_starredcourses_get_starred_courses WS.
 */
export type BlockStarredcoursesGetStarredCoursesWSParams = {
    limit?: number; // Limit.
    offset?: number; // Offset.
};

/**
 * Data returned by block_starredcourses_get_starred_courses WS.
 */
export type BlockStarredcoursesGetStarredCoursesWSResponse = {
    id: number; // Id.
    fullname: string; // Fullname.
    shortname: string; // Shortname.
    idnumber: string; // Idnumber.
    summary: string; // Summary.
    summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    startdate: number; // Startdate.
    enddate: number; // Enddate.
    visible: boolean; // Visible.
    fullnamedisplay: string; // Fullnamedisplay.
    viewurl: string; // Viewurl.
    courseimage: string; // Courseimage.
    progress?: number; // Progress.
    hasprogress: boolean; // Hasprogress.
    isfavourite: boolean; // Isfavourite.
    hidden: boolean; // Hidden.
    timeaccess?: number; // Timeaccess.
    showshortname: boolean; // Showshortname.
    coursecategory: string; // Coursecategory.
}[];

/**
 * Params of core_badges_get_user_badges WS.
 */
export type CoreBadgesGetUserBadgesWSParams = {
    userid?: number; // Badges only for this user id, empty for current user.
    courseid?: number; // Filter badges by course id, empty all the courses.
    page?: number; // The page of records to return.
    perpage?: number; // The number of records to return per page.
    search?: string; // A simple string to search for.
    onlypublic?: boolean; // Whether to return only public badges.
};

/**
 * Data returned by core_badges_get_user_badges WS.
 */
export type CoreBadgesGetUserBadgesWSResponse = {
    badges: {
        id?: number; // Badge id.
        name: string; // Badge name.
        description: string; // Badge description.
        timecreated?: number; // Time created.
        timemodified?: number; // Time modified.
        usercreated?: number; // User created.
        usermodified?: number; // User modified.
        issuername: string; // Issuer name.
        issuerurl: string; // Issuer URL.
        issuercontact: string; // Issuer contact.
        expiredate?: number; // Expire date.
        expireperiod?: number; // Expire period.
        type?: number; // Type.
        courseid?: number; // Course id.
        message?: string; // Message.
        messagesubject?: string; // Message subject.
        attachment?: number; // Attachment.
        notification?: number; // Whether to notify when badge is awarded.
        nextcron?: number; // Next cron.
        status?: number; // Status.
        issuedid?: number; // Issued id.
        uniquehash: string; // Unique hash.
        dateissued: number; // Date issued.
        dateexpire: number; // Date expire.
        visible?: number; // Visible.
        email?: string; // User email.
        version?: string; // Version.
        language?: string; // Language.
        imageauthorname?: string; // Name of the image author.
        imageauthoremail?: string; // Email of the image author.
        imageauthorurl?: string; // URL of the image author.
        imagecaption?: string; // Caption of the image.
        badgeurl: string; // Badge URL.
        endorsement?: {
            id: number; // Endorsement id.
            badgeid: number; // Badge id.
            issuername: string; // Endorsement issuer name.
            issuerurl: string; // Endorsement issuer URL.
            issueremail: string; // Endorsement issuer email.
            claimid: string; // Claim URL.
            claimcomment: string; // Claim comment.
            dateissued: number; // Date issued.
        };
        alignment: { // Badge alignments.
            id?: number; // Alignment id.
            badgeid?: number; // Badge id.
            targetName?: string; // Target name.
            targetUrl?: string; // Target URL.
            targetDescription?: string; // Target description.
            targetFramework?: string; // Target framework.
            targetCode?: string; // Target code.
        }[];
        relatedbadges: { // Related badges.
            id: number; // Badge id.
            name: string; // Badge name.
            version?: string; // Version.
            language?: string; // Language.
            type?: number; // Type.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_block_get_course_blocks WS.
 */
export type CoreBlockGetCourseBlocksWSParams = {
    courseid: number; // Course id.
    returncontents?: boolean; // Whether to return the block contents.
};

/**
 * Data returned by core_block_get_course_blocks WS.
 */
export type CoreBlockGetCourseBlocksWSResponse = {
    blocks: { // List of blocks in the course.
        instanceid: number; // Block instance id.
        name: string; // Block name.
        region: string; // Block region.
        positionid: number; // Position id.
        collapsible: boolean; // Whether the block is collapsible.
        dockable: boolean; // Whether the block is dockable.
        weight?: number; // Used to order blocks within a region.
        visible?: boolean; // Whether the block is visible.
        contents?: {
            title: string; // Block title.
            content: string; // Block contents.
            contentformat: number; // Content format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            footer: string; // Block footer.
            files: CoreWSExternalFile[];
        }; // Block contents (if required).
        configs?: { // Block instance and plugin configuration settings.
            name: string; // Name.
            value: string; // JSON encoded representation of the config value.
            type: string; // Type (instance or plugin).
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_block_get_dashboard_blocks WS.
 */
export type CoreBlockGetDashboardBlocksWSParams = {
    userid?: number; // User id (optional), default is current user.
    returncontents?: boolean; // Whether to return the block contents.
};

/**
 * Data returned by core_block_get_dashboard_blocks WS.
 */
export type CoreBlockGetDashboardBlocksWSResponse = {
    blocks: { // List of blocks in the dashboard.
        instanceid: number; // Block instance id.
        name: string; // Block name.
        region: string; // Block region.
        positionid: number; // Position id.
        collapsible: boolean; // Whether the block is collapsible.
        dockable: boolean; // Whether the block is dockable.
        weight?: number; // Used to order blocks within a region.
        visible?: boolean; // Whether the block is visible.
        contents?: {
            title: string; // Block title.
            content: string; // Block contents.
            contentformat: number; // Content format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            footer: string; // Block footer.
            files: CoreWSExternalFile[];
        }; // Block contents (if required).
        configs?: { // Block instance and plugin configuration settings.
            name: string; // Name.
            value: string; // JSON encoded representation of the config value.
            type: string; // Type (instance or plugin).
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_blog_get_entries WS.
 */
export type CoreBlogGetEntriesWSParams = {
    filters?: { // Parameters to filter blog listings.
        name: string; // The expected keys (value format) are:
                             // tag      PARAM_NOTAGS blog tag
                             // tagid    PARAM_INT    blog tag id
                             // userid   PARAM_INT    blog author (userid)
                             // cmid    PARAM_INT    course module id
                             // entryid  PARAM_INT    entry id
                             // groupid  PARAM_INT    group id
                             // courseid PARAM_INT    course id
                             // search   PARAM_RAW    search term.

        value: string; // The value of the filter.
    }[];
    page?: number; // The blog page to return.
    perpage?: number; // The number of posts to return per page.
};

/**
 * Data returned by core_blog_get_entries WS.
 */
export type CoreBlogGetEntriesWSResponse = {
    entries: {
        id: number; // Post/entry id.
        module: string; // Where it was published the post (blog, blog_external...).
        userid: number; // Post author.
        courseid: number; // Course where the post was created.
        groupid: number; // Group post was created for.
        moduleid: number; // Module id where the post was created (not used anymore).
        coursemoduleid: number; // Course module id where the post was created.
        subject: string; // Post subject.
        summary: string; // Post summary.
        summaryformat?: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        content: string; // Post content.
        uniquehash: string; // Post unique hash.
        rating: number; // Post rating.
        format: number; // Post content format.
        attachment: string; // Post atachment.
        publishstate: string; // Post publish state.
        lastmodified: number; // When it was last modified.
        created: number; // When it was created.
        usermodified: number; // User that updated the post.
        summaryfiles: { // Summaryfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        attachmentfiles?: { // Attachmentfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    totalentries: number; // The total number of entries found.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_blog_view_entries WS.
 */
export type CoreBlogViewEntriesWSParams = {
    filters?: { // Parameters used in the filter of view_entries.
        name: string; // The expected keys (value format) are:
                             // tag      PARAM_NOTAGS blog tag
                             // tagid    PARAM_INT    blog tag id
                             // userid   PARAM_INT    blog author (userid)
                             // cmid     PARAM_INT    course module id
                             // entryid  PARAM_INT    entry id
                             // groupid  PARAM_INT    group id
                             // courseid PARAM_INT    course id
                             // search   PARAM_RAW    search term.

        value: string; // The value of the filter.
    }[];
};

/**
 * Data returned by core_blog_view_entries WS.
 */
export type CoreBlogViewEntriesWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_calendar_create_calendar_events WS.
 */
export type CoreCalendarCreateCalendarEventsWSParams = {
    events: {
        name: string; // Event name.
        description?: string; // Description.
        format?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        courseid?: number; // Course id.
        groupid?: number; // Group id.
        repeats?: number; // Number of repeats.
        eventtype?: string; // Event type.
        timestart?: number; // Timestart.
        timeduration?: number; // Time duration.
        visible?: number; // Visible.
        sequence?: number; // Sequence.
    }[];
};

/**
 * Data returned by core_calendar_create_calendar_events WS.
 */
export type CoreCalendarCreateCalendarEventsWSResponse = {
    events: {
        id: number; // Event id.
        name: string; // Event name.
        description?: string; // Description.
        format: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        courseid: number; // Course id.
        groupid: number; // Group id.
        userid: number; // User id.
        repeatid?: number; // Repeat id.
        modulename?: string; // Module name.
        instance: number; // Instance id.
        eventtype: string; // Event type.
        timestart: number; // Timestart.
        timeduration: number; // Time duration.
        visible: number; // Visible.
        uuid?: string; // Unique id of ical events.
        sequence: number; // Sequence.
        timemodified: number; // Time modified.
        subscriptionid?: number; // Subscription id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_calendar_delete_calendar_events WS.
 */
export type CoreCalendarDeleteCalendarEventsWSParams = {
    events: {
        eventid: number; // Event ID.
        repeat: boolean; // Delete comeplete series if repeated event.
    }[];
};

/**
 * Data returned by core_calendar_delete_calendar_events WS.
 */
export type CoreCalendarDeleteCalendarEventsWSResponse = {}; // WARNING: Null structure found;

/**
 * Params of core_calendar_get_action_events_by_course WS.
 */
export type CoreCalendarGetActionEventsByCourseWSParams = {
    courseid: number; // Course id.
    timesortfrom?: number; // Time sort from.
    timesortto?: number; // Time sort to.
    aftereventid?: number; // The last seen event id.
    limitnum?: number; // Limit number.
};

/**
 * Data returned by core_calendar_get_action_events_by_course WS.
 */
export type CoreCalendarGetActionEventsByCourseWSResponse = {
    events: { // Events.
        id: number; // Id.
        name: string; // Name.
        description?: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        location?: string; // Location.
        categoryid?: number; // Categoryid.
        groupid?: number; // Groupid.
        userid?: number; // Userid.
        repeatid?: number; // Repeatid.
        eventcount?: number; // Eventcount.
        component?: string; // Component.
        modulename?: string; // Modulename.
        instance?: number; // Instance.
        eventtype: string; // Eventtype.
        timestart: number; // Timestart.
        timeduration: number; // Timeduration.
        timesort: number; // Timesort.
        timeusermidnight: number; // Timeusermidnight.
        visible: number; // Visible.
        timemodified: number; // Timemodified.
        icon: {
            key: string; // Key.
            component: string; // Component.
            alttext: string; // Alttext.
        };
        category?: {
            id: number; // Id.
            name: string; // Name.
            idnumber: string; // Idnumber.
            description?: string; // Description.
            parent: number; // Parent.
            coursecount: number; // Coursecount.
            visible: number; // Visible.
            timemodified: number; // Timemodified.
            depth: number; // Depth.
            nestedname: string; // Nestedname.
            url: string; // Url.
        };
        course?: {
            id: number; // Id.
            fullname: string; // Fullname.
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            summary: string; // Summary.
            summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            startdate: number; // Startdate.
            enddate: number; // Enddate.
            visible: boolean; // Visible.
            fullnamedisplay: string; // Fullnamedisplay.
            viewurl: string; // Viewurl.
            courseimage: string; // Courseimage.
            progress?: number; // Progress.
            hasprogress: boolean; // Hasprogress.
            isfavourite: boolean; // Isfavourite.
            hidden: boolean; // Hidden.
            timeaccess?: number; // Timeaccess.
            showshortname: boolean; // Showshortname.
            coursecategory: string; // Coursecategory.
        };
        subscription?: {
            displayeventsource: boolean; // Displayeventsource.
            subscriptionname?: string; // Subscriptionname.
            subscriptionurl?: string; // Subscriptionurl.
        };
        canedit: boolean; // Canedit.
        candelete: boolean; // Candelete.
        deleteurl: string; // Deleteurl.
        editurl: string; // Editurl.
        viewurl: string; // Viewurl.
        formattedtime: string; // Formattedtime.
        isactionevent: boolean; // Isactionevent.
        iscourseevent: boolean; // Iscourseevent.
        iscategoryevent: boolean; // Iscategoryevent.
        groupname?: string; // Groupname.
        normalisedeventtype: string; // Normalisedeventtype.
        normalisedeventtypetext: string; // Normalisedeventtypetext.
        action?: {
            name: string; // Name.
            url: string; // Url.
            itemcount: number; // Itemcount.
            actionable: boolean; // Actionable.
            showitemcount: boolean; // Showitemcount.
        };
        url: string; // Url.
    }[];
    firstid: number; // Firstid.
    lastid: number; // Lastid.
};

/**
 * Params of core_calendar_get_action_events_by_courses WS.
 */
export type CoreCalendarGetActionEventsByCoursesWSParams = {
    courseids: number[];
    timesortfrom?: number; // Time sort from.
    timesortto?: number; // Time sort to.
    limitnum?: number; // Limit number.
};

/**
 * Data returned by core_calendar_get_action_events_by_courses WS.
 */
export type CoreCalendarGetActionEventsByCoursesWSResponse = {
    groupedbycourse: { // Groupedbycourse.
        events: { // Events.
            id: number; // Id.
            name: string; // Name.
            description?: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            location?: string; // Location.
            categoryid?: number; // Categoryid.
            groupid?: number; // Groupid.
            userid?: number; // Userid.
            repeatid?: number; // Repeatid.
            eventcount?: number; // Eventcount.
            component?: string; // Component.
            modulename?: string; // Modulename.
            instance?: number; // Instance.
            eventtype: string; // Eventtype.
            timestart: number; // Timestart.
            timeduration: number; // Timeduration.
            timesort: number; // Timesort.
            timeusermidnight: number; // Timeusermidnight.
            visible: number; // Visible.
            timemodified: number; // Timemodified.
            icon: {
                key: string; // Key.
                component: string; // Component.
                alttext: string; // Alttext.
            };
            category?: {
                id: number; // Id.
                name: string; // Name.
                idnumber: string; // Idnumber.
                description?: string; // Description.
                parent: number; // Parent.
                coursecount: number; // Coursecount.
                visible: number; // Visible.
                timemodified: number; // Timemodified.
                depth: number; // Depth.
                nestedname: string; // Nestedname.
                url: string; // Url.
            };
            course?: {
                id: number; // Id.
                fullname: string; // Fullname.
                shortname: string; // Shortname.
                idnumber: string; // Idnumber.
                summary: string; // Summary.
                summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                startdate: number; // Startdate.
                enddate: number; // Enddate.
                visible: boolean; // Visible.
                fullnamedisplay: string; // Fullnamedisplay.
                viewurl: string; // Viewurl.
                courseimage: string; // Courseimage.
                progress?: number; // Progress.
                hasprogress: boolean; // Hasprogress.
                isfavourite: boolean; // Isfavourite.
                hidden: boolean; // Hidden.
                timeaccess?: number; // Timeaccess.
                showshortname: boolean; // Showshortname.
                coursecategory: string; // Coursecategory.
            };
            subscription?: {
                displayeventsource: boolean; // Displayeventsource.
                subscriptionname?: string; // Subscriptionname.
                subscriptionurl?: string; // Subscriptionurl.
            };
            canedit: boolean; // Canedit.
            candelete: boolean; // Candelete.
            deleteurl: string; // Deleteurl.
            editurl: string; // Editurl.
            viewurl: string; // Viewurl.
            formattedtime: string; // Formattedtime.
            isactionevent: boolean; // Isactionevent.
            iscourseevent: boolean; // Iscourseevent.
            iscategoryevent: boolean; // Iscategoryevent.
            groupname?: string; // Groupname.
            normalisedeventtype: string; // Normalisedeventtype.
            normalisedeventtypetext: string; // Normalisedeventtypetext.
            action?: {
                name: string; // Name.
                url: string; // Url.
                itemcount: number; // Itemcount.
                actionable: boolean; // Actionable.
                showitemcount: boolean; // Showitemcount.
            };
            url: string; // Url.
        }[];
        firstid: number; // Firstid.
        lastid: number; // Lastid.
        courseid: number; // Courseid.
    }[];
};

/**
 * Params of core_calendar_get_action_events_by_timesort WS.
 */
export type CoreCalendarGetActionEventsByTimesortWSParams = {
    timesortfrom?: number; // Time sort from.
    timesortto?: number; // Time sort to.
    aftereventid?: number; // The last seen event id.
    limitnum?: number; // Limit number.
    limittononsuspendedevents?: boolean; // Limit the events to courses the user is not suspended in.
    userid?: number; // The user id.
};

/**
 * Data returned by core_calendar_get_action_events_by_timesort WS.
 */
export type CoreCalendarGetActionEventsByTimesortWSResponse = {
    events: { // Events.
        id: number; // Id.
        name: string; // Name.
        description?: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        location?: string; // Location.
        categoryid?: number; // Categoryid.
        groupid?: number; // Groupid.
        userid?: number; // Userid.
        repeatid?: number; // Repeatid.
        eventcount?: number; // Eventcount.
        component?: string; // Component.
        modulename?: string; // Modulename.
        instance?: number; // Instance.
        eventtype: string; // Eventtype.
        timestart: number; // Timestart.
        timeduration: number; // Timeduration.
        timesort: number; // Timesort.
        timeusermidnight: number; // Timeusermidnight.
        visible: number; // Visible.
        timemodified: number; // Timemodified.
        icon: {
            key: string; // Key.
            component: string; // Component.
            alttext: string; // Alttext.
        };
        category?: {
            id: number; // Id.
            name: string; // Name.
            idnumber: string; // Idnumber.
            description?: string; // Description.
            parent: number; // Parent.
            coursecount: number; // Coursecount.
            visible: number; // Visible.
            timemodified: number; // Timemodified.
            depth: number; // Depth.
            nestedname: string; // Nestedname.
            url: string; // Url.
        };
        course?: {
            id: number; // Id.
            fullname: string; // Fullname.
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            summary: string; // Summary.
            summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            startdate: number; // Startdate.
            enddate: number; // Enddate.
            visible: boolean; // Visible.
            fullnamedisplay: string; // Fullnamedisplay.
            viewurl: string; // Viewurl.
            courseimage: string; // Courseimage.
            progress?: number; // Progress.
            hasprogress: boolean; // Hasprogress.
            isfavourite: boolean; // Isfavourite.
            hidden: boolean; // Hidden.
            timeaccess?: number; // Timeaccess.
            showshortname: boolean; // Showshortname.
            coursecategory: string; // Coursecategory.
        };
        subscription?: {
            displayeventsource: boolean; // Displayeventsource.
            subscriptionname?: string; // Subscriptionname.
            subscriptionurl?: string; // Subscriptionurl.
        };
        canedit: boolean; // Canedit.
        candelete: boolean; // Candelete.
        deleteurl: string; // Deleteurl.
        editurl: string; // Editurl.
        viewurl: string; // Viewurl.
        formattedtime: string; // Formattedtime.
        isactionevent: boolean; // Isactionevent.
        iscourseevent: boolean; // Iscourseevent.
        iscategoryevent: boolean; // Iscategoryevent.
        groupname?: string; // Groupname.
        normalisedeventtype: string; // Normalisedeventtype.
        normalisedeventtypetext: string; // Normalisedeventtypetext.
        action?: {
            name: string; // Name.
            url: string; // Url.
            itemcount: number; // Itemcount.
            actionable: boolean; // Actionable.
            showitemcount: boolean; // Showitemcount.
        };
        url: string; // Url.
    }[];
    firstid: number; // Firstid.
    lastid: number; // Lastid.
};

/**
 * Params of core_calendar_get_allowed_event_types WS.
 */
export type CoreCalendarGetAllowedEventTypesWSParams = {
    courseid?: number; // Course to check, empty for site.
};

/**
 * Data returned by core_calendar_get_allowed_event_types WS.
 */
export type CoreCalendarGetAllowedEventTypesWSResponse = {
    allowedeventtypes: string[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_calendar_get_calendar_access_information WS.
 */
export type CoreCalendarGetCalendarAccessInformationWSParams = {
    courseid?: number; // Course to check, empty for site calendar events.
};

/**
 * Data returned by core_calendar_get_calendar_access_information WS.
 */
export type CoreCalendarGetCalendarAccessInformationWSResponse = {
    canmanageentries: boolean; // Whether the user can manage entries.
    canmanageownentries: boolean; // Whether the user can manage its own entries.
    canmanagegroupentries: boolean; // Whether the user can manage group entries.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_calendar_get_calendar_day_view WS.
 */
export type CoreCalendarGetCalendarDayViewWSParams = {
    year: number; // Year to be viewed.
    month: number; // Month to be viewed.
    day: number; // Day to be viewed.
    courseid?: number; // Course being viewed.
    categoryid?: number; // Category being viewed.
};

/**
 * Data returned by core_calendar_get_calendar_day_view WS.
 */
export type CoreCalendarGetCalendarDayViewWSResponse = {
    events: { // Events.
        id: number; // Id.
        name: string; // Name.
        description?: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        location?: string; // Location.
        categoryid?: number; // Categoryid.
        groupid?: number; // Groupid.
        userid?: number; // Userid.
        repeatid?: number; // Repeatid.
        eventcount?: number; // Eventcount.
        component?: string; // Component.
        modulename?: string; // Modulename.
        instance?: number; // Instance.
        eventtype: string; // Eventtype.
        timestart: number; // Timestart.
        timeduration: number; // Timeduration.
        timesort: number; // Timesort.
        timeusermidnight: number; // Timeusermidnight.
        visible: number; // Visible.
        timemodified: number; // Timemodified.
        icon: {
            key: string; // Key.
            component: string; // Component.
            alttext: string; // Alttext.
        };
        category?: {
            id: number; // Id.
            name: string; // Name.
            idnumber: string; // Idnumber.
            description?: string; // Description.
            parent: number; // Parent.
            coursecount: number; // Coursecount.
            visible: number; // Visible.
            timemodified: number; // Timemodified.
            depth: number; // Depth.
            nestedname: string; // Nestedname.
            url: string; // Url.
        };
        course?: {
            id: number; // Id.
            fullname: string; // Fullname.
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            summary: string; // Summary.
            summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            startdate: number; // Startdate.
            enddate: number; // Enddate.
            visible: boolean; // Visible.
            fullnamedisplay: string; // Fullnamedisplay.
            viewurl: string; // Viewurl.
            courseimage: string; // Courseimage.
            progress?: number; // Progress.
            hasprogress: boolean; // Hasprogress.
            isfavourite: boolean; // Isfavourite.
            hidden: boolean; // Hidden.
            timeaccess?: number; // Timeaccess.
            showshortname: boolean; // Showshortname.
            coursecategory: string; // Coursecategory.
        };
        subscription?: {
            displayeventsource: boolean; // Displayeventsource.
            subscriptionname?: string; // Subscriptionname.
            subscriptionurl?: string; // Subscriptionurl.
        };
        canedit: boolean; // Canedit.
        candelete: boolean; // Candelete.
        deleteurl: string; // Deleteurl.
        editurl: string; // Editurl.
        viewurl: string; // Viewurl.
        formattedtime: string; // Formattedtime.
        isactionevent: boolean; // Isactionevent.
        iscourseevent: boolean; // Iscourseevent.
        iscategoryevent: boolean; // Iscategoryevent.
        groupname?: string; // Groupname.
        normalisedeventtype: string; // Normalisedeventtype.
        normalisedeventtypetext: string; // Normalisedeventtypetext.
        action?: {
            name: string; // Name.
            url: string; // Url.
            itemcount: number; // Itemcount.
            actionable: boolean; // Actionable.
            showitemcount: boolean; // Showitemcount.
        };
        url: string; // Url.
        islastday: boolean; // Islastday.
        popupname: string; // Popupname.
        mindaytimestamp?: number; // Mindaytimestamp.
        mindayerror?: string; // Mindayerror.
        maxdaytimestamp?: number; // Maxdaytimestamp.
        maxdayerror?: string; // Maxdayerror.
        draggable: boolean; // Draggable.
    }[];
    defaulteventcontext: number; // Defaulteventcontext.
    filter_selector: string; // Filter_selector.
    courseid: number; // Courseid.
    categoryid?: number; // Categoryid.
    neweventtimestamp: number; // Neweventtimestamp.
    date: {
        seconds: number; // Seconds.
        minutes: number; // Minutes.
        hours: number; // Hours.
        mday: number; // Mday.
        wday: number; // Wday.
        mon: number; // Mon.
        year: number; // Year.
        yday: number; // Yday.
        weekday: string; // Weekday.
        month: string; // Month.
        timestamp: number; // Timestamp.
    };
    periodname: string; // Periodname.
    previousperiod: {
        seconds: number; // Seconds.
        minutes: number; // Minutes.
        hours: number; // Hours.
        mday: number; // Mday.
        wday: number; // Wday.
        mon: number; // Mon.
        year: number; // Year.
        yday: number; // Yday.
        weekday: string; // Weekday.
        month: string; // Month.
        timestamp: number; // Timestamp.
    };
    previousperiodlink: string; // Previousperiodlink.
    previousperiodname: string; // Previousperiodname.
    nextperiod: {
        seconds: number; // Seconds.
        minutes: number; // Minutes.
        hours: number; // Hours.
        mday: number; // Mday.
        wday: number; // Wday.
        mon: number; // Mon.
        year: number; // Year.
        yday: number; // Yday.
        weekday: string; // Weekday.
        month: string; // Month.
        timestamp: number; // Timestamp.
    };
    nextperiodname: string; // Nextperiodname.
    nextperiodlink: string; // Nextperiodlink.
    larrow: string; // Larrow.
    rarrow: string; // Rarrow.
};

/**
 * Params of core_calendar_get_calendar_event_by_id WS.
 */
export type CoreCalendarGetCalendarEventByIdWSParams = {
    eventid: number; // The event id to be retrieved.
};

/**
 * Data returned by core_calendar_get_calendar_event_by_id WS.
 */
export type CoreCalendarGetCalendarEventByIdWSResponse = {
    event: {
        id: number; // Id.
        name: string; // Name.
        description?: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        location?: string; // Location.
        categoryid?: number; // Categoryid.
        groupid?: number; // Groupid.
        userid?: number; // Userid.
        repeatid?: number; // Repeatid.
        eventcount?: number; // Eventcount.
        component?: string; // Component.
        modulename?: string; // Modulename.
        instance?: number; // Instance.
        eventtype: string; // Eventtype.
        timestart: number; // Timestart.
        timeduration: number; // Timeduration.
        timesort: number; // Timesort.
        timeusermidnight: number; // Timeusermidnight.
        visible: number; // Visible.
        timemodified: number; // Timemodified.
        icon: {
            key: string; // Key.
            component: string; // Component.
            alttext: string; // Alttext.
        };
        category?: {
            id: number; // Id.
            name: string; // Name.
            idnumber: string; // Idnumber.
            description?: string; // Description.
            parent: number; // Parent.
            coursecount: number; // Coursecount.
            visible: number; // Visible.
            timemodified: number; // Timemodified.
            depth: number; // Depth.
            nestedname: string; // Nestedname.
            url: string; // Url.
        };
        course?: {
            id: number; // Id.
            fullname: string; // Fullname.
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            summary: string; // Summary.
            summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            startdate: number; // Startdate.
            enddate: number; // Enddate.
            visible: boolean; // Visible.
            fullnamedisplay: string; // Fullnamedisplay.
            viewurl: string; // Viewurl.
            courseimage: string; // Courseimage.
            progress?: number; // Progress.
            hasprogress: boolean; // Hasprogress.
            isfavourite: boolean; // Isfavourite.
            hidden: boolean; // Hidden.
            timeaccess?: number; // Timeaccess.
            showshortname: boolean; // Showshortname.
            coursecategory: string; // Coursecategory.
        };
        subscription?: {
            displayeventsource: boolean; // Displayeventsource.
            subscriptionname?: string; // Subscriptionname.
            subscriptionurl?: string; // Subscriptionurl.
        };
        canedit: boolean; // Canedit.
        candelete: boolean; // Candelete.
        deleteurl: string; // Deleteurl.
        editurl: string; // Editurl.
        viewurl: string; // Viewurl.
        formattedtime: string; // Formattedtime.
        isactionevent: boolean; // Isactionevent.
        iscourseevent: boolean; // Iscourseevent.
        iscategoryevent: boolean; // Iscategoryevent.
        groupname?: string; // Groupname.
        normalisedeventtype: string; // Normalisedeventtype.
        normalisedeventtypetext: string; // Normalisedeventtypetext.
        action?: {
            name: string; // Name.
            url: string; // Url.
            itemcount: number; // Itemcount.
            actionable: boolean; // Actionable.
            showitemcount: boolean; // Showitemcount.
        };
        url: string; // Url.
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_calendar_get_calendar_events WS.
 */
export type CoreCalendarGetCalendarEventsWSParams = {
    events?: {
        eventids?: number[]; // List of event ids.
        courseids?: number[]; // List of course ids for which events will be returned.
        groupids?: number[]; // List of group ids for which events should be returned.
        categoryids?: number[]; // List of category ids for which events will be returned.
    }; // Event details.
    options?: {
        userevents?: boolean; // Set to true to return current user's user events.
        siteevents?: boolean; // Set to true to return site events.
        timestart?: number; // Time from which events should be returned.
        timeend?: number; // Time to which the events should be returned. We treat 0 and null as no end.
        ignorehidden?: boolean; // Ignore hidden events or not.
    }; // Options.
};

/**
 * Data returned by core_calendar_get_calendar_events WS.
 */
export type CoreCalendarGetCalendarEventsWSResponse = {
    events: {
        id: number; // Event id.
        name: string; // Event name.
        description?: string; // Description.
        format: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        courseid: number; // Course id.
        categoryid?: number; // Category id (only for category events).
        groupid: number; // Group id.
        userid: number; // User id.
        repeatid: number; // Repeat id.
        modulename?: string; // Module name.
        instance: number; // Instance id.
        eventtype: string; // Event type.
        timestart: number; // Timestart.
        timeduration: number; // Time duration.
        visible: number; // Visible.
        uuid?: string; // Unique id of ical events.
        sequence: number; // Sequence.
        timemodified: number; // Time modified.
        subscriptionid?: number; // Subscription id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_calendar_get_calendar_export_token WS.
 */
export type CoreCalendarGetCalendarExportTokenWSParams = {
};

/**
 * Data returned by core_calendar_get_calendar_export_token WS.
 */
export type CoreCalendarGetCalendarExportTokenWSResponse = {
    token: string; // The calendar permanent access token for calendar export.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_calendar_get_calendar_monthly_view WS.
 */
export type CoreCalendarGetCalendarMonthlyViewWSParams = {
    year: number; // Year to be viewed.
    month: number; // Month to be viewed.
    courseid?: number; // Course being viewed.
    categoryid?: number; // Category being viewed.
    includenavigation?: boolean; // Whether to show course navigation.
    mini?: boolean; // Whether to return the mini month view or not.
    day?: number; // Day to be viewed.
};

/**
 * Data returned by core_calendar_get_calendar_monthly_view WS.
 */
export type CoreCalendarGetCalendarMonthlyViewWSResponse = {
    url: string; // Url.
    courseid: number; // Courseid.
    categoryid?: number; // Categoryid.
    filter_selector?: string; // Filter_selector.
    weeks: { // Weeks.
        prepadding: number[]; // Prepadding.
        postpadding: number[]; // Postpadding.
        days: { // Days.
            seconds: number; // Seconds.
            minutes: number; // Minutes.
            hours: number; // Hours.
            mday: number; // Mday.
            wday: number; // Wday.
            year: number; // Year.
            yday: number; // Yday.
            istoday: boolean; // Istoday.
            isweekend: boolean; // Isweekend.
            timestamp: number; // Timestamp.
            neweventtimestamp: number; // Neweventtimestamp.
            viewdaylink?: string; // Viewdaylink.
            viewdaylinktitle?: string; // Viewdaylinktitle.
            events: { // Events.
                id: number; // Id.
                name: string; // Name.
                description?: string; // Description.
                descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                location?: string; // Location.
                categoryid?: number; // Categoryid.
                groupid?: number; // Groupid.
                userid?: number; // Userid.
                repeatid?: number; // Repeatid.
                eventcount?: number; // Eventcount.
                component?: string; // Component.
                modulename?: string; // Modulename.
                instance?: number; // Instance.
                eventtype: string; // Eventtype.
                timestart: number; // Timestart.
                timeduration: number; // Timeduration.
                timesort: number; // Timesort.
                timeusermidnight: number; // Timeusermidnight.
                visible: number; // Visible.
                timemodified: number; // Timemodified.
                icon: {
                    key: string; // Key.
                    component: string; // Component.
                    alttext: string; // Alttext.
                };
                category?: {
                    id: number; // Id.
                    name: string; // Name.
                    idnumber: string; // Idnumber.
                    description?: string; // Description.
                    parent: number; // Parent.
                    coursecount: number; // Coursecount.
                    visible: number; // Visible.
                    timemodified: number; // Timemodified.
                    depth: number; // Depth.
                    nestedname: string; // Nestedname.
                    url: string; // Url.
                };
                course?: {
                    id: number; // Id.
                    fullname: string; // Fullname.
                    shortname: string; // Shortname.
                    idnumber: string; // Idnumber.
                    summary: string; // Summary.
                    summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                    startdate: number; // Startdate.
                    enddate: number; // Enddate.
                    visible: boolean; // Visible.
                    fullnamedisplay: string; // Fullnamedisplay.
                    viewurl: string; // Viewurl.
                    courseimage: string; // Courseimage.
                    progress?: number; // Progress.
                    hasprogress: boolean; // Hasprogress.
                    isfavourite: boolean; // Isfavourite.
                    hidden: boolean; // Hidden.
                    timeaccess?: number; // Timeaccess.
                    showshortname: boolean; // Showshortname.
                    coursecategory: string; // Coursecategory.
                };
                subscription?: {
                    displayeventsource: boolean; // Displayeventsource.
                    subscriptionname?: string; // Subscriptionname.
                    subscriptionurl?: string; // Subscriptionurl.
                };
                canedit: boolean; // Canedit.
                candelete: boolean; // Candelete.
                deleteurl: string; // Deleteurl.
                editurl: string; // Editurl.
                viewurl: string; // Viewurl.
                formattedtime: string; // Formattedtime.
                isactionevent: boolean; // Isactionevent.
                iscourseevent: boolean; // Iscourseevent.
                iscategoryevent: boolean; // Iscategoryevent.
                groupname?: string; // Groupname.
                normalisedeventtype: string; // Normalisedeventtype.
                normalisedeventtypetext: string; // Normalisedeventtypetext.
                action?: {
                    name: string; // Name.
                    url: string; // Url.
                    itemcount: number; // Itemcount.
                    actionable: boolean; // Actionable.
                    showitemcount: boolean; // Showitemcount.
                };
                url: string; // Url.
                islastday: boolean; // Islastday.
                popupname: string; // Popupname.
                mindaytimestamp?: number; // Mindaytimestamp.
                mindayerror?: string; // Mindayerror.
                maxdaytimestamp?: number; // Maxdaytimestamp.
                maxdayerror?: string; // Maxdayerror.
                draggable: boolean; // Draggable.
            }[];
            hasevents: boolean; // Hasevents.
            calendareventtypes: string[]; // Calendareventtypes.
            previousperiod: number; // Previousperiod.
            nextperiod: number; // Nextperiod.
            navigation: string; // Navigation.
            haslastdayofevent: boolean; // Haslastdayofevent.
            popovertitle: string; // Popovertitle.
            daytitle: string; // Daytitle.
        }[];
    }[];
    daynames: { // Daynames.
        dayno: number; // Dayno.
        shortname: string; // Shortname.
        fullname: string; // Fullname.
    }[];
    view: string; // View.
    date: {
        seconds: number; // Seconds.
        minutes: number; // Minutes.
        hours: number; // Hours.
        mday: number; // Mday.
        wday: number; // Wday.
        mon: number; // Mon.
        year: number; // Year.
        yday: number; // Yday.
        weekday: string; // Weekday.
        month: string; // Month.
        timestamp: number; // Timestamp.
    };
    periodname: string; // Periodname.
    includenavigation: boolean; // Includenavigation.
    initialeventsloaded: boolean; // Initialeventsloaded.
    previousperiod: {
        seconds: number; // Seconds.
        minutes: number; // Minutes.
        hours: number; // Hours.
        mday: number; // Mday.
        wday: number; // Wday.
        mon: number; // Mon.
        year: number; // Year.
        yday: number; // Yday.
        weekday: string; // Weekday.
        month: string; // Month.
        timestamp: number; // Timestamp.
    };
    previousperiodlink: string; // Previousperiodlink.
    previousperiodname: string; // Previousperiodname.
    nextperiod: {
        seconds: number; // Seconds.
        minutes: number; // Minutes.
        hours: number; // Hours.
        mday: number; // Mday.
        wday: number; // Wday.
        mon: number; // Mon.
        year: number; // Year.
        yday: number; // Yday.
        weekday: string; // Weekday.
        month: string; // Month.
        timestamp: number; // Timestamp.
    };
    nextperiodname: string; // Nextperiodname.
    nextperiodlink: string; // Nextperiodlink.
    larrow: string; // Larrow.
    rarrow: string; // Rarrow.
    defaulteventcontext: number; // Defaulteventcontext.
};

/**
 * Params of core_calendar_get_calendar_upcoming_view WS.
 */
export type CoreCalendarGetCalendarUpcomingViewWSParams = {
    courseid?: number; // Course being viewed.
    categoryid?: number; // Category being viewed.
};

/**
 * Data returned by core_calendar_get_calendar_upcoming_view WS.
 */
export type CoreCalendarGetCalendarUpcomingViewWSResponse = {
    events: { // Events.
        id: number; // Id.
        name: string; // Name.
        description?: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        location?: string; // Location.
        categoryid?: number; // Categoryid.
        groupid?: number; // Groupid.
        userid?: number; // Userid.
        repeatid?: number; // Repeatid.
        eventcount?: number; // Eventcount.
        component?: string; // Component.
        modulename?: string; // Modulename.
        instance?: number; // Instance.
        eventtype: string; // Eventtype.
        timestart: number; // Timestart.
        timeduration: number; // Timeduration.
        timesort: number; // Timesort.
        timeusermidnight: number; // Timeusermidnight.
        visible: number; // Visible.
        timemodified: number; // Timemodified.
        icon: {
            key: string; // Key.
            component: string; // Component.
            alttext: string; // Alttext.
        };
        category?: {
            id: number; // Id.
            name: string; // Name.
            idnumber: string; // Idnumber.
            description?: string; // Description.
            parent: number; // Parent.
            coursecount: number; // Coursecount.
            visible: number; // Visible.
            timemodified: number; // Timemodified.
            depth: number; // Depth.
            nestedname: string; // Nestedname.
            url: string; // Url.
        };
        course?: {
            id: number; // Id.
            fullname: string; // Fullname.
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            summary: string; // Summary.
            summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            startdate: number; // Startdate.
            enddate: number; // Enddate.
            visible: boolean; // Visible.
            fullnamedisplay: string; // Fullnamedisplay.
            viewurl: string; // Viewurl.
            courseimage: string; // Courseimage.
            progress?: number; // Progress.
            hasprogress: boolean; // Hasprogress.
            isfavourite: boolean; // Isfavourite.
            hidden: boolean; // Hidden.
            timeaccess?: number; // Timeaccess.
            showshortname: boolean; // Showshortname.
            coursecategory: string; // Coursecategory.
        };
        subscription?: {
            displayeventsource: boolean; // Displayeventsource.
            subscriptionname?: string; // Subscriptionname.
            subscriptionurl?: string; // Subscriptionurl.
        };
        canedit: boolean; // Canedit.
        candelete: boolean; // Candelete.
        deleteurl: string; // Deleteurl.
        editurl: string; // Editurl.
        viewurl: string; // Viewurl.
        formattedtime: string; // Formattedtime.
        isactionevent: boolean; // Isactionevent.
        iscourseevent: boolean; // Iscourseevent.
        iscategoryevent: boolean; // Iscategoryevent.
        groupname?: string; // Groupname.
        normalisedeventtype: string; // Normalisedeventtype.
        normalisedeventtypetext: string; // Normalisedeventtypetext.
        action?: {
            name: string; // Name.
            url: string; // Url.
            itemcount: number; // Itemcount.
            actionable: boolean; // Actionable.
            showitemcount: boolean; // Showitemcount.
        };
        url: string; // Url.
        islastday: boolean; // Islastday.
        popupname: string; // Popupname.
        mindaytimestamp?: number; // Mindaytimestamp.
        mindayerror?: string; // Mindayerror.
        maxdaytimestamp?: number; // Maxdaytimestamp.
        maxdayerror?: string; // Maxdayerror.
        draggable: boolean; // Draggable.
    }[];
    defaulteventcontext: number; // Defaulteventcontext.
    filter_selector: string; // Filter_selector.
    courseid: number; // Courseid.
    categoryid?: number; // Categoryid.
    isloggedin: boolean; // Isloggedin.
    date: {
        seconds: number; // Seconds.
        minutes: number; // Minutes.
        hours: number; // Hours.
        mday: number; // Mday.
        wday: number; // Wday.
        mon: number; // Mon.
        year: number; // Year.
        yday: number; // Yday.
        weekday: string; // Weekday.
        month: string; // Month.
        timestamp: number; // Timestamp.
    };
};

/**
 * Params of core_calendar_submit_create_update_form WS.
 */
export type CoreCalendarSubmitCreateUpdateFormWSParams = {
    formdata: string; // The data from the event form.
};

/**
 * Data returned by core_calendar_submit_create_update_form WS.
 */
export type CoreCalendarSubmitCreateUpdateFormWSResponse = {
    event?: {
        id: number; // Id.
        name: string; // Name.
        description?: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        location?: string; // Location.
        categoryid?: number; // Categoryid.
        groupid?: number; // Groupid.
        userid?: number; // Userid.
        repeatid?: number; // Repeatid.
        eventcount?: number; // Eventcount.
        component?: string; // Component.
        modulename?: string; // Modulename.
        instance?: number; // Instance.
        eventtype: string; // Eventtype.
        timestart: number; // Timestart.
        timeduration: number; // Timeduration.
        timesort: number; // Timesort.
        timeusermidnight: number; // Timeusermidnight.
        visible: number; // Visible.
        timemodified: number; // Timemodified.
        icon: {
            key: string; // Key.
            component: string; // Component.
            alttext: string; // Alttext.
        };
        category?: {
            id: number; // Id.
            name: string; // Name.
            idnumber: string; // Idnumber.
            description?: string; // Description.
            parent: number; // Parent.
            coursecount: number; // Coursecount.
            visible: number; // Visible.
            timemodified: number; // Timemodified.
            depth: number; // Depth.
            nestedname: string; // Nestedname.
            url: string; // Url.
        };
        course?: {
            id: number; // Id.
            fullname: string; // Fullname.
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            summary: string; // Summary.
            summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            startdate: number; // Startdate.
            enddate: number; // Enddate.
            visible: boolean; // Visible.
            fullnamedisplay: string; // Fullnamedisplay.
            viewurl: string; // Viewurl.
            courseimage: string; // Courseimage.
            progress?: number; // Progress.
            hasprogress: boolean; // Hasprogress.
            isfavourite: boolean; // Isfavourite.
            hidden: boolean; // Hidden.
            timeaccess?: number; // Timeaccess.
            showshortname: boolean; // Showshortname.
            coursecategory: string; // Coursecategory.
        };
        subscription?: {
            displayeventsource: boolean; // Displayeventsource.
            subscriptionname?: string; // Subscriptionname.
            subscriptionurl?: string; // Subscriptionurl.
        };
        canedit: boolean; // Canedit.
        candelete: boolean; // Candelete.
        deleteurl: string; // Deleteurl.
        editurl: string; // Editurl.
        viewurl: string; // Viewurl.
        formattedtime: string; // Formattedtime.
        isactionevent: boolean; // Isactionevent.
        iscourseevent: boolean; // Iscourseevent.
        iscategoryevent: boolean; // Iscategoryevent.
        groupname?: string; // Groupname.
        normalisedeventtype: string; // Normalisedeventtype.
        normalisedeventtypetext: string; // Normalisedeventtypetext.
        action?: {
            name: string; // Name.
            url: string; // Url.
            itemcount: number; // Itemcount.
            actionable: boolean; // Actionable.
            showitemcount: boolean; // Showitemcount.
        };
        url: string; // Url.
    };
    validationerror?: boolean; // Invalid form data.
};

/**
 * Params of core_calendar_update_event_start_day WS.
 */
export type CoreCalendarUpdateEventStartDayWSParams = {
    eventid: number; // Id of event to be updated.
    daytimestamp: number; // Timestamp for the new start day.
};

/**
 * Data returned by core_calendar_update_event_start_day WS.
 */
export type CoreCalendarUpdateEventStartDayWSResponse = {
    event: {
        id: number; // Id.
        name: string; // Name.
        description?: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        location?: string; // Location.
        categoryid?: number; // Categoryid.
        groupid?: number; // Groupid.
        userid?: number; // Userid.
        repeatid?: number; // Repeatid.
        eventcount?: number; // Eventcount.
        component?: string; // Component.
        modulename?: string; // Modulename.
        instance?: number; // Instance.
        eventtype: string; // Eventtype.
        timestart: number; // Timestart.
        timeduration: number; // Timeduration.
        timesort: number; // Timesort.
        timeusermidnight: number; // Timeusermidnight.
        visible: number; // Visible.
        timemodified: number; // Timemodified.
        icon: {
            key: string; // Key.
            component: string; // Component.
            alttext: string; // Alttext.
        };
        category?: {
            id: number; // Id.
            name: string; // Name.
            idnumber: string; // Idnumber.
            description?: string; // Description.
            parent: number; // Parent.
            coursecount: number; // Coursecount.
            visible: number; // Visible.
            timemodified: number; // Timemodified.
            depth: number; // Depth.
            nestedname: string; // Nestedname.
            url: string; // Url.
        };
        course?: {
            id: number; // Id.
            fullname: string; // Fullname.
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            summary: string; // Summary.
            summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            startdate: number; // Startdate.
            enddate: number; // Enddate.
            visible: boolean; // Visible.
            fullnamedisplay: string; // Fullnamedisplay.
            viewurl: string; // Viewurl.
            courseimage: string; // Courseimage.
            progress?: number; // Progress.
            hasprogress: boolean; // Hasprogress.
            isfavourite: boolean; // Isfavourite.
            hidden: boolean; // Hidden.
            timeaccess?: number; // Timeaccess.
            showshortname: boolean; // Showshortname.
            coursecategory: string; // Coursecategory.
        };
        subscription?: {
            displayeventsource: boolean; // Displayeventsource.
            subscriptionname?: string; // Subscriptionname.
            subscriptionurl?: string; // Subscriptionurl.
        };
        canedit: boolean; // Canedit.
        candelete: boolean; // Candelete.
        deleteurl: string; // Deleteurl.
        editurl: string; // Editurl.
        viewurl: string; // Viewurl.
        formattedtime: string; // Formattedtime.
        isactionevent: boolean; // Isactionevent.
        iscourseevent: boolean; // Iscourseevent.
        iscategoryevent: boolean; // Iscategoryevent.
        groupname?: string; // Groupname.
        normalisedeventtype: string; // Normalisedeventtype.
        normalisedeventtypetext: string; // Normalisedeventtypetext.
        action?: {
            name: string; // Name.
            url: string; // Url.
            itemcount: number; // Itemcount.
            actionable: boolean; // Actionable.
            showitemcount: boolean; // Showitemcount.
        };
        url: string; // Url.
    };
};

/**
 * Params of core_comment_add_comments WS.
 */
export type CoreCommentAddCommentsWSParams = {
    comments: {
        contextlevel: string; // Contextlevel system, course, user...
        instanceid: number; // The id of item associated with the contextlevel.
        component: string; // Component.
        content: string; // Component.
        itemid: number; // Associated id.
        area?: string; // String comment area.
    }[];
};

/**
 * Data returned by core_comment_add_comments WS.
 */
export type CoreCommentAddCommentsWSResponse = {
    id: number; // Comment ID.
    content: string; // The content text formatted.
    format: number; // Content format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    timecreated: number; // Time created (timestamp).
    strftimeformat: string; // Time format.
    profileurl: string; // URL profile.
    fullname: string; // Fullname.
    time: string; // Time in human format.
    avatar: string; // HTML user picture.
    userid: number; // User ID.
    delete?: boolean; // Permission to delete=true/false.
}[];

/**
 * Params of core_comment_delete_comments WS.
 */
export type CoreCommentDeleteCommentsWSParams = {
    comments: number[];
};

/**
 * Data returned by core_comment_delete_comments WS.
 */
export type CoreCommentDeleteCommentsWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_comment_get_comments WS.
 */
export type CoreCommentGetCommentsWSParams = {
    contextlevel: string; // Contextlevel system, course, user...
    instanceid: number; // The Instance id of item associated with the context level.
    component: string; // Component.
    itemid: number; // Associated id.
    area?: string; // String comment area.
    page?: number; // Page number (0 based).
    sortdirection?: string; // Sort direction: ASC or DESC.
};

/**
 * Data returned by core_comment_get_comments WS.
 */
export type CoreCommentGetCommentsWSResponse = {
    comments: { // List of comments.
        id: number; // Comment ID.
        content: string; // The content text formatted.
        format: number; // Content format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        timecreated: number; // Time created (timestamp).
        strftimeformat: string; // Time format.
        profileurl: string; // URL profile.
        fullname: string; // Fullname.
        time: string; // Time in human format.
        avatar: string; // HTML user picture.
        userid: number; // User ID.
        delete?: boolean; // Permission to delete=true/false.
    }[];
    count?: number; // Total number of comments.
    perpage?: number; // Number of comments per page.
    canpost?: boolean; // Whether the user can post in this comment area.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_competency_competency_viewed WS.
 */
export type CoreCompetencyCompetencyViewedWSParams = {
    id: number; // The competency id.
};

/**
 * Data returned by core_competency_competency_viewed WS.
 */
export type CoreCompetencyCompetencyViewedWSResponse = boolean;

/**
 * Params of core_competency_delete_evidence WS.
 */
export type CoreCompetencyDeleteEvidenceWSParams = {
    id: number; // The evidence ID.
};

/**
 * Data returned by core_competency_delete_evidence WS.
 */
export type CoreCompetencyDeleteEvidenceWSResponse = boolean;

/**
 * Params of core_competency_get_scale_values WS.
 */
export type CoreCompetencyGetScaleValuesWSParams = {
    scaleid: number; // The scale id.
};

/**
 * Data returned by core_competency_get_scale_values WS.
 */
export type CoreCompetencyGetScaleValuesWSResponse = {
    id: number; // Scale value ID.
    name: string; // Scale value name.
}[];

/**
 * Params of core_competency_grade_competency_in_course WS.
 */
export type CoreCompetencyGradeCompetencyInCourseWSParams = {
    courseid: number; // Course id.
    userid: number; // User id.
    competencyid: number; // Competency id.
    grade: number; // New grade.
    note?: string; // A note to attach to the evidence.
};

/**
 * Data returned by core_competency_grade_competency_in_course WS.
 */
export type CoreCompetencyGradeCompetencyInCourseWSResponse = {
    usercompetencyid: number; // Usercompetencyid.
    contextid: number; // Contextid.
    action: number; // Action.
    actionuserid: number; // Actionuserid.
    descidentifier: string; // Descidentifier.
    desccomponent: string; // Desccomponent.
    desca: string; // Desca.
    url: string; // Url.
    grade: number; // Grade.
    note: string; // Note.
    id: number; // Id.
    timecreated: number; // Timecreated.
    timemodified: number; // Timemodified.
    usermodified: number; // Usermodified.
    actionuser?: {
        id: number; // Id.
        email: string; // Email.
        idnumber: string; // Idnumber.
        phone1: string; // Phone1.
        phone2: string; // Phone2.
        department: string; // Department.
        institution: string; // Institution.
        fullname: string; // Fullname.
        identity: string; // Identity.
        profileurl: string; // Profileurl.
        profileimageurl: string; // Profileimageurl.
        profileimageurlsmall: string; // Profileimageurlsmall.
    };
    description: string; // Description.
    gradename: string; // Gradename.
    userdate: string; // Userdate.
    candelete: boolean; // Candelete.
};

/**
 * Params of core_competency_list_course_competencies WS.
 */
export type CoreCompetencyListCourseCompetenciesWSParams = {
    id: number; // The course id.
};

/**
 * Data returned by core_competency_list_course_competencies WS.
 */
export type CoreCompetencyListCourseCompetenciesWSResponse = {
    competency: {
        shortname: string; // Shortname.
        idnumber: string; // Idnumber.
        description: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        sortorder: number; // Sortorder.
        parentid: number; // Parentid.
        path: string; // Path.
        ruleoutcome: number; // Ruleoutcome.
        ruletype: string; // Ruletype.
        ruleconfig: string; // Ruleconfig.
        scaleid: number; // Scaleid.
        scaleconfiguration: string; // Scaleconfiguration.
        competencyframeworkid: number; // Competencyframeworkid.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
    };
    coursecompetency: {
        courseid: number; // Courseid.
        competencyid: number; // Competencyid.
        sortorder: number; // Sortorder.
        ruleoutcome: number; // Ruleoutcome.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
    };
}[];

/**
 * Params of core_competency_user_competency_plan_viewed WS.
 */
export type CoreCompetencyUserCompetencyPlanViewedWSParams = {
    competencyid: number; // The competency id.
    userid: number; // The user id.
    planid: number; // The plan id.
};

/**
 * Data returned by core_competency_user_competency_plan_viewed WS.
 */
export type CoreCompetencyUserCompetencyPlanViewedWSResponse = boolean;

/**
 * Params of core_competency_user_competency_viewed WS.
 */
export type CoreCompetencyUserCompetencyViewedWSParams = {
    usercompetencyid: number; // The user competency id.
};

/**
 * Data returned by core_competency_user_competency_viewed WS.
 */
export type CoreCompetencyUserCompetencyViewedWSResponse = boolean;

/**
 * Params of core_competency_user_competency_viewed_in_course WS.
 */
export type CoreCompetencyUserCompetencyViewedInCourseWSParams = {
    competencyid: number; // The competency id.
    userid: number; // The user id.
    courseid: number; // The course id.
};

/**
 * Data returned by core_competency_user_competency_viewed_in_course WS.
 */
export type CoreCompetencyUserCompetencyViewedInCourseWSResponse = boolean;

/**
 * Params of core_competency_user_competency_viewed_in_plan WS.
 */
export type CoreCompetencyUserCompetencyViewedInPlanWSParams = {
    competencyid: number; // The competency id.
    userid: number; // The user id.
    planid: number; // The plan id.
};

/**
 * Data returned by core_competency_user_competency_viewed_in_plan WS.
 */
export type CoreCompetencyUserCompetencyViewedInPlanWSResponse = boolean;

/**
 * Params of core_completion_get_activities_completion_status WS.
 */
export type CoreCompletionGetActivitiesCompletionStatusWSParams = {
    courseid: number; // Course ID.
    userid: number; // User ID.
};

/**
 * Data returned by core_completion_get_activities_completion_status WS.
 */
export type CoreCompletionGetActivitiesCompletionStatusWSResponse = {
    statuses: { // List of activities status.
        cmid: number; // Comment ID.
        modname: string; // Activity module name.
        instance: number; // Instance ID.
        state: number; // Completion state value:
                                                                 // 0 means incomplete, 1 complete,
                                                                 // 2 complete pass, 3 complete fail.

        timecompleted: number; // Timestamp for completed activity.
        tracking: number; // Type of tracking:
                                                                 // 0 means none, 1 manual, 2 automatic.

        overrideby?: number; // The user id who has overriden the status, or null.
        valueused?: boolean; // Whether the completion status affects the availability
                                 // of another activity.

    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_completion_get_course_completion_status WS.
 */
export type CoreCompletionGetCourseCompletionStatusWSParams = {
    courseid: number; // Course ID.
    userid: number; // User ID.
};

/**
 * Data returned by core_completion_get_course_completion_status WS.
 */
export type CoreCompletionGetCourseCompletionStatusWSResponse = {
    completionstatus: {
        completed: boolean; // True if the course is complete, false otherwise.
        aggregation: number; // Aggregation method 1 means all, 2 means any.
        completions: {
            type: number; // Completion criteria type.
            title: string; // Completion criteria Title.
            status: string; // Completion status (Yes/No) a % or number.
            complete: boolean; // Completion status (true/false).
            timecompleted: number; // Timestamp for criteria completetion.
            details: {
                type: string; // Type description.
                criteria: string; // Criteria description.
                requirement: string; // Requirement description.
                status: string; // Status description, can be anything.
            }; // Details.
        }[];
    }; // Course status.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_completion_mark_course_self_completed WS.
 */
export type CoreCompletionMarkCourseSelfCompletedWSParams = {
    courseid: number; // Course ID.
};

/**
 * Data returned by core_completion_mark_course_self_completed WS.
 */
export type CoreCompletionMarkCourseSelfCompletedWSResponse = {
    status: boolean; // Status, true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_completion_update_activity_completion_status_manually WS.
 */
export type CoreCompletionUpdateActivityCompletionStatusManuallyWSParams = {
    cmid: number; // Course module id.
    completed: boolean; // Activity completed or not.
};

/**
 * Data returned by core_completion_update_activity_completion_status_manually WS.
 */
export type CoreCompletionUpdateActivityCompletionStatusManuallyWSResponse = {
    status: boolean; // Status, true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_course_check_updates WS.
 */
export type CoreCourseCheckUpdatesWSParams = {
    courseid: number; // Course id to check.
    tocheck: { // Instances to check.
        contextlevel: string; // The context level for the file location.
                                                                             // Only module supported right now.

        id: number; // Context instance id.
        since: number; // Check updates since this time stamp.
    }[];
    filter?: string[]; // Check only for updates in these areas.
};

/**
 * Data returned by core_course_check_updates WS.
 */
export type CoreCourseCheckUpdatesWSResponse = {
    instances: {
        contextlevel: string; // The context level.
        id: number; // Instance id.
        updates: {
            name: string; // Name of the area updated.
            timeupdated?: number; // Last time was updated.
            itemids?: number[]; // The ids of the items updated.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_course_get_categories WS.
 */
export type CoreCourseGetCategoriesWSParams = {
    criteria?: { // Criteria.
        key: string; // The category column to search, expected keys (value format) are:"id" (int) the category id,"ids" (string) category ids separated by commas,"name" (string) the category name,"parent" (int) the parent category id,"idnumber" (string) category idnumber - user must have 'moodle/category:manage' to search on idnumber,"visible" (int) whether the returned categories must be visible or hidden. If the key is not passed,
                                          // then the function return all categories that the user can see. - user must have 'moodle/category:manage' or 'moodle/category:viewhiddencategories' to search on visible,"theme" (string) only return the categories having this theme - user must have 'moodle/category:manage' to search on theme.

        value: string; // The value to match.
    }[];
    addsubcategories?: boolean; // Return the sub categories infos
                                       // (1 - default) otherwise only the category info (0).

};

/**
 * Data returned by core_course_get_categories WS.
 */
export type CoreCourseGetCategoriesWSResponse = {
    id: number; // Category id.
    name: string; // Category name.
    idnumber?: string; // Category id number.
    description: string; // Category description.
    descriptionformat: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    parent: number; // Parent category id.
    sortorder: number; // Category sorting order.
    coursecount: number; // Number of courses in this category.
    visible?: number; // 1: available, 0:not available.
    visibleold?: number; // 1: available, 0:not available.
    timemodified?: number; // Timestamp.
    depth: number; // Category depth.
    path: string; // Category path.
    theme?: string; // Category theme.
}[];

/**
 * Params of core_course_get_contents WS.
 */
export type CoreCourseGetContentsWSParams = {
    courseid: number; // Course id.
    options?: { // Options, used since Moodle 2.9.
        name: string; // The expected keys (value format) are:
                                             // excludemodules (bool) Do not return modules, return only the sections structure
                                             // excludecontents (bool) Do not return module contents (i.e: files inside a resource)
                                             // includestealthmodules (bool) Return stealth modules for students in a special
                                                 // section (with id -1)
                                             // sectionid (int) Return only this section
                                             // sectionnumber (int) Return only this section with number (order)
                                             // cmid (int) Return only this module information (among the whole sections structure)
                                             // modname (string) Return only modules with this name "label, forum, etc..."
                                             // modid (int) Return only the module with this id (to be used with modname.

        value: string; // The value of the option,
                                                                 // this param is personaly validated in the external function.

    }[];
};

/**
 * Data returned by core_course_get_contents WS.
 */
export type CoreCourseGetContentsWSResponse = {
    id: number; // Section ID.
    name: string; // Section name.
    visible?: number; // Is the section visible.
    summary: string; // Section description.
    summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    section?: number; // Section number inside the course.
    hiddenbynumsections?: number; // Whether is a section hidden in the course format.
    uservisible?: boolean; // Is the section visible for the user?.
    availabilityinfo?: string; // Availability information.
    modules: { // List of module.
        id: number; // Activity id.
        url?: string; // Activity url.
        name: string; // Activity module name.
        instance?: number; // Instance id.
        contextid?: number; // Activity context id.
        description?: string; // Activity description.
        visible?: number; // Is the module visible.
        uservisible?: boolean; // Is the module visible for the user?.
        availabilityinfo?: string; // Availability information.
        visibleoncoursepage?: number; // Is the module visible on course page.
        modicon: string; // Activity icon url.
        modname: string; // Activity module type.
        modplural: string; // Activity module plural name.
        availability?: string; // Module availability settings.
        indent: number; // Number of identation in the site.
        onclick?: string; // Onclick action.
        afterlink?: string; // After link info to be displayed.
        customdata?: string; // Custom data (JSON encoded).
        noviewlink?: boolean; // Whether the module has no view page.
        completion?: number; // Type of completion tracking:
                                     // 0 means none, 1 manual, 2 automatic.

        completiondata?: {
            state: number; // Completion state value:
                                             // 0 means incomplete, 1 complete, 2 complete pass, 3 complete fail.

            timecompleted: number; // Timestamp for completion status.
            overrideby: number; // The user id who has overriden the
                                             // status.

            valueused?: boolean; // Whether the completion status affects
                                             // the availability of another activity.

        }; // Module completion data.
        contents: {
            type: string; // A file or a folder or external link.
            filename: string; // Filename.
            filepath: string; // Filepath.
            filesize: number; // Filesize.
            fileurl?: string; // Downloadable file url.
            content?: string; // Raw content, will be used when type is content.
            timecreated: number; // Time created.
            timemodified: number; // Time modified.
            sortorder: number; // Content sort order.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for external files.
            userid: number; // User who added this content to moodle.
            author: string; // Content owner.
            license: string; // Content license.
            tags?: { // Tags.
                id: number; // Tag id.
                name: string; // Tag name.
                rawname: string; // The raw, unnormalised name for the tag as entered by users.
                isstandard: boolean; // Whether this tag is standard.
                tagcollid: number; // Tag collection id.
                taginstanceid: number; // Tag instance id.
                taginstancecontextid: number; // Context the tag instance belongs to.
                itemid: number; // Id of the record tagged.
                ordering: number; // Tag ordering.
                flag: number; // Whether the tag is flagged as inappropriate.
            }[];
        }[];
        contentsinfo?: {
            filescount: number; // Total number of files.
            filessize: number; // Total files size.
            lastmodified: number; // Last time files were modified.
            mimetypes: string[]; // Files mime types.
            repositorytype?: string; // The repository type for
                                             // the main file.

        }; // Contents summary information.
    }[];
}[];

/**
 * Params of core_course_get_course_module WS.
 */
export type CoreCourseGetCourseModuleWSParams = {
    cmid: number; // The course module id.
};

/**
 * Data returned by core_course_get_course_module WS.
 */
export type CoreCourseGetCourseModuleWSResponse = {
    cm: {
        id: number; // The course module id.
        course: number; // The course id.
        module: number; // The module type id.
        name: string; // The activity name.
        modname: string; // The module component name (forum, assign, etc..).
        instance: number; // The activity instance id.
        section: number; // The module section id.
        sectionnum: number; // The module section number.
        groupmode: number; // Group mode.
        groupingid: number; // Grouping id.
        completion: number; // If completion is enabled.
        idnumber?: string; // Module id number.
        added?: number; // Time added.
        score?: number; // Score.
        indent?: number; // Indentation.
        visible?: number; // If visible.
        visibleoncoursepage?: number; // If visible on course page.
        visibleold?: number; // Visible old.
        completiongradeitemnumber?: number; // Completion grade item.
        completionview?: number; // Completion view setting.
        completionexpected?: number; // Completion time expected.
        showdescription?: number; // If the description is showed.
        availability?: string; // Availability settings.
        grade?: number; // Grade (max value or scale id).
        scale?: string; // Scale items (if used).
        gradepass?: string; // Grade to pass (float).
        gradecat?: number; // Grade category.
        advancedgrading?: { // Advanced grading settings.
            area: string; // Gradable area name.
            method: string; // Grading method.
        }[];
        outcomes?: { // Outcomes information.
            id: string; // Outcome id.
            name: string; // Outcome full name.
            scale: string; // Scale items.
        }[];
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_course_get_course_module_by_instance WS.
 */
export type CoreCourseGetCourseModuleByInstanceWSParams = {
    module: string; // The module name.
    instance: number; // The module instance id.
};

/**
 * Data returned by core_course_get_course_module_by_instance WS.
 */
export type CoreCourseGetCourseModuleByInstanceWSResponse = {
    cm: {
        id: number; // The course module id.
        course: number; // The course id.
        module: number; // The module type id.
        name: string; // The activity name.
        modname: string; // The module component name (forum, assign, etc..).
        instance: number; // The activity instance id.
        section: number; // The module section id.
        sectionnum: number; // The module section number.
        groupmode: number; // Group mode.
        groupingid: number; // Grouping id.
        completion: number; // If completion is enabled.
        idnumber?: string; // Module id number.
        added?: number; // Time added.
        score?: number; // Score.
        indent?: number; // Indentation.
        visible?: number; // If visible.
        visibleoncoursepage?: number; // If visible on course page.
        visibleold?: number; // Visible old.
        completiongradeitemnumber?: number; // Completion grade item.
        completionview?: number; // Completion view setting.
        completionexpected?: number; // Completion time expected.
        showdescription?: number; // If the description is showed.
        availability?: string; // Availability settings.
        grade?: number; // Grade (max value or scale id).
        scale?: string; // Scale items (if used).
        gradepass?: string; // Grade to pass (float).
        gradecat?: number; // Grade category.
        advancedgrading?: { // Advanced grading settings.
            area: string; // Gradable area name.
            method: string; // Grading method.
        }[];
        outcomes?: { // Outcomes information.
            id: string; // Outcome id.
            name: string; // Outcome full name.
            scale: string; // Scale items.
        }[];
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_course_get_courses WS.
 */
export type CoreCourseGetCoursesWSParams = {
    options?: {
        ids?: number[]; // List of course id. If empty return all courses
                                         // except front page course.

    }; // Options - operator OR is used.
};

/**
 * Data returned by core_course_get_courses WS.
 */
export type CoreCourseGetCoursesWSResponse = {
    id: number; // Course id.
    shortname: string; // Course short name.
    categoryid: number; // Category id.
    categorysortorder?: number; // Sort order into the category.
    fullname: string; // Full name.
    displayname: string; // Course display name.
    idnumber?: string; // Id number.
    summary: string; // Summary.
    summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    format: string; // Course format: weeks, topics, social, site,..
    showgrades?: number; // 1 if grades are shown, otherwise 0.
    newsitems?: number; // Number of recent items appearing on the course page.
    startdate: number; // Timestamp when the course start.
    enddate: number; // Timestamp when the course end.
    numsections?: number; // (deprecated, use courseformatoptions) number of weeks/topics.
    maxbytes?: number; // Largest size of file that can be uploaded into the course.
    showreports?: number; // Are activity report shown (yes = 1, no =0).
    visible?: number; // 1: available to student, 0:not available.
    hiddensections?: number; // (deprecated, use courseformatoptions) How the hidden sections in the course are displayed to students.
    groupmode?: number; // No group, separate, visible.
    groupmodeforce?: number; // 1: yes, 0: no.
    defaultgroupingid?: number; // Default grouping id.
    timecreated?: number; // Timestamp when the course have been created.
    timemodified?: number; // Timestamp when the course have been modified.
    enablecompletion?: number; // Enabled, control via completion and activity settings. Disbaled,
                                     // not shown in activity settings.

    completionnotify?: number; // 1: yes 0: no.
    lang?: string; // Forced course language.
    forcetheme?: string; // Name of the force theme.
    courseformatoptions?: { // Additional options for particular course format.
        name: string; // Course format option name.
        value: string; // Course format option value.
    }[];
    customfields?: { // Custom fields and associated values.
        name: string; // The name of the custom field.
        shortname: string; // The shortname of the custom field.
        type: string; // The type of the custom field - text, checkbox...
        valueraw: string; // The raw value of the custom field.
        value: string; // The value of the custom field.
    }[];
}[];

/**
 * Params of core_course_get_courses_by_field WS.
 */
export type CoreCourseGetCoursesByFieldWSParams = {
    field?: string; // The field to search can be left empty for all courses or:
                 // id: course id
                 // ids: comma separated course ids
                 // shortname: course short name
                 // idnumber: course id number
                 // category: category id the course belongs to.

    value?: string; // The value to match.
};

/**
 * Data returned by core_course_get_courses_by_field WS.
 */
export type CoreCourseGetCoursesByFieldWSResponse = {
    courses: { // Course.
        id: number; // Course id.
        fullname: string; // Course full name.
        displayname: string; // Course display name.
        shortname: string; // Course short name.
        categoryid: number; // Category id.
        categoryname: string; // Category name.
        sortorder?: number; // Sort order in the category.
        summary: string; // Summary.
        summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        summaryfiles?: CoreWSExternalFile[];
        overviewfiles: CoreWSExternalFile[];
        contacts: { // Contact users.
            id: number; // Contact user id.
            fullname: string; // Contact user fullname.
        }[];
        enrollmentmethods: string[]; // Enrollment methods list.
        customfields?: { // Custom fields.
            name: string; // The name of the custom field.
            shortname: string; // The shortname of the custom field - to be able to build the field class in the code.
            type: string; // The type of the custom field - text field, checkbox...
            valueraw: string; // The raw value of the custom field.
            value: string; // The value of the custom field.
        }[];
        idnumber?: string; // Id number.
        format?: string; // Course format: weeks, topics, social, site,..
        showgrades?: number; // 1 if grades are shown, otherwise 0.
        newsitems?: number; // Number of recent items appearing on the course page.
        startdate?: number; // Timestamp when the course start.
        enddate?: number; // Timestamp when the course end.
        maxbytes?: number; // Largest size of file that can be uploaded into.
        showreports?: number; // Are activity report shown (yes = 1, no =0).
        visible?: number; // 1: available to student, 0:not available.
        groupmode?: number; // No group, separate, visible.
        groupmodeforce?: number; // 1: yes, 0: no.
        defaultgroupingid?: number; // Default grouping id.
        enablecompletion?: number; // Completion enabled? 1: yes 0: no.
        completionnotify?: number; // 1: yes 0: no.
        lang?: string; // Forced course language.
        theme?: string; // Fame of the forced theme.
        marker?: number; // Current course marker.
        legacyfiles?: number; // If legacy files are enabled.
        calendartype?: string; // Calendar type.
        timecreated?: number; // Time when the course was created.
        timemodified?: number; // Last time  the course was updated.
        requested?: number; // If is a requested course.
        cacherev?: number; // Cache revision number.
        filters?: { // Course filters.
            filter: string; // Filter plugin name.
            localstate: number; // Filter state: 1 for on, -1 for off, 0 if inherit.
            inheritedstate: number; // 1 or 0 to use when localstate is set to inherit.
        }[];
        courseformatoptions?: { // Additional options for particular course format.
            name: string; // Course format option name.
            value: string; // Course format option value.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_course_get_enrolled_courses_by_timeline_classification WS.
 */
export type CoreCourseGetEnrolledCoursesByTimelineClassificationWSParams = {
    classification: string; // Future, inprogress, or past.
    limit?: number; // Result set limit.
    offset?: number; // Result set offset.
    sort?: string; // Sort string.
    customfieldname?: string; // Used when classification = customfield.
    customfieldvalue?: string; // Used when classification = customfield.
};

/**
 * Data returned by core_course_get_enrolled_courses_by_timeline_classification WS.
 */
export type CoreCourseGetEnrolledCoursesByTimelineClassificationWSResponse = {
    courses: { // Course.
        id: number; // Id.
        fullname: string; // Fullname.
        shortname: string; // Shortname.
        idnumber: string; // Idnumber.
        summary: string; // Summary.
        summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        startdate: number; // Startdate.
        enddate: number; // Enddate.
        visible: boolean; // Visible.
        fullnamedisplay: string; // Fullnamedisplay.
        viewurl: string; // Viewurl.
        courseimage: string; // Courseimage.
        progress?: number; // Progress.
        hasprogress: boolean; // Hasprogress.
        isfavourite: boolean; // Isfavourite.
        hidden: boolean; // Hidden.
        timeaccess?: number; // Timeaccess.
        showshortname: boolean; // Showshortname.
        coursecategory: string; // Coursecategory.
    }[];
    nextoffset: number; // Offset for the next request.
};

/**
 * Params of core_course_get_recent_courses WS.
 */
export type CoreCourseGetRecentCoursesWSParams = {
    userid?: number; // Id of the user, default to current user.
    limit?: number; // Result set limit.
    offset?: number; // Result set offset.
    sort?: string; // Sort string.
};

/**
 * Data returned by core_course_get_recent_courses WS.
 */
export type CoreCourseGetRecentCoursesWSResponse = { // Courses.
    id: number; // Id.
    fullname: string; // Fullname.
    shortname: string; // Shortname.
    idnumber: string; // Idnumber.
    summary: string; // Summary.
    summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    startdate: number; // Startdate.
    enddate: number; // Enddate.
    visible: boolean; // Visible.
    fullnamedisplay: string; // Fullnamedisplay.
    viewurl: string; // Viewurl.
    courseimage: string; // Courseimage.
    progress?: number; // Progress.
    hasprogress: boolean; // Hasprogress.
    isfavourite: boolean; // Isfavourite.
    hidden: boolean; // Hidden.
    timeaccess?: number; // Timeaccess.
    showshortname: boolean; // Showshortname.
    coursecategory: string; // Coursecategory.
}[];

/**
 * Params of core_course_get_updates_since WS.
 */
export type CoreCourseGetUpdatesSinceWSParams = {
    courseid: number; // Course id to check.
    since: number; // Check updates since this time stamp.
    filter?: string[]; // Check only for updates in these areas.
};

/**
 * Data returned by core_course_get_updates_since WS.
 */
export type CoreCourseGetUpdatesSinceWSResponse = {
    instances: {
        contextlevel: string; // The context level.
        id: number; // Instance id.
        updates: {
            name: string; // Name of the area updated.
            timeupdated?: number; // Last time was updated.
            itemids?: number[]; // The ids of the items updated.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_course_get_user_administration_options WS.
 */
export type CoreCourseGetUserAdministrationOptionsWSParams = {
    courseids: number[];
};

/**
 * Data returned by core_course_get_user_administration_options WS.
 */
export type CoreCourseGetUserAdministrationOptionsWSResponse = {
    courses: { // List of courses.
        id: number; // Course id.
        options: {
            name: string; // Option name.
            available: boolean; // Whether the option is available or not.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_course_get_user_navigation_options WS.
 */
export type CoreCourseGetUserNavigationOptionsWSParams = {
    courseids: number[];
};

/**
 * Data returned by core_course_get_user_navigation_options WS.
 */
export type CoreCourseGetUserNavigationOptionsWSResponse = {
    courses: { // List of courses.
        id: number; // Course id.
        options: {
            name: string; // Option name.
            available: boolean; // Whether the option is available or not.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_course_search_courses WS.
 */
export type CoreCourseSearchCoursesWSParams = {
    criterianame: string; // Criteria name
                                                     // (search, modulelist (only admins), blocklist (only admins), tagid).

    criteriavalue: string; // Criteria value.
    page?: number; // Page number (0 based).
    perpage?: number; // Items per page.
    requiredcapabilities?: string[]; // Optional list of required capabilities (used to filter the list).
    limittoenrolled?: boolean; // Limit to enrolled courses.
    onlywithcompletion?: boolean; // Limit to courses where completion is enabled.
};

/**
 * Data returned by core_course_search_courses WS.
 */
export type CoreCourseSearchCoursesWSResponse = {
    total: number; // Total course count.
    courses: { // Course.
        id: number; // Course id.
        fullname: string; // Course full name.
        displayname: string; // Course display name.
        shortname: string; // Course short name.
        categoryid: number; // Category id.
        categoryname: string; // Category name.
        sortorder?: number; // Sort order in the category.
        summary: string; // Summary.
        summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        summaryfiles?: CoreWSExternalFile[];
        overviewfiles: CoreWSExternalFile[];
        contacts: { // Contact users.
            id: number; // Contact user id.
            fullname: string; // Contact user fullname.
        }[];
        enrollmentmethods: string[]; // Enrollment methods list.
        customfields?: { // Custom fields.
            name: string; // The name of the custom field.
            shortname: string; // The shortname of the custom field - to be able to build the field class in the code.
            type: string; // The type of the custom field - text field, checkbox...
            valueraw: string; // The raw value of the custom field.
            value: string; // The value of the custom field.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_course_set_favourite_courses WS.
 */
export type CoreCourseSetFavouriteCoursesWSParams = {
    courses: {
        id: number; // Course ID.
        favourite: boolean; // Favourite status.
    }[];
};

/**
 * Data returned by core_course_set_favourite_courses WS.
 */
export type CoreCourseSetFavouriteCoursesWSResponse = {
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_course_view_course WS.
 */
export type CoreCourseViewCourseWSParams = {
    courseid: number; // Id of the course.
    sectionnumber?: number; // Section number.
};

/**
 * Data returned by core_course_view_course WS.
 */
export type CoreCourseViewCourseWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_enrol_get_course_enrolment_methods WS.
 */
export type CoreEnrolGetCourseEnrolmentMethodsWSParams = {
    courseid: number; // Course id.
};

/**
 * Data returned by core_enrol_get_course_enrolment_methods WS.
 */
export type CoreEnrolGetCourseEnrolmentMethodsWSResponse = {
    id: number; // Id of course enrolment instance.
    courseid: number; // Id of course.
    type: string; // Type of enrolment plugin.
    name: string; // Name of enrolment plugin.
    status: string; // Status of enrolment plugin.
    wsfunction?: string; // Webservice function to get more information.
}[];

/**
 * Params of core_enrol_get_enrolled_users WS.
 */
export type CoreEnrolGetEnrolledUsersWSParams = {
    courseid: number; // Course id.
    options?: { // Option names:
                         // * withcapability (string) return only users with this capability. This option requires 'moodle/role:review' on the course context.
                         // * groupid (integer) return only users in this group id. If the course has groups enabled and this param
                                             // isn't defined, returns all the viewable users.
                                             // This option requires 'moodle/site:accessallgroups' on the course context if the
                                             // user doesn't belong to the group.
                         // * onlyactive (integer) return only users with active enrolments and matching time restrictions. This option requires 'moodle/course:enrolreview' on the course context.
                         // * userfields ('string, string, ...') return only the values of these user fields.
                         // * limitfrom (integer) sql limit from.
                         // * limitnumber (integer) maximum number of returned users.
                         // * sortby (string) sort by id, firstname or lastname. For ordering like the site does, use siteorder.
                         // * sortdirection (string) ASC or DESC.

        name: string; // Option name.
        value: string; // Option value.
    }[];
};

/**
 * Data returned by core_enrol_get_enrolled_users WS.
 */
export type CoreEnrolGetEnrolledUsersWSResponse = {
    id: number; // ID of the user.
    username?: string; // Username policy is defined in Moodle security config.
    firstname?: string; // The first name(s) of the user.
    lastname?: string; // The family name of the user.
    fullname: string; // The fullname of the user.
    email?: string; // An email address - allow email as root@localhost.
    address?: string; // Postal address.
    phone1?: string; // Phone 1.
    phone2?: string; // Phone 2.
    icq?: string; // Icq number.
    skype?: string; // Skype id.
    yahoo?: string; // Yahoo id.
    aim?: string; // Aim id.
    msn?: string; // Msn number.
    department?: string; // Department.
    institution?: string; // Institution.
    idnumber?: string; // An arbitrary ID code number perhaps from the institution.
    interests?: string; // User interests (separated by commas).
    firstaccess?: number; // First access to the site (0 if never).
    lastaccess?: number; // Last access to the site (0 if never).
    lastcourseaccess?: number; // Last access to the course (0 if never).
    description?: string; // User profile description.
    descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    city?: string; // Home city of the user.
    url?: string; // URL of the user.
    country?: string; // Home country code of the user, such as AU or CZ.
    profileimageurlsmall?: string; // User image profile URL - small version.
    profileimageurl?: string; // User image profile URL - big version.
    customfields?: { // User custom fields (also known as user profil fields).
        type: string; // The type of the custom field - text field, checkbox...
        value: string; // The value of the custom field.
        name: string; // The name of the custom field.
        shortname: string; // The shortname of the custom field - to be able to build the field class in the code.
    }[];
    groups?: { // User groups.
        id: number; // Group id.
        name: string; // Group name.
        description: string; // Group description.
        descriptionformat: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    }[];
    roles?: { // User roles.
        roleid: number; // Role id.
        name: string; // Role name.
        shortname: string; // Role shortname.
        sortorder: number; // Role sortorder.
    }[];
    preferences?: { // User preferences.
        name: string; // The name of the preferences.
        value: string; // The value of the custom field.
    }[];
    enrolledcourses?: { // Courses where the user is enrolled - limited by which courses the user is able to see.
        id: number; // Id of the course.
        fullname: string; // Fullname of the course.
        shortname: string; // Shortname of the course.
    }[];
}[];

/**
 * Params of core_enrol_get_users_courses WS.
 */
export type CoreEnrolGetUsersCoursesWSParams = {
    userid: number; // User id.
    returnusercount?: boolean; // Include count of enrolled users for each course? This can add several seconds to the response time if a user is on several large courses, so set this to false if the value will not be used to improve performance.
};

/**
 * Data returned by core_enrol_get_users_courses WS.
 */
export type CoreEnrolGetUsersCoursesWSResponse = {
    id: number; // Id of course.
    shortname: string; // Short name of course.
    fullname: string; // Long name of course.
    displayname?: string; // Course display name for lists.
    enrolledusercount?: number; // Number of enrolled users in this course.
    idnumber: string; // Id number of course.
    visible: number; // 1 means visible, 0 means not yet visible course.
    summary?: string; // Summary.
    summaryformat?: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    format?: string; // Course format: weeks, topics, social, site.
    showgrades?: boolean; // True if grades are shown, otherwise false.
    lang?: string; // Forced course language.
    enablecompletion?: boolean; // True if completion is enabled, otherwise false.
    completionhascriteria?: boolean; // If completion criteria is set.
    completionusertracked?: boolean; // If the user is completion tracked.
    category?: number; // Course category id.
    progress?: number; // Progress percentage.
    completed?: boolean; // Whether the course is completed.
    startdate?: number; // Timestamp when the course start.
    enddate?: number; // Timestamp when the course end.
    marker?: number; // Course section marker.
    lastaccess?: number; // Last access to the course (timestamp).
    isfavourite?: boolean; // If the user marked this course a favourite.
    hidden?: boolean; // If the user hide the course from the dashboard.
    overviewfiles?: CoreWSExternalFile[];
}[];

/**
 * Params of core_enrol_search_users WS.
 */
export type CoreEnrolSearchUsersWSParams = {
    courseid: number; // Course id.
    search: string; // Query.
    searchanywhere: boolean; // Find a match anywhere, or only at the beginning.
    page: number; // Page number.
    perpage: number; // Number per page.
};

/**
 * Data returned by core_enrol_search_users WS.
 */
export type CoreEnrolSearchUsersWSResponse = {
    id: number; // ID of the user.
    username?: string; // The username.
    firstname?: string; // The first name(s) of the user.
    lastname?: string; // The family name of the user.
    fullname: string; // The fullname of the user.
    email?: string; // An email address - allow email as root@localhost.
    address?: string; // Postal address.
    phone1?: string; // Phone 1.
    phone2?: string; // Phone 2.
    icq?: string; // Icq number.
    skype?: string; // Skype id.
    yahoo?: string; // Yahoo id.
    aim?: string; // Aim id.
    msn?: string; // Msn number.
    department?: string; // Department.
    institution?: string; // Institution.
    idnumber?: string; // An arbitrary ID code number perhaps from the institution.
    interests?: string; // User interests (separated by commas).
    firstaccess?: number; // First access to the site (0 if never).
    lastaccess?: number; // Last access to the site (0 if never).
    auth?: string; // Auth plugins include manual, ldap, etc.
    suspended?: boolean; // Suspend user account, either false to enable user login or true to disable it.
    confirmed?: boolean; // Active user: 1 if confirmed, 0 otherwise.
    lang?: string; // Language code such as "en", must exist on server.
    calendartype?: string; // Calendar type such as "gregorian", must exist on server.
    theme?: string; // Theme name such as "standard", must exist on server.
    timezone?: string; // Timezone code such as Australia/Perth, or 99 for default.
    mailformat?: number; // Mail format code is 0 for plain text, 1 for HTML etc.
    description?: string; // User profile description.
    descriptionformat?: number; // Int format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    city?: string; // Home city of the user.
    url?: string; // URL of the user.
    country?: string; // Home country code of the user, such as AU or CZ.
    profileimageurlsmall: string; // User image profile URL - small version.
    profileimageurl: string; // User image profile URL - big version.
    customfields?: { // User custom fields (also known as user profile fields).
        type: string; // The type of the custom field - text field, checkbox...
        value: string; // The value of the custom field.
        name: string; // The name of the custom field.
        shortname: string; // The shortname of the custom field - to be able to build the field class in the code.
    }[];
    preferences?: { // Users preferences.
        name: string; // The name of the preferences.
        value: string; // The value of the preference.
    }[];
}[];

/**
 * Params of core_files_delete_draft_files WS.
 */
export type CoreFilesDeleteDraftFilesWSParams = {
    draftitemid: number; // Item id of the draft file area.
    files: { // Files or directories to be deleted.
        filepath: string; // Path to the file or directory to delete.
        filename: string; // Name of the file to delete.
    }[];
};

/**
 * Data returned by core_files_delete_draft_files WS.
 */
export type CoreFilesDeleteDraftFilesWSResponse = {
    parentpaths: string[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_files_get_files WS.
 */
export type CoreFilesGetFilesWSParams = {
    contextid: number; // Context id Set to -1 to use contextlevel and instanceid.
    component: string; // Component.
    filearea: string; // File area.
    itemid: number; // Associated id.
    filepath: string; // File path.
    filename: string; // File name.
    modified?: number; // Timestamp to return files changed after this time.
    contextlevel?: string; // The context level for the file location.
    instanceid?: number; // The instance id for where the file is located.
};

/**
 * Data returned by core_files_get_files WS.
 */
export type CoreFilesGetFilesWSResponse = {
    parents: {
        contextid: number;
        component: string;
        filearea: string;
        itemid: number;
        filepath: string;
        filename: string;
    }[];
    files: {
        contextid: number;
        component: string;
        filearea: string;
        itemid: number;
        filepath: string;
        filename: string;
        isdir: boolean;
        url: string;
        timemodified: number;
        timecreated?: number; // Time created.
        filesize?: number; // File size.
        author?: string; // File owner.
        license?: string; // File license.
    }[];
};

/**
 * Params of core_filters_get_available_in_context WS.
 */
export type CoreFiltersGetAvailableInContextWSParams = {
    contexts: { // The list of contexts to check.
        contextlevel: string; // The context level where the filters are:
                             // (coursecat, course, module).

        instanceid: number; // The instance id of item associated with the context.
    }[];
};

/**
 * Data returned by core_filters_get_available_in_context WS.
 */
export type CoreFiltersGetAvailableInContextWSResponse = {
    filters: { // Available filters.
        contextlevel: string; // The context level where the filters are:
                             // (coursecat, course, module).

        instanceid: number; // The instance id of item associated with the context.
        contextid: number; // The context id.
        filter: string; // Filter plugin name.
        localstate: number; // Filter state: 1 for on, -1 for off, 0 if inherit.
        inheritedstate: number; // 1 or 0 to use when localstate is set to inherit.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_get_component_strings WS.
 */
export type CoreGetComponentStringsWSParams = {
    component: string; // Component.
    lang?: string; // Lang.
};

/**
 * Data returned by core_get_component_strings WS.
 */
export type CoreGetComponentStringsWSResponse = {
    stringid: string; // String id.
    string: string; // Translated string.
}[];

/**
 * Params of core_grades_grader_gradingpanel_point_fetch WS.
 */
export type CoreGradesGraderGradingpanelPointFetchWSParams = {
    component: string; // The name of the component.
    contextid: number; // The ID of the context being graded.
    itemname: string; // The grade item itemname being graded.
    gradeduserid: number; // The ID of the user show.
};

/**
 * Data returned by core_grades_grader_gradingpanel_point_fetch WS.
 */
export type CoreGradesGraderGradingpanelPointFetchWSResponse = {
    templatename: string; // The template to use when rendering this data.
    hasgrade: boolean; // Does the user have a grade?.
    grade: {
        grade: number; // The numeric grade.
        usergrade: string; // Current user grade.
        maxgrade: string; // Max possible grade.
        gradedby: string; // The assumed grader of this grading instance.
        timecreated: number; // The time that the grade was created.
        timemodified: number; // The time that the grade was last updated.
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_grades_grader_gradingpanel_point_store WS.
 */
export type CoreGradesGraderGradingpanelPointStoreWSParams = {
    component: string; // The name of the component.
    contextid: number; // The ID of the context being graded.
    itemname: string; // The grade item itemname being graded.
    gradeduserid: number; // The ID of the user show.
    notifyuser?: boolean; // Wheteher to notify the user or not.
    formdata: string; // The serialised form data representing the grade.
};

/**
 * Data returned by core_grades_grader_gradingpanel_point_store WS.
 */
export type CoreGradesGraderGradingpanelPointStoreWSResponse = {
    templatename: string; // The template to use when rendering this data.
    hasgrade: boolean; // Does the user have a grade?.
    grade: {
        grade: number; // The numeric grade.
        usergrade: string; // Current user grade.
        maxgrade: string; // Max possible grade.
        gradedby: string; // The assumed grader of this grading instance.
        timecreated: number; // The time that the grade was created.
        timemodified: number; // The time that the grade was last updated.
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_grades_grader_gradingpanel_scale_fetch WS.
 */
export type CoreGradesGraderGradingpanelScaleFetchWSParams = {
    component: string; // The name of the component.
    contextid: number; // The ID of the context being graded.
    itemname: string; // The grade item itemname being graded.
    gradeduserid: number; // The ID of the user show.
};

/**
 * Data returned by core_grades_grader_gradingpanel_scale_fetch WS.
 */
export type CoreGradesGraderGradingpanelScaleFetchWSResponse = {
    templatename: string; // The template to use when rendering this data.
    hasgrade: boolean; // Does the user have a grade?.
    grade: {
        options: { // The description of the grade option.
            value: number; // The grade value.
            title: string; // The description fo the option.
            selected: boolean; // Whether this item is currently selected.
        }[];
        usergrade: string; // Current user grade.
        maxgrade: string; // Max possible grade.
        gradedby: string; // The assumed grader of this grading instance.
        timecreated: number; // The time that the grade was created.
        timemodified: number; // The time that the grade was last updated.
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_grades_grader_gradingpanel_scale_store WS.
 */
export type CoreGradesGraderGradingpanelScaleStoreWSParams = {
    component: string; // The name of the component.
    contextid: number; // The ID of the context being graded.
    itemname: string; // The grade item itemname being graded.
    gradeduserid: number; // The ID of the user show.
    notifyuser?: boolean; // Wheteher to notify the user or not.
    formdata: string; // The serialised form data representing the grade.
};

/**
 * Data returned by core_grades_grader_gradingpanel_scale_store WS.
 */
export type CoreGradesGraderGradingpanelScaleStoreWSResponse = {
    templatename: string; // The template to use when rendering this data.
    hasgrade: boolean; // Does the user have a grade?.
    grade: {
        options: { // The description of the grade option.
            value: number; // The grade value.
            title: string; // The description fo the option.
            selected: boolean; // Whether this item is currently selected.
        }[];
        usergrade: string; // Current user grade.
        maxgrade: string; // Max possible grade.
        gradedby: string; // The assumed grader of this grading instance.
        timecreated: number; // The time that the grade was created.
        timemodified: number; // The time that the grade was last updated.
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_group_get_activity_allowed_groups WS.
 */
export type CoreGroupGetActivityAllowedGroupsWSParams = {
    cmid: number; // Course module id.
    userid?: number; // Id of user, empty for current user.
};

/**
 * Data returned by core_group_get_activity_allowed_groups WS.
 */
export type CoreGroupGetActivityAllowedGroupsWSResponse = {
    groups: {
        id: number; // Group record id.
        name: string; // Multilang compatible name, course unique.
        description: string; // Group description text.
        descriptionformat: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        idnumber: string; // Id number.
        courseid?: number; // Course id.
    }[];
    canaccessallgroups?: boolean; // Whether the user will be able to access all the activity groups.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_group_get_activity_groupmode WS.
 */
export type CoreGroupGetActivityGroupmodeWSParams = {
    cmid: number; // Course module id.
};

/**
 * Data returned by core_group_get_activity_groupmode WS.
 */
export type CoreGroupGetActivityGroupmodeWSResponse = {
    groupmode: number; // Group mode:
                                                 // 0 for no groups, 1 for separate groups, 2 for visible groups.

    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_group_get_course_groupings WS.
 */
export type CoreGroupGetCourseGroupingsWSParams = {
    courseid: number; // Id of course.
};

/**
 * Data returned by core_group_get_course_groupings WS.
 */
export type CoreGroupGetCourseGroupingsWSResponse = {
    id: number; // Grouping record id.
    courseid: number; // Id of course.
    name: string; // Multilang compatible name, course unique.
    description: string; // Grouping description text.
    descriptionformat: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    idnumber: string; // Id number.
}[];

/**
 * Params of core_group_get_course_groups WS.
 */
export type CoreGroupGetCourseGroupsWSParams = {
    courseid: number; // Id of course.
};

/**
 * Data returned by core_group_get_course_groups WS.
 */
export type CoreGroupGetCourseGroupsWSResponse = {
    id: number; // Group record id.
    courseid: number; // Id of course.
    name: string; // Multilang compatible name, course unique.
    description: string; // Group description text.
    descriptionformat: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    enrolmentkey: string; // Group enrol secret phrase.
    idnumber: string; // Id number.
}[];

/**
 * Params of core_group_get_course_user_groups WS.
 */
export type CoreGroupGetCourseUserGroupsWSParams = {
    courseid?: number; // Id of course (empty or 0 for all the courses where the user is enrolled).
    userid?: number; // Id of user (empty or 0 for current user).
    groupingid?: number; // Returns only groups in the specified grouping.
};

/**
 * Data returned by core_group_get_course_user_groups WS.
 */
export type CoreGroupGetCourseUserGroupsWSResponse = {
    groups: {
        id: number; // Group record id.
        name: string; // Multilang compatible name, course unique.
        description: string; // Group description text.
        descriptionformat: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        idnumber: string; // Id number.
        courseid?: number; // Course id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_h5p_get_trusted_h5p_file WS.
 */
export type CoreH5pGetTrustedH5pFileWSParams = {
    url: string; // H5P file url.
    frame?: number; // The frame allow to show the bar options below the content.
    export?: number; // The export allow to download the package.
    embed?: number; // The embed allow to copy the code to your site.
    copyright?: number; // The copyright option.
};

/**
 * Data returned by core_h5p_get_trusted_h5p_file WS.
 */
export type CoreH5pGetTrustedH5pFileWSResponse = {
    files: CoreWSExternalFile[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_message_block_user WS.
 */
export type CoreMessageBlockUserWSParams = {
    userid: number; // The id of the user who is blocking.
    blockeduserid: number; // The id of the user being blocked.
};

/**
 * Data returned by core_message_block_user WS.
 */
export type CoreMessageBlockUserWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_message_confirm_contact_request WS.
 */
export type CoreMessageConfirmContactRequestWSParams = {
    userid: number; // The id of the user making the request.
    requesteduserid: number; // The id of the user being requested.
};

/**
 * Data returned by core_message_confirm_contact_request WS.
 */
export type CoreMessageConfirmContactRequestWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_message_create_contact_request WS.
 */
export type CoreMessageCreateContactRequestWSParams = {
    userid: number; // The id of the user making the request.
    requesteduserid: number; // The id of the user being requested.
};

/**
 * Data returned by core_message_create_contact_request WS.
 */
export type CoreMessageCreateContactRequestWSResponse = {
    request?: {
        id: number; // Message id.
        userid: number; // User from id.
        requesteduserid: number; // User to id.
        timecreated: number; // Time created.
    }; // Request record.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_message_data_for_messagearea_search_messages WS.
 */
export type CoreMessageDataForMessageareaSearchMessagesWSParams = {
    userid: number; // The id of the user who is performing the search.
    search: string; // The string being searched.
    limitfrom?: number; // Limit from.
    limitnum?: number; // Limit number.
};

/**
 * Data returned by core_message_data_for_messagearea_search_messages WS.
 */
export type CoreMessageDataForMessageareaSearchMessagesWSResponse = {
    contacts: {
        userid: number; // The user's id.
        fullname: string; // The user's name.
        profileimageurl: string; // User picture URL.
        profileimageurlsmall: string; // Small user picture URL.
        ismessaging: boolean; // If we are messaging the user.
        sentfromcurrentuser: boolean; // Was the last message sent from the current user?.
        lastmessage: string; // The user's last message.
        lastmessagedate?: number; // Timestamp for last message.
        messageid?: number; // The unique search message id.
        showonlinestatus: boolean; // Show the user's online status?.
        isonline: boolean; // The user's online status.
        isread: boolean; // If the user has read the message.
        isblocked: boolean; // If the user has been blocked.
        unreadcount?: number; // The number of unread messages in this conversation.
        conversationid?: number; // The id of the conversation.
    }[];
};

/**
 * Params of core_message_decline_contact_request WS.
 */
export type CoreMessageDeclineContactRequestWSParams = {
    userid: number; // The id of the user making the request.
    requesteduserid: number; // The id of the user being requested.
};

/**
 * Data returned by core_message_decline_contact_request WS.
 */
export type CoreMessageDeclineContactRequestWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_message_delete_contacts WS.
 */
export type CoreMessageDeleteContactsWSParams = {
    userids: number[]; // List of user IDs.
    userid?: number; // The id of the user we are deleting the contacts for, 0 for the
                 // current user.

};

/**
 * Data returned by core_message_delete_contacts WS.
 */
export type CoreMessageDeleteContactsWSResponse = {}; // WARNING: Null structure found;

/**
 * Params of core_message_delete_conversations_by_id WS.
 */
export type CoreMessageDeleteConversationsByIdWSParams = {
    userid: number; // The user id of who we want to delete the conversation for.
    conversationids: number[]; // List of conversation IDs.
};

/**
 * Data returned by core_message_delete_conversations_by_id WS.
 */
export type CoreMessageDeleteConversationsByIdWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_message_delete_message WS.
 */
export type CoreMessageDeleteMessageWSParams = {
    messageid: number; // The message id.
    userid: number; // The user id of who we want to delete the message for.
    read?: boolean; // If is a message read.
};

/**
 * Data returned by core_message_delete_message WS.
 */
export type CoreMessageDeleteMessageWSResponse = {
    status: boolean; // True if the message was deleted, false otherwise.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_message_delete_message_for_all_users WS.
 */
export type CoreMessageDeleteMessageForAllUsersWSParams = {
    messageid: number; // The message id.
    userid: number; // The user id of who we want to delete the message for all users.
};

/**
 * Data returned by core_message_delete_message_for_all_users WS.
 */
export type CoreMessageDeleteMessageForAllUsersWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_message_get_blocked_users WS.
 */
export type CoreMessageGetBlockedUsersWSParams = {
    userid: number; // The user whose blocked users we want to retrieve.
};

/**
 * Data returned by core_message_get_blocked_users WS.
 */
export type CoreMessageGetBlockedUsersWSResponse = {
    users: { // List of blocked users.
        id: number; // User ID.
        fullname: string; // User full name.
        profileimageurl?: string; // User picture URL.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_message_get_contact_requests WS.
 */
export type CoreMessageGetContactRequestsWSParams = {
    userid: number; // The id of the user we want the requests for.
    limitfrom?: number; // Limit from.
    limitnum?: number; // Limit number.
};

/**
 * Data returned by core_message_get_contact_requests WS.
 */
export type CoreMessageGetContactRequestsWSResponse = {
    id: number; // The user id.
    fullname: string; // The user's name.
    profileurl: string; // The link to the user's profile page.
    profileimageurl: string; // User picture URL.
    profileimageurlsmall: string; // Small user picture URL.
    isonline: boolean; // The user's online status.
    showonlinestatus: boolean; // Show the user's online status?.
    isblocked: boolean; // If the user has been blocked.
    iscontact: boolean; // Is the user a contact?.
    isdeleted: boolean; // Is the user deleted?.
    canmessageevenifblocked: boolean; // If the user can still message even if they get blocked.
    canmessage: boolean; // If the user can be messaged.
    requirescontact: boolean; // If the user requires to be contacts.
    contactrequests?: { // The contact requests.
        id: number; // The id of the contact request.
        userid: number; // The id of the user who created the contact request.
        requesteduserid: number; // The id of the user confirming the request.
        timecreated: number; // The timecreated timestamp for the contact request.
    }[];
    conversations?: { // Conversations between users.
        id: number; // Conversations id.
        type: number; // Conversation type: private or public.
        name: string; // Multilang compatible conversation name2.
        timecreated: number; // The timecreated timestamp for the conversation.
    }[];
}[];

/**
 * Params of core_message_get_conversation WS.
 */
export type CoreMessageGetConversationWSParams = {
    userid: number; // The id of the user who we are viewing conversations for.
    conversationid: number; // The id of the conversation to fetch.
    includecontactrequests: boolean; // Include contact requests in the members.
    includeprivacyinfo: boolean; // Include privacy info in the members.
    memberlimit?: number; // Limit for number of members.
    memberoffset?: number; // Offset for member list.
    messagelimit?: number; // Limit for number of messages.
    messageoffset?: number; // Offset for messages list.
    newestmessagesfirst?: boolean; // Order messages by newest first.
};

/**
 * Data returned by core_message_get_conversation WS.
 */
export type CoreMessageGetConversationWSResponse = {
    id: number; // The conversation id.
    name?: string; // The conversation name, if set.
    subname?: string; // A subtitle for the conversation name, if set.
    imageurl?: string; // A link to the conversation picture, if set.
    type: number; // The type of the conversation (1=individual,2=group,3=self).
    membercount: number; // Total number of conversation members.
    ismuted: boolean; // If the user muted this conversation.
    isfavourite: boolean; // If the user marked this conversation as a favourite.
    isread: boolean; // If the user has read all messages in the conversation.
    unreadcount?: number; // The number of unread messages in this conversation.
    members: {
        id: number; // The user id.
        fullname: string; // The user's name.
        profileurl: string; // The link to the user's profile page.
        profileimageurl: string; // User picture URL.
        profileimageurlsmall: string; // Small user picture URL.
        isonline: boolean; // The user's online status.
        showonlinestatus: boolean; // Show the user's online status?.
        isblocked: boolean; // If the user has been blocked.
        iscontact: boolean; // Is the user a contact?.
        isdeleted: boolean; // Is the user deleted?.
        canmessageevenifblocked: boolean; // If the user can still message even if they get blocked.
        canmessage: boolean; // If the user can be messaged.
        requirescontact: boolean; // If the user requires to be contacts.
        contactrequests?: { // The contact requests.
            id: number; // The id of the contact request.
            userid: number; // The id of the user who created the contact request.
            requesteduserid: number; // The id of the user confirming the request.
            timecreated: number; // The timecreated timestamp for the contact request.
        }[];
        conversations?: { // Conversations between users.
            id: number; // Conversations id.
            type: number; // Conversation type: private or public.
            name: string; // Multilang compatible conversation name2.
            timecreated: number; // The timecreated timestamp for the conversation.
        }[];
    }[];
    messages: {
        id: number; // The id of the message.
        useridfrom: number; // The id of the user who sent the message.
        text: string; // The text of the message.
        timecreated: number; // The timecreated timestamp for the message.
    }[];
    candeletemessagesforallusers?: boolean; // If the user can delete messages in the conversation for all users.
};

/**
 * Params of core_message_get_conversation_between_users WS.
 */
export type CoreMessageGetConversationBetweenUsersWSParams = {
    userid: number; // The id of the user who we are viewing conversations for.
    otheruserid: number; // The other user id.
    includecontactrequests: boolean; // Include contact requests in the members.
    includeprivacyinfo: boolean; // Include privacy info in the members.
    memberlimit?: number; // Limit for number of members.
    memberoffset?: number; // Offset for member list.
    messagelimit?: number; // Limit for number of messages.
    messageoffset?: number; // Offset for messages list.
    newestmessagesfirst?: boolean; // Order messages by newest first.
};

/**
 * Data returned by core_message_get_conversation_between_users WS.
 */
export type CoreMessageGetConversationBetweenUsersWSResponse = {
    id: number; // The conversation id.
    name?: string; // The conversation name, if set.
    subname?: string; // A subtitle for the conversation name, if set.
    imageurl?: string; // A link to the conversation picture, if set.
    type: number; // The type of the conversation (1=individual,2=group,3=self).
    membercount: number; // Total number of conversation members.
    ismuted: boolean; // If the user muted this conversation.
    isfavourite: boolean; // If the user marked this conversation as a favourite.
    isread: boolean; // If the user has read all messages in the conversation.
    unreadcount?: number; // The number of unread messages in this conversation.
    members: {
        id: number; // The user id.
        fullname: string; // The user's name.
        profileurl: string; // The link to the user's profile page.
        profileimageurl: string; // User picture URL.
        profileimageurlsmall: string; // Small user picture URL.
        isonline: boolean; // The user's online status.
        showonlinestatus: boolean; // Show the user's online status?.
        isblocked: boolean; // If the user has been blocked.
        iscontact: boolean; // Is the user a contact?.
        isdeleted: boolean; // Is the user deleted?.
        canmessageevenifblocked: boolean; // If the user can still message even if they get blocked.
        canmessage: boolean; // If the user can be messaged.
        requirescontact: boolean; // If the user requires to be contacts.
        contactrequests?: { // The contact requests.
            id: number; // The id of the contact request.
            userid: number; // The id of the user who created the contact request.
            requesteduserid: number; // The id of the user confirming the request.
            timecreated: number; // The timecreated timestamp for the contact request.
        }[];
        conversations?: { // Conversations between users.
            id: number; // Conversations id.
            type: number; // Conversation type: private or public.
            name: string; // Multilang compatible conversation name2.
            timecreated: number; // The timecreated timestamp for the conversation.
        }[];
    }[];
    messages: {
        id: number; // The id of the message.
        useridfrom: number; // The id of the user who sent the message.
        text: string; // The text of the message.
        timecreated: number; // The timecreated timestamp for the message.
    }[];
    candeletemessagesforallusers?: boolean; // If the user can delete messages in the conversation for all users.
};

/**
 * Params of core_message_get_conversation_counts WS.
 */
export type CoreMessageGetConversationCountsWSParams = {
    userid?: number; // Id of the user, 0 for current user.
};

/**
 * Data returned by core_message_get_conversation_counts WS.
 */
export type CoreMessageGetConversationCountsWSResponse = {
    favourites: number; // Total number of favourite conversations.
    types: {
        1: number; // Total number of individual conversations.
        2: number; // Total number of group conversations.
        3: number; // Total number of self conversations.
    };
};

/**
 * Params of core_message_get_conversation_members WS.
 */
export type CoreMessageGetConversationMembersWSParams = {
    userid: number; // The id of the user we are performing this action on behalf of.
    conversationid: number; // The id of the conversation.
    includecontactrequests?: boolean; // Do we want to include contact requests?.
    includeprivacyinfo?: boolean; // Do we want to include privacy info?.
    limitfrom?: number; // Limit from.
    limitnum?: number; // Limit number.
};

/**
 * Data returned by core_message_get_conversation_members WS.
 */
export type CoreMessageGetConversationMembersWSResponse = {
    id: number; // The user id.
    fullname: string; // The user's name.
    profileurl: string; // The link to the user's profile page.
    profileimageurl: string; // User picture URL.
    profileimageurlsmall: string; // Small user picture URL.
    isonline: boolean; // The user's online status.
    showonlinestatus: boolean; // Show the user's online status?.
    isblocked: boolean; // If the user has been blocked.
    iscontact: boolean; // Is the user a contact?.
    isdeleted: boolean; // Is the user deleted?.
    canmessageevenifblocked: boolean; // If the user can still message even if they get blocked.
    canmessage: boolean; // If the user can be messaged.
    requirescontact: boolean; // If the user requires to be contacts.
    contactrequests?: { // The contact requests.
        id: number; // The id of the contact request.
        userid: number; // The id of the user who created the contact request.
        requesteduserid: number; // The id of the user confirming the request.
        timecreated: number; // The timecreated timestamp for the contact request.
    }[];
    conversations?: { // Conversations between users.
        id: number; // Conversations id.
        type: number; // Conversation type: private or public.
        name: string; // Multilang compatible conversation name2.
        timecreated: number; // The timecreated timestamp for the conversation.
    }[];
}[];

/**
 * Params of core_message_get_conversation_messages WS.
 */
export type CoreMessageGetConversationMessagesWSParams = {
    currentuserid: number; // The current user's id.
    convid: number; // The conversation id.
    limitfrom?: number; // Limit from.
    limitnum?: number; // Limit number.
    newest?: boolean; // Newest first?.
    timefrom?: number; // The timestamp from which the messages were created.
};

/**
 * Data returned by core_message_get_conversation_messages WS.
 */
export type CoreMessageGetConversationMessagesWSResponse = {
    id: number; // The conversation id.
    members: {
        id: number; // The user id.
        fullname: string; // The user's name.
        profileurl: string; // The link to the user's profile page.
        profileimageurl: string; // User picture URL.
        profileimageurlsmall: string; // Small user picture URL.
        isonline: boolean; // The user's online status.
        showonlinestatus: boolean; // Show the user's online status?.
        isblocked: boolean; // If the user has been blocked.
        iscontact: boolean; // Is the user a contact?.
        isdeleted: boolean; // Is the user deleted?.
        canmessageevenifblocked: boolean; // If the user can still message even if they get blocked.
        canmessage: boolean; // If the user can be messaged.
        requirescontact: boolean; // If the user requires to be contacts.
        contactrequests?: { // The contact requests.
            id: number; // The id of the contact request.
            userid: number; // The id of the user who created the contact request.
            requesteduserid: number; // The id of the user confirming the request.
            timecreated: number; // The timecreated timestamp for the contact request.
        }[];
        conversations?: { // Conversations between users.
            id: number; // Conversations id.
            type: number; // Conversation type: private or public.
            name: string; // Multilang compatible conversation name2.
            timecreated: number; // The timecreated timestamp for the conversation.
        }[];
    }[];
    messages: {
        id: number; // The id of the message.
        useridfrom: number; // The id of the user who sent the message.
        text: string; // The text of the message.
        timecreated: number; // The timecreated timestamp for the message.
    }[];
};

/**
 * Params of core_message_get_conversations WS.
 */
export type CoreMessageGetConversationsWSParams = {
    userid: number; // The id of the user who we are viewing conversations for.
    limitfrom?: number; // The offset to start at.
    limitnum?: number; // Limit number of conversations to this.
    type?: number; // Filter by type.
    favourites?: boolean; // Whether to restrict the results to contain NO favourite
             // conversations (false), ONLY favourite conversation (true), or ignore any restriction altogether (null).

    mergeself?: boolean; // Whether to include self-conversations (true) or ONLY private
                 // conversations (false) when private conversations are requested.

};

/**
 * Data returned by core_message_get_conversations WS.
 */
export type CoreMessageGetConversationsWSResponse = {
    conversations: {
        id: number; // The conversation id.
        name?: string; // The conversation name, if set.
        subname?: string; // A subtitle for the conversation name, if set.
        imageurl?: string; // A link to the conversation picture, if set.
        type: number; // The type of the conversation (1=individual,2=group,3=self).
        membercount: number; // Total number of conversation members.
        ismuted: boolean; // If the user muted this conversation.
        isfavourite: boolean; // If the user marked this conversation as a favourite.
        isread: boolean; // If the user has read all messages in the conversation.
        unreadcount?: number; // The number of unread messages in this conversation.
        members: {
            id: number; // The user id.
            fullname: string; // The user's name.
            profileurl: string; // The link to the user's profile page.
            profileimageurl: string; // User picture URL.
            profileimageurlsmall: string; // Small user picture URL.
            isonline: boolean; // The user's online status.
            showonlinestatus: boolean; // Show the user's online status?.
            isblocked: boolean; // If the user has been blocked.
            iscontact: boolean; // Is the user a contact?.
            isdeleted: boolean; // Is the user deleted?.
            canmessageevenifblocked: boolean; // If the user can still message even if they get blocked.
            canmessage: boolean; // If the user can be messaged.
            requirescontact: boolean; // If the user requires to be contacts.
            contactrequests?: { // The contact requests.
                id: number; // The id of the contact request.
                userid: number; // The id of the user who created the contact request.
                requesteduserid: number; // The id of the user confirming the request.
                timecreated: number; // The timecreated timestamp for the contact request.
            }[];
            conversations?: { // Conversations between users.
                id: number; // Conversations id.
                type: number; // Conversation type: private or public.
                name: string; // Multilang compatible conversation name2.
                timecreated: number; // The timecreated timestamp for the conversation.
            }[];
        }[];
        messages: {
            id: number; // The id of the message.
            useridfrom: number; // The id of the user who sent the message.
            text: string; // The text of the message.
            timecreated: number; // The timecreated timestamp for the message.
        }[];
        candeletemessagesforallusers?: boolean; // If the user can delete messages in the conversation for all users.
    }[];
};

/**
 * Params of core_message_get_member_info WS.
 */
export type CoreMessageGetMemberInfoWSParams = {
    referenceuserid: number; // Id of the user.
    userids: number[];
    includecontactrequests?: boolean; // Include contact requests in response.
    includeprivacyinfo?: boolean; // Include privacy info in response.
};

/**
 * Data returned by core_message_get_member_info WS.
 */
export type CoreMessageGetMemberInfoWSResponse = {
    id: number; // The user id.
    fullname: string; // The user's name.
    profileurl: string; // The link to the user's profile page.
    profileimageurl: string; // User picture URL.
    profileimageurlsmall: string; // Small user picture URL.
    isonline: boolean; // The user's online status.
    showonlinestatus: boolean; // Show the user's online status?.
    isblocked: boolean; // If the user has been blocked.
    iscontact: boolean; // Is the user a contact?.
    isdeleted: boolean; // Is the user deleted?.
    canmessageevenifblocked: boolean; // If the user can still message even if they get blocked.
    canmessage: boolean; // If the user can be messaged.
    requirescontact: boolean; // If the user requires to be contacts.
    contactrequests?: { // The contact requests.
        id: number; // The id of the contact request.
        userid: number; // The id of the user who created the contact request.
        requesteduserid: number; // The id of the user confirming the request.
        timecreated: number; // The timecreated timestamp for the contact request.
    }[];
    conversations?: { // Conversations between users.
        id: number; // Conversations id.
        type: number; // Conversation type: private or public.
        name: string; // Multilang compatible conversation name2.
        timecreated: number; // The timecreated timestamp for the conversation.
    }[];
}[];

/**
 * Params of core_message_get_messages WS.
 */
export type CoreMessageGetMessagesWSParams = {
    useridto: number; // The user id who received the message, 0 for any user.
    useridfrom?: number; // The user id who send the message, 0 for any user. -10 or -20 for no-reply or support user.
    type?: string; // Type of message to return, expected values are: notifications, conversations and both.
    read?: boolean; // True for getting read messages, false for unread.
    newestfirst?: boolean; // True for ordering by newest first, false for oldest first.
    limitfrom?: number; // Limit from.
    limitnum?: number; // Limit number.
};

/**
 * Data returned by core_message_get_messages WS.
 */
export type CoreMessageGetMessagesWSResponse = {
    messages: {
        id: number; // Message id.
        useridfrom: number; // User from id.
        useridto: number; // User to id.
        subject: string; // The message subject.
        text: string; // The message text formated.
        fullmessage: string; // The message.
        fullmessageformat: number; // Fullmessage format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        fullmessagehtml: string; // The message in html.
        smallmessage: string; // The shorten message.
        notification: number; // Is a notification?.
        contexturl: string; // Context URL.
        contexturlname: string; // Context URL link name.
        timecreated: number; // Time created.
        timeread: number; // Time read.
        usertofullname: string; // User to full name.
        userfromfullname: string; // User from full name.
        component?: string; // The component that generated the notification.
        eventtype?: string; // The type of notification.
        customdata?: string; // Custom data to be passed to the message processor.
                             // The data here is serialised using json_encode().

    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_message_get_received_contact_requests_count WS.
 */
export type CoreMessageGetReceivedContactRequestsCountWSParams = {
    userid: number; // The id of the user we want to return the number of received contact requests for.
};

/**
 * Data returned by core_message_get_received_contact_requests_count WS.
 */
export type CoreMessageGetReceivedContactRequestsCountWSResponse = number;

/**
 * Params of core_message_get_self_conversation WS.
 */
export type CoreMessageGetSelfConversationWSParams = {
    userid: number; // The id of the user who we are viewing self-conversations for.
    messagelimit?: number; // Limit for number of messages.
    messageoffset?: number; // Offset for messages list.
    newestmessagesfirst?: boolean; // Order messages by newest first.
};

/**
 * Data returned by core_message_get_self_conversation WS.
 */
export type CoreMessageGetSelfConversationWSResponse = {
    id: number; // The conversation id.
    name?: string; // The conversation name, if set.
    subname?: string; // A subtitle for the conversation name, if set.
    imageurl?: string; // A link to the conversation picture, if set.
    type: number; // The type of the conversation (1=individual,2=group,3=self).
    membercount: number; // Total number of conversation members.
    ismuted: boolean; // If the user muted this conversation.
    isfavourite: boolean; // If the user marked this conversation as a favourite.
    isread: boolean; // If the user has read all messages in the conversation.
    unreadcount?: number; // The number of unread messages in this conversation.
    members: {
        id: number; // The user id.
        fullname: string; // The user's name.
        profileurl: string; // The link to the user's profile page.
        profileimageurl: string; // User picture URL.
        profileimageurlsmall: string; // Small user picture URL.
        isonline: boolean; // The user's online status.
        showonlinestatus: boolean; // Show the user's online status?.
        isblocked: boolean; // If the user has been blocked.
        iscontact: boolean; // Is the user a contact?.
        isdeleted: boolean; // Is the user deleted?.
        canmessageevenifblocked: boolean; // If the user can still message even if they get blocked.
        canmessage: boolean; // If the user can be messaged.
        requirescontact: boolean; // If the user requires to be contacts.
        contactrequests?: { // The contact requests.
            id: number; // The id of the contact request.
            userid: number; // The id of the user who created the contact request.
            requesteduserid: number; // The id of the user confirming the request.
            timecreated: number; // The timecreated timestamp for the contact request.
        }[];
        conversations?: { // Conversations between users.
            id: number; // Conversations id.
            type: number; // Conversation type: private or public.
            name: string; // Multilang compatible conversation name2.
            timecreated: number; // The timecreated timestamp for the conversation.
        }[];
    }[];
    messages: {
        id: number; // The id of the message.
        useridfrom: number; // The id of the user who sent the message.
        text: string; // The text of the message.
        timecreated: number; // The timecreated timestamp for the message.
    }[];
    candeletemessagesforallusers?: boolean; // If the user can delete messages in the conversation for all users.
};

/**
 * Params of core_message_get_unread_conversation_counts WS.
 */
export type CoreMessageGetUnreadConversationCountsWSParams = {
    userid?: number; // Id of the user, 0 for current user.
};

/**
 * Data returned by core_message_get_unread_conversation_counts WS.
 */
export type CoreMessageGetUnreadConversationCountsWSResponse = {
    favourites: number; // Total number of unread favourite conversations.
    types: {
        1: number; // Total number of unread individual conversations.
        2: number; // Total number of unread group conversations.
        3: number; // Total number of unread self conversations.
    };
};

/**
 * Params of core_message_get_unread_conversations_count WS.
 */
export type CoreMessageGetUnreadConversationsCountWSParams = {
    useridto: number; // The user id who received the message, 0 for any user.
};

/**
 * Data returned by core_message_get_unread_conversations_count WS.
 */
export type CoreMessageGetUnreadConversationsCountWSResponse = number;

/**
 * Params of core_message_get_user_contacts WS.
 */
export type CoreMessageGetUserContactsWSParams = {
    userid: number; // The id of the user who we retrieving the contacts for.
    limitfrom?: number; // Limit from.
    limitnum?: number; // Limit number.
};

/**
 * Data returned by core_message_get_user_contacts WS.
 */
export type CoreMessageGetUserContactsWSResponse = {
    id: number; // The user id.
    fullname: string; // The user's name.
    profileurl: string; // The link to the user's profile page.
    profileimageurl: string; // User picture URL.
    profileimageurlsmall: string; // Small user picture URL.
    isonline: boolean; // The user's online status.
    showonlinestatus: boolean; // Show the user's online status?.
    isblocked: boolean; // If the user has been blocked.
    iscontact: boolean; // Is the user a contact?.
    isdeleted: boolean; // Is the user deleted?.
    canmessageevenifblocked: boolean; // If the user can still message even if they get blocked.
    canmessage: boolean; // If the user can be messaged.
    requirescontact: boolean; // If the user requires to be contacts.
    contactrequests?: { // The contact requests.
        id: number; // The id of the contact request.
        userid: number; // The id of the user who created the contact request.
        requesteduserid: number; // The id of the user confirming the request.
        timecreated: number; // The timecreated timestamp for the contact request.
    }[];
    conversations?: { // Conversations between users.
        id: number; // Conversations id.
        type: number; // Conversation type: private or public.
        name: string; // Multilang compatible conversation name2.
        timecreated: number; // The timecreated timestamp for the conversation.
    }[];
}[];

/**
 * Params of core_message_get_user_message_preferences WS.
 */
export type CoreMessageGetUserMessagePreferencesWSParams = {
    userid?: number; // Id of the user, 0 for current user.
};

/**
 * Data returned by core_message_get_user_message_preferences WS.
 */
export type CoreMessageGetUserMessagePreferencesWSResponse = {
    preferences: {
        userid: number; // User id.
        disableall: number; // Whether all the preferences are disabled.
        processors: { // Config form values.
            displayname: string; // Display name.
            name: string; // Processor name.
            hassettings: boolean; // Whether has settings.
            contextid: number; // Context id.
            userconfigured: number; // Whether is configured by the user.
        }[];
        components: { // Available components.
            displayname: string; // Display name.
            notifications: { // List of notificaitons for the component.
                displayname: string; // Display name.
                preferencekey: string; // Preference key.
                processors: { // Processors values for this notification.
                    displayname: string; // Display name.
                    name: string; // Processor name.
                    locked: boolean; // Is locked by admin?.
                    lockedmessage?: string; // Text to display if locked.
                    userconfigured: number; // Is configured?.
                    loggedin: {
                        name: string; // Name.
                        displayname: string; // Display name.
                        checked: boolean; // Is checked?.
                    };
                    loggedoff: {
                        name: string; // Name.
                        displayname: string; // Display name.
                        checked: boolean; // Is checked?.
                    };
                }[];
            }[];
        }[];
    };
    blocknoncontacts: number; // Privacy messaging setting to define who can message you.
    entertosend: boolean; // User preference for using enter to send messages.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_message_get_user_notification_preferences WS.
 */
export type CoreMessageGetUserNotificationPreferencesWSParams = {
    userid?: number; // Id of the user, 0 for current user.
};

/**
 * Data returned by core_message_get_user_notification_preferences WS.
 */
export type CoreMessageGetUserNotificationPreferencesWSResponse = {
    preferences: {
        userid: number; // User id.
        disableall: number; // Whether all the preferences are disabled.
        processors: { // Config form values.
            displayname: string; // Display name.
            name: string; // Processor name.
            hassettings: boolean; // Whether has settings.
            contextid: number; // Context id.
            userconfigured: number; // Whether is configured by the user.
        }[];
        components: { // Available components.
            displayname: string; // Display name.
            notifications: { // List of notificaitons for the component.
                displayname: string; // Display name.
                preferencekey: string; // Preference key.
                processors: { // Processors values for this notification.
                    displayname: string; // Display name.
                    name: string; // Processor name.
                    locked: boolean; // Is locked by admin?.
                    lockedmessage?: string; // Text to display if locked.
                    userconfigured: number; // Is configured?.
                    loggedin: {
                        name: string; // Name.
                        displayname: string; // Display name.
                        checked: boolean; // Is checked?.
                    };
                    loggedoff: {
                        name: string; // Name.
                        displayname: string; // Display name.
                        checked: boolean; // Is checked?.
                    };
                }[];
            }[];
        }[];
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_message_mark_all_conversation_messages_as_read WS.
 */
export type CoreMessageMarkAllConversationMessagesAsReadWSParams = {
    userid: number; // The user id who who we are marking the messages as read for.
    conversationid: number; // The conversation id who who we are marking the messages as read for.
};

/**
 * Data returned by core_message_mark_all_conversation_messages_as_read WS.
 */
export type CoreMessageMarkAllConversationMessagesAsReadWSResponse = {}; // WARNING: Null structure found;

/**
 * Params of core_message_mark_all_notifications_as_read WS.
 */
export type CoreMessageMarkAllNotificationsAsReadWSParams = {
    useridto: number; // The user id who received the message, 0 for any user.
    useridfrom?: number; // The user id who send the message, 0 for any user. -10 or -20 for no-reply or support user.
    timecreatedto?: number; // Mark messages created before this time as read, 0 for all messages.
};

/**
 * Data returned by core_message_mark_all_notifications_as_read WS.
 */
export type CoreMessageMarkAllNotificationsAsReadWSResponse = boolean;

/**
 * Params of core_message_mark_message_read WS.
 */
export type CoreMessageMarkMessageReadWSParams = {
    messageid: number; // Id of the message in the messages table.
    timeread?: number; // Timestamp for when the message should be marked read.
};

/**
 * Data returned by core_message_mark_message_read WS.
 */
export type CoreMessageMarkMessageReadWSResponse = {
    messageid: number; // The id of the message in the messages table.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_message_mark_notification_read WS.
 */
export type CoreMessageMarkNotificationReadWSParams = {
    notificationid: number; // Id of the notification.
    timeread?: number; // Timestamp for when the notification should be marked read.
};

/**
 * Data returned by core_message_mark_notification_read WS.
 */
export type CoreMessageMarkNotificationReadWSResponse = {
    notificationid: number; // Id of the notification.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_message_message_processor_config_form WS.
 */
export type CoreMessageMessageProcessorConfigFormWSParams = {
    userid: number; // Id of the user, 0 for current user.
    name: string; // The name of the message processor.
    formvalues: { // Config form values.
        name: string; // Name of the form element.
        value: string; // Value of the form element.
    }[];
};

/**
 * Data returned by core_message_message_processor_config_form WS.
 */
export type CoreMessageMessageProcessorConfigFormWSResponse = {}; // WARNING: Null structure found;

/**
 * Params of core_message_message_search_users WS.
 */
export type CoreMessageMessageSearchUsersWSParams = {
    userid: number; // The id of the user who is performing the search.
    search: string; // The string being searched.
    limitfrom?: number; // Limit from.
    limitnum?: number; // Limit number.
};

/**
 * Data returned by core_message_message_search_users WS.
 */
export type CoreMessageMessageSearchUsersWSResponse = {
    contacts: {
        id: number; // The user id.
        fullname: string; // The user's name.
        profileurl: string; // The link to the user's profile page.
        profileimageurl: string; // User picture URL.
        profileimageurlsmall: string; // Small user picture URL.
        isonline: boolean; // The user's online status.
        showonlinestatus: boolean; // Show the user's online status?.
        isblocked: boolean; // If the user has been blocked.
        iscontact: boolean; // Is the user a contact?.
        isdeleted: boolean; // Is the user deleted?.
        canmessageevenifblocked: boolean; // If the user can still message even if they get blocked.
        canmessage: boolean; // If the user can be messaged.
        requirescontact: boolean; // If the user requires to be contacts.
        contactrequests?: { // The contact requests.
            id: number; // The id of the contact request.
            userid: number; // The id of the user who created the contact request.
            requesteduserid: number; // The id of the user confirming the request.
            timecreated: number; // The timecreated timestamp for the contact request.
        }[];
        conversations?: { // Conversations between users.
            id: number; // Conversations id.
            type: number; // Conversation type: private or public.
            name: string; // Multilang compatible conversation name2.
            timecreated: number; // The timecreated timestamp for the conversation.
        }[];
    }[];
    noncontacts: {
        id: number; // The user id.
        fullname: string; // The user's name.
        profileurl: string; // The link to the user's profile page.
        profileimageurl: string; // User picture URL.
        profileimageurlsmall: string; // Small user picture URL.
        isonline: boolean; // The user's online status.
        showonlinestatus: boolean; // Show the user's online status?.
        isblocked: boolean; // If the user has been blocked.
        iscontact: boolean; // Is the user a contact?.
        isdeleted: boolean; // Is the user deleted?.
        canmessageevenifblocked: boolean; // If the user can still message even if they get blocked.
        canmessage: boolean; // If the user can be messaged.
        requirescontact: boolean; // If the user requires to be contacts.
        contactrequests?: { // The contact requests.
            id: number; // The id of the contact request.
            userid: number; // The id of the user who created the contact request.
            requesteduserid: number; // The id of the user confirming the request.
            timecreated: number; // The timecreated timestamp for the contact request.
        }[];
        conversations?: { // Conversations between users.
            id: number; // Conversations id.
            type: number; // Conversation type: private or public.
            name: string; // Multilang compatible conversation name2.
            timecreated: number; // The timecreated timestamp for the conversation.
        }[];
    }[];
};

/**
 * Params of core_message_mute_conversations WS.
 */
export type CoreMessageMuteConversationsWSParams = {
    userid: number; // The id of the user who is blocking.
    conversationids: number[];
};

/**
 * Data returned by core_message_mute_conversations WS.
 */
export type CoreMessageMuteConversationsWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_message_search_contacts WS.
 */
export type CoreMessageSearchContactsWSParams = {
    searchtext: string; // String the user's fullname has to match to be found.
    onlymycourses?: boolean; // Limit search to the user's courses.
};

/**
 * Data returned by core_message_search_contacts WS.
 */
export type CoreMessageSearchContactsWSResponse = { // List of contacts.
    id: number; // User ID.
    fullname: string; // User full name.
    profileimageurl?: string; // User picture URL.
    profileimageurlsmall?: string; // Small user picture URL.
}[];

/**
 * Params of core_message_send_instant_messages WS.
 */
export type CoreMessageSendInstantMessagesWSParams = {
    messages: {
        touserid: number; // Id of the user to send the private message.
        text: string; // The text of the message.
        textformat?: number; // Text format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        clientmsgid?: string; // Your own client id for the message. If this id is provided, the fail message id will be returned to you.
    }[];
};

/**
 * Data returned by core_message_send_instant_messages WS.
 */
export type CoreMessageSendInstantMessagesWSResponse = {
    msgid: number; // Test this to know if it succeeds:  id of the created message if it succeeded, -1 when failed.
    clientmsgid?: string; // Your own id for the message.
    errormessage?: string; // Error message - if it failed.
    text?: string; // The text of the message.
    timecreated?: number; // The timecreated timestamp for the message.
    conversationid?: number; // The conversation id for this message.
    useridfrom?: number; // The user id who sent the message.
    candeletemessagesforallusers?: boolean; // If the user can delete messages in the conversation for all users.
}[];

/**
 * Params of core_message_send_messages_to_conversation WS.
 */
export type CoreMessageSendMessagesToConversationWSParams = {
    conversationid: number; // Id of the conversation.
    messages: {
        text: string; // The text of the message.
        textformat?: number; // Text format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    }[];
};

/**
 * Data returned by core_message_send_messages_to_conversation WS.
 */
export type CoreMessageSendMessagesToConversationWSResponse = {
    id: number; // The id of the message.
    useridfrom: number; // The id of the user who sent the message.
    text: string; // The text of the message.
    timecreated: number; // The timecreated timestamp for the message.
}[];

/**
 * Params of core_message_set_favourite_conversations WS.
 */
export type CoreMessageSetFavouriteConversationsWSParams = {
    userid?: number; // Id of the user, 0 for current user.
    conversations: number[];
};

/**
 * Data returned by core_message_set_favourite_conversations WS.
 */
export type CoreMessageSetFavouriteConversationsWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_message_unblock_user WS.
 */
export type CoreMessageUnblockUserWSParams = {
    userid: number; // The id of the user who is unblocking.
    unblockeduserid: number; // The id of the user being unblocked.
};

/**
 * Data returned by core_message_unblock_user WS.
 */
export type CoreMessageUnblockUserWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_message_unmute_conversations WS.
 */
export type CoreMessageUnmuteConversationsWSParams = {
    userid: number; // The id of the user who is unblocking.
    conversationids: number[];
};

/**
 * Data returned by core_message_unmute_conversations WS.
 */
export type CoreMessageUnmuteConversationsWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_message_unset_favourite_conversations WS.
 */
export type CoreMessageUnsetFavouriteConversationsWSParams = {
    userid?: number; // Id of the user, 0 for current user.
    conversations: number[];
};

/**
 * Data returned by core_message_unset_favourite_conversations WS.
 */
export type CoreMessageUnsetFavouriteConversationsWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_notes_create_notes WS.
 */
export type CoreNotesCreateNotesWSParams = {
    notes: {
        userid: number; // Id of the user the note is about.
        publishstate: string; // 'personal', 'course' or 'site'.
        courseid: number; // Course id of the note (in Moodle a note can only be created into a course, even for site and personal notes).
        text: string; // The text of the message - text or HTML.
        format?: number; // Text format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        clientnoteid?: string; // Your own client id for the note. If this id is provided, the fail message id will be returned to you.
    }[];
};

/**
 * Data returned by core_notes_create_notes WS.
 */
export type CoreNotesCreateNotesWSResponse = {
    clientnoteid?: string; // Your own id for the note.
    noteid: number; // ID of the created note when successful, -1 when failed.
    errormessage?: string; // Error message - if failed.
}[];

/**
 * Params of core_notes_delete_notes WS.
 */
export type CoreNotesDeleteNotesWSParams = {
    notes: number[]; // Array of Note Ids to be deleted.
};

/**
 * Data returned by core_notes_delete_notes WS.
 */
export type CoreNotesDeleteNotesWSResponse = CoreWSExternalWarning[];

/**
 * Params of core_notes_get_course_notes WS.
 */
export type CoreNotesGetCourseNotesWSParams = {
    courseid: number; // Course id, 0 for SITE.
    userid?: number; // User id.
};

/**
 * Data returned by core_notes_get_course_notes WS.
 */
export type CoreNotesGetCourseNotesWSResponse = {
    sitenotes?: { // Site notes.
        id: number; // Id of this note.
        courseid: number; // Id of the course.
        userid: number; // User id.
        content: string; // The content text formated.
        format: number; // Content format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        created: number; // Time created (timestamp).
        lastmodified: number; // Time of last modification (timestamp).
        usermodified: number; // User id of the creator of this note.
        publishstate: string; // State of the note (i.e. draft, public, site).
    }[];
    coursenotes?: { // Couse notes.
        id: number; // Id of this note.
        courseid: number; // Id of the course.
        userid: number; // User id.
        content: string; // The content text formated.
        format: number; // Content format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        created: number; // Time created (timestamp).
        lastmodified: number; // Time of last modification (timestamp).
        usermodified: number; // User id of the creator of this note.
        publishstate: string; // State of the note (i.e. draft, public, site).
    }[];
    personalnotes?: { // Personal notes.
        id: number; // Id of this note.
        courseid: number; // Id of the course.
        userid: number; // User id.
        content: string; // The content text formated.
        format: number; // Content format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        created: number; // Time created (timestamp).
        lastmodified: number; // Time of last modification (timestamp).
        usermodified: number; // User id of the creator of this note.
        publishstate: string; // State of the note (i.e. draft, public, site).
    }[];
    canmanagesystemnotes?: boolean; // Whether the user can manage notes at system level.
    canmanagecoursenotes?: boolean; // Whether the user can manage notes at the given course.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_notes_view_notes WS.
 */
export type CoreNotesViewNotesWSParams = {
    courseid: number; // Course id, 0 for notes at system level.
    userid?: number; // User id, 0 means view all the user notes.
};

/**
 * Data returned by core_notes_view_notes WS.
 */
export type CoreNotesViewNotesWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_question_update_flag WS.
 */
export type CoreQuestionUpdateFlagWSParams = {
    qubaid: number; // The question usage id.
    questionid: number; // The question id.
    qaid: number; // The question_attempt id.
    slot: number; // The slot number within the usage.
    checksum: string; // Computed checksum with the last three arguments and
                          // the users username.

    newstate: boolean; // The new state of the flag. true = flagged.
};

/**
 * Data returned by core_question_update_flag WS.
 */
export type CoreQuestionUpdateFlagWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_rating_add_rating WS.
 */
export type CoreRatingAddRatingWSParams = {
    contextlevel: string; // Context level: course, module, user, etc...
    instanceid: number; // The instance id of item associated with the context level.
    component: string; // Component.
    ratingarea: string; // Rating area.
    itemid: number; // Associated id.
    scaleid: number; // Scale id.
    rating: number; // User rating.
    rateduserid: number; // Rated user id.
    aggregation?: number; // Agreggation method.
};

/**
 * Data returned by core_rating_add_rating WS.
 */
export type CoreRatingAddRatingWSResponse = {
    success: boolean; // Whether the rate was successfully created.
    aggregate?: string; // New aggregate.
    count?: number; // Ratings count.
    itemid?: number; // Rating item id.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_rating_get_item_ratings WS.
 */
export type CoreRatingGetItemRatingsWSParams = {
    contextlevel: string; // Context level: course, module, user, etc...
    instanceid: number; // The instance id of item associated with the context level.
    component: string; // Component.
    ratingarea: string; // Rating area.
    itemid: number; // Associated id.
    scaleid: number; // Scale id.
    sort: string; // Sort order (firstname, rating or timemodified).
};

/**
 * Data returned by core_rating_get_item_ratings WS.
 */
export type CoreRatingGetItemRatingsWSResponse = {
    ratings: { // List of ratings.
        id: number; // Rating id.
        userid: number; // User id.
        userpictureurl: string; // URL user picture.
        userfullname: string; // User fullname.
        rating: string; // Rating on scale.
        timemodified: number; // Time modified (timestamp).
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_table_get_dynamic_table_content WS.
 */
export type CoreTableGetDynamicTableContentWSParams = {
    component: string; // Component.
    handler: string; // Handler.
    uniqueid: string; // Unique ID for the container.
    sortdata?: { // The combined sort order of the table. Multiple fields can be specified.
        sortby: string; // The name of a sortable column.
        sortorder: string; // The direction that this column should be sorted by.
    }[];
    filters?: { // The filters that will be applied in the request.
        name: string; // Name of the filter.
        jointype: number; // Type of join for filter values.
        values: string[]; // The value to filter on.
    }[];
    jointype: number; // Type of join to join all filters together.
    firstinitial: string; // The first initial to sort filter on.
    lastinitial: string; // The last initial to sort filter on.
    pagenumber: number; // The page number.
    pagesize: number; // The number of records per page.
    hiddencolumns: string[];
    resetpreferences: boolean; // Whether the table preferences should be reset.
};

/**
 * Data returned by core_table_get_dynamic_table_content WS.
 */
export type CoreTableGetDynamicTableContentWSResponse = {
    html: string; // The raw html of the requested table.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_tag_get_tag_areas WS.
 */
export type CoreTagGetTagAreasWSParams = {
};

/**
 * Data returned by core_tag_get_tag_areas WS.
 */
export type CoreTagGetTagAreasWSResponse = {
    areas: {
        id: number; // Area id.
        component: string; // Component the area is related to.
        itemtype: string; // Type of item in the component.
        enabled: boolean; // Whether this area is enabled.
        tagcollid: number; // The tag collection this are belongs to.
        callback: string; // Component callback for processing tags.
        callbackfile: string; // Component callback file.
        showstandard: number; // Return whether to display only standard, only non-standard or both tags.
        multiplecontexts: boolean; // Whether the tag area allows tag instances to be created in multiple contexts.
        locked?: boolean; // Whether the area is locked.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_tag_get_tag_cloud WS.
 */
export type CoreTagGetTagCloudWSParams = {
    tagcollid?: number; // Tag collection id.
    isstandard?: boolean; // Whether to return only standard tags.
    limit?: number; // Maximum number of tags to retrieve.
    sort?: string; // Sort order for display
                 // (id, name, rawname, count, flag, isstandard, tagcollid).

    search?: string; // Search string.
    fromctx?: number; // Context id where this tag cloud is displayed.
    ctx?: number; // Only retrieve tag instances in this context.
    rec?: number; // Retrieve tag instances in the $ctx context and it's children.
};

/**
 * Data returned by core_tag_get_tag_cloud WS.
 */
export type CoreTagGetTagCloudWSResponse = {
    tags: {
        name: string; // Tag name.
        viewurl: string; // URL to view the tag index.
        flag?: boolean; // Whether the tag is flagged as inappropriate.
        isstandard?: boolean; // Whether is a standard tag or not.
        count?: number; // Number of tag instances.
        size?: number; // Proportional size to display the tag.
    }[];
    tagscount: number; // Number of tags returned.
    totalcount: number; // Total count of tags.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_tag_get_tag_collections WS.
 */
export type CoreTagGetTagCollectionsWSParams = {
};

/**
 * Data returned by core_tag_get_tag_collections WS.
 */
export type CoreTagGetTagCollectionsWSResponse = {
    collections: {
        id: number; // Collection id.
        name: string; // Collection name.
        isdefault: boolean; // Whether is the default collection.
        component: string; // Component the collection is related to.
        sortorder: number; // Collection ordering in the list.
        searchable: boolean; // Whether the tag collection is searchable.
        customurl: string; // Custom URL for the tag page instead of /tag/index.php.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_tag_get_tagindex WS.
 */
export type CoreTagGetTagindexWSParams = {
    tagindex: {
        tag: string; // Tag name.
        tc: number; // Tag collection id.
        ta: number; // Tag area id.
        excl?: boolean; // Exlusive mode for this tag area.
        from?: number; // Context id where the link was displayed.
        ctx?: number; // Context id where to search for items.
        rec?: number; // Search in the context recursive.
        page?: number; // Page number (0-based).
    }; // Parameters.
};

/**
 * Data returned by core_tag_get_tagindex WS.
 */
export type CoreTagGetTagindexWSResponse = {
    tagid: number; // Tag id.
    ta: number; // Tag area id.
    component: string; // Component.
    itemtype: string; // Itemtype.
    nextpageurl?: string; // URL for the next page.
    prevpageurl?: string; // URL for the next page.
    exclusiveurl?: string; // URL for exclusive link.
    exclusivetext?: string; // Text for exclusive link.
    title: string; // Title.
    content: string; // Title.
    hascontent: number; // Whether the content is present.
    anchor?: string; // Name of anchor.
};

/**
 * Params of core_tag_get_tagindex_per_area WS.
 */
export type CoreTagGetTagindexPerAreaWSParams = {
    tagindex: {
        id?: number; // Tag id.
        tag?: string; // Tag name.
        tc?: number; // Tag collection id.
        ta?: number; // Tag area id.
        excl?: boolean; // Exlusive mode for this tag area.
        from?: number; // Context id where the link was displayed.
        ctx?: number; // Context id where to search for items.
        rec?: number; // Search in the context recursive.
        page?: number; // Page number (0-based).
    }; // Parameters.
};

/**
 * Data returned by core_tag_get_tagindex_per_area WS.
 */
export type CoreTagGetTagindexPerAreaWSResponse = {
    tagid: number; // Tag id.
    ta: number; // Tag area id.
    component: string; // Component.
    itemtype: string; // Itemtype.
    nextpageurl?: string; // URL for the next page.
    prevpageurl?: string; // URL for the next page.
    exclusiveurl?: string; // URL for exclusive link.
    exclusivetext?: string; // Text for exclusive link.
    title: string; // Title.
    content: string; // Title.
    hascontent: number; // Whether the content is present.
    anchor?: string; // Name of anchor.
}[];

/**
 * Params of core_user_add_user_device WS.
 */
export type CoreUserAddUserDeviceWSParams = {
    appid: string; // The app id, usually something like com.moodle.moodlemobile.
    name: string; // The device name, 'occam' or 'iPhone' etc.
    model: string; // The device model 'Nexus4' or 'iPad1,1' etc.
    platform: string; // The device platform 'iOS' or 'Android' etc.
    version: string; // The device version '6.1.2' or '4.2.2' etc.
    pushid: string; // The device PUSH token/key/identifier/registration id.
    uuid: string; // The device UUID.
};

/**
 * Data returned by core_user_add_user_device WS.
 */
export type CoreUserAddUserDeviceWSResponse = CoreWSExternalWarning[][];

/**
 * Params of core_user_add_user_private_files WS.
 */
export type CoreUserAddUserPrivateFilesWSParams = {
    draftid: number; // Draft area id.
};

/**
 * Data returned by core_user_add_user_private_files WS.
 */
export type CoreUserAddUserPrivateFilesWSResponse = {}; // WARNING: Null structure found;

/**
 * Params of core_user_agree_site_policy WS.
 */
export type CoreUserAgreeSitePolicyWSParams = {
};

/**
 * Data returned by core_user_agree_site_policy WS.
 */
export type CoreUserAgreeSitePolicyWSResponse = {
    status: boolean; // Status: true only if we set the policyagreed to 1 for the user.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_user_get_course_user_profiles WS.
 */
export type CoreUserGetCourseUserProfilesWSParams = {
    userlist: {
        userid: number; // Userid.
        courseid: number; // Courseid.
    }[];
};

/**
 * Data returned by core_user_get_course_user_profiles WS.
 */
export type CoreUserGetCourseUserProfilesWSResponse = {
    id: number; // ID of the user.
    username?: string; // The username.
    firstname?: string; // The first name(s) of the user.
    lastname?: string; // The family name of the user.
    fullname: string; // The fullname of the user.
    email?: string; // An email address - allow email as root@localhost.
    address?: string; // Postal address.
    phone1?: string; // Phone 1.
    phone2?: string; // Phone 2.
    icq?: string; // Icq number.
    skype?: string; // Skype id.
    yahoo?: string; // Yahoo id.
    aim?: string; // Aim id.
    msn?: string; // Msn number.
    department?: string; // Department.
    institution?: string; // Institution.
    idnumber?: string; // An arbitrary ID code number perhaps from the institution.
    interests?: string; // User interests (separated by commas).
    firstaccess?: number; // First access to the site (0 if never).
    lastaccess?: number; // Last access to the site (0 if never).
    auth?: string; // Auth plugins include manual, ldap, etc.
    suspended?: boolean; // Suspend user account, either false to enable user login or true to disable it.
    confirmed?: boolean; // Active user: 1 if confirmed, 0 otherwise.
    lang?: string; // Language code such as "en", must exist on server.
    calendartype?: string; // Calendar type such as "gregorian", must exist on server.
    theme?: string; // Theme name such as "standard", must exist on server.
    timezone?: string; // Timezone code such as Australia/Perth, or 99 for default.
    mailformat?: number; // Mail format code is 0 for plain text, 1 for HTML etc.
    description?: string; // User profile description.
    descriptionformat?: number; // Int format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    city?: string; // Home city of the user.
    url?: string; // URL of the user.
    country?: string; // Home country code of the user, such as AU or CZ.
    profileimageurlsmall: string; // User image profile URL - small version.
    profileimageurl: string; // User image profile URL - big version.
    customfields?: { // User custom fields (also known as user profile fields).
        type: string; // The type of the custom field - text field, checkbox...
        value: string; // The value of the custom field.
        name: string; // The name of the custom field.
        shortname: string; // The shortname of the custom field - to be able to build the field class in the code.
    }[];
    preferences?: { // Users preferences.
        name: string; // The name of the preferences.
        value: string; // The value of the preference.
    }[];
    groups?: { // User groups.
        id: number; // Group id.
        name: string; // Group name.
        description: string; // Group description.
        descriptionformat: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    }[];
    roles?: { // User roles.
        roleid: number; // Role id.
        name: string; // Role name.
        shortname: string; // Role shortname.
        sortorder: number; // Role sortorder.
    }[];
    enrolledcourses?: { // Courses where the user is enrolled - limited by which courses the user is able to see.
        id: number; // Id of the course.
        fullname: string; // Fullname of the course.
        shortname: string; // Shortname of the course.
    }[];
}[];

/**
 * Params of core_user_get_private_files_info WS.
 */
export type CoreUserGetPrivateFilesInfoWSParams = {
    userid?: number; // Id of the user, default to current user.
};

/**
 * Data returned by core_user_get_private_files_info WS.
 */
export type CoreUserGetPrivateFilesInfoWSResponse = {
    filecount: number; // Number of files in the area.
    foldercount: number; // Number of folders in the area.
    filesize: number; // Total size of the files in the area.
    filesizewithoutreferences: number; // Total size of the area excluding file references.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_user_get_user_preferences WS.
 */
export type CoreUserGetUserPreferencesWSParams = {
    name?: string; // Preference name, empty for all.
    userid?: number; // Id of the user, default to current user.
};

/**
 * Data returned by core_user_get_user_preferences WS.
 */
export type CoreUserGetUserPreferencesWSResponse = {
    preferences: { // User custom fields (also known as user profile fields).
        name: string; // The name of the preference.
        value: string; // The value of the preference.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_user_get_users_by_field WS.
 */
export type CoreUserGetUsersByFieldWSParams = {
    field: string; // The search field can be
                 // 'id' or 'idnumber' or 'username' or 'email'.

    values: string[];
};

/**
 * Data returned by core_user_get_users_by_field WS.
 */
export type CoreUserGetUsersByFieldWSResponse = {
    id: number; // ID of the user.
    username?: string; // The username.
    firstname?: string; // The first name(s) of the user.
    lastname?: string; // The family name of the user.
    fullname: string; // The fullname of the user.
    email?: string; // An email address - allow email as root@localhost.
    address?: string; // Postal address.
    phone1?: string; // Phone 1.
    phone2?: string; // Phone 2.
    icq?: string; // Icq number.
    skype?: string; // Skype id.
    yahoo?: string; // Yahoo id.
    aim?: string; // Aim id.
    msn?: string; // Msn number.
    department?: string; // Department.
    institution?: string; // Institution.
    idnumber?: string; // An arbitrary ID code number perhaps from the institution.
    interests?: string; // User interests (separated by commas).
    firstaccess?: number; // First access to the site (0 if never).
    lastaccess?: number; // Last access to the site (0 if never).
    auth?: string; // Auth plugins include manual, ldap, etc.
    suspended?: boolean; // Suspend user account, either false to enable user login or true to disable it.
    confirmed?: boolean; // Active user: 1 if confirmed, 0 otherwise.
    lang?: string; // Language code such as "en", must exist on server.
    calendartype?: string; // Calendar type such as "gregorian", must exist on server.
    theme?: string; // Theme name such as "standard", must exist on server.
    timezone?: string; // Timezone code such as Australia/Perth, or 99 for default.
    mailformat?: number; // Mail format code is 0 for plain text, 1 for HTML etc.
    description?: string; // User profile description.
    descriptionformat?: number; // Int format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    city?: string; // Home city of the user.
    url?: string; // URL of the user.
    country?: string; // Home country code of the user, such as AU or CZ.
    profileimageurlsmall: string; // User image profile URL - small version.
    profileimageurl: string; // User image profile URL - big version.
    customfields?: { // User custom fields (also known as user profile fields).
        type: string; // The type of the custom field - text field, checkbox...
        value: string; // The value of the custom field.
        name: string; // The name of the custom field.
        shortname: string; // The shortname of the custom field - to be able to build the field class in the code.
    }[];
    preferences?: { // Users preferences.
        name: string; // The name of the preferences.
        value: string; // The value of the preference.
    }[];
}[];

/**
 * Params of core_user_remove_user_device WS.
 */
export type CoreUserRemoveUserDeviceWSParams = {
    uuid: string; // The device UUID.
    appid?: string; // The app id, if empty devices matching the UUID for the user will be removed.
};

/**
 * Data returned by core_user_remove_user_device WS.
 */
export type CoreUserRemoveUserDeviceWSResponse = {
    removed: boolean; // True if removed, false if not removed because it doesn't exists.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_user_set_user_preferences WS.
 */
export type CoreUserSetUserPreferencesWSParams = {
    preferences: {
        name: string; // The name of the preference.
        value: string; // The value of the preference.
        userid: number; // Id of the user to set the preference.
    }[];
};

/**
 * Data returned by core_user_set_user_preferences WS.
 */
export type CoreUserSetUserPreferencesWSResponse = {
    saved: { // Preferences saved.
        name: string; // The name of the preference.
        userid: number; // The user the preference was set for.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_user_update_picture WS.
 */
export type CoreUserUpdatePictureWSParams = {
    draftitemid: number; // Id of the user draft file to use as image.
    delete?: boolean; // If we should delete the user picture.
    userid?: number; // Id of the user, 0 for current user.
};

/**
 * Data returned by core_user_update_picture WS.
 */
export type CoreUserUpdatePictureWSResponse = {
    success: boolean; // True if the image was updated, false otherwise.
    profileimageurl?: string; // New profile user image url.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_user_update_user_preferences WS.
 */
export type CoreUserUpdateUserPreferencesWSParams = {
    userid?: number; // Id of the user, default to current user.
    emailstop?: number; // Enable or disable notifications for this user.
    preferences?: { // User preferences.
        type: string; // The name of the preference.
        value?: string; // The value of the preference, do not set this field if you
                             // want to remove (unset) the current value.

    }[];
};

/**
 * Data returned by core_user_update_user_preferences WS.
 */
export type CoreUserUpdateUserPreferencesWSResponse = {}; // WARNING: Null structure found;

/**
 * Params of core_user_view_user_list WS.
 */
export type CoreUserViewUserListWSParams = {
    courseid: number; // Id of the course, 0 for site.
};

/**
 * Data returned by core_user_view_user_list WS.
 */
export type CoreUserViewUserListWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_user_view_user_profile WS.
 */
export type CoreUserViewUserProfileWSParams = {
    userid: number; // Id of the user, 0 for current user.
    courseid?: number; // Id of the course, default site course.
};

/**
 * Data returned by core_user_view_user_profile WS.
 */
export type CoreUserViewUserProfileWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of core_webservice_get_site_info WS.
 */
export type CoreWebserviceGetSiteInfoWSParams = {
    serviceshortnames?: string[]; // DEPRECATED PARAMETER - it was a design error in the original implementation. \
                 // It is ignored now. (parameter kept for backward compatibility).

};

/**
 * Data returned by core_webservice_get_site_info WS.
 */
export type CoreWebserviceGetSiteInfoWSResponse = {
    sitename: string; // Site name.
    username: string; // Username.
    firstname: string; // First name.
    lastname: string; // Last name.
    fullname: string; // User full name.
    lang: string; // Current language.
    userid: number; // User id.
    siteurl: string; // Site url.
    userpictureurl: string; // The user profile picture.
                 // Warning: this url is the public URL that only works when forcelogin is set to NO and guestaccess is set to YES.
                 // In order to retrieve user profile pictures independently of the Moodle config, replace "pluginfile.php" by
                 // "webservice/pluginfile.php?token=WSTOKEN&file="
                 // Of course the user can only see profile picture depending
                 // on his/her permissions. Moreover it is recommended to use HTTPS too.

    functions: {
        name: string; // Function name.
        version: string; // The version number of the component to which the function belongs.
    }[];
    downloadfiles?: number; // 1 if users are allowed to download files, 0 if not.
    uploadfiles?: number; // 1 if users are allowed to upload files, 0 if not.
    release?: string; // Moodle release number.
    version?: string; // Moodle version number.
    mobilecssurl?: string; // Mobile custom CSS theme.
    advancedfeatures?: { // Advanced features availability.
        name: string; // Feature name.
        value: number; // Feature value. Usually 1 means enabled.
    }[];
    usercanmanageownfiles?: boolean; // True if the user can manage his own files.
    userquota?: number; // User quota (bytes). 0 means user can ignore the quota.
    usermaxuploadfilesize?: number; // User max upload file size (bytes). -1 means the user can ignore the upload file size.
    userhomepage?: number; // The default home page for the user: 0 for the site home, 1 for dashboard.
    userprivateaccesskey?: string; // Private user access key for fetching files.
    siteid?: number; // Site course ID.
    sitecalendartype?: string; // Calendar type set in the site.
    usercalendartype?: string; // Calendar typed used by the user.
    userissiteadmin?: boolean; // Whether the user is a site admin or not.
    theme?: string; // Current theme for the user.
};

/**
 * Params of core_xapi_statement_post WS.
 */
export type CoreXapiStatementPostWSParams = {
    component: string; // Component name.
    requestjson: string; // Json object with all the statements to post.
};

/**
 * Data returned by core_xapi_statement_post WS.
 */
export type CoreXapiStatementPostWSResponse = boolean[];

/**
 * Params of enrol_guest_get_instance_info WS.
 */
export type EnrolGuestGetInstanceInfoWSParams = {
    instanceid: number; // Instance id of guest enrolment plugin.
};

/**
 * Data returned by enrol_guest_get_instance_info WS.
 */
export type EnrolGuestGetInstanceInfoWSResponse = {
    instanceinfo: {
        id: number; // Id of course enrolment instance.
        courseid: number; // Id of course.
        type: string; // Type of enrolment plugin.
        name: string; // Name of enrolment plugin.
        status: boolean; // Is the enrolment enabled?.
        passwordrequired: boolean; // Is a password required?.
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of enrol_self_enrol_user WS.
 */
export type EnrolSelfEnrolUserWSParams = {
    courseid: number; // Id of the course.
    password?: string; // Enrolment key.
    instanceid?: number; // Instance id of self enrolment plugin.
};

/**
 * Data returned by enrol_self_enrol_user WS.
 */
export type EnrolSelfEnrolUserWSResponse = {
    status: boolean; // Status: true if the user is enrolled, false otherwise.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of enrol_self_get_instance_info WS.
 */
export type EnrolSelfGetInstanceInfoWSParams = {
    instanceid: number; // Instance id of self enrolment plugin.
};

/**
 * Data returned by enrol_self_get_instance_info WS.
 */
export type EnrolSelfGetInstanceInfoWSResponse = {
    id: number; // Id of course enrolment instance.
    courseid: number; // Id of course.
    type: string; // Type of enrolment plugin.
    name: string; // Name of enrolment plugin.
    status: string; // Status of enrolment plugin.
    enrolpassword?: string; // Password required for enrolment.
};

/**
 * Params of gradereport_overview_get_course_grades WS.
 */
export type GradereportOverviewGetCourseGradesWSParams = {
    userid?: number; // Get grades for this user (optional, default current).
};

/**
 * Data returned by gradereport_overview_get_course_grades WS.
 */
export type GradereportOverviewGetCourseGradesWSResponse = {
    grades: {
        courseid: number; // Course id.
        grade: string; // Grade formatted.
        rawgrade: string; // Raw grade, not formatted.
        rank?: number; // Your rank in the course.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of gradereport_overview_view_grade_report WS.
 */
export type GradereportOverviewViewGradeReportWSParams = {
    courseid: number; // Id of the course.
    userid?: number; // Id of the user, 0 means current user.
};

/**
 * Data returned by gradereport_overview_view_grade_report WS.
 */
export type GradereportOverviewViewGradeReportWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of gradereport_user_get_grade_items WS.
 */
export type GradereportUserGetGradeItemsWSParams = {
    courseid: number; // Course Id.
    userid?: number; // Return grades only for this user (optional).
    groupid?: number; // Get users from this group only.
};

/**
 * Data returned by gradereport_user_get_grade_items WS.
 */
export type GradereportUserGetGradeItemsWSResponse = {
    usergrades: {
        courseid: number; // Course id.
        userid: number; // User id.
        userfullname: string; // User fullname.
        useridnumber: string; // User idnumber.
        maxdepth: number; // Table max depth (needed for printing it).
        gradeitems: {
            id: number; // Grade item id.
            itemname: string; // Grade item name.
            itemtype: string; // Grade item type.
            itemmodule: string; // Grade item module.
            iteminstance: number; // Grade item instance.
            itemnumber: number; // Grade item item number.
            idnumber: string; // Grade item idnumber.
            categoryid: number; // Grade item category id.
            outcomeid: number; // Outcome id.
            scaleid: number; // Scale id.
            locked?: boolean; // Grade item for user locked?.
            cmid?: number; // Course module id (if type mod).
            weightraw?: number; // Weight raw.
            weightformatted?: string; // Weight.
            status?: string; // Status.
            graderaw?: number; // Grade raw.
            gradedatesubmitted?: number; // Grade submit date.
            gradedategraded?: number; // Grade graded date.
            gradehiddenbydate?: boolean; // Grade hidden by date?.
            gradeneedsupdate?: boolean; // Grade needs update?.
            gradeishidden?: boolean; // Grade is hidden?.
            gradeislocked?: boolean; // Grade is locked?.
            gradeisoverridden?: boolean; // Grade overridden?.
            gradeformatted?: string; // The grade formatted.
            grademin?: number; // Grade min.
            grademax?: number; // Grade max.
            rangeformatted?: string; // Range formatted.
            percentageformatted?: string; // Percentage.
            lettergradeformatted?: string; // Letter grade.
            rank?: number; // Rank in the course.
            numusers?: number; // Num users in course.
            averageformatted?: string; // Grade average.
            feedback?: string; // Grade feedback.
            feedbackformat?: number; // Feedback format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of gradereport_user_get_grades_table WS.
 */
export type GradereportUserGetGradesTableWSParams = {
    courseid: number; // Course Id.
    userid?: number; // Return grades only for this user (optional).
    groupid?: number; // Get users from this group only.
};

/**
 * Data returned by gradereport_user_get_grades_table WS.
 */
export type GradereportUserGetGradesTableWSResponse = {
    tables: {
        courseid: number; // Course id.
        userid: number; // User id.
        userfullname: string; // User fullname.
        maxdepth: number; // Table max depth (needed for printing it).
        tabledata: {
            itemname?: {
                class: string; // Class.
                colspan: number; // Col span.
                content: string; // Cell content.
                celltype: string; // Cell type.
                id: string; // Id.
            }; // The item returned data.
            leader?: {
                class: string; // Class.
                rowspan: number; // Row span.
            }; // The item returned data.
            weight?: {
                class: string; // Class.
                content: string; // Cell content.
                headers: string; // Headers.
            }; // Weight column.
            grade?: {
                class: string; // Class.
                content: string; // Cell content.
                headers: string; // Headers.
            }; // Grade column.
            range?: {
                class: string; // Class.
                content: string; // Cell content.
                headers: string; // Headers.
            }; // Range column.
            percentage?: {
                class: string; // Class.
                content: string; // Cell content.
                headers: string; // Headers.
            }; // Percentage column.
            lettergrade?: {
                class: string; // Class.
                content: string; // Cell content.
                headers: string; // Headers.
            }; // Lettergrade column.
            rank?: {
                class: string; // Class.
                content: string; // Cell content.
                headers: string; // Headers.
            }; // Rank column.
            average?: {
                class: string; // Class.
                content: string; // Cell content.
                headers: string; // Headers.
            }; // Average column.
            feedback?: {
                class: string; // Class.
                content: string; // Cell content.
                headers: string; // Headers.
            }; // Feedback column.
            contributiontocoursetotal?: {
                class: string; // Class.
                content: string; // Cell content.
                headers: string; // Headers.
            }; // Contributiontocoursetotal column.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of gradereport_user_view_grade_report WS.
 */
export type GradereportUserViewGradeReportWSParams = {
    courseid: number; // Id of the course.
    userid?: number; // Id of the user, 0 means current user.
};

/**
 * Data returned by gradereport_user_view_grade_report WS.
 */
export type GradereportUserViewGradeReportWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of message_airnotifier_are_notification_preferences_configured WS.
 */
export type MessageAirnotifierAreNotificationPreferencesConfiguredWSParams = {
    userids: number[];
};

/**
 * Data returned by message_airnotifier_are_notification_preferences_configured WS.
 */
export type MessageAirnotifierAreNotificationPreferencesConfiguredWSResponse = {
    users: { // List of preferences by user.
        userid: number; // Userid id.
        configured: number; // 1 if the user preferences have been configured and 0 if not.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of message_airnotifier_enable_device WS.
 */
export type MessageAirnotifierEnableDeviceWSParams = {
    deviceid: number; // The device id.
    enable: boolean; // True for enable the device, false otherwise.
};

/**
 * Data returned by message_airnotifier_enable_device WS.
 */
export type MessageAirnotifierEnableDeviceWSResponse = {
    success: boolean; // True if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of message_airnotifier_get_user_devices WS.
 */
export type MessageAirnotifierGetUserDevicesWSParams = {
    appid: string; // App unique id (usually a reversed domain).
    userid?: number; // User id, 0 for current user.
};

/**
 * Data returned by message_airnotifier_get_user_devices WS.
 */
export type MessageAirnotifierGetUserDevicesWSResponse = {
    devices: { // List of devices.
        id: number; // Device id (in the message_airnotifier table).
        appid: string; // The app id, something like com.moodle.moodlemobile.
        name: string; // The device name, 'occam' or 'iPhone' etc.
        model: string; // The device model 'Nexus4' or 'iPad1,1' etc.
        platform: string; // The device platform 'iOS' or 'Android' etc.
        version: string; // The device version '6.1.2' or '4.2.2' etc.
        pushid: string; // The device PUSH token/key/identifier/registration id.
        uuid: string; // The device UUID.
        enable: number; // Whether the device is enabled or not.
        timecreated: number; // Time created.
        timemodified: number; // Time modified.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of message_airnotifier_is_system_configured WS.
 */
export type MessageAirnotifierIsSystemConfiguredWSParams = {
};

/**
 * Data returned by message_airnotifier_is_system_configured WS.
 */
export type MessageAirnotifierIsSystemConfiguredWSResponse = number;

/**
 * Params of message_popup_get_popup_notifications WS.
 */
export type MessagePopupGetPopupNotificationsWSParams = {
    useridto: number; // The user id who received the message, 0 for current user.
    newestfirst?: boolean; // True for ordering by newest first, false for oldest first.
    limit?: number; // The number of results to return.
    offset?: number; // Offset the result set by a given amount.
};

/**
 * Data returned by message_popup_get_popup_notifications WS.
 */
export type MessagePopupGetPopupNotificationsWSResponse = {
    notifications: {
        id: number; // Notification id (this is not guaranteed to be unique
                             // within this result set).

        useridfrom: number; // User from id.
        useridto: number; // User to id.
        subject: string; // The notification subject.
        shortenedsubject: string; // The notification subject shortened
                             // with ellipsis.

        text: string; // The message text formated.
        fullmessage: string; // The message.
        fullmessageformat: number; // Fullmessage format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        fullmessagehtml: string; // The message in html.
        smallmessage: string; // The shorten message.
        contexturl: string; // Context URL.
        contexturlname: string; // Context URL link name.
        timecreated: number; // Time created.
        timecreatedpretty: string; // Time created in a pretty format.
        timeread: number; // Time read.
        read: boolean; // Notification read status.
        deleted: boolean; // Notification deletion status.
        iconurl: string; // URL for notification icon.
        component?: string; // The component that generated the notification.
        eventtype?: string; // The type of notification.
        customdata?: string; // Custom data to be passed to the message processor.
                             // The data here is serialised using json_encode().

    }[];
    unreadcount: number; // The number of unread message for the given user.
};

/**
 * Params of message_popup_get_unread_popup_notification_count WS.
 */
export type MessagePopupGetUnreadPopupNotificationCountWSParams = {
    useridto: number; // The user id who received the message, 0 for any user.
};

/**
 * Data returned by message_popup_get_unread_popup_notification_count WS.
 */
export type MessagePopupGetUnreadPopupNotificationCountWSResponse = number;

/**
 * Params of mod_assign_get_assignments WS.
 */
export type ModAssignGetAssignmentsWSParams = {
    courseids?: number[]; // 0 or more course ids.
    capabilities?: string[]; // List of capabilities used to filter courses.
    includenotenrolledcourses?: boolean; // Whether to return courses that the user can see
                                                                 // even if is not enroled in. This requires the parameter courseids
                                                                 // to not be empty.

};

/**
 * Data returned by mod_assign_get_assignments WS.
 */
export type ModAssignGetAssignmentsWSResponse = {
    courses: { // List of courses.
        id: number; // Course id.
        fullname: string; // Course full name.
        shortname: string; // Course short name.
        timemodified: number; // Last time modified.
        assignments: { // Assignment info.
            id: number; // Assignment id.
            cmid: number; // Course module id.
            course: number; // Course id.
            name: string; // Assignment name.
            nosubmissions: number; // No submissions.
            submissiondrafts: number; // Submissions drafts.
            sendnotifications: number; // Send notifications.
            sendlatenotifications: number; // Send notifications.
            sendstudentnotifications: number; // Send student notifications (default).
            duedate: number; // Assignment due date.
            allowsubmissionsfromdate: number; // Allow submissions from date.
            grade: number; // Grade type.
            timemodified: number; // Last time assignment was modified.
            completionsubmit: number; // If enabled, set activity as complete following submission.
            cutoffdate: number; // Date after which submission is not accepted without an extension.
            gradingduedate: number; // The expected date for marking the submissions.
            teamsubmission: number; // If enabled, students submit as a team.
            requireallteammemberssubmit: number; // If enabled, all team members must submit.
            teamsubmissiongroupingid: number; // The grouping id for the team submission groups.
            blindmarking: number; // If enabled, hide identities until reveal identities actioned.
            hidegrader: number; // If enabled, hide grader to student.
            revealidentities: number; // Show identities for a blind marking assignment.
            attemptreopenmethod: string; // Method used to control opening new attempts.
            maxattempts: number; // Maximum number of attempts allowed.
            markingworkflow: number; // Enable marking workflow.
            markingallocation: number; // Enable marking allocation.
            requiresubmissionstatement: number; // Student must accept submission statement.
            preventsubmissionnotingroup?: number; // Prevent submission not in group.
            submissionstatement?: string; // Submission statement formatted.
            submissionstatementformat?: number; // Submissionstatement format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            configs: { // Configuration settings.
                id?: number; // Assign_plugin_config id.
                assignment?: number; // Assignment id.
                plugin: string; // Plugin.
                subtype: string; // Subtype.
                name: string; // Name.
                value: string; // Value.
            }[];
            intro?: string; // Assignment intro, not allways returned because it deppends on the activity configuration.
            introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            introfiles?: CoreWSExternalFile[];
            introattachments?: CoreWSExternalFile[];
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_assign_get_grades WS.
 */
export type ModAssignGetGradesWSParams = {
    assignmentids: number[]; // 1 or more assignment ids.
    since?: number; // Timestamp, only return records where timemodified >= since.
};

/**
 * Data returned by mod_assign_get_grades WS.
 */
export type ModAssignGetGradesWSResponse = {
    assignments: { // List of assignment grade information.
        assignmentid: number; // Assignment id.
        grades: {
            id: number; // Grade id.
            assignment?: number; // Assignment id.
            userid: number; // Student id.
            attemptnumber: number; // Attempt number.
            timecreated: number; // Grade creation time.
            timemodified: number; // Grade last modified time.
            grader: number; // Grader, -1 if grader is hidden.
            grade: string; // Grade.
            gradefordisplay?: string; // Grade rendered into a format suitable for display.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_assign_get_participant WS.
 */
export type ModAssignGetParticipantWSParams = {
    assignid: number; // Assign instance id.
    userid: number; // User id.
    embeduser?: boolean; // User id.
};

/**
 * Data returned by mod_assign_get_participant WS.
 */
export type ModAssignGetParticipantWSResponse = {
    id: number; // ID of the user.
    fullname: string; // The fullname of the user.
    submitted: boolean; // Have they submitted their assignment.
    requiregrading: boolean; // Is their submission waiting for grading.
    grantedextension: boolean; // Have they been granted an extension.
    blindmarking: boolean; // Is blind marking enabled for this assignment.
    allowsubmissionsfromdate: number; // Allowsubmissionsfromdate for the user.
    duedate: number; // Duedate for the user.
    cutoffdate: number; // Cutoffdate for the user.
    duedatestr: string; // Duedate for the user.
    groupid?: number; // For group assignments this is the group id.
    groupname?: string; // For group assignments this is the group name.
    user?: {
        id: number; // ID of the user.
        username?: string; // The username.
        firstname?: string; // The first name(s) of the user.
        lastname?: string; // The family name of the user.
        fullname: string; // The fullname of the user.
        email?: string; // An email address - allow email as root@localhost.
        address?: string; // Postal address.
        phone1?: string; // Phone 1.
        phone2?: string; // Phone 2.
        icq?: string; // Icq number.
        skype?: string; // Skype id.
        yahoo?: string; // Yahoo id.
        aim?: string; // Aim id.
        msn?: string; // Msn number.
        department?: string; // Department.
        institution?: string; // Institution.
        idnumber?: string; // An arbitrary ID code number perhaps from the institution.
        interests?: string; // User interests (separated by commas).
        firstaccess?: number; // First access to the site (0 if never).
        lastaccess?: number; // Last access to the site (0 if never).
        auth?: string; // Auth plugins include manual, ldap, etc.
        suspended?: boolean; // Suspend user account, either false to enable user login or true to disable it.
        confirmed?: boolean; // Active user: 1 if confirmed, 0 otherwise.
        lang?: string; // Language code such as "en", must exist on server.
        calendartype?: string; // Calendar type such as "gregorian", must exist on server.
        theme?: string; // Theme name such as "standard", must exist on server.
        timezone?: string; // Timezone code such as Australia/Perth, or 99 for default.
        mailformat?: number; // Mail format code is 0 for plain text, 1 for HTML etc.
        description?: string; // User profile description.
        descriptionformat?: number; // Int format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        city?: string; // Home city of the user.
        url?: string; // URL of the user.
        country?: string; // Home country code of the user, such as AU or CZ.
        profileimageurlsmall: string; // User image profile URL - small version.
        profileimageurl: string; // User image profile URL - big version.
        customfields?: { // User custom fields (also known as user profile fields).
            type: string; // The type of the custom field - text field, checkbox...
            value: string; // The value of the custom field.
            name: string; // The name of the custom field.
            shortname: string; // The shortname of the custom field - to be able to build the field class in the code.
        }[];
        preferences?: { // Users preferences.
            name: string; // The name of the preferences.
            value: string; // The value of the preference.
        }[];
    };
};

/**
 * Params of mod_assign_get_submission_status WS.
 */
export type ModAssignGetSubmissionStatusWSParams = {
    assignid: number; // Assignment instance id.
    userid?: number; // User id (empty for current user).
    groupid?: number; // Filter by users in group (used for generating the grading summary).
                 // Empty or 0 for all groups information.

};

/**
 * Data returned by mod_assign_get_submission_status WS.
 */
export type ModAssignGetSubmissionStatusWSResponse = {
    gradingsummary?: {
        participantcount: number; // Number of users who can submit.
        submissiondraftscount: number; // Number of submissions in draft status.
        submissionsenabled: boolean; // Whether submissions are enabled or not.
        submissionssubmittedcount: number; // Number of submissions in submitted status.
        submissionsneedgradingcount: number; // Number of submissions that need grading.
        warnofungroupedusers: string; // Whether we need to warn people that there
                                                                     // are users without groups ('warningrequired'), warn
                                                                     // people there are users who will submit in the default
                                                                     // group ('warningoptional') or no warning ('').

    }; // Grading information.
    lastattempt?: {
        submission?: {
            id: number; // Submission id.
            userid: number; // Student id.
            attemptnumber: number; // Attempt number.
            timecreated: number; // Submission creation time.
            timemodified: number; // Submission last modified time.
            status: string; // Submission status.
            groupid: number; // Group id.
            assignment?: number; // Assignment id.
            latest?: number; // Latest attempt.
            plugins?: { // Plugins.
                type: string; // Submission plugin type.
                name: string; // Submission plugin name.
                fileareas?: { // Fileareas.
                    area: string; // File area.
                    files?: CoreWSExternalFile[];
                }[];
                editorfields?: { // Editorfields.
                    name: string; // Field name.
                    description: string; // Field description.
                    text: string; // Field value.
                    format: number; // Text format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                }[];
            }[];
            gradingstatus?: string; // Grading status.
        }; // Submission info.
        teamsubmission?: {
            id: number; // Submission id.
            userid: number; // Student id.
            attemptnumber: number; // Attempt number.
            timecreated: number; // Submission creation time.
            timemodified: number; // Submission last modified time.
            status: string; // Submission status.
            groupid: number; // Group id.
            assignment?: number; // Assignment id.
            latest?: number; // Latest attempt.
            plugins?: { // Plugins.
                type: string; // Submission plugin type.
                name: string; // Submission plugin name.
                fileareas?: { // Fileareas.
                    area: string; // File area.
                    files?: CoreWSExternalFile[];
                }[];
                editorfields?: { // Editorfields.
                    name: string; // Field name.
                    description: string; // Field description.
                    text: string; // Field value.
                    format: number; // Text format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                }[];
            }[];
            gradingstatus?: string; // Grading status.
        }; // Submission info.
        submissiongroup?: number; // The submission group id (for group submissions only).
        submissiongroupmemberswhoneedtosubmit?: number[]; // List of users who still need to submit (for group submissions only).
        submissionsenabled: boolean; // Whether submissions are enabled or not.
        locked: boolean; // Whether new submissions are locked.
        graded: boolean; // Whether the submission is graded.
        canedit: boolean; // Whether the user can edit the current submission.
        caneditowner: boolean; // Whether the owner of the submission can edit it.
        cansubmit: boolean; // Whether the user can submit.
        extensionduedate: number; // Extension due date.
        blindmarking: boolean; // Whether blind marking is enabled.
        gradingstatus: string; // Grading status.
        usergroups: number[]; // User groups in the course.
    }; // Last attempt information.
    feedback?: {
        grade?: {
            id: number; // Grade id.
            assignment?: number; // Assignment id.
            userid: number; // Student id.
            attemptnumber: number; // Attempt number.
            timecreated: number; // Grade creation time.
            timemodified: number; // Grade last modified time.
            grader: number; // Grader, -1 if grader is hidden.
            grade: string; // Grade.
            gradefordisplay?: string; // Grade rendered into a format suitable for display.
        }; // Grade information.
        gradefordisplay: string; // Grade rendered into a format suitable for display.
        gradeddate: number; // The date the user was graded.
        plugins?: { // Plugins info.
            type: string; // Submission plugin type.
            name: string; // Submission plugin name.
            fileareas?: { // Fileareas.
                area: string; // File area.
                files?: CoreWSExternalFile[];
            }[];
            editorfields?: { // Editorfields.
                name: string; // Field name.
                description: string; // Field description.
                text: string; // Field value.
                format: number; // Text format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            }[];
        }[];
    }; // Feedback for the last attempt.
    previousattempts?: { // List all the previous attempts did by the user.
        attemptnumber: number; // Attempt number.
        submission?: {
            id: number; // Submission id.
            userid: number; // Student id.
            attemptnumber: number; // Attempt number.
            timecreated: number; // Submission creation time.
            timemodified: number; // Submission last modified time.
            status: string; // Submission status.
            groupid: number; // Group id.
            assignment?: number; // Assignment id.
            latest?: number; // Latest attempt.
            plugins?: { // Plugins.
                type: string; // Submission plugin type.
                name: string; // Submission plugin name.
                fileareas?: { // Fileareas.
                    area: string; // File area.
                    files?: CoreWSExternalFile[];
                }[];
                editorfields?: { // Editorfields.
                    name: string; // Field name.
                    description: string; // Field description.
                    text: string; // Field value.
                    format: number; // Text format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                }[];
            }[];
            gradingstatus?: string; // Grading status.
        }; // Submission info.
        grade?: {
            id: number; // Grade id.
            assignment?: number; // Assignment id.
            userid: number; // Student id.
            attemptnumber: number; // Attempt number.
            timecreated: number; // Grade creation time.
            timemodified: number; // Grade last modified time.
            grader: number; // Grader, -1 if grader is hidden.
            grade: string; // Grade.
            gradefordisplay?: string; // Grade rendered into a format suitable for display.
        }; // Grade information.
        feedbackplugins?: { // Feedback info.
            type: string; // Submission plugin type.
            name: string; // Submission plugin name.
            fileareas?: { // Fileareas.
                area: string; // File area.
                files?: CoreWSExternalFile[];
            }[];
            editorfields?: { // Editorfields.
                name: string; // Field name.
                description: string; // Field description.
                text: string; // Field value.
                format: number; // Text format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            }[];
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_assign_get_submissions WS.
 */
export type ModAssignGetSubmissionsWSParams = {
    assignmentids: number[]; // 1 or more assignment ids.
    status?: string; // Status.
    since?: number; // Submitted since.
    before?: number; // Submitted before.
};

/**
 * Data returned by mod_assign_get_submissions WS.
 */
export type ModAssignGetSubmissionsWSResponse = {
    assignments: { // Assignment submissions.
        assignmentid: number; // Assignment id.
        submissions: {
            id: number; // Submission id.
            userid: number; // Student id.
            attemptnumber: number; // Attempt number.
            timecreated: number; // Submission creation time.
            timemodified: number; // Submission last modified time.
            status: string; // Submission status.
            groupid: number; // Group id.
            assignment?: number; // Assignment id.
            latest?: number; // Latest attempt.
            plugins?: { // Plugins.
                type: string; // Submission plugin type.
                name: string; // Submission plugin name.
                fileareas?: { // Fileareas.
                    area: string; // File area.
                    files?: CoreWSExternalFile[];
                }[];
                editorfields?: { // Editorfields.
                    name: string; // Field name.
                    description: string; // Field description.
                    text: string; // Field value.
                    format: number; // Text format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                }[];
            }[];
            gradingstatus?: string; // Grading status.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_assign_get_user_flags WS.
 */
export type ModAssignGetUserFlagsWSParams = {
    assignmentids: number[]; // 1 or more assignment ids.
};

/**
 * Data returned by mod_assign_get_user_flags WS.
 */
export type ModAssignGetUserFlagsWSResponse = {
    assignments: { // List of assign user flag information.
        assignmentid: number; // Assignment id.
        userflags: {
            id: number; // User flag id.
            userid: number; // Student id.
            locked: number; // Locked.
            mailed: number; // Mailed.
            extensionduedate: number; // Extension due date.
            workflowstate?: string; // Marking workflow state.
            allocatedmarker: number; // Allocated marker.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_assign_get_user_mappings WS.
 */
export type ModAssignGetUserMappingsWSParams = {
    assignmentids: number[]; // 1 or more assignment ids.
};

/**
 * Data returned by mod_assign_get_user_mappings WS.
 */
export type ModAssignGetUserMappingsWSResponse = {
    assignments: { // List of assign user mapping data.
        assignmentid: number; // Assignment id.
        mappings: {
            id: number; // User mapping id.
            userid: number; // Student id.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_assign_list_participants WS.
 */
export type ModAssignListParticipantsWSParams = {
    assignid: number; // Assign instance id.
    groupid: number; // Group id.
    filter: string; // Search string to filter the results.
    skip?: number; // Number of records to skip.
    limit?: number; // Maximum number of records to return.
    onlyids?: boolean; // Do not return all user fields.
    includeenrolments?: boolean; // Do return courses where the user is enrolled.
    tablesort?: boolean; // Apply current user table sorting preferences.
};

/**
 * Data returned by mod_assign_list_participants WS.
 */
export type ModAssignListParticipantsWSResponse = {
    id: number; // ID of the user.
    username?: string; // The username.
    firstname?: string; // The first name(s) of the user.
    lastname?: string; // The family name of the user.
    fullname: string; // The fullname of the user.
    email?: string; // Email address.
    address?: string; // Postal address.
    phone1?: string; // Phone 1.
    phone2?: string; // Phone 2.
    icq?: string; // Icq number.
    skype?: string; // Skype id.
    yahoo?: string; // Yahoo id.
    aim?: string; // Aim id.
    msn?: string; // Msn number.
    department?: string; // Department.
    institution?: string; // Institution.
    idnumber?: string; // The idnumber of the user.
    interests?: string; // User interests (separated by commas).
    firstaccess?: number; // First access to the site (0 if never).
    lastaccess?: number; // Last access to the site (0 if never).
    suspended?: boolean; // Suspend user account, either false to enable user login or true to disable it.
    description?: string; // User profile description.
    descriptionformat?: number; // Int format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    city?: string; // Home city of the user.
    url?: string; // URL of the user.
    country?: string; // Home country code of the user, such as AU or CZ.
    profileimageurlsmall?: string; // User image profile URL - small version.
    profileimageurl?: string; // User image profile URL - big version.
    customfields?: { // User custom fields (also known as user profile fields).
        type: string; // The type of the custom field - text field, checkbox...
        value: string; // The value of the custom field.
        name: string; // The name of the custom field.
        shortname: string; // The shortname of the custom field - to be able to build the field class in the code.
    }[];
    preferences?: { // Users preferences.
        name: string; // The name of the preferences.
        value: string; // The value of the preference.
    }[];
    recordid: number; // Record id.
    groups?: { // User groups.
        id: number; // Group id.
        name: string; // Group name.
        description: string; // Group description.
    }[];
    roles?: { // User roles.
        roleid: number; // Role id.
        name: string; // Role name.
        shortname: string; // Role shortname.
        sortorder: number; // Role sortorder.
    }[];
    enrolledcourses?: { // Courses where the user is enrolled - limited by which courses the user is able to see.
        id: number; // Id of the course.
        fullname: string; // Fullname of the course.
        shortname: string; // Shortname of the course.
    }[];
    submitted: boolean; // Have they submitted their assignment.
    requiregrading: boolean; // Is their submission waiting for grading.
    grantedextension: boolean; // Have they been granted an extension.
    groupid?: number; // For group assignments this is the group id.
    groupname?: string; // For group assignments this is the group name.
}[];

/**
 * Params of mod_assign_lock_submissions WS.
 */
export type ModAssignLockSubmissionsWSParams = {
    assignmentid: number; // The assignment id to operate on.
    userids: number[]; // 1 or more user ids.
};

/**
 * Data returned by mod_assign_lock_submissions WS.
 */
export type ModAssignLockSubmissionsWSResponse = CoreWSExternalWarning[];

/**
 * Params of mod_assign_reveal_identities WS.
 */
export type ModAssignRevealIdentitiesWSParams = {
    assignmentid: number; // The assignment id to operate on.
};

/**
 * Data returned by mod_assign_reveal_identities WS.
 */
export type ModAssignRevealIdentitiesWSResponse = CoreWSExternalWarning[];

/**
 * Params of mod_assign_revert_submissions_to_draft WS.
 */
export type ModAssignRevertSubmissionsToDraftWSParams = {
    assignmentid: number; // The assignment id to operate on.
    userids: number[]; // 1 or more user ids.
};

/**
 * Data returned by mod_assign_revert_submissions_to_draft WS.
 */
export type ModAssignRevertSubmissionsToDraftWSResponse = CoreWSExternalWarning[];

/**
 * Params of mod_assign_save_grade WS.
 */
export type ModAssignSaveGradeWSParams = {
    assignmentid: number; // The assignment id to operate on.
    userid: number; // The student id to operate on.
    grade: number; // The new grade for this user. Ignored if advanced grading used.
    attemptnumber: number; // The attempt number (-1 means latest attempt).
    addattempt: boolean; // Allow another attempt if the attempt reopen method is manual.
    workflowstate: string; // The next marking workflow state.
    applytoall: boolean; // If true, this grade will be applied to all members of the group (for group assignments).
    plugindata?: {
        assignfeedbackcomments_editor?: {
            text: string; // The text for this feedback.
            format: number; // The format for this feedback.
        }; // Editor structure.
        files_filemanager?: number; // The id of a draft area containing files for this feedback.
    }; // Plugin data.
    advancedgradingdata?: {
        guide?: {
            criteria: {
                criterionid: number; // Criterion id.
                fillings?: { // Filling.
                    criterionid: number; // Criterion id.
                    levelid?: number; // Level id.
                    remark?: string; // Remark.
                    remarkformat?: number; // Remark format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                    score: number; // Maximum score.
                }[];
            }[];
        }; // Items.
        rubric?: {
            criteria: {
                criterionid: number; // Criterion id.
                fillings?: { // Filling.
                    criterionid: number; // Criterion id.
                    levelid?: number; // Level id.
                    remark?: string; // Remark.
                    remarkformat?: number; // Remark format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                }[];
            }[];
        }; // Items.
    }; // Advanced grading data.
};

/**
 * Data returned by mod_assign_save_grade WS.
 */
export type ModAssignSaveGradeWSResponse = {}; // WARNING: Null structure found;

/**
 * Params of mod_assign_save_grades WS.
 */
export type ModAssignSaveGradesWSParams = {
    assignmentid: number; // The assignment id to operate on.
    applytoall: boolean; // If true, this grade will be applied to all members of the group (for group assignments).
    grades: {
        userid: number; // The student id to operate on.
        grade: number; // The new grade for this user. Ignored if advanced grading used.
        attemptnumber: number; // The attempt number (-1 means latest attempt).
        addattempt: boolean; // Allow another attempt if manual attempt reopen method.
        workflowstate: string; // The next marking workflow state.
        plugindata?: {
            assignfeedbackcomments_editor?: {
                text: string; // The text for this feedback.
                format: number; // The format for this feedback.
            }; // Editor structure.
            files_filemanager?: number; // The id of a draft area containing files for this feedback.
        }; // Plugin data.
        advancedgradingdata?: {
            guide?: {
                criteria: {
                    criterionid: number; // Criterion id.
                    fillings?: { // Filling.
                        criterionid: number; // Criterion id.
                        levelid?: number; // Level id.
                        remark?: string; // Remark.
                        remarkformat?: number; // Remark format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                        score: number; // Maximum score.
                    }[];
                }[];
            }; // Items.
            rubric?: {
                criteria: {
                    criterionid: number; // Criterion id.
                    fillings?: { // Filling.
                        criterionid: number; // Criterion id.
                        levelid?: number; // Level id.
                        remark?: string; // Remark.
                        remarkformat?: number; // Remark format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                    }[];
                }[];
            }; // Items.
        }; // Advanced grading data.
    }[];
};

/**
 * Data returned by mod_assign_save_grades WS.
 */
export type ModAssignSaveGradesWSResponse = {}; // WARNING: Null structure found;

/**
 * Params of mod_assign_save_submission WS.
 */
export type ModAssignSaveSubmissionWSParams = {
    assignmentid: number; // The assignment id to operate on.
    plugindata: {
        onlinetext_editor?: {
            text: string; // The text for this submission.
            format: number; // The format for this submission.
            itemid: number; // The draft area id for files attached to the submission.
        }; // Editor structure.
        files_filemanager?: number; // The id of a draft area containing files for this submission.
    };
};

/**
 * Data returned by mod_assign_save_submission WS.
 */
export type ModAssignSaveSubmissionWSResponse = CoreWSExternalWarning[];

/**
 * Params of mod_assign_save_user_extensions WS.
 */
export type ModAssignSaveUserExtensionsWSParams = {
    assignmentid: number; // The assignment id to operate on.
    userids: number[]; // 1 or more user ids.
    dates: number[]; // 1 or more extension dates (timestamp).
};

/**
 * Data returned by mod_assign_save_user_extensions WS.
 */
export type ModAssignSaveUserExtensionsWSResponse = CoreWSExternalWarning[];

/**
 * Params of mod_assign_set_user_flags WS.
 */
export type ModAssignSetUserFlagsWSParams = {
    assignmentid: number; // Assignment id.
    userflags: {
        userid: number; // Student id.
        locked?: number; // Locked.
        mailed?: number; // Mailed.
        extensionduedate?: number; // Extension due date.
        workflowstate?: string; // Marking workflow state.
        allocatedmarker?: number; // Allocated marker.
    }[];
};

/**
 * Data returned by mod_assign_set_user_flags WS.
 */
export type ModAssignSetUserFlagsWSResponse = {
    id: number; // Id of record if successful, -1 for failure.
    userid: number; // Userid of record.
    errormessage?: string; // Failure error message.
}[];

/**
 * Params of mod_assign_submit_for_grading WS.
 */
export type ModAssignSubmitForGradingWSParams = {
    assignmentid: number; // The assignment id to operate on.
    acceptsubmissionstatement: boolean; // Accept the assignment submission statement.
};

/**
 * Data returned by mod_assign_submit_for_grading WS.
 */
export type ModAssignSubmitForGradingWSResponse = CoreWSExternalWarning[];

/**
 * Params of mod_assign_submit_grading_form WS.
 */
export type ModAssignSubmitGradingFormWSParams = {
    assignmentid: number; // The assignment id to operate on.
    userid: number; // The user id the submission belongs to.
    jsonformdata: string; // The data from the grading form, encoded as a json array.
};

/**
 * Data returned by mod_assign_submit_grading_form WS.
 */
export type ModAssignSubmitGradingFormWSResponse = CoreWSExternalWarning[];

/**
 * Params of mod_assign_unlock_submissions WS.
 */
export type ModAssignUnlockSubmissionsWSParams = {
    assignmentid: number; // The assignment id to operate on.
    userids: number[]; // 1 or more user ids.
};

/**
 * Data returned by mod_assign_unlock_submissions WS.
 */
export type ModAssignUnlockSubmissionsWSResponse = CoreWSExternalWarning[];

/**
 * Params of mod_assign_view_assign WS.
 */
export type ModAssignViewAssignWSParams = {
    assignid: number; // Assign instance id.
};

/**
 * Data returned by mod_assign_view_assign WS.
 */
export type ModAssignViewAssignWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_assign_view_grading_table WS.
 */
export type ModAssignViewGradingTableWSParams = {
    assignid: number; // Assign instance id.
};

/**
 * Data returned by mod_assign_view_grading_table WS.
 */
export type ModAssignViewGradingTableWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_assign_view_submission_status WS.
 */
export type ModAssignViewSubmissionStatusWSParams = {
    assignid: number; // Assign instance id.
};

/**
 * Data returned by mod_assign_view_submission_status WS.
 */
export type ModAssignViewSubmissionStatusWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_book_get_books_by_courses WS.
 */
export type ModBookGetBooksByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_book_get_books_by_courses WS.
 */
export type ModBookGetBooksByCoursesWSResponse = {
    books: {
        id: number; // Book id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // Book name.
        intro: string; // The Book intro.
        introformat: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles?: CoreWSExternalFile[];
        numbering: number; // Book numbering configuration.
        navstyle: number; // Book navigation style configuration.
        customtitles: number; // Book custom titles type.
        revision?: number; // Book revision.
        timecreated?: number; // Time of creation.
        timemodified?: number; // Time of last modification.
        section?: number; // Course section id.
        visible?: boolean; // Visible.
        groupmode?: number; // Group mode.
        groupingid?: number; // Group id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_book_view_book WS.
 */
export type ModBookViewBookWSParams = {
    bookid: number; // Book instance id.
    chapterid?: number; // Chapter id.
};

/**
 * Data returned by mod_book_view_book WS.
 */
export type ModBookViewBookWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_chat_get_chat_latest_messages WS.
 */
export type ModChatGetChatLatestMessagesWSParams = {
    chatsid: string; // Chat session id (obtained via mod_chat_login_user).
    chatlasttime?: number; // Last time messages were retrieved (epoch time).
};

/**
 * Data returned by mod_chat_get_chat_latest_messages WS.
 */
export type ModChatGetChatLatestMessagesWSResponse = {
    messages: { // List of users.
        id: number; // Message id.
        userid: number; // User id.
        system: boolean; // True if is a system message (like user joined).
        message: string; // Message text.
        timestamp: number; // Timestamp for the message.
    }[];
    chatnewlasttime: number; // New last time.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_chat_get_chat_users WS.
 */
export type ModChatGetChatUsersWSParams = {
    chatsid: string; // Chat session id (obtained via mod_chat_login_user).
};

/**
 * Data returned by mod_chat_get_chat_users WS.
 */
export type ModChatGetChatUsersWSResponse = {
    users: { // List of users.
        id: number; // User id.
        fullname: string; // User full name.
        profileimageurl: string; // User picture URL.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_chat_get_chats_by_courses WS.
 */
export type ModChatGetChatsByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_chat_get_chats_by_courses WS.
 */
export type ModChatGetChatsByCoursesWSResponse = {
    chats: {
        id: number; // Chat id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // Chat name.
        intro: string; // The Chat intro.
        introformat: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles?: CoreWSExternalFile[];
        chatmethod?: string; // Chat method (sockets, ajax, header_js).
        keepdays?: number; // Keep days.
        studentlogs?: number; // Student logs visible to everyone.
        chattime?: number; // Chat time.
        schedule?: number; // Schedule type.
        timemodified?: number; // Time of last modification.
        section?: number; // Course section id.
        visible?: boolean; // Visible.
        groupmode?: number; // Group mode.
        groupingid?: number; // Group id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_chat_get_session_messages WS.
 */
export type ModChatGetSessionMessagesWSParams = {
    chatid: number; // Chat instance id.
    sessionstart: number; // The session start time (timestamp).
    sessionend: number; // The session end time (timestamp).
    groupid?: number; // Get messages from users in this group.
                                             // 0 means that the function will determine the user group.

};

/**
 * Data returned by mod_chat_get_session_messages WS.
 */
export type ModChatGetSessionMessagesWSResponse = {
    messages: {
        id: number; // The message record id.
        chatid: number; // The chat id.
        userid: number; // The user who wrote the message.
        groupid: number; // The group this message belongs to.
        issystem: boolean; // Whether is a system message or not.
        message: string; // The message text.
        timestamp: number; // The message timestamp (indicates when the message was sent).
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_chat_get_sessions WS.
 */
export type ModChatGetSessionsWSParams = {
    chatid: number; // Chat instance id.
    groupid?: number; // Get messages from users in this group.
                                             // 0 means that the function will determine the user group.

    showall?: boolean; // Whether to show completed sessions or not.
};

/**
 * Data returned by mod_chat_get_sessions WS.
 */
export type ModChatGetSessionsWSResponse = {
    sessions: { // List of users.
        sessionstart: number; // Session start time.
        sessionend: number; // Session end time.
        sessionusers: { // Session users.
            userid: number; // User id.
            messagecount: number; // Number of messages in the session.
        }[];
        iscomplete: boolean; // Whether the session is completed or not.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_chat_login_user WS.
 */
export type ModChatLoginUserWSParams = {
    chatid: number; // Chat instance id.
    groupid?: number; // Group id, 0 means that the function will determine the user group.
};

/**
 * Data returned by mod_chat_login_user WS.
 */
export type ModChatLoginUserWSResponse = {
    chatsid: string; // Unique chat session id.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_chat_send_chat_message WS.
 */
export type ModChatSendChatMessageWSParams = {
    chatsid: string; // Chat session id (obtained via mod_chat_login_user).
    messagetext: string; // The message text.
    beepid?: string; // The beep id.
};

/**
 * Data returned by mod_chat_send_chat_message WS.
 */
export type ModChatSendChatMessageWSResponse = {
    messageid: number; // Message sent id.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_chat_view_chat WS.
 */
export type ModChatViewChatWSParams = {
    chatid: number; // Chat instance id.
};

/**
 * Data returned by mod_chat_view_chat WS.
 */
export type ModChatViewChatWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_choice_delete_choice_responses WS.
 */
export type ModChoiceDeleteChoiceResponsesWSParams = {
    choiceid: number; // Choice instance id.
    responses?: number[]; // Array of response ids, empty for deleting all the current user responses.
};

/**
 * Data returned by mod_choice_delete_choice_responses WS.
 */
export type ModChoiceDeleteChoiceResponsesWSResponse = {
    status: boolean; // Status, true if everything went right.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_choice_get_choice_options WS.
 */
export type ModChoiceGetChoiceOptionsWSParams = {
    choiceid: number; // Choice instance id.
};

/**
 * Data returned by mod_choice_get_choice_options WS.
 */
export type ModChoiceGetChoiceOptionsWSResponse = {
    options: { // Options.
        id: number; // Option id.
        text: string; // Text of the choice.
        maxanswers: number; // Maximum number of answers.
        displaylayout: boolean; // True for orizontal, otherwise vertical.
        countanswers: number; // Number of answers.
        checked: boolean; // We already answered.
        disabled: boolean; // Option disabled.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_choice_get_choice_results WS.
 */
export type ModChoiceGetChoiceResultsWSParams = {
    choiceid: number; // Choice instance id.
};

/**
 * Data returned by mod_choice_get_choice_results WS.
 */
export type ModChoiceGetChoiceResultsWSResponse = {
    options: {
        id: number; // Choice instance id.
        text: string; // Text of the choice.
        maxanswer: number; // Maximum number of answers.
        userresponses: {
            userid: number; // User id.
            fullname: string; // User full name.
            profileimageurl: string; // Profile user image url.
            answerid?: number; // Answer id.
            timemodified?: number; // Time of modification.
        }[];
        numberofuser: number; // Number of users answers.
        percentageamount: number; // Percentage of users answers.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_choice_get_choices_by_courses WS.
 */
export type ModChoiceGetChoicesByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_choice_get_choices_by_courses WS.
 */
export type ModChoiceGetChoicesByCoursesWSResponse = {
    choices: {
        id: number; // Choice instance id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // Choice name.
        intro: string; // The choice intro.
        introformat: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles?: CoreWSExternalFile[];
        publish?: boolean; // If choice is published.
        showresults?: number; // 0 never, 1 after answer, 2 after close, 3 always.
        display?: number; // Display mode (vertical, horizontal).
        allowupdate?: boolean; // Allow update.
        allowmultiple?: boolean; // Allow multiple choices.
        showunanswered?: boolean; // Show users who not answered yet.
        includeinactive?: boolean; // Include inactive users.
        limitanswers?: boolean; // Limit unswers.
        timeopen?: number; // Date of opening validity.
        timeclose?: number; // Date of closing validity.
        showpreview?: boolean; // Show preview before timeopen.
        timemodified?: number; // Time of last modification.
        completionsubmit?: boolean; // Completion on user submission.
        showavailable?: boolean; // Show available spaces.
        section?: number; // Course section id.
        visible?: boolean; // Visible.
        groupmode?: number; // Group mode.
        groupingid?: number; // Group id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_choice_submit_choice_response WS.
 */
export type ModChoiceSubmitChoiceResponseWSParams = {
    choiceid: number; // Choice instance id.
    responses: number[]; // Array of response ids.
};

/**
 * Data returned by mod_choice_submit_choice_response WS.
 */
export type ModChoiceSubmitChoiceResponseWSResponse = {
    answers: {
        id: number; // Answer id.
        choiceid: number; // Choiceid.
        userid: number; // User id.
        optionid: number; // Optionid.
        timemodified: number; // Time of last modification.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_choice_view_choice WS.
 */
export type ModChoiceViewChoiceWSParams = {
    choiceid: number; // Choice instance id.
};

/**
 * Data returned by mod_choice_view_choice WS.
 */
export type ModChoiceViewChoiceWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_data_add_entry WS.
 */
export type ModDataAddEntryWSParams = {
    databaseid: number; // Data instance id.
    groupid?: number; // Group id, 0 means that the function will determine the user group.
    data: { // The fields data to be created.
        fieldid: number; // The field id.
        subfield?: string; // The subfield name (if required).
        value: string; // The contents for the field always JSON encoded.
    }[];
};

/**
 * Data returned by mod_data_add_entry WS.
 */
export type ModDataAddEntryWSResponse = {
    newentryid: number; // True new created entry id. 0 if the entry was not created.
    generalnotifications: string[];
    fieldnotifications: {
        fieldname: string; // The field name.
        notification: string; // The notification for the field.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_data_approve_entry WS.
 */
export type ModDataApproveEntryWSParams = {
    entryid: number; // Record entry id.
    approve?: boolean; // Whether to approve (true) or unapprove the entry.
};

/**
 * Data returned by mod_data_approve_entry WS.
 */
export type ModDataApproveEntryWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_data_delete_entry WS.
 */
export type ModDataDeleteEntryWSParams = {
    entryid: number; // Record entry id.
};

/**
 * Data returned by mod_data_delete_entry WS.
 */
export type ModDataDeleteEntryWSResponse = {
    status: boolean; // Always true. If we see this field it means that the entry was deleted.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_data_get_data_access_information WS.
 */
export type ModDataGetDataAccessInformationWSParams = {
    databaseid: number; // Database instance id.
    groupid?: number; // Group id, 0 means that the function will determine the user group.
};

/**
 * Data returned by mod_data_get_data_access_information WS.
 */
export type ModDataGetDataAccessInformationWSResponse = {
    groupid: number; // User current group id (calculated).
    canaddentry: boolean; // Whether the user can add entries or not.
    canmanageentries: boolean; // Whether the user can manage entries or not.
    canapprove: boolean; // Whether the user can approve entries or not.
    timeavailable: boolean; // Whether the database is available or not by time restrictions.
    inreadonlyperiod: boolean; // Whether the database is in read mode only.
    numentries: number; // The number of entries the current user added.
    entrieslefttoadd: number; // The number of entries left to complete the activity.
    entrieslefttoview: number; // The number of entries left to view other users entries.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_data_get_databases_by_courses WS.
 */
export type ModDataGetDatabasesByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_data_get_databases_by_courses WS.
 */
export type ModDataGetDatabasesByCoursesWSResponse = {
    databases: {
        id: number; // Database id.
        course: number; // Course id.
        name: string; // Database name.
        intro: string; // The Database intro.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        comments: boolean; // Comments enabled.
        timeavailablefrom: number; // Timeavailablefrom field.
        timeavailableto: number; // Timeavailableto field.
        timeviewfrom: number; // Timeviewfrom field.
        timeviewto: number; // Timeviewto field.
        requiredentries: number; // Requiredentries field.
        requiredentriestoview: number; // Requiredentriestoview field.
        maxentries: number; // Maxentries field.
        rssarticles: number; // Rssarticles field.
        singletemplate: string; // Singletemplate field.
        listtemplate: string; // Listtemplate field.
        listtemplateheader: string; // Listtemplateheader field.
        listtemplatefooter: string; // Listtemplatefooter field.
        addtemplate: string; // Addtemplate field.
        rsstemplate: string; // Rsstemplate field.
        rsstitletemplate: string; // Rsstitletemplate field.
        csstemplate: string; // Csstemplate field.
        jstemplate: string; // Jstemplate field.
        asearchtemplate: string; // Asearchtemplate field.
        approval: boolean; // Approval field.
        manageapproved: boolean; // Manageapproved field.
        scale?: number; // Scale field.
        assessed?: number; // Assessed field.
        assesstimestart?: number; // Assesstimestart field.
        assesstimefinish?: number; // Assesstimefinish field.
        defaultsort: number; // Defaultsort field.
        defaultsortdir: number; // Defaultsortdir field.
        editany?: boolean; // Editany field (not used any more).
        notification?: number; // Notification field (not used any more).
        timemodified?: number; // Time modified.
        coursemodule: number; // Coursemodule.
        introfiles?: { // Introfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_data_get_entries WS.
 */
export type ModDataGetEntriesWSParams = {
    databaseid: number; // Data instance id.
    groupid?: number; // Group id, 0 means that the function will determine the user group.
    returncontents?: boolean; // Whether to return contents or not. This will return each entry
                                                     // raw contents and the complete list view (using the template).

    sort?: number; // Sort the records by this field id, reserved ids are:
                                             // 0: timeadded
                                             // -1: firstname
                                             // -2: lastname
                                             // -3: approved
                                             // -4: timemodified.
                                             // Empty for using the default database setting.

    order?: string; // The direction of the sorting: 'ASC' or 'DESC'.
                                             // Empty for using the default database setting.

    page?: number; // The page of records to return.
    perpage?: number; // The number of records to return per page.
};

/**
 * Data returned by mod_data_get_entries WS.
 */
export type ModDataGetEntriesWSResponse = {
    entries: {
        id: number; // Record id.
        userid: number; // The id of the user who created the record.
        groupid: number; // The group id this record belongs to (0 for no groups).
        dataid: number; // The database id this record belongs to.
        timecreated: number; // Time the record was created.
        timemodified: number; // Last time the record was modified.
        approved: boolean; // Whether the entry has been approved (if the database is configured in that way).
        canmanageentry: boolean; // Whether the current user can manage this entry.
        fullname?: string; // The user who created the entry fullname.
        contents?: { // The record contents.
            id: number; // Content id.
            fieldid: number; // The field type of the content.
            recordid: number; // The record this content belongs to.
            content: string; // Contents.
            content1: string; // Contents.
            content2: string; // Contents.
            content3: string; // Contents.
            content4: string; // Contents.
            files?: { // Files.
                filename?: string; // File name.
                filepath?: string; // File path.
                filesize?: number; // File size.
                fileurl?: string; // Downloadable file url.
                timemodified?: number; // Time modified.
                mimetype?: string; // File mime type.
                isexternalfile?: boolean; // Whether is an external file.
                repositorytype?: string; // The repository type for the external files.
            }[];
        }[];
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    totalcount: number; // Total count of records.
    totalfilesize: number; // Total size (bytes) of the files included in the records.
    listviewcontents?: string; // The list view contents as is rendered in the site.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_data_get_entry WS.
 */
export type ModDataGetEntryWSParams = {
    entryid: number; // Record entry id.
    returncontents?: boolean; // Whether to return contents or not.
};

/**
 * Data returned by mod_data_get_entry WS.
 */
export type ModDataGetEntryWSResponse = {
    entry: {
        id: number; // Record id.
        userid: number; // The id of the user who created the record.
        groupid: number; // The group id this record belongs to (0 for no groups).
        dataid: number; // The database id this record belongs to.
        timecreated: number; // Time the record was created.
        timemodified: number; // Last time the record was modified.
        approved: boolean; // Whether the entry has been approved (if the database is configured in that way).
        canmanageentry: boolean; // Whether the current user can manage this entry.
        fullname?: string; // The user who created the entry fullname.
        contents?: { // The record contents.
            id: number; // Content id.
            fieldid: number; // The field type of the content.
            recordid: number; // The record this content belongs to.
            content: string; // Contents.
            content1: string; // Contents.
            content2: string; // Contents.
            content3: string; // Contents.
            content4: string; // Contents.
            files?: { // Files.
                filename?: string; // File name.
                filepath?: string; // File path.
                filesize?: number; // File size.
                fileurl?: string; // Downloadable file url.
                timemodified?: number; // Time modified.
                mimetype?: string; // File mime type.
                isexternalfile?: boolean; // Whether is an external file.
                repositorytype?: string; // The repository type for the external files.
            }[];
        }[];
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    };
    entryviewcontents?: string; // The entry as is rendered in the site.
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_data_get_fields WS.
 */
export type ModDataGetFieldsWSParams = {
    databaseid: number; // Database instance id.
};

/**
 * Data returned by mod_data_get_fields WS.
 */
export type ModDataGetFieldsWSResponse = {
    fields: {
        id: number; // Field id.
        dataid: number; // The field type of the content.
        type: string; // The field type.
        name: string; // The field name.
        description: string; // The field description.
        required: boolean; // Whether is a field required or not.
        param1: string; // Field parameters.
        param2: string; // Field parameters.
        param3: string; // Field parameters.
        param4: string; // Field parameters.
        param5: string; // Field parameters.
        param6: string; // Field parameters.
        param7: string; // Field parameters.
        param8: string; // Field parameters.
        param9: string; // Field parameters.
        param10: string; // Field parameters.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_data_search_entries WS.
 */
export type ModDataSearchEntriesWSParams = {
    databaseid: number; // Data instance id.
    groupid?: number; // Group id, 0 means that the function will determine the user group.
    returncontents?: boolean; // Whether to return contents or not.
    search?: string; // Search string (empty when using advanced).
    advsearch?: { // Advanced search.
        name: string; // Field key for search.
                                                         // Use fn or ln for first or last name.

        value: string; // JSON encoded value for search.
    }[];
    sort?: number; // Sort the records by this field id, reserved ids are:
                                             // 0: timeadded
                                             // -1: firstname
                                             // -2: lastname
                                             // -3: approved
                                             // -4: timemodified.
                                             // Empty for using the default database setting.

    order?: string; // The direction of the sorting: 'ASC' or 'DESC'.
                                             // Empty for using the default database setting.

    page?: number; // The page of records to return.
    perpage?: number; // The number of records to return per page.
};

/**
 * Data returned by mod_data_search_entries WS.
 */
export type ModDataSearchEntriesWSResponse = {
    entries: {
        id: number; // Record id.
        userid: number; // The id of the user who created the record.
        groupid: number; // The group id this record belongs to (0 for no groups).
        dataid: number; // The database id this record belongs to.
        timecreated: number; // Time the record was created.
        timemodified: number; // Last time the record was modified.
        approved: boolean; // Whether the entry has been approved (if the database is configured in that way).
        canmanageentry: boolean; // Whether the current user can manage this entry.
        fullname?: string; // The user who created the entry fullname.
        contents?: { // The record contents.
            id: number; // Content id.
            fieldid: number; // The field type of the content.
            recordid: number; // The record this content belongs to.
            content: string; // Contents.
            content1: string; // Contents.
            content2: string; // Contents.
            content3: string; // Contents.
            content4: string; // Contents.
            files?: { // Files.
                filename?: string; // File name.
                filepath?: string; // File path.
                filesize?: number; // File size.
                fileurl?: string; // Downloadable file url.
                timemodified?: number; // Time modified.
                mimetype?: string; // File mime type.
                isexternalfile?: boolean; // Whether is an external file.
                repositorytype?: string; // The repository type for the external files.
            }[];
        }[];
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    totalcount: number; // Total count of records returned by the search.
    maxcount?: number; // Total count of records that the user could see in the database
                 // (if all the search criterias were removed).

    listviewcontents?: string; // The list view contents as is rendered in the site.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_data_update_entry WS.
 */
export type ModDataUpdateEntryWSParams = {
    entryid: number; // The entry record id.
    data: { // The fields data to be updated.
        fieldid: number; // The field id.
        subfield?: string; // The subfield name (if required).
        value: string; // The new contents for the field always JSON encoded.
    }[];
};

/**
 * Data returned by mod_data_update_entry WS.
 */
export type ModDataUpdateEntryWSResponse = {
    updated: boolean; // True if the entry was successfully updated, false other wise.
    generalnotifications: string[];
    fieldnotifications: {
        fieldname: string; // The field name.
        notification: string; // The notification for the field.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_data_view_database WS.
 */
export type ModDataViewDatabaseWSParams = {
    databaseid: number; // Data instance id.
};

/**
 * Data returned by mod_data_view_database WS.
 */
export type ModDataViewDatabaseWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_get_analysis WS.
 */
export type ModFeedbackGetAnalysisWSParams = {
    feedbackid: number; // Feedback instance id.
    groupid?: number; // Group id, 0 means that the function will determine the user group.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_get_analysis WS.
 */
export type ModFeedbackGetAnalysisWSResponse = {
    completedcount: number; // Number of completed submissions.
    itemscount: number; // Number of items (questions).
    itemsdata: {
        item: {
            id: number; // The record id.
            feedback: number; // The feedback instance id this records belongs to.
            template: number; // If it belogns to a template, the template id.
            name: string; // The item name.
            label: string; // The item label.
            presentation: string; // The text describing the item or the available possible answers.
            typ: string; // The type of the item.
            hasvalue: number; // Whether it has a value or not.
            position: number; // The position in the list of questions.
            required: boolean; // Whether is a item (question) required or not.
            dependitem: number; // The item id this item depend on.
            dependvalue: string; // The depend value.
            options: string; // Different additional settings for the item (question).
            itemfiles: { // Itemfiles.
                contextid: number; // Contextid.
                component: string; // Component.
                filearea: string; // Filearea.
                itemid: number; // Itemid.
                filepath: string; // Filepath.
                filename: string; // Filename.
                isdir: boolean; // Isdir.
                isimage: boolean; // Isimage.
                timemodified: number; // Timemodified.
                timecreated: number; // Timecreated.
                filesize: number; // Filesize.
                author: string; // Author.
                license: string; // License.
                filenameshort: string; // Filenameshort.
                filesizeformatted: string; // Filesizeformatted.
                icon: string; // Icon.
                timecreatedformatted: string; // Timecreatedformatted.
                timemodifiedformatted: string; // Timemodifiedformatted.
                url: string; // Url.
            }[];
            itemnumber: number; // The item position number.
            otherdata: string; // Additional data that may be required by external functions.
        };
        data: string[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_get_current_completed_tmp WS.
 */
export type ModFeedbackGetCurrentCompletedTmpWSParams = {
    feedbackid: number; // Feedback instance id.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_get_current_completed_tmp WS.
 */
export type ModFeedbackGetCurrentCompletedTmpWSResponse = {
    feedback: {
        id: number; // The record id.
        feedback: number; // The feedback instance id this records belongs to.
        userid: number; // The user who completed the feedback (0 for anonymous).
        guestid: string; // For guests, this is the session key.
        timemodified: number; // The last time the feedback was completed.
        random_response: number; // The response number (used when shuffling anonymous responses).
        anonymous_response: number; // Whether is an anonymous response.
        courseid: number; // The course id where the feedback was completed.
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_get_feedback_access_information WS.
 */
export type ModFeedbackGetFeedbackAccessInformationWSParams = {
    feedbackid: number; // Feedback instance id.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_get_feedback_access_information WS.
 */
export type ModFeedbackGetFeedbackAccessInformationWSResponse = {
    canviewanalysis: boolean; // Whether the user can view the analysis or not.
    cancomplete: boolean; // Whether the user can complete the feedback or not.
    cansubmit: boolean; // Whether the user can submit the feedback or not.
    candeletesubmissions: boolean; // Whether the user can delete submissions or not.
    canviewreports: boolean; // Whether the user can view the feedback reports or not.
    canedititems: boolean; // Whether the user can edit feedback items or not.
    isempty: boolean; // Whether the feedback has questions or not.
    isopen: boolean; // Whether the feedback has active access time restrictions or not.
    isalreadysubmitted: boolean; // Whether the feedback is already submitted or not.
    isanonymous: boolean; // Whether the feedback is anonymous or not.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_get_feedbacks_by_courses WS.
 */
export type ModFeedbackGetFeedbacksByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_feedback_get_feedbacks_by_courses WS.
 */
export type ModFeedbackGetFeedbacksByCoursesWSResponse = {
    feedbacks: {
        id: number; // The primary key of the record.
        course: number; // Course id this feedback is part of.
        name: string; // Feedback name.
        intro: string; // Feedback introduction text.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        anonymous: number; // Whether the feedback is anonymous.
        email_notification?: boolean; // Whether email notifications will be sent to teachers.
        multiple_submit: boolean; // Whether multiple submissions are allowed.
        autonumbering: boolean; // Whether questions should be auto-numbered.
        site_after_submit?: string; // Link to next page after submission.
        page_after_submit?: string; // Text to display after submission.
        page_after_submitformat?: number; // Page_after_submit format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        publish_stats: boolean; // Whether stats should be published.
        timeopen?: number; // Allow answers from this time.
        timeclose?: number; // Allow answers until this time.
        timemodified?: number; // The time this record was modified.
        completionsubmit: boolean; // If this field is set to 1, then the activity will be automatically marked as complete on submission.
        coursemodule: number; // Coursemodule.
        introfiles: { // Introfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        pageaftersubmitfiles?: { // Pageaftersubmitfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_get_finished_responses WS.
 */
export type ModFeedbackGetFinishedResponsesWSParams = {
    feedbackid: number; // Feedback instance id.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_get_finished_responses WS.
 */
export type ModFeedbackGetFinishedResponsesWSResponse = {
    responses: {
        id: number; // The record id.
        course_id: number; // The course id this record belongs to.
        item: number; // The item id that was responded.
        completed: number; // Reference to the feedback_completed table.
        tmp_completed: number; // Old field - not used anymore.
        value: string; // The response value.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_get_items WS.
 */
export type ModFeedbackGetItemsWSParams = {
    feedbackid: number; // Feedback instance id.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_get_items WS.
 */
export type ModFeedbackGetItemsWSResponse = {
    items: {
        id: number; // The record id.
        feedback: number; // The feedback instance id this records belongs to.
        template: number; // If it belogns to a template, the template id.
        name: string; // The item name.
        label: string; // The item label.
        presentation: string; // The text describing the item or the available possible answers.
        typ: string; // The type of the item.
        hasvalue: number; // Whether it has a value or not.
        position: number; // The position in the list of questions.
        required: boolean; // Whether is a item (question) required or not.
        dependitem: number; // The item id this item depend on.
        dependvalue: string; // The depend value.
        options: string; // Different additional settings for the item (question).
        itemfiles: { // Itemfiles.
            contextid: number; // Contextid.
            component: string; // Component.
            filearea: string; // Filearea.
            itemid: number; // Itemid.
            filepath: string; // Filepath.
            filename: string; // Filename.
            isdir: boolean; // Isdir.
            isimage: boolean; // Isimage.
            timemodified: number; // Timemodified.
            timecreated: number; // Timecreated.
            filesize: number; // Filesize.
            author: string; // Author.
            license: string; // License.
            filenameshort: string; // Filenameshort.
            filesizeformatted: string; // Filesizeformatted.
            icon: string; // Icon.
            timecreatedformatted: string; // Timecreatedformatted.
            timemodifiedformatted: string; // Timemodifiedformatted.
            url: string; // Url.
        }[];
        itemnumber: number; // The item position number.
        otherdata: string; // Additional data that may be required by external functions.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_get_last_completed WS.
 */
export type ModFeedbackGetLastCompletedWSParams = {
    feedbackid: number; // Feedback instance id.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_get_last_completed WS.
 */
export type ModFeedbackGetLastCompletedWSResponse = {
    completed: {
        id: number; // The record id.
        feedback: number; // The feedback instance id this records belongs to.
        userid: number; // The user who completed the feedback (0 for anonymous).
        timemodified: number; // The last time the feedback was completed.
        random_response: number; // The response number (used when shuffling anonymous responses).
        anonymous_response: number; // Whether is an anonymous response.
        courseid: number; // The course id where the feedback was completed.
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_get_non_respondents WS.
 */
export type ModFeedbackGetNonRespondentsWSParams = {
    feedbackid: number; // Feedback instance id.
    groupid?: number; // Group id, 0 means that the function will determine the user group.
    sort?: string; // Sort param, must be firstname, lastname or lastaccess (default).
    page?: number; // The page of records to return.
    perpage?: number; // The number of records to return per page.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_get_non_respondents WS.
 */
export type ModFeedbackGetNonRespondentsWSResponse = {
    users: {
        courseid: number; // Course id.
        userid: number; // The user id.
        fullname: string; // User full name.
        started: boolean; // If the user has started the attempt.
    }[];
    total: number; // Total number of non respondents.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_get_page_items WS.
 */
export type ModFeedbackGetPageItemsWSParams = {
    feedbackid: number; // Feedback instance id.
    page: number; // The page to get starting by 0.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_get_page_items WS.
 */
export type ModFeedbackGetPageItemsWSResponse = {
    items: {
        id: number; // The record id.
        feedback: number; // The feedback instance id this records belongs to.
        template: number; // If it belogns to a template, the template id.
        name: string; // The item name.
        label: string; // The item label.
        presentation: string; // The text describing the item or the available possible answers.
        typ: string; // The type of the item.
        hasvalue: number; // Whether it has a value or not.
        position: number; // The position in the list of questions.
        required: boolean; // Whether is a item (question) required or not.
        dependitem: number; // The item id this item depend on.
        dependvalue: string; // The depend value.
        options: string; // Different additional settings for the item (question).
        itemfiles: { // Itemfiles.
            contextid: number; // Contextid.
            component: string; // Component.
            filearea: string; // Filearea.
            itemid: number; // Itemid.
            filepath: string; // Filepath.
            filename: string; // Filename.
            isdir: boolean; // Isdir.
            isimage: boolean; // Isimage.
            timemodified: number; // Timemodified.
            timecreated: number; // Timecreated.
            filesize: number; // Filesize.
            author: string; // Author.
            license: string; // License.
            filenameshort: string; // Filenameshort.
            filesizeformatted: string; // Filesizeformatted.
            icon: string; // Icon.
            timecreatedformatted: string; // Timecreatedformatted.
            timemodifiedformatted: string; // Timemodifiedformatted.
            url: string; // Url.
        }[];
        itemnumber: number; // The item position number.
        otherdata: string; // Additional data that may be required by external functions.
    }[];
    hasprevpage: boolean; // Whether is a previous page.
    hasnextpage: boolean; // Whether there are more pages.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_get_responses_analysis WS.
 */
export type ModFeedbackGetResponsesAnalysisWSParams = {
    feedbackid: number; // Feedback instance id.
    groupid?: number; // Group id, 0 means that the function will determine the user group.
    page?: number; // The page of records to return.
    perpage?: number; // The number of records to return per page.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_get_responses_analysis WS.
 */
export type ModFeedbackGetResponsesAnalysisWSResponse = {
    attempts: {
        id: number; // Completed id.
        courseid: number; // Course id.
        userid: number; // User who responded.
        timemodified: number; // Time modified for the response.
        fullname: string; // User full name.
        responses: {
            id: number; // Response id.
            name: string; // Response name.
            printval: string; // Response ready for output.
            rawval: string; // Response raw value.
        }[];
    }[];
    totalattempts: number; // Total responses count.
    anonattempts: {
        id: number; // Completed id.
        courseid: number; // Course id.
        number: number; // Response number.
        responses: {
            id: number; // Response id.
            name: string; // Response name.
            printval: string; // Response ready for output.
            rawval: string; // Response raw value.
        }[];
    }[];
    totalanonattempts: number; // Total anonymous responses count.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_get_unfinished_responses WS.
 */
export type ModFeedbackGetUnfinishedResponsesWSParams = {
    feedbackid: number; // Feedback instance id.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_get_unfinished_responses WS.
 */
export type ModFeedbackGetUnfinishedResponsesWSResponse = {
    responses: {
        id: number; // The record id.
        course_id: number; // The course id this record belongs to.
        item: number; // The item id that was responded.
        completed: number; // Reference to the feedback_completedtmp table.
        tmp_completed: number; // Old field - not used anymore.
        value: string; // The response value.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_launch_feedback WS.
 */
export type ModFeedbackLaunchFeedbackWSParams = {
    feedbackid: number; // Feedback instance id.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_launch_feedback WS.
 */
export type ModFeedbackLaunchFeedbackWSResponse = {
    gopage: number; // The next page to go (-1 if we were already in the last page). 0 for first page.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_process_page WS.
 */
export type ModFeedbackProcessPageWSParams = {
    feedbackid: number; // Feedback instance id.
    page: number; // The page being processed.
    responses?: { // The data to be processed.
        name: string; // The response name (usually type[index]_id).
        value: string; // The response value.
    }[];
    goprevious?: boolean; // Whether we want to jump to previous page.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_process_page WS.
 */
export type ModFeedbackProcessPageWSResponse = {
    jumpto: number; // The page to jump to.
    completed: boolean; // If the user completed the feedback.
    completionpagecontents: string; // The completion page contents.
    siteaftersubmit: string; // The link (could be relative) to show after submit.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_feedback_view_feedback WS.
 */
export type ModFeedbackViewFeedbackWSParams = {
    feedbackid: number; // Feedback instance id.
    moduleviewed?: boolean; // If we need to mark the module as viewed for completion.
    courseid?: number; // Course where user completes the feedback (for site feedbacks only).
};

/**
 * Data returned by mod_feedback_view_feedback WS.
 */
export type ModFeedbackViewFeedbackWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_folder_get_folders_by_courses WS.
 */
export type ModFolderGetFoldersByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_folder_get_folders_by_courses WS.
 */
export type ModFolderGetFoldersByCoursesWSResponse = {
    folders: {
        id: number; // Module id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // Page name.
        intro: string; // Summary.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles: CoreWSExternalFile[];
        revision: number; // Incremented when after each file changes, to avoid cache.
        timemodified: number; // Last time the folder was modified.
        display: number; // Display type of folder contents on a separate page or inline.
        showexpanded: number; // 1 = expanded, 0 = collapsed for sub-folders.
        showdownloadfolder: number; // Whether to show the download folder button.
        forcedownload: number; // Whether file download is forced.
        section: number; // Course section id.
        visible: number; // Module visibility.
        groupmode: number; // Group mode.
        groupingid: number; // Grouping id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_folder_view_folder WS.
 */
export type ModFolderViewFolderWSParams = {
    folderid: number; // Folder instance id.
};

/**
 * Data returned by mod_folder_view_folder WS.
 */
export type ModFolderViewFolderWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_add_discussion WS.
 */
export type ModForumAddDiscussionWSParams = {
    forumid: number; // Forum instance ID.
    subject: string; // New Discussion subject.
    message: string; // New Discussion message (only html format allowed).
    groupid?: number; // The group, default to 0.
    options?: { // Options.
        name: string; // The allowed keys (value format) are:
                                     // discussionsubscribe (bool); subscribe to the discussion?, default to true
                                     // discussionpinned    (bool); is the discussion pinned, default to false
                                     // inlineattachmentsid              (int); the draft file area id for inline attachments
                                     // attachmentsid       (int); the draft file area id for attachments.

        value: string; // The value of the option,
                                                         // This param is validated in the external function.

    }[];
};

/**
 * Data returned by mod_forum_add_discussion WS.
 */
export type ModForumAddDiscussionWSResponse = {
    discussionid: number; // New Discussion ID.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_add_discussion_post WS.
 */
export type ModForumAddDiscussionPostWSParams = {
    postid: number; // The post id we are going to reply to
                                             // (can be the initial discussion post.

    subject: string; // New post subject.
    message: string; // New post message (html assumed if messageformat is not provided).
    options?: { // Options.
        name: string; // The allowed keys (value format) are:
                                     // discussionsubscribe (bool); subscribe to the discussion?, default to true
                                     // private (bool); make this reply private to the author of the parent post, default to false.
                                     // inlineattachmentsid              (int); the draft file area id for inline attachments
                                     // attachmentsid       (int); the draft file area id for attachments
                                     // topreferredformat (bool); convert the message & messageformat to FORMAT_HTML, defaults to false.

        value: string; // The value of the option,
                                                         // this param is validated in the external function.

    }[];
    messageformat?: number; // Message format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
};

/**
 * Data returned by mod_forum_add_discussion_post WS.
 */
export type ModForumAddDiscussionPostWSResponse = {
    postid: number; // New post id.
    warnings?: CoreWSExternalWarning[];
    post: {
        id: number; // Id.
        subject: string; // Subject.
        replysubject: string; // Replysubject.
        message: string; // Message.
        messageformat: number; // Message format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        author: {
            id?: number; // Id.
            fullname?: string; // Fullname.
            isdeleted?: boolean; // Isdeleted.
            groups?: { // Groups.
                id: number; // Id.
                name: string; // Name.
                urls: {
                    image?: string; // Image.
                };
            }[];
            urls: {
                profile?: string; // The URL for the use profile page.
                profileimage?: string; // The URL for the use profile image.
            };
        };
        discussionid: number; // Discussionid.
        hasparent: boolean; // Hasparent.
        parentid?: number; // Parentid.
        timecreated: number; // Timecreated.
        unread?: boolean; // Unread.
        isdeleted: boolean; // Isdeleted.
        isprivatereply: boolean; // Isprivatereply.
        haswordcount: boolean; // Haswordcount.
        wordcount?: number; // Wordcount.
        charcount?: number; // Charcount.
        capabilities: {
            view: boolean; // Whether the user can view the post.
            edit: boolean; // Whether the user can edit the post.
            delete: boolean; // Whether the user can delete the post.
            split: boolean; // Whether the user can split the post.
            reply: boolean; // Whether the user can reply to the post.
            selfenrol: boolean; // Whether the user can self enrol into the course.
            export: boolean; // Whether the user can export the post.
            controlreadstatus: boolean; // Whether the user can control the read status of the post.
            canreplyprivately: boolean; // Whether the user can post a private reply.
        };
        urls?: {
            view?: string; // The URL used to view the post.
            viewisolated?: string; // The URL used to view the post in isolation.
            viewparent?: string; // The URL used to view the parent of the post.
            edit?: string; // The URL used to edit the post.
            delete?: string; // The URL used to delete the post.
            split?: string; // The URL used to split the discussion with the selected post being the first post in the new discussion.
            reply?: string; // The URL used to reply to the post.
            export?: string; // The URL used to export the post.
            markasread?: string; // The URL used to mark the post as read.
            markasunread?: string; // The URL used to mark the post as unread.
            discuss?: string; // Discuss.
        };
        attachments: { // Attachments.
            contextid: number; // Contextid.
            component: string; // Component.
            filearea: string; // Filearea.
            itemid: number; // Itemid.
            filepath: string; // Filepath.
            filename: string; // Filename.
            isdir: boolean; // Isdir.
            isimage: boolean; // Isimage.
            timemodified: number; // Timemodified.
            timecreated: number; // Timecreated.
            filesize: number; // Filesize.
            author: string; // Author.
            license: string; // License.
            filenameshort: string; // Filenameshort.
            filesizeformatted: string; // Filesizeformatted.
            icon: string; // Icon.
            timecreatedformatted: string; // Timecreatedformatted.
            timemodifiedformatted: string; // Timemodifiedformatted.
            url: string; // Url.
            urls: {
                export?: string; // The URL used to export the attachment.
            };
            html: {
                plagiarism?: string; // The HTML source for the Plagiarism Response.
            };
        }[];
        tags?: { // Tags.
            id: number; // The ID of the Tag.
            tagid: number; // The tagid.
            isstandard: boolean; // Whether this is a standard tag.
            displayname: string; // The display name of the tag.
            flag: boolean; // Wehther this tag is flagged.
            urls: {
                view: string; // The URL to view the tag.
            };
        }[];
        html?: {
            rating?: string; // The HTML source to rate the post.
            taglist?: string; // The HTML source to view the list of tags.
            authorsubheading?: string; // The HTML source to view the author details.
        };
    };
    messages?: { // List of warnings.
        type: string; // The classification to be used in the client side.
        message: string; // Untranslated english message to explain the warning.
    }[];
};

/**
 * Params of mod_forum_can_add_discussion WS.
 */
export type ModForumCanAddDiscussionWSParams = {
    forumid: number; // Forum instance ID.
    groupid?: number; // The group to check, default to active group.
                                             // Use -1 to check if the user can post in all the groups.

};

/**
 * Data returned by mod_forum_can_add_discussion WS.
 */
export type ModForumCanAddDiscussionWSResponse = {
    status: boolean; // True if the user can add discussions, false otherwise.
    canpindiscussions?: boolean; // True if the user can pin discussions, false otherwise.
    cancreateattachment?: boolean; // True if the user can add attachments, false otherwise.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_delete_post WS.
 */
export type ModForumDeletePostWSParams = {
    postid: number; // Post to be deleted. It can be a discussion topic post.
};

/**
 * Data returned by mod_forum_delete_post WS.
 */
export type ModForumDeletePostWSResponse = {
    status: boolean; // True if the post/discussion was deleted, false otherwise.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_get_discussion_post WS.
 */
export type ModForumGetDiscussionPostWSParams = {
    postid: number; // Post to fetch.
};

/**
 * Data returned by mod_forum_get_discussion_post WS.
 */
export type ModForumGetDiscussionPostWSResponse = {
    post: {
        id: number; // Id.
        subject: string; // Subject.
        replysubject: string; // Replysubject.
        message: string; // Message.
        messageformat: number; // Message format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        author: {
            id?: number; // Id.
            fullname?: string; // Fullname.
            isdeleted?: boolean; // Isdeleted.
            groups?: { // Groups.
                id: number; // Id.
                name: string; // Name.
                urls: {
                    image?: string; // Image.
                };
            }[];
            urls: {
                profile?: string; // The URL for the use profile page.
                profileimage?: string; // The URL for the use profile image.
            };
        };
        discussionid: number; // Discussionid.
        hasparent: boolean; // Hasparent.
        parentid?: number; // Parentid.
        timecreated: number; // Timecreated.
        unread?: boolean; // Unread.
        isdeleted: boolean; // Isdeleted.
        isprivatereply: boolean; // Isprivatereply.
        haswordcount: boolean; // Haswordcount.
        wordcount?: number; // Wordcount.
        charcount?: number; // Charcount.
        capabilities: {
            view: boolean; // Whether the user can view the post.
            edit: boolean; // Whether the user can edit the post.
            delete: boolean; // Whether the user can delete the post.
            split: boolean; // Whether the user can split the post.
            reply: boolean; // Whether the user can reply to the post.
            selfenrol: boolean; // Whether the user can self enrol into the course.
            export: boolean; // Whether the user can export the post.
            controlreadstatus: boolean; // Whether the user can control the read status of the post.
            canreplyprivately: boolean; // Whether the user can post a private reply.
        };
        urls?: {
            view?: string; // The URL used to view the post.
            viewisolated?: string; // The URL used to view the post in isolation.
            viewparent?: string; // The URL used to view the parent of the post.
            edit?: string; // The URL used to edit the post.
            delete?: string; // The URL used to delete the post.
            split?: string; // The URL used to split the discussion with the selected post being the first post in the new discussion.
            reply?: string; // The URL used to reply to the post.
            export?: string; // The URL used to export the post.
            markasread?: string; // The URL used to mark the post as read.
            markasunread?: string; // The URL used to mark the post as unread.
            discuss?: string; // Discuss.
        };
        attachments: { // Attachments.
            contextid: number; // Contextid.
            component: string; // Component.
            filearea: string; // Filearea.
            itemid: number; // Itemid.
            filepath: string; // Filepath.
            filename: string; // Filename.
            isdir: boolean; // Isdir.
            isimage: boolean; // Isimage.
            timemodified: number; // Timemodified.
            timecreated: number; // Timecreated.
            filesize: number; // Filesize.
            author: string; // Author.
            license: string; // License.
            filenameshort: string; // Filenameshort.
            filesizeformatted: string; // Filesizeformatted.
            icon: string; // Icon.
            timecreatedformatted: string; // Timecreatedformatted.
            timemodifiedformatted: string; // Timemodifiedformatted.
            url: string; // Url.
            urls: {
                export?: string; // The URL used to export the attachment.
            };
            html: {
                plagiarism?: string; // The HTML source for the Plagiarism Response.
            };
        }[];
        tags?: { // Tags.
            id: number; // The ID of the Tag.
            tagid: number; // The tagid.
            isstandard: boolean; // Whether this is a standard tag.
            displayname: string; // The display name of the tag.
            flag: boolean; // Wehther this tag is flagged.
            urls: {
                view: string; // The URL to view the tag.
            };
        }[];
        html?: {
            rating?: string; // The HTML source to rate the post.
            taglist?: string; // The HTML source to view the list of tags.
            authorsubheading?: string; // The HTML source to view the author details.
        };
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_get_discussion_posts WS.
 */
export type ModForumGetDiscussionPostsWSParams = {
    discussionid: number; // The ID of the discussion from which to fetch posts.
    sortby?: string; // Sort by this element: id, created or modified.
    sortdirection?: string; // Sort direction: ASC or DESC.
};

/**
 * Data returned by mod_forum_get_discussion_posts WS.
 */
export type ModForumGetDiscussionPostsWSResponse = {
    posts: {
        id: number; // Id.
        subject: string; // Subject.
        replysubject: string; // Replysubject.
        message: string; // Message.
        messageformat: number; // Message format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        author: {
            id?: number; // Id.
            fullname?: string; // Fullname.
            isdeleted?: boolean; // Isdeleted.
            groups?: { // Groups.
                id: number; // Id.
                name: string; // Name.
                urls: {
                    image?: string; // Image.
                };
            }[];
            urls: {
                profile?: string; // The URL for the use profile page.
                profileimage?: string; // The URL for the use profile image.
            };
        };
        discussionid: number; // Discussionid.
        hasparent: boolean; // Hasparent.
        parentid?: number; // Parentid.
        timecreated: number; // Timecreated.
        unread?: boolean; // Unread.
        isdeleted: boolean; // Isdeleted.
        isprivatereply: boolean; // Isprivatereply.
        haswordcount: boolean; // Haswordcount.
        wordcount?: number; // Wordcount.
        charcount?: number; // Charcount.
        capabilities: {
            view: boolean; // Whether the user can view the post.
            edit: boolean; // Whether the user can edit the post.
            delete: boolean; // Whether the user can delete the post.
            split: boolean; // Whether the user can split the post.
            reply: boolean; // Whether the user can reply to the post.
            selfenrol: boolean; // Whether the user can self enrol into the course.
            export: boolean; // Whether the user can export the post.
            controlreadstatus: boolean; // Whether the user can control the read status of the post.
            canreplyprivately: boolean; // Whether the user can post a private reply.
        };
        urls?: {
            view?: string; // The URL used to view the post.
            viewisolated?: string; // The URL used to view the post in isolation.
            viewparent?: string; // The URL used to view the parent of the post.
            edit?: string; // The URL used to edit the post.
            delete?: string; // The URL used to delete the post.
            split?: string; // The URL used to split the discussion with the selected post being the first post in the new discussion.
            reply?: string; // The URL used to reply to the post.
            export?: string; // The URL used to export the post.
            markasread?: string; // The URL used to mark the post as read.
            markasunread?: string; // The URL used to mark the post as unread.
            discuss?: string; // Discuss.
        };
        attachments: { // Attachments.
            contextid: number; // Contextid.
            component: string; // Component.
            filearea: string; // Filearea.
            itemid: number; // Itemid.
            filepath: string; // Filepath.
            filename: string; // Filename.
            isdir: boolean; // Isdir.
            isimage: boolean; // Isimage.
            timemodified: number; // Timemodified.
            timecreated: number; // Timecreated.
            filesize: number; // Filesize.
            author: string; // Author.
            license: string; // License.
            filenameshort: string; // Filenameshort.
            filesizeformatted: string; // Filesizeformatted.
            icon: string; // Icon.
            timecreatedformatted: string; // Timecreatedformatted.
            timemodifiedformatted: string; // Timemodifiedformatted.
            url: string; // Url.
            urls: {
                export?: string; // The URL used to export the attachment.
            };
            html: {
                plagiarism?: string; // The HTML source for the Plagiarism Response.
            };
        }[];
        tags?: { // Tags.
            id: number; // The ID of the Tag.
            tagid: number; // The tagid.
            isstandard: boolean; // Whether this is a standard tag.
            displayname: string; // The display name of the tag.
            flag: boolean; // Wehther this tag is flagged.
            urls: {
                view: string; // The URL to view the tag.
            };
        }[];
        html?: {
            rating?: string; // The HTML source to rate the post.
            taglist?: string; // The HTML source to view the list of tags.
            authorsubheading?: string; // The HTML source to view the author details.
        };
    }[];
    forumid: number; // The forum id.
    courseid: number; // The forum course id.
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_get_forum_access_information WS.
 */
export type ModForumGetForumAccessInformationWSParams = {
    forumid: number; // Forum instance id.
};

/**
 * Data returned by mod_forum_get_forum_access_information WS.
 */
export type ModForumGetForumAccessInformationWSResponse = {
    warnings?: CoreWSExternalWarning[];
    canaddinstance?: boolean; // Whether the user has the capability mod/forum:addinstance allowed.
    canviewdiscussion?: boolean; // Whether the user has the capability mod/forum:viewdiscussion allowed.
    canviewhiddentimedposts?: boolean; // Whether the user has the capability mod/forum:viewhiddentimedposts allowed.
    canstartdiscussion?: boolean; // Whether the user has the capability mod/forum:startdiscussion allowed.
    canreplypost?: boolean; // Whether the user has the capability mod/forum:replypost allowed.
    canaddnews?: boolean; // Whether the user has the capability mod/forum:addnews allowed.
    canreplynews?: boolean; // Whether the user has the capability mod/forum:replynews allowed.
    canviewrating?: boolean; // Whether the user has the capability mod/forum:viewrating allowed.
    canviewanyrating?: boolean; // Whether the user has the capability mod/forum:viewanyrating allowed.
    canviewallratings?: boolean; // Whether the user has the capability mod/forum:viewallratings allowed.
    canrate?: boolean; // Whether the user has the capability mod/forum:rate allowed.
    canpostprivatereply?: boolean; // Whether the user has the capability mod/forum:postprivatereply allowed.
    canreadprivatereplies?: boolean; // Whether the user has the capability mod/forum:readprivatereplies allowed.
    cancreateattachment?: boolean; // Whether the user has the capability mod/forum:createattachment allowed.
    candeleteownpost?: boolean; // Whether the user has the capability mod/forum:deleteownpost allowed.
    candeleteanypost?: boolean; // Whether the user has the capability mod/forum:deleteanypost allowed.
    cansplitdiscussions?: boolean; // Whether the user has the capability mod/forum:splitdiscussions allowed.
    canmovediscussions?: boolean; // Whether the user has the capability mod/forum:movediscussions allowed.
    canpindiscussions?: boolean; // Whether the user has the capability mod/forum:pindiscussions allowed.
    caneditanypost?: boolean; // Whether the user has the capability mod/forum:editanypost allowed.
    canviewqandawithoutposting?: boolean; // Whether the user has the capability mod/forum:viewqandawithoutposting allowed.
    canviewsubscribers?: boolean; // Whether the user has the capability mod/forum:viewsubscribers allowed.
    canmanagesubscriptions?: boolean; // Whether the user has the capability mod/forum:managesubscriptions allowed.
    canpostwithoutthrottling?: boolean; // Whether the user has the capability mod/forum:postwithoutthrottling allowed.
    canexportdiscussion?: boolean; // Whether the user has the capability mod/forum:exportdiscussion allowed.
    canexportforum?: boolean; // Whether the user has the capability mod/forum:exportforum allowed.
    canexportpost?: boolean; // Whether the user has the capability mod/forum:exportpost allowed.
    canexportownpost?: boolean; // Whether the user has the capability mod/forum:exportownpost allowed.
    canaddquestion?: boolean; // Whether the user has the capability mod/forum:addquestion allowed.
    canallowforcesubscribe?: boolean; // Whether the user has the capability mod/forum:allowforcesubscribe allowed.
    cancanposttomygroups?: boolean; // Whether the user has the capability mod/forum:canposttomygroups allowed.
    cancanoverridediscussionlock?: boolean; // Whether the user has the capability mod/forum:canoverridediscussionlock allowed.
    cancanoverridecutoff?: boolean; // Whether the user has the capability mod/forum:canoverridecutoff allowed.
    cancantogglefavourite?: boolean; // Whether the user has the capability mod/forum:cantogglefavourite allowed.
    cangrade?: boolean; // Whether the user has the capability mod/forum:grade allowed.
};

/**
 * Params of mod_forum_get_forum_discussion_posts WS.
 */
export type ModForumGetForumDiscussionPostsWSParams = {
    discussionid: number; // Discussion ID.
    sortby?: string; // Sort by this element: id, created or modified.
    sortdirection?: string; // Sort direction: ASC or DESC.
};

/**
 * Data returned by mod_forum_get_forum_discussion_posts WS.
 */
export type ModForumGetForumDiscussionPostsWSResponse = {
    posts: {
        id: number; // Post id.
        discussion: number; // Discussion id.
        parent: number; // Parent id.
        userid: number; // User id.
        created: number; // Creation time.
        modified: number; // Time modified.
        mailed: number; // Mailed?.
        subject: string; // The post subject.
        message: string; // The post message.
        messageformat: number; // Message format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        messagetrust: number; // Can we trust?.
        messageinlinefiles?: CoreWSExternalFile[];
        attachment: string; // Has attachments?.
        attachments?: CoreWSExternalFile[];
        totalscore: number; // The post message total score.
        mailnow: number; // Mail now?.
        children: number[];
        canreply: boolean; // The user can reply to posts?.
        postread: boolean; // The post was read.
        userfullname: string; // Post author full name.
        userpictureurl?: string; // Post author picture.
        deleted: boolean; // This post has been removed.
        isprivatereply: boolean; // The post is a private reply.
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_get_forum_discussions WS.
 */
export type ModForumGetForumDiscussionsWSParams = {
    forumid: number; // Forum instance id.
    sortorder?: number; // Sort by this element: numreplies, , created or timemodified.
    page?: number; // Current page.
    perpage?: number; // Items per page.
    groupid?: number; // Group id.
};

/**
 * Data returned by mod_forum_get_forum_discussions WS.
 */
export type ModForumGetForumDiscussionsWSResponse = {
    discussions: {
        id: number; // Post id.
        name: string; // Discussion name.
        groupid: number; // Group id.
        timemodified: number; // Time modified.
        usermodified: number; // The id of the user who last modified.
        timestart: number; // Time discussion can start.
        timeend: number; // Time discussion ends.
        discussion: number; // Discussion id.
        parent: number; // Parent id.
        userid: number; // User who started the discussion id.
        created: number; // Creation time.
        modified: number; // Time modified.
        mailed: number; // Mailed?.
        subject: string; // The post subject.
        message: string; // The post message.
        messageformat: number; // Message format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        messagetrust: number; // Can we trust?.
        messageinlinefiles?: CoreWSExternalFile[];
        attachment: string; // Has attachments?.
        attachments?: CoreWSExternalFile[];
        totalscore: number; // The post message total score.
        mailnow: number; // Mail now?.
        userfullname: string; // Post author full name.
        usermodifiedfullname: string; // Post modifier full name.
        userpictureurl: string; // Post author picture.
        usermodifiedpictureurl: string; // Post modifier picture.
        numreplies: number; // The number of replies in the discussion.
        numunread: number; // The number of unread discussions.
        pinned: boolean; // Is the discussion pinned.
        locked: boolean; // Is the discussion locked.
        starred: boolean; // Is the discussion starred.
        canreply: boolean; // Can the user reply to the discussion.
        canlock: boolean; // Can the user lock the discussion.
        canfavourite: boolean; // Can the user star the discussion.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_get_forum_discussions_paginated WS.
 */
export type ModForumGetForumDiscussionsPaginatedWSParams = {
    forumid: number; // Forum instance id.
    sortby?: string; // Sort by this element: id, timemodified, timestart or timeend.
    sortdirection?: string; // Sort direction: ASC or DESC.
    page?: number; // Current page.
    perpage?: number; // Items per page.
};

/**
 * Data returned by mod_forum_get_forum_discussions_paginated WS.
 */
export type ModForumGetForumDiscussionsPaginatedWSResponse = {
    discussions: {
        id: number; // Post id.
        name: string; // Discussion name.
        groupid: number; // Group id.
        timemodified: number; // Time modified.
        usermodified: number; // The id of the user who last modified.
        timestart: number; // Time discussion can start.
        timeend: number; // Time discussion ends.
        discussion: number; // Discussion id.
        parent: number; // Parent id.
        userid: number; // User who started the discussion id.
        created: number; // Creation time.
        modified: number; // Time modified.
        mailed: number; // Mailed?.
        subject: string; // The post subject.
        message: string; // The post message.
        messageformat: number; // Message format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        messagetrust: number; // Can we trust?.
        messageinlinefiles?: CoreWSExternalFile[];
        attachment: string; // Has attachments?.
        attachments?: CoreWSExternalFile[];
        totalscore: number; // The post message total score.
        mailnow: number; // Mail now?.
        userfullname: string; // Post author full name.
        usermodifiedfullname: string; // Post modifier full name.
        userpictureurl: string; // Post author picture.
        usermodifiedpictureurl: string; // Post modifier picture.
        numreplies: number; // The number of replies in the discussion.
        numunread: number; // The number of unread discussions.
        pinned: boolean; // Is the discussion pinned.
        locked: boolean; // Is the discussion locked.
        canreply: boolean; // Can the user reply to the discussion.
        canlock: boolean; // Can the user lock the discussion.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_get_forums_by_courses WS.
 */
export type ModForumGetForumsByCoursesWSParams = {
    courseids?: number[]; // Array of Course IDs.
};

/**
 * Data returned by mod_forum_get_forums_by_courses WS.
 */
export type ModForumGetForumsByCoursesWSResponse = {
    id: number; // Forum id.
    course: number; // Course id.
    type: string; // The forum type.
    name: string; // Forum name.
    intro: string; // The forum intro.
    introformat: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    introfiles?: CoreWSExternalFile[];
    duedate?: number; // Duedate for the user.
    cutoffdate?: number; // Cutoffdate for the user.
    assessed: number; // Aggregate type.
    assesstimestart: number; // Assess start time.
    assesstimefinish: number; // Assess finish time.
    scale: number; // Scale.
    grade_forum: number; // Whole forum grade.
    grade_forum_notify: number; // Whether to send notifications to students upon grading by default.
    maxbytes: number; // Maximum attachment size.
    maxattachments: number; // Maximum number of attachments.
    forcesubscribe: number; // Force users to subscribe.
    trackingtype: number; // Subscription mode.
    rsstype: number; // RSS feed for this activity.
    rssarticles: number; // Number of RSS recent articles.
    timemodified: number; // Time modified.
    warnafter: number; // Post threshold for warning.
    blockafter: number; // Post threshold for blocking.
    blockperiod: number; // Time period for blocking.
    completiondiscussions: number; // Student must create discussions.
    completionreplies: number; // Student must post replies.
    completionposts: number; // Student must post discussions or replies.
    cmid: number; // Course module id.
    numdiscussions?: number; // Number of discussions in the forum.
    cancreatediscussions?: boolean; // If the user can create discussions.
    lockdiscussionafter?: number; // After what period a discussion is locked.
    istracked?: boolean; // If the user is tracking the forum.
    unreadpostscount?: number; // The number of unread posts for tracked forums.
}[];

/**
 * Params of mod_forum_prepare_draft_area_for_post WS.
 */
export type ModForumPrepareDraftAreaForPostWSParams = {
    postid: number; // Post to prepare the draft area for.
    area: string; // Area to prepare: attachment or post.
    draftitemid?: number; // The draft item id to use. 0 to generate one.
    filestokeep?: { // Only keep these files in the draft file area. Empty for keeping all.
        filename: string; // File name.
        filepath: string; // File path.
    }[];
};

/**
 * Data returned by mod_forum_prepare_draft_area_for_post WS.
 */
export type ModForumPrepareDraftAreaForPostWSResponse = {
    draftitemid: number; // Draft item id for the file area.
    files?: CoreWSExternalFile[];
    areaoptions: { // Draft file area options.
        name: string; // Name of option.
        value: string; // Value of option.
    }[];
    messagetext: string; // Message text with URLs rewritten.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_set_lock_state WS.
 */
export type ModForumSetLockStateWSParams = {
    forumid: number; // Forum that the discussion is in.
    discussionid: number; // The discussion to lock / unlock.
    targetstate: number; // The timestamp for the lock state.
};

/**
 * Data returned by mod_forum_set_lock_state WS.
 */
export type ModForumSetLockStateWSResponse = {
    id: number; // The discussion we are locking.
    locked: boolean; // The locked state of the discussion.
    times: {
        locked: number; // The locked time of the discussion.
    };
};

/**
 * Params of mod_forum_set_pin_state WS.
 */
export type ModForumSetPinStateWSParams = {
    discussionid: number; // The discussion to pin or unpin.
    targetstate: number; // The target state.
};

/**
 * Data returned by mod_forum_set_pin_state WS.
 */
export type ModForumSetPinStateWSResponse = {
    id: number; // Id.
    forumid: number; // Forumid.
    pinned: boolean; // Pinned.
    locked: boolean; // Locked.
    istimelocked: boolean; // Istimelocked.
    name: string; // Name.
    firstpostid: number; // Firstpostid.
    group?: {
        name: string; // Name.
        urls: {
            picture?: string; // Picture.
            userlist?: string; // Userlist.
        };
    };
    times: {
        modified: number; // Modified.
        start: number; // Start.
        end: number; // End.
        locked: number; // Locked.
    };
    userstate: {
        subscribed: boolean; // Subscribed.
        favourited: boolean; // Favourited.
    };
    capabilities: {
        subscribe: boolean; // Subscribe.
        move: boolean; // Move.
        pin: boolean; // Pin.
        post: boolean; // Post.
        manage: boolean; // Manage.
        favourite: boolean; // Favourite.
    };
    urls: {
        view: string; // View.
        viewlatest?: string; // Viewlatest.
        viewfirstunread?: string; // Viewfirstunread.
        markasread: string; // Markasread.
        subscribe: string; // Subscribe.
        pin?: string; // Pin.
    };
    timed: {
        istimed?: boolean; // Istimed.
        visible?: boolean; // Visible.
    };
};

/**
 * Params of mod_forum_set_subscription_state WS.
 */
export type ModForumSetSubscriptionStateWSParams = {
    forumid: number; // Forum that the discussion is in.
    discussionid: number; // The discussion to subscribe or unsubscribe.
    targetstate: boolean; // The target state.
};

/**
 * Data returned by mod_forum_set_subscription_state WS.
 */
export type ModForumSetSubscriptionStateWSResponse = {
    id: number; // Id.
    forumid: number; // Forumid.
    pinned: boolean; // Pinned.
    locked: boolean; // Locked.
    istimelocked: boolean; // Istimelocked.
    name: string; // Name.
    firstpostid: number; // Firstpostid.
    group?: {
        name: string; // Name.
        urls: {
            picture?: string; // Picture.
            userlist?: string; // Userlist.
        };
    };
    times: {
        modified: number; // Modified.
        start: number; // Start.
        end: number; // End.
        locked: number; // Locked.
    };
    userstate: {
        subscribed: boolean; // Subscribed.
        favourited: boolean; // Favourited.
    };
    capabilities: {
        subscribe: boolean; // Subscribe.
        move: boolean; // Move.
        pin: boolean; // Pin.
        post: boolean; // Post.
        manage: boolean; // Manage.
        favourite: boolean; // Favourite.
    };
    urls: {
        view: string; // View.
        viewlatest?: string; // Viewlatest.
        viewfirstunread?: string; // Viewfirstunread.
        markasread: string; // Markasread.
        subscribe: string; // Subscribe.
        pin?: string; // Pin.
    };
    timed: {
        istimed?: boolean; // Istimed.
        visible?: boolean; // Visible.
    };
};

/**
 * Params of mod_forum_toggle_favourite_state WS.
 */
export type ModForumToggleFavouriteStateWSParams = {
    discussionid: number; // The discussion to subscribe or unsubscribe.
    targetstate: boolean; // The target state.
};

/**
 * Data returned by mod_forum_toggle_favourite_state WS.
 */
export type ModForumToggleFavouriteStateWSResponse = {
    id: number; // Id.
    forumid: number; // Forumid.
    pinned: boolean; // Pinned.
    locked: boolean; // Locked.
    istimelocked: boolean; // Istimelocked.
    name: string; // Name.
    firstpostid: number; // Firstpostid.
    group?: {
        name: string; // Name.
        urls: {
            picture?: string; // Picture.
            userlist?: string; // Userlist.
        };
    };
    times: {
        modified: number; // Modified.
        start: number; // Start.
        end: number; // End.
        locked: number; // Locked.
    };
    userstate: {
        subscribed: boolean; // Subscribed.
        favourited: boolean; // Favourited.
    };
    capabilities: {
        subscribe: boolean; // Subscribe.
        move: boolean; // Move.
        pin: boolean; // Pin.
        post: boolean; // Post.
        manage: boolean; // Manage.
        favourite: boolean; // Favourite.
    };
    urls: {
        view: string; // View.
        viewlatest?: string; // Viewlatest.
        viewfirstunread?: string; // Viewfirstunread.
        markasread: string; // Markasread.
        subscribe: string; // Subscribe.
        pin?: string; // Pin.
    };
    timed: {
        istimed?: boolean; // Istimed.
        visible?: boolean; // Visible.
    };
};

/**
 * Params of mod_forum_update_discussion_post WS.
 */
export type ModForumUpdateDiscussionPostWSParams = {
    postid: number; // Post to be updated. It can be a discussion topic post.
    subject?: string; // Updated post subject.
    message?: string; // Updated post message (HTML assumed if messageformat is not provided).
    messageformat?: number; // Message format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    options?: { // Configuration options for the post.
        name: string; // The allowed keys (value format) are:
                             // pinned (bool); (only for discussions) whether to pin this discussion or not
                             // discussionsubscribe (bool); whether to subscribe to the post or not
                             // inlineattachmentsid (int); the draft file area id for inline attachments in the text
                             // attachmentsid (int); the draft file area id for attachments.

        value: string; // The value of the option.
    }[];
};

/**
 * Data returned by mod_forum_update_discussion_post WS.
 */
export type ModForumUpdateDiscussionPostWSResponse = {
    status: boolean; // True if the post/discussion was updated, false otherwise.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_view_forum WS.
 */
export type ModForumViewForumWSParams = {
    forumid: number; // Forum instance id.
};

/**
 * Data returned by mod_forum_view_forum WS.
 */
export type ModForumViewForumWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_forum_view_forum_discussion WS.
 */
export type ModForumViewForumDiscussionWSParams = {
    discussionid: number; // Discussion id.
};

/**
 * Data returned by mod_forum_view_forum_discussion WS.
 */
export type ModForumViewForumDiscussionWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_add_entry WS.
 */
export type ModGlossaryAddEntryWSParams = {
    glossaryid: number; // Glossary id.
    concept: string; // Glossary concept.
    definition: string; // Glossary concept definition.
    definitionformat: number; // Definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    options?: { // Optional settings.
        name: string; // The allowed keys (value format) are:
                         // inlineattachmentsid (int); the draft file area id for inline attachments
                         // attachmentsid (int); the draft file area id for attachments
                         // categories (comma separated int); comma separated category ids
                         // aliases (comma separated str); comma separated aliases
                         // usedynalink (bool); whether the entry should be automatically linked.
                         // casesensitive (bool); whether the entry is case sensitive.
                         // fullmatch (bool); whether to match whole words only.

        value: string; // The value of the option (validated inside the function).
    }[];
};

/**
 * Data returned by mod_glossary_add_entry WS.
 */
export type ModGlossaryAddEntryWSResponse = {
    entryid: number; // New glossary entry ID.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_delete_entry WS.
 */
export type ModGlossaryDeleteEntryWSParams = {
    entryid: number; // Glossary entry id to delete.
};

/**
 * Data returned by mod_glossary_delete_entry WS.
 */
export type ModGlossaryDeleteEntryWSResponse = {
    result: boolean; // The processing result.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_authors WS.
 */
export type ModGlossaryGetAuthorsWSParams = {
    id: number; // Glossary entry ID.
    from?: number; // Start returning records from here.
    limit?: number; // Number of records to return.
    options?: {
        includenotapproved?: boolean; // When false, includes self even if all of their entries require approval. When true, also includes authors only having entries pending approval.
    }; // An array of options.
};

/**
 * Data returned by mod_glossary_get_authors WS.
 */
export type ModGlossaryGetAuthorsWSResponse = {
    count: number; // The total number of records.
    authors: {
        id: number; // The user ID.
        fullname: string; // The fullname.
        pictureurl: string; // The picture URL.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_categories WS.
 */
export type ModGlossaryGetCategoriesWSParams = {
    id: number; // The glossary ID.
    from?: number; // Start returning records from here.
    limit?: number; // Number of records to return.
};

/**
 * Data returned by mod_glossary_get_categories WS.
 */
export type ModGlossaryGetCategoriesWSResponse = {
    count: number; // The total number of records.
    categories: {
        id: number; // The category ID.
        glossaryid: number; // The glossary ID.
        name: string; // The name of the category.
        usedynalink: boolean; // Whether the category is automatically linked.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_entries_by_author WS.
 */
export type ModGlossaryGetEntriesByAuthorWSParams = {
    id: number; // Glossary entry ID.
    letter: string; // First letter of firstname or lastname, or either keywords: 'ALL' or 'SPECIAL'.
    field?: string; // Search and order using: 'FIRSTNAME' or 'LASTNAME'.
    sort?: string; // The direction of the order: 'ASC' or 'DESC'.
    from?: number; // Start returning records from here.
    limit?: number; // Number of records to return.
    options?: {
        includenotapproved?: boolean; // When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.
    }; // An array of options.
};

/**
 * Data returned by mod_glossary_get_entries_by_author WS.
 */
export type ModGlossaryGetEntriesByAuthorWSResponse = {
    count: number; // The total number of records matching the request.
    entries: {
        id: number; // The entry ID.
        glossaryid: number; // The glossary ID.
        userid: number; // Author ID.
        userfullname: string; // Author full name.
        userpictureurl: string; // Author picture.
        concept: string; // The concept.
        definition: string; // The definition.
        definitionformat: number; // Definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        definitiontrust: boolean; // The definition trust flag.
        definitioninlinefiles?: CoreWSExternalFile[];
        attachment: boolean; // Whether or not the entry has attachments.
        attachments?: CoreWSExternalFile[];
        timecreated: number; // Time created.
        timemodified: number; // Time modified.
        teacherentry: boolean; // The entry was created by a teacher, or equivalent.
        sourceglossaryid: number; // The source glossary ID.
        usedynalink: boolean; // Whether the concept should be automatically linked.
        casesensitive: boolean; // When true, the matching is case sensitive.
        fullmatch: boolean; // When true, the matching is done on full words only.
        approved: boolean; // Whether the entry was approved.
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_entries_by_author_id WS.
 */
export type ModGlossaryGetEntriesByAuthorIdWSParams = {
    id: number; // Glossary entry ID.
    authorid: number; // The author ID.
    order?: string; // Order by: 'CONCEPT', 'CREATION' or 'UPDATE'.
    sort?: string; // The direction of the order: 'ASC' or 'DESC'.
    from?: number; // Start returning records from here.
    limit?: number; // Number of records to return.
    options?: {
        includenotapproved?: boolean; // When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.
    }; // An array of options.
};

/**
 * Data returned by mod_glossary_get_entries_by_author_id WS.
 */
export type ModGlossaryGetEntriesByAuthorIdWSResponse = {
    count: number; // The total number of records matching the request.
    entries: {
        id: number; // The entry ID.
        glossaryid: number; // The glossary ID.
        userid: number; // Author ID.
        userfullname: string; // Author full name.
        userpictureurl: string; // Author picture.
        concept: string; // The concept.
        definition: string; // The definition.
        definitionformat: number; // Definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        definitiontrust: boolean; // The definition trust flag.
        definitioninlinefiles?: CoreWSExternalFile[];
        attachment: boolean; // Whether or not the entry has attachments.
        attachments?: CoreWSExternalFile[];
        timecreated: number; // Time created.
        timemodified: number; // Time modified.
        teacherentry: boolean; // The entry was created by a teacher, or equivalent.
        sourceglossaryid: number; // The source glossary ID.
        usedynalink: boolean; // Whether the concept should be automatically linked.
        casesensitive: boolean; // When true, the matching is case sensitive.
        fullmatch: boolean; // When true, the matching is done on full words only.
        approved: boolean; // Whether the entry was approved.
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_entries_by_category WS.
 */
export type ModGlossaryGetEntriesByCategoryWSParams = {
    id: number; // The glossary ID.
    categoryid: number; // The category ID. Use '0' for all categories, or '-1' for uncategorised entries.
    from?: number; // Start returning records from here.
    limit?: number; // Number of records to return.
    options?: {
        includenotapproved?: boolean; // When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.
    }; // An array of options.
};

/**
 * Data returned by mod_glossary_get_entries_by_category WS.
 */
export type ModGlossaryGetEntriesByCategoryWSResponse = {
    count: number; // The total number of records matching the request.
    entries: {
        id: number; // The entry ID.
        glossaryid: number; // The glossary ID.
        userid: number; // Author ID.
        userfullname: string; // Author full name.
        userpictureurl: string; // Author picture.
        concept: string; // The concept.
        definition: string; // The definition.
        definitionformat: number; // Definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        definitiontrust: boolean; // The definition trust flag.
        definitioninlinefiles?: CoreWSExternalFile[];
        attachment: boolean; // Whether or not the entry has attachments.
        attachments?: CoreWSExternalFile[];
        timecreated: number; // Time created.
        timemodified: number; // Time modified.
        teacherentry: boolean; // The entry was created by a teacher, or equivalent.
        sourceglossaryid: number; // The source glossary ID.
        usedynalink: boolean; // Whether the concept should be automatically linked.
        casesensitive: boolean; // When true, the matching is case sensitive.
        fullmatch: boolean; // When true, the matching is done on full words only.
        approved: boolean; // Whether the entry was approved.
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
        categoryid?: number; // The category ID. This may be '-1' when the entry is not categorised.
        categoryname?: string; // The category name. May be empty when the entry is not categorised, or the request was limited to one category.
    }[];
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_entries_by_date WS.
 */
export type ModGlossaryGetEntriesByDateWSParams = {
    id: number; // Glossary entry ID.
    order?: string; // Order the records by: 'CREATION' or 'UPDATE'.
    sort?: string; // The direction of the order: 'ASC' or 'DESC'.
    from?: number; // Start returning records from here.
    limit?: number; // Number of records to return.
    options?: {
        includenotapproved?: boolean; // When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.
    }; // An array of options.
};

/**
 * Data returned by mod_glossary_get_entries_by_date WS.
 */
export type ModGlossaryGetEntriesByDateWSResponse = {
    count: number; // The total number of records matching the request.
    entries: {
        id: number; // The entry ID.
        glossaryid: number; // The glossary ID.
        userid: number; // Author ID.
        userfullname: string; // Author full name.
        userpictureurl: string; // Author picture.
        concept: string; // The concept.
        definition: string; // The definition.
        definitionformat: number; // Definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        definitiontrust: boolean; // The definition trust flag.
        definitioninlinefiles?: CoreWSExternalFile[];
        attachment: boolean; // Whether or not the entry has attachments.
        attachments?: CoreWSExternalFile[];
        timecreated: number; // Time created.
        timemodified: number; // Time modified.
        teacherentry: boolean; // The entry was created by a teacher, or equivalent.
        sourceglossaryid: number; // The source glossary ID.
        usedynalink: boolean; // Whether the concept should be automatically linked.
        casesensitive: boolean; // When true, the matching is case sensitive.
        fullmatch: boolean; // When true, the matching is done on full words only.
        approved: boolean; // Whether the entry was approved.
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_entries_by_letter WS.
 */
export type ModGlossaryGetEntriesByLetterWSParams = {
    id: number; // Glossary entry ID.
    letter: string; // A letter, or either keywords: 'ALL' or 'SPECIAL'.
    from?: number; // Start returning records from here.
    limit?: number; // Number of records to return.
    options?: {
        includenotapproved?: boolean; // When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.
    }; // An array of options.
};

/**
 * Data returned by mod_glossary_get_entries_by_letter WS.
 */
export type ModGlossaryGetEntriesByLetterWSResponse = {
    count: number; // The total number of records matching the request.
    entries: {
        id: number; // The entry ID.
        glossaryid: number; // The glossary ID.
        userid: number; // Author ID.
        userfullname: string; // Author full name.
        userpictureurl: string; // Author picture.
        concept: string; // The concept.
        definition: string; // The definition.
        definitionformat: number; // Definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        definitiontrust: boolean; // The definition trust flag.
        definitioninlinefiles?: CoreWSExternalFile[];
        attachment: boolean; // Whether or not the entry has attachments.
        attachments?: CoreWSExternalFile[];
        timecreated: number; // Time created.
        timemodified: number; // Time modified.
        teacherentry: boolean; // The entry was created by a teacher, or equivalent.
        sourceglossaryid: number; // The source glossary ID.
        usedynalink: boolean; // Whether the concept should be automatically linked.
        casesensitive: boolean; // When true, the matching is case sensitive.
        fullmatch: boolean; // When true, the matching is done on full words only.
        approved: boolean; // Whether the entry was approved.
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_entries_by_search WS.
 */
export type ModGlossaryGetEntriesBySearchWSParams = {
    id: number; // Glossary entry ID.
    query: string; // The query string.
    fullsearch?: boolean; // The query.
    order?: string; // Order by: 'CONCEPT', 'CREATION' or 'UPDATE'.
    sort?: string; // The direction of the order: 'ASC' or 'DESC'.
    from?: number; // Start returning records from here.
    limit?: number; // Number of records to return.
    options?: {
        includenotapproved?: boolean; // When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.
    }; // An array of options.
};

/**
 * Data returned by mod_glossary_get_entries_by_search WS.
 */
export type ModGlossaryGetEntriesBySearchWSResponse = {
    count: number; // The total number of records matching the request.
    entries: {
        id: number; // The entry ID.
        glossaryid: number; // The glossary ID.
        userid: number; // Author ID.
        userfullname: string; // Author full name.
        userpictureurl: string; // Author picture.
        concept: string; // The concept.
        definition: string; // The definition.
        definitionformat: number; // Definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        definitiontrust: boolean; // The definition trust flag.
        definitioninlinefiles?: CoreWSExternalFile[];
        attachment: boolean; // Whether or not the entry has attachments.
        attachments?: CoreWSExternalFile[];
        timecreated: number; // Time created.
        timemodified: number; // Time modified.
        teacherentry: boolean; // The entry was created by a teacher, or equivalent.
        sourceglossaryid: number; // The source glossary ID.
        usedynalink: boolean; // Whether the concept should be automatically linked.
        casesensitive: boolean; // When true, the matching is case sensitive.
        fullmatch: boolean; // When true, the matching is done on full words only.
        approved: boolean; // Whether the entry was approved.
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_entries_by_term WS.
 */
export type ModGlossaryGetEntriesByTermWSParams = {
    id: number; // Glossary entry ID.
    term: string; // The entry concept, or alias.
    from?: number; // Start returning records from here.
    limit?: number; // Number of records to return.
    options?: {
        includenotapproved?: boolean; // When false, includes the non-approved entries created by the user. When true, also includes the ones that the user has the permission to approve.
    }; // An array of options.
};

/**
 * Data returned by mod_glossary_get_entries_by_term WS.
 */
export type ModGlossaryGetEntriesByTermWSResponse = {
    count: number; // The total number of records matching the request.
    entries: {
        id: number; // The entry ID.
        glossaryid: number; // The glossary ID.
        userid: number; // Author ID.
        userfullname: string; // Author full name.
        userpictureurl: string; // Author picture.
        concept: string; // The concept.
        definition: string; // The definition.
        definitionformat: number; // Definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        definitiontrust: boolean; // The definition trust flag.
        definitioninlinefiles?: CoreWSExternalFile[];
        attachment: boolean; // Whether or not the entry has attachments.
        attachments?: CoreWSExternalFile[];
        timecreated: number; // Time created.
        timemodified: number; // Time modified.
        teacherentry: boolean; // The entry was created by a teacher, or equivalent.
        sourceglossaryid: number; // The source glossary ID.
        usedynalink: boolean; // Whether the concept should be automatically linked.
        casesensitive: boolean; // When true, the matching is case sensitive.
        fullmatch: boolean; // When true, the matching is done on full words only.
        approved: boolean; // Whether the entry was approved.
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_entries_to_approve WS.
 */
export type ModGlossaryGetEntriesToApproveWSParams = {
    id: number; // Glossary entry ID.
    letter: string; // A letter, or either keywords: 'ALL' or 'SPECIAL'.
    order?: string; // Order by: 'CONCEPT', 'CREATION' or 'UPDATE'.
    sort?: string; // The direction of the order: 'ASC' or 'DESC'.
    from?: number; // Start returning records from here.
    limit?: number; // Number of records to return.
    options?: {
    }; // An array of options.
};

/**
 * Data returned by mod_glossary_get_entries_to_approve WS.
 */
export type ModGlossaryGetEntriesToApproveWSResponse = {
    count: number; // The total number of records matching the request.
    entries: {
        id: number; // The entry ID.
        glossaryid: number; // The glossary ID.
        userid: number; // Author ID.
        userfullname: string; // Author full name.
        userpictureurl: string; // Author picture.
        concept: string; // The concept.
        definition: string; // The definition.
        definitionformat: number; // Definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        definitiontrust: boolean; // The definition trust flag.
        definitioninlinefiles?: CoreWSExternalFile[];
        attachment: boolean; // Whether or not the entry has attachments.
        attachments?: CoreWSExternalFile[];
        timecreated: number; // Time created.
        timemodified: number; // Time modified.
        teacherentry: boolean; // The entry was created by a teacher, or equivalent.
        sourceglossaryid: number; // The source glossary ID.
        usedynalink: boolean; // Whether the concept should be automatically linked.
        casesensitive: boolean; // When true, the matching is case sensitive.
        fullmatch: boolean; // When true, the matching is done on full words only.
        approved: boolean; // Whether the entry was approved.
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_entry_by_id WS.
 */
export type ModGlossaryGetEntryByIdWSParams = {
    id: number; // Glossary entry ID.
};

/**
 * Data returned by mod_glossary_get_entry_by_id WS.
 */
export type ModGlossaryGetEntryByIdWSResponse = {
    entry: {
        id: number; // The entry ID.
        glossaryid: number; // The glossary ID.
        userid: number; // Author ID.
        userfullname: string; // Author full name.
        userpictureurl: string; // Author picture.
        concept: string; // The concept.
        definition: string; // The definition.
        definitionformat: number; // Definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        definitiontrust: boolean; // The definition trust flag.
        definitioninlinefiles?: CoreWSExternalFile[];
        attachment: boolean; // Whether or not the entry has attachments.
        attachments?: CoreWSExternalFile[];
        timecreated: number; // Time created.
        timemodified: number; // Time modified.
        teacherentry: boolean; // The entry was created by a teacher, or equivalent.
        sourceglossaryid: number; // The source glossary ID.
        usedynalink: boolean; // Whether the concept should be automatically linked.
        casesensitive: boolean; // When true, the matching is case sensitive.
        fullmatch: boolean; // When true, the matching is done on full words only.
        approved: boolean; // Whether the entry was approved.
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    };
    ratinginfo?: {
        contextid: number; // Context id.
        component: string; // Context name.
        ratingarea: string; // Rating area name.
        canviewall?: boolean; // Whether the user can view all the individual ratings.
        canviewany?: boolean; // Whether the user can view aggregate of ratings of others.
        scales?: { // Different scales used information.
            id: number; // Scale id.
            courseid?: number; // Course id.
            name?: string; // Scale name (when a real scale is used).
            max: number; // Max value for the scale.
            isnumeric: boolean; // Whether is a numeric scale.
            items?: { // Scale items. Only returned for not numerical scales.
                value: number; // Scale value/option id.
                name: string; // Scale name.
            }[];
        }[];
        ratings?: { // The ratings.
            itemid: number; // Item id.
            scaleid?: number; // Scale id.
            userid?: number; // User who rated id.
            aggregate?: number; // Aggregated ratings grade.
            aggregatestr?: string; // Aggregated ratings as string.
            aggregatelabel?: string; // The aggregation label.
            count?: number; // Ratings count (used when aggregating).
            rating?: number; // The rating the user gave.
            canrate?: boolean; // Whether the user can rate the item.
            canviewaggregate?: boolean; // Whether the user can view the aggregated grade.
        }[];
    }; // Rating information.
    permissions?: {
        candelete: boolean; // Whether the user can delete the entry.
        canupdate: boolean; // Whether the user can update the entry.
    }; // User permissions for the managing the entry.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_get_glossaries_by_courses WS.
 */
export type ModGlossaryGetGlossariesByCoursesWSParams = {
    courseids?: number[]; // Array of course IDs.
};

/**
 * Data returned by mod_glossary_get_glossaries_by_courses WS.
 */
export type ModGlossaryGetGlossariesByCoursesWSResponse = {
    glossaries: {
        id: number; // Glossary id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // Glossary name.
        intro: string; // The Glossary intro.
        introformat: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles?: CoreWSExternalFile[];
        allowduplicatedentries: number; // If enabled, multiple entries can have the same concept name.
        displayformat: string; // Display format type.
        mainglossary: number; // If enabled this glossary is a main glossary.
        showspecial: number; // If enabled, participants can browse the glossary by special characters, such as @ and #.
        showalphabet: number; // If enabled, participants can browse the glossary by letters of the alphabet.
        showall: number; // If enabled, participants can browse all entries at once.
        allowcomments: number; // If enabled, all participants with permission to create comments will be able to add comments to glossary entries.
        allowprintview: number; // If enabled, students are provided with a link to a printer-friendly version of the glossary. The link is always available to teachers.
        usedynalink: number; // If site-wide glossary auto-linking has been enabled by an administrator and this checkbox is ticked, the entry will be automatically linked wherever the concept words and phrases appear throughout the rest of the course.
        defaultapproval: number; // If set to no, entries require approving by a teacher before they are viewable by everyone.
        approvaldisplayformat: string; // When approving glossary items you may wish to use a different display format.
        globalglossary: number;
        entbypage: number; // Entries shown per page.
        editalways: number; // Always allow editing.
        rsstype: number; // To enable the RSS feed for this activity, select either concepts with author or concepts without author to be included in the feed.
        rssarticles: number; // This setting specifies the number of glossary entry concepts to include in the RSS feed. Between 5 and 20 generally acceptable.
        assessed: number; // Aggregate type.
        assesstimestart: number; // Restrict rating to items created after this.
        assesstimefinish: number; // Restrict rating to items created before this.
        scale: number; // Scale ID.
        timecreated: number; // Time created.
        timemodified: number; // Time modified.
        completionentries: number; // Number of entries to complete.
        section: number; // Section.
        visible: number; // Visible.
        groupmode: number; // Group mode.
        groupingid: number; // Grouping ID.
        browsemodes: string[];
        canaddentry?: number; // Whether the user can add a new entry.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_prepare_entry_for_edition WS.
 */
export type ModGlossaryPrepareEntryForEditionWSParams = {
    entryid: number; // Glossary entry id to update.
};

/**
 * Data returned by mod_glossary_prepare_entry_for_edition WS.
 */
export type ModGlossaryPrepareEntryForEditionWSResponse = {
    inlineattachmentsid: number; // Draft item id for the text editor.
    attachmentsid: number; // Draft item id for the file manager.
    areas: { // File areas including options.
        area: string; // File area name.
        options: { // Draft file area options.
            name: string; // Name of option.
            value: string; // Value of option.
        }[];
    }[];
    aliases: string[];
    categories: number[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_update_entry WS.
 */
export type ModGlossaryUpdateEntryWSParams = {
    entryid: number; // Glossary entry id to update.
    concept: string; // Glossary concept.
    definition: string; // Glossary concept definition.
    definitionformat: number; // Definition format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    options?: { // Optional settings.
        name: string; // The allowed keys (value format) are:
                         // inlineattachmentsid (int); the draft file area id for inline attachments
                         // attachmentsid (int); the draft file area id for attachments
                         // categories (comma separated int); comma separated category ids
                         // aliases (comma separated str); comma separated aliases
                         // usedynalink (bool); whether the entry should be automatically linked.
                         // casesensitive (bool); whether the entry is case sensitive.
                         // fullmatch (bool); whether to match whole words only.

        value: string; // The value of the option (validated inside the function).
    }[];
};

/**
 * Data returned by mod_glossary_update_entry WS.
 */
export type ModGlossaryUpdateEntryWSResponse = {
    result: boolean; // The update result.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_view_entry WS.
 */
export type ModGlossaryViewEntryWSParams = {
    id: number; // Glossary entry ID.
};

/**
 * Data returned by mod_glossary_view_entry WS.
 */
export type ModGlossaryViewEntryWSResponse = {
    status: boolean; // True on success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_glossary_view_glossary WS.
 */
export type ModGlossaryViewGlossaryWSParams = {
    id: number; // Glossary instance ID.
    mode: string; // The mode in which the glossary is viewed.
};

/**
 * Data returned by mod_glossary_view_glossary WS.
 */
export type ModGlossaryViewGlossaryWSResponse = {
    status: boolean; // True on success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_h5pactivity_get_attempts WS.
 */
export type ModH5pactivityGetAttemptsWSParams = {
    h5pactivityid: number; // H5p activity instance id.
    userids?: number[]; // User ids.
};

/**
 * Data returned by mod_h5pactivity_get_attempts WS.
 */
export type ModH5pactivityGetAttemptsWSResponse = {
    activityid: number; // Activity course module ID.
    usersattempts: { // The complete users attempts list.
        userid: number; // The user id.
        attempts: { // The complete attempts list.
            id: number; // ID of the context.
            h5pactivityid: number; // ID of the H5P activity.
            userid: number; // ID of the user.
            timecreated: number; // Attempt creation.
            timemodified: number; // Attempt modified.
            attempt: number; // Attempt number.
            rawscore: number; // Attempt score value.
            maxscore: number; // Attempt max score.
            duration: number; // Attempt duration in seconds.
            completion?: number; // Attempt completion.
            success?: number; // Attempt success.
            scaled: number; // Attempt scaled.
        }[];
        scored?: {
            title: string; // Scored attempts title.
            grademethod: string; // Scored attempts title.
            attempts: { // List of the grading attempts.
                id: number; // ID of the context.
                h5pactivityid: number; // ID of the H5P activity.
                userid: number; // ID of the user.
                timecreated: number; // Attempt creation.
                timemodified: number; // Attempt modified.
                attempt: number; // Attempt number.
                rawscore: number; // Attempt score value.
                maxscore: number; // Attempt max score.
                duration: number; // Attempt duration in seconds.
                completion?: number; // Attempt completion.
                success?: number; // Attempt success.
                scaled: number; // Attempt scaled.
            }[];
        }; // Attempts used to grade the activity.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_h5pactivity_get_h5pactivities_by_courses WS.
 */
export type ModH5pactivityGetH5pactivitiesByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_h5pactivity_get_h5pactivities_by_courses WS.
 */
export type ModH5pactivityGetH5pactivitiesByCoursesWSResponse = {
    h5pactivities: {
        id: number; // The primary key of the record.
        course: number; // Course id this h5p activity is part of.
        name: string; // The name of the activity module instance.
        timecreated?: number; // Timestamp of when the instance was added to the course.
        timemodified?: number; // Timestamp of when the instance was last modified.
        intro: string; // H5P activity description.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        grade?: number; // The maximum grade for submission.
        displayoptions: number; // H5P Button display options.
        enabletracking: number; // Enable xAPI tracking.
        grademethod: number; // Which H5P attempt is used for grading.
        contenthash?: string; // Sha1 hash of file content.
        coursemodule: number; // Coursemodule.
        context: number; // Context.
        introfiles: { // Introfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        package: { // Package.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        deployedfile?: {
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
        };
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_h5pactivity_get_h5pactivity_access_information WS.
 */
export type ModH5pactivityGetH5pactivityAccessInformationWSParams = {
    h5pactivityid: number; // H5p activity instance id.
};

/**
 * Data returned by mod_h5pactivity_get_h5pactivity_access_information WS.
 */
export type ModH5pactivityGetH5pactivityAccessInformationWSResponse = {
    warnings?: CoreWSExternalWarning[];
    canview?: boolean; // Whether the user has the capability mod/h5pactivity:view allowed.
    canaddinstance?: boolean; // Whether the user has the capability mod/h5pactivity:addinstance allowed.
    cansubmit?: boolean; // Whether the user has the capability mod/h5pactivity:submit allowed.
    canreviewattempts?: boolean; // Whether the user has the capability mod/h5pactivity:reviewattempts allowed.
};

/**
 * Params of mod_h5pactivity_get_results WS.
 */
export type ModH5pactivityGetResultsWSParams = {
    h5pactivityid: number; // H5p activity instance id.
    attemptids?: number[]; // Attempt ids.
};

/**
 * Data returned by mod_h5pactivity_get_results WS.
 */
export type ModH5pactivityGetResultsWSResponse = {
    activityid: number; // Activity course module ID.
    attempts: { // The complete attempts list.
        id: number; // ID of the context.
        h5pactivityid: number; // ID of the H5P activity.
        userid: number; // ID of the user.
        timecreated: number; // Attempt creation.
        timemodified: number; // Attempt modified.
        attempt: number; // Attempt number.
        rawscore: number; // Attempt score value.
        maxscore: number; // Attempt max score.
        duration: number; // Attempt duration in seconds.
        completion?: number; // Attempt completion.
        success?: number; // Attempt success.
        scaled: number; // Attempt scaled.
        results?: { // The results of the attempt.
            id: number; // ID of the context.
            attemptid: number; // ID of the H5P attempt.
            subcontent: string; // Subcontent identifier.
            timecreated: number; // Result creation.
            interactiontype: string; // Interaction type.
            description: string; // Result description.
            content?: string; // Result extra content.
            rawscore: number; // Result score value.
            maxscore: number; // Result max score.
            duration?: number; // Result duration in seconds.
            completion?: number; // Result completion.
            success?: number; // Result success.
            optionslabel?: string; // Label used for result options.
            correctlabel?: string; // Label used for correct answers.
            answerlabel?: string; // Label used for user answers.
            track?: boolean; // If the result has valid track information.
            options?: { // The statement options.
                description?: string; // Option description.
                id?: string; // Option string identifier.
                correctanswer?: {
                    answer?: string; // Option text value.
                    correct?: boolean; // If has to be displayed as correct.
                    incorrect?: boolean; // If has to be displayed as incorrect.
                    text?: boolean; // If has to be displayed as simple text.
                    checked?: boolean; // If has to be displayed as a checked option.
                    unchecked?: boolean; // If has to be displayed as a unchecked option.
                    pass?: boolean; // If has to be displayed as passed.
                    fail?: boolean; // If has to be displayed as failed.
                }; // The option correct answer.
                useranswer?: {
                    answer?: string; // Option text value.
                    correct?: boolean; // If has to be displayed as correct.
                    incorrect?: boolean; // If has to be displayed as incorrect.
                    text?: boolean; // If has to be displayed as simple text.
                    checked?: boolean; // If has to be displayed as a checked option.
                    unchecked?: boolean; // If has to be displayed as a unchecked option.
                    pass?: boolean; // If has to be displayed as passed.
                    fail?: boolean; // If has to be displayed as failed.
                }; // The option user answer.
            }[];
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_h5pactivity_view_h5pactivity WS.
 */
export type ModH5pactivityViewH5pactivityWSParams = {
    h5pactivityid: number; // H5P activity instance id.
};

/**
 * Data returned by mod_h5pactivity_view_h5pactivity WS.
 */
export type ModH5pactivityViewH5pactivityWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_imscp_get_imscps_by_courses WS.
 */
export type ModImscpGetImscpsByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_imscp_get_imscps_by_courses WS.
 */
export type ModImscpGetImscpsByCoursesWSResponse = {
    imscps: {
        id: number; // IMSCP id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // Activity name.
        intro?: string; // The IMSCP intro.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles?: CoreWSExternalFile[];
        revision?: number; // Revision.
        keepold?: number; // Number of old IMSCP to keep.
        structure?: string; // IMSCP structure.
        timemodified?: string; // Time of last modification.
        section?: number; // Course section id.
        visible?: boolean; // If visible.
        groupmode?: number; // Group mode.
        groupingid?: number; // Group id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_imscp_view_imscp WS.
 */
export type ModImscpViewImscpWSParams = {
    imscpid: number; // Imscp instance id.
};

/**
 * Data returned by mod_imscp_view_imscp WS.
 */
export type ModImscpViewImscpWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_label_get_labels_by_courses WS.
 */
export type ModLabelGetLabelsByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_label_get_labels_by_courses WS.
 */
export type ModLabelGetLabelsByCoursesWSResponse = {
    labels: {
        id: number; // Module id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // Label name.
        intro: string; // Label contents.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles: CoreWSExternalFile[];
        timemodified: number; // Last time the label was modified.
        section: number; // Course section id.
        visible: number; // Module visibility.
        groupmode: number; // Group mode.
        groupingid: number; // Grouping id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_finish_attempt WS.
 */
export type ModLessonFinishAttemptWSParams = {
    lessonid: number; // Lesson instance id.
    password?: string; // Optional password (the lesson may be protected).
    outoftime?: boolean; // If the user run out of time.
    review?: boolean; // If we want to review just after finishing (1 hour margin).
};

/**
 * Data returned by mod_lesson_finish_attempt WS.
 */
export type ModLessonFinishAttemptWSResponse = {
    data: { // The EOL page information data.
        name: string; // Data name.
        value: string; // Data value.
        message: string; // Data message (translated string).
    }[];
    messages: {
        message: string; // Message.
        type: string; // Message type: usually a CSS identifier like:
                             // success, info, warning, error, notifyproblem, notifyerror, notifytiny, notifysuccess.

    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_attempts_overview WS.
 */
export type ModLessonGetAttemptsOverviewWSParams = {
    lessonid: number; // Lesson instance id.
    groupid?: number; // Group id, 0 means that the function will determine the user group.
};

/**
 * Data returned by mod_lesson_get_attempts_overview WS.
 */
export type ModLessonGetAttemptsOverviewWSResponse = {
    data?: {
        lessonscored: boolean; // True if the lesson was scored.
        numofattempts: number; // Number of attempts.
        avescore: number; // Average score.
        highscore: number; // High score.
        lowscore: number; // Low score.
        avetime: number; // Average time (spent in taking the lesson).
        hightime: number; // High time.
        lowtime: number; // Low time.
        students?: { // Students data, including attempts.
            id: number; // User id.
            fullname: string; // User full name.
            bestgrade: number; // Best grade.
            attempts: {
                try: number; // Attempt number.
                grade: number; // Attempt grade.
                timestart: number; // Attempt time started.
                timeend: number; // Attempt last time continued.
                end: number; // Attempt time ended.
            }[];
        }[];
    }; // Attempts overview data (empty for no attemps).
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_content_pages_viewed WS.
 */
export type ModLessonGetContentPagesViewedWSParams = {
    lessonid: number; // Lesson instance id.
    lessonattempt: number; // Lesson attempt number.
    userid?: number; // The user id (empty for current user).
};

/**
 * Data returned by mod_lesson_get_content_pages_viewed WS.
 */
export type ModLessonGetContentPagesViewedWSResponse = {
    pages: {
        id: number; // The attempt id.
        lessonid: number; // The lesson id.
        pageid: number; // The page id.
        userid: number; // The user who viewed the page.
        retry: number; // The lesson attempt number.
        flag: number; // 1 if the next page was calculated randomly.
        timeseen: number; // The time the page was seen.
        nextpageid: number; // The next page chosen id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_lesson WS.
 */
export type ModLessonGetLessonWSParams = {
    lessonid: number; // Lesson instance id.
    password?: string; // Lesson password.
};

/**
 * Data returned by mod_lesson_get_lesson WS.
 */
export type ModLessonGetLessonWSResponse = {
    lesson: {
        id: number; // Standard Moodle primary key.
        course: number; // Foreign key reference to the course this lesson is part of.
        coursemodule: number; // Course module id.
        name: string; // Lesson name.
        intro?: string; // Lesson introduction text.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        practice?: boolean; // Practice lesson?.
        modattempts?: boolean; // Allow student review?.
        usepassword?: boolean; // Password protected lesson?.
        password?: string; // Password.
        dependency?: number; // Dependent on (another lesson id).
        conditions?: string; // Conditions to enable the lesson.
        grade?: number; // The total that the grade is scaled to be out of.
        custom?: boolean; // Custom scoring?.
        ongoing?: boolean; // Display ongoing score?.
        usemaxgrade?: number; // How to calculate the final grade.
        maxanswers?: number; // Maximum answers per page.
        maxattempts?: number; // Maximum attempts.
        review?: boolean; // Provide option to try a question again.
        nextpagedefault?: number; // Action for a correct answer.
        feedback?: boolean; // Display default feedback.
        minquestions?: number; // Minimum number of questions.
        maxpages?: number; // Number of pages to show.
        timelimit?: number; // Time limit.
        retake?: boolean; // Re-takes allowed.
        activitylink?: number; // Id of the next activity to be linked once the lesson is completed.
        mediafile?: string; // Local file path or full external URL.
        mediaheight?: number; // Popup for media file height.
        mediawidth?: number; // Popup for media with.
        mediaclose?: number; // Display a close button in the popup?.
        slideshow?: boolean; // Display lesson as slideshow.
        width?: number; // Slideshow width.
        height?: number; // Slideshow height.
        bgcolor?: string; // Slideshow bgcolor.
        displayleft?: boolean; // Display left pages menu?.
        displayleftif?: number; // Minimum grade to display menu.
        progressbar?: boolean; // Display progress bar?.
        available?: number; // Available from.
        deadline?: number; // Available until.
        timemodified?: number; // Last time settings were updated.
        completionendreached?: number; // Require end reached for completion?.
        completiontimespent?: number; // Student must do this activity at least for.
        allowofflineattempts: boolean; // Whether to allow the lesson to be attempted offline in the mobile app.
        introfiles?: { // Introfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        mediafiles?: { // Mediafiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_lesson_access_information WS.
 */
export type ModLessonGetLessonAccessInformationWSParams = {
    lessonid: number; // Lesson instance id.
};

/**
 * Data returned by mod_lesson_get_lesson_access_information WS.
 */
export type ModLessonGetLessonAccessInformationWSResponse = {
    canmanage: boolean; // Whether the user can manage the lesson or not.
    cangrade: boolean; // Whether the user can grade the lesson or not.
    canviewreports: boolean; // Whether the user can view the lesson reports or not.
    reviewmode: boolean; // Whether the lesson is in review mode for the current user.
    attemptscount: number; // The number of attempts done by the user.
    lastpageseen: number; // The last page seen id.
    leftduringtimedsession: boolean; // Whether the user left during a timed session.
    firstpageid: number; // The lesson first page id.
    preventaccessreasons: {
        reason: string; // Reason lang string code.
        data: string; // Additional data.
        message: string; // Complete html message.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_lessons_by_courses WS.
 */
export type ModLessonGetLessonsByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_lesson_get_lessons_by_courses WS.
 */
export type ModLessonGetLessonsByCoursesWSResponse = {
    lessons: {
        id: number; // Standard Moodle primary key.
        course: number; // Foreign key reference to the course this lesson is part of.
        coursemodule: number; // Course module id.
        name: string; // Lesson name.
        intro?: string; // Lesson introduction text.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        practice?: boolean; // Practice lesson?.
        modattempts?: boolean; // Allow student review?.
        usepassword?: boolean; // Password protected lesson?.
        password?: string; // Password.
        dependency?: number; // Dependent on (another lesson id).
        conditions?: string; // Conditions to enable the lesson.
        grade?: number; // The total that the grade is scaled to be out of.
        custom?: boolean; // Custom scoring?.
        ongoing?: boolean; // Display ongoing score?.
        usemaxgrade?: number; // How to calculate the final grade.
        maxanswers?: number; // Maximum answers per page.
        maxattempts?: number; // Maximum attempts.
        review?: boolean; // Provide option to try a question again.
        nextpagedefault?: number; // Action for a correct answer.
        feedback?: boolean; // Display default feedback.
        minquestions?: number; // Minimum number of questions.
        maxpages?: number; // Number of pages to show.
        timelimit?: number; // Time limit.
        retake?: boolean; // Re-takes allowed.
        activitylink?: number; // Id of the next activity to be linked once the lesson is completed.
        mediafile?: string; // Local file path or full external URL.
        mediaheight?: number; // Popup for media file height.
        mediawidth?: number; // Popup for media with.
        mediaclose?: number; // Display a close button in the popup?.
        slideshow?: boolean; // Display lesson as slideshow.
        width?: number; // Slideshow width.
        height?: number; // Slideshow height.
        bgcolor?: string; // Slideshow bgcolor.
        displayleft?: boolean; // Display left pages menu?.
        displayleftif?: number; // Minimum grade to display menu.
        progressbar?: boolean; // Display progress bar?.
        available?: number; // Available from.
        deadline?: number; // Available until.
        timemodified?: number; // Last time settings were updated.
        completionendreached?: number; // Require end reached for completion?.
        completiontimespent?: number; // Student must do this activity at least for.
        allowofflineattempts: boolean; // Whether to allow the lesson to be attempted offline in the mobile app.
        introfiles?: { // Introfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        mediafiles?: { // Mediafiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_page_data WS.
 */
export type ModLessonGetPageDataWSParams = {
    lessonid: number; // Lesson instance id.
    pageid: number; // The page id.
    password?: string; // Optional password (the lesson may be protected).
    review?: boolean; // If we want to review just after finishing (1 hour margin).
    returncontents?: boolean; // If we must return the complete page contents once rendered.
};

/**
 * Data returned by mod_lesson_get_page_data WS.
 */
export type ModLessonGetPageDataWSResponse = {
    page?: {
        id: number; // The id of this lesson page.
        lessonid: number; // The id of the lesson this page belongs to.
        prevpageid: number; // The id of the page before this one.
        nextpageid: number; // The id of the next page in the page sequence.
        qtype: number; // Identifies the page type of this page.
        qoption: number; // Used to record page type specific options.
        layout: number; // Used to record page specific layout selections.
        display: number; // Used to record page specific display selections.
        timecreated: number; // Timestamp for when the page was created.
        timemodified: number; // Timestamp for when the page was last modified.
        title?: string; // The title of this page.
        contents?: string; // The contents of this page.
        contentsformat?: number; // Contents format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        displayinmenublock: boolean; // Toggles display in the left menu block.
        type: number; // The type of the page [question | structure].
        typeid: number; // The unique identifier for the page type.
        typestring: string; // The string that describes this page type.
    }; // Page fields.
    newpageid: number; // New page id (if a jump was made).
    pagecontent?: string; // Page html content.
    ongoingscore: string; // The ongoing score message.
    progress: number; // Progress percentage in the lesson.
    contentfiles: CoreWSExternalFile[];
    answers: {
        id: number; // The ID of this answer in the database.
        answerfiles: CoreWSExternalFile[];
        responsefiles: CoreWSExternalFile[];
        jumpto?: number; // Identifies where the user goes upon completing a page with this answer.
        grade?: number; // The grade this answer is worth.
        score?: number; // The score this answer will give.
        flags?: number; // Used to store options for the answer.
        timecreated?: number; // A timestamp of when the answer was created.
        timemodified?: number; // A timestamp of when the answer was modified.
        answer?: string; // Possible answer text.
        answerformat?: number; // Answer format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        response?: string; // Response text for the answer.
        responseformat?: number; // Response format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    }[];
    messages: {
        message: string; // Message.
        type: string; // Message type: usually a CSS identifier like:
                             // success, info, warning, error, notifyproblem, notifyerror, notifytiny, notifysuccess.

    }[];
    displaymenu: boolean; // Whether we should display the menu or not in this page.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_pages WS.
 */
export type ModLessonGetPagesWSParams = {
    lessonid: number; // Lesson instance id.
    password?: string; // Optional password (the lesson may be protected).
};

/**
 * Data returned by mod_lesson_get_pages WS.
 */
export type ModLessonGetPagesWSResponse = {
    pages: {
        page: {
            id: number; // The id of this lesson page.
            lessonid: number; // The id of the lesson this page belongs to.
            prevpageid: number; // The id of the page before this one.
            nextpageid: number; // The id of the next page in the page sequence.
            qtype: number; // Identifies the page type of this page.
            qoption: number; // Used to record page type specific options.
            layout: number; // Used to record page specific layout selections.
            display: number; // Used to record page specific display selections.
            timecreated: number; // Timestamp for when the page was created.
            timemodified: number; // Timestamp for when the page was last modified.
            title?: string; // The title of this page.
            contents?: string; // The contents of this page.
            contentsformat?: number; // Contents format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            displayinmenublock: boolean; // Toggles display in the left menu block.
            type: number; // The type of the page [question | structure].
            typeid: number; // The unique identifier for the page type.
            typestring: string; // The string that describes this page type.
        }; // Page fields.
        answerids: number[]; // List of answers ids (empty for content pages in  Moodle 1.9).
        jumps: number[]; // List of possible page jumps.
        filescount: number; // The total number of files attached to the page.
        filessizetotal: number; // The total size of the files.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_pages_possible_jumps WS.
 */
export type ModLessonGetPagesPossibleJumpsWSParams = {
    lessonid: number; // Lesson instance id.
};

/**
 * Data returned by mod_lesson_get_pages_possible_jumps WS.
 */
export type ModLessonGetPagesPossibleJumpsWSResponse = {
    jumps: {
        pageid: number; // The page id.
        answerid: number; // The answer id.
        jumpto: number; // The jump (page id or type of jump).
        calculatedjump: number; // The real page id (or EOL) to jump.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_questions_attempts WS.
 */
export type ModLessonGetQuestionsAttemptsWSParams = {
    lessonid: number; // Lesson instance id.
    attempt: number; // Lesson attempt number.
    correct?: boolean; // Only fetch correct attempts.
    pageid?: number; // Only fetch attempts at the given page.
    userid?: number; // Only fetch attempts of the given user.
};

/**
 * Data returned by mod_lesson_get_questions_attempts WS.
 */
export type ModLessonGetQuestionsAttemptsWSResponse = {
    attempts: {
        id: number; // The attempt id.
        lessonid: number; // The attempt lessonid.
        pageid: number; // The attempt pageid.
        userid: number; // The user who did the attempt.
        answerid: number; // The attempt answerid.
        retry: number; // The lesson attempt number.
        correct: number; // If it was the correct answer.
        useranswer: string; // The complete user answer.
        timeseen: number; // The time the question was seen.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_user_attempt WS.
 */
export type ModLessonGetUserAttemptWSParams = {
    lessonid: number; // Lesson instance id.
    userid: number; // The user id. 0 for current user.
    lessonattempt: number; // The attempt number.
};

/**
 * Data returned by mod_lesson_get_user_attempt WS.
 */
export type ModLessonGetUserAttemptWSResponse = {
    answerpages: {
        page?: {
            id: number; // The id of this lesson page.
            lessonid: number; // The id of the lesson this page belongs to.
            prevpageid: number; // The id of the page before this one.
            nextpageid: number; // The id of the next page in the page sequence.
            qtype: number; // Identifies the page type of this page.
            qoption: number; // Used to record page type specific options.
            layout: number; // Used to record page specific layout selections.
            display: number; // Used to record page specific display selections.
            timecreated: number; // Timestamp for when the page was created.
            timemodified: number; // Timestamp for when the page was last modified.
            title?: string; // The title of this page.
            contents?: string; // The contents of this page.
            contentsformat?: number; // Contents format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            displayinmenublock: boolean; // Toggles display in the left menu block.
            type: number; // The type of the page [question | structure].
            typeid: number; // The unique identifier for the page type.
            typestring: string; // The string that describes this page type.
        }; // Page fields.
        title: string; // Page title.
        contents: string; // Page contents.
        qtype: string; // Identifies the page type of this page.
        grayout: number; // If is required to apply a grayout.
        answerdata?: {
            score: string; // The score (text version).
            response: string; // The response text.
            responseformat: number; // Response. format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            answers?: string[][]; // User answers.
        }; // Answer data (empty in content pages created in Moodle 1.x).
    }[];
    userstats: {
        grade: number; // Attempt final grade.
        completed: number; // Time completed.
        timetotake: number; // Time taken.
        gradeinfo?: {
            nquestions: number; // Number of questions answered.
            attempts: number; // Number of question attempts.
            total: number; // Max points possible.
            earned: number; // Points earned by student.
            grade: number; // Calculated percentage grade.
            nmanual: number; // Number of manually graded questions.
            manualpoints: number; // Point value for manually graded questions.
        }; // Attempt grade.
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_user_attempt_grade WS.
 */
export type ModLessonGetUserAttemptGradeWSParams = {
    lessonid: number; // Lesson instance id.
    lessonattempt: number; // Lesson attempt number.
    userid?: number; // The user id (empty for current user).
};

/**
 * Data returned by mod_lesson_get_user_attempt_grade WS.
 */
export type ModLessonGetUserAttemptGradeWSResponse = {
    grade: {
        nquestions: number; // Number of questions answered.
        attempts: number; // Number of question attempts.
        total: number; // Max points possible.
        earned: number; // Points earned by student.
        grade: number; // Calculated percentage grade.
        nmanual: number; // Number of manually graded questions.
        manualpoints: number; // Point value for manually graded questions.
    }; // Attempt grade.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_user_grade WS.
 */
export type ModLessonGetUserGradeWSParams = {
    lessonid: number; // Lesson instance id.
    userid?: number; // The user id (empty for current user).
};

/**
 * Data returned by mod_lesson_get_user_grade WS.
 */
export type ModLessonGetUserGradeWSResponse = {
    grade: number; // The lesson final raw grade.
    formattedgrade: string; // The lesson final grade formatted.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_get_user_timers WS.
 */
export type ModLessonGetUserTimersWSParams = {
    lessonid: number; // Lesson instance id.
    userid?: number; // The user id (empty for current user).
};

/**
 * Data returned by mod_lesson_get_user_timers WS.
 */
export type ModLessonGetUserTimersWSResponse = {
    timers: {
        id: number; // The attempt id.
        lessonid: number; // The lesson id.
        userid: number; // The user id.
        starttime: number; // First access time for a new timer session.
        lessontime: number; // Last access time to the lesson during the timer session.
        completed: number; // If the lesson for this timer was completed.
        timemodifiedoffline: number; // Last modified time via webservices.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_launch_attempt WS.
 */
export type ModLessonLaunchAttemptWSParams = {
    lessonid: number; // Lesson instance id.
    password?: string; // Optional password (the lesson may be protected).
    pageid?: number; // Page id to continue from (only when continuing an attempt).
    review?: boolean; // If we want to review just after finishing.
};

/**
 * Data returned by mod_lesson_launch_attempt WS.
 */
export type ModLessonLaunchAttemptWSResponse = {
    messages: {
        message: string; // Message.
        type: string; // Message type: usually a CSS identifier like:
                             // success, info, warning, error, notifyproblem, notifyerror, notifytiny, notifysuccess.

    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_process_page WS.
 */
export type ModLessonProcessPageWSParams = {
    lessonid: number; // Lesson instance id.
    pageid: number; // The page id.
    data: { // The data to be saved.
        name: string; // Data name.
        value: string; // Data value.
    }[];
    password?: string; // Optional password (the lesson may be protected).
    review?: boolean; // If we want to review just after finishing (1 hour margin).
};

/**
 * Data returned by mod_lesson_process_page WS.
 */
export type ModLessonProcessPageWSResponse = {
    newpageid: number; // New page id (if a jump was made).
    inmediatejump: boolean; // Whether the page processing redirect directly to anoter page.
    nodefaultresponse: boolean; // Whether there is not a default response.
    feedback: string; // The response feedback.
    attemptsremaining: number; // Number of attempts remaining.
    correctanswer: boolean; // Whether the answer is correct.
    noanswer: boolean; // Whether there aren't answers.
    isessayquestion: boolean; // Whether is a essay question.
    maxattemptsreached: boolean; // Whether we reachered the max number of attempts.
    response: string; // The response.
    studentanswer: string; // The student answer.
    userresponse: string; // The user response.
    reviewmode: boolean; // Whether the user is reviewing.
    ongoingscore: string; // The ongoing message.
    progress: number; // Progress percentage in the lesson.
    displaymenu: boolean; // Whether we should display the menu or not in this page.
    messages: {
        message: string; // Message.
        type: string; // Message type: usually a CSS identifier like:
                             // success, info, warning, error, notifyproblem, notifyerror, notifytiny, notifysuccess.

    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lesson_view_lesson WS.
 */
export type ModLessonViewLessonWSParams = {
    lessonid: number; // Lesson instance id.
    password?: string; // Lesson password.
};

/**
 * Data returned by mod_lesson_view_lesson WS.
 */
export type ModLessonViewLessonWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lti_get_ltis_by_courses WS.
 */
export type ModLtiGetLtisByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_lti_get_ltis_by_courses WS.
 */
export type ModLtiGetLtisByCoursesWSResponse = {
    ltis: {
        id: number; // External tool id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // LTI name.
        intro?: string; // The LTI intro.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles?: CoreWSExternalFile[];
        timecreated?: number; // Time of creation.
        timemodified?: number; // Time of last modification.
        typeid?: number; // Type id.
        toolurl?: string; // Tool url.
        securetoolurl?: string; // Secure tool url.
        instructorchoicesendname?: string; // Instructor choice send name.
        instructorchoicesendemailaddr?: number; // Instructor choice send mail address.
        instructorchoiceallowroster?: number; // Instructor choice allow roster.
        instructorchoiceallowsetting?: number; // Instructor choice allow setting.
        instructorcustomparameters?: string; // Instructor custom parameters.
        instructorchoiceacceptgrades?: number; // Instructor choice accept grades.
        grade?: number; // Enable grades.
        launchcontainer?: number; // Launch container mode.
        resourcekey?: string; // Resource key.
        password?: string; // Shared secret.
        debuglaunch?: number; // Debug launch.
        showtitlelaunch?: number; // Show title launch.
        showdescriptionlaunch?: number; // Show description launch.
        servicesalt?: string; // Service salt.
        icon?: string; // Alternative icon URL.
        secureicon?: string; // Secure icon URL.
        section?: number; // Course section id.
        visible?: number; // Visible.
        groupmode?: number; // Group mode.
        groupingid?: number; // Group id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lti_get_tool_launch_data WS.
 */
export type ModLtiGetToolLaunchDataWSParams = {
    toolid: number; // External tool instance id.
};

/**
 * Data returned by mod_lti_get_tool_launch_data WS.
 */
export type ModLtiGetToolLaunchDataWSResponse = {
    endpoint: string; // Endpoint URL.
    parameters: {
        name: string; // Parameter name.
        value: string; // Parameter value.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_lti_view_lti WS.
 */
export type ModLtiViewLtiWSParams = {
    ltiid: number; // Lti instance id.
};

/**
 * Data returned by mod_lti_view_lti WS.
 */
export type ModLtiViewLtiWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_page_get_pages_by_courses WS.
 */
export type ModPageGetPagesByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_page_get_pages_by_courses WS.
 */
export type ModPageGetPagesByCoursesWSResponse = {
    pages: {
        id: number; // Module id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // Page name.
        intro: string; // Summary.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles: CoreWSExternalFile[];
        content: string; // Page content.
        contentformat?: number; // Content format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        contentfiles: CoreWSExternalFile[];
        legacyfiles: number; // Legacy files flag.
        legacyfileslast: number; // Legacy files last control flag.
        display: number; // How to display the page.
        displayoptions: string; // Display options (width, height).
        revision: number; // Incremented when after each file changes, to avoid cache.
        timemodified: number; // Last time the page was modified.
        section: number; // Course section id.
        visible: number; // Module visibility.
        groupmode: number; // Group mode.
        groupingid: number; // Grouping id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_page_view_page WS.
 */
export type ModPageViewPageWSParams = {
    pageid: number; // Page instance id.
};

/**
 * Data returned by mod_page_view_page WS.
 */
export type ModPageViewPageWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_get_attempt_access_information WS.
 */
export type ModQuizGetAttemptAccessInformationWSParams = {
    quizid: number; // Quiz instance id.
    attemptid?: number; // Attempt id, 0 for the user last attempt if exists.
};

/**
 * Data returned by mod_quiz_get_attempt_access_information WS.
 */
export type ModQuizGetAttemptAccessInformationWSResponse = {
    endtime?: number; // When the attempt must be submitted (determined by rules).
    isfinished: boolean; // Whether there is no way the user will ever be allowed to attempt.
    ispreflightcheckrequired?: boolean; // Whether a check is required before the user
                                                                 // starts/continues his attempt.

    preventnewattemptreasons: string[]; // List of reasons.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_get_attempt_data WS.
 */
export type ModQuizGetAttemptDataWSParams = {
    attemptid: number; // Attempt id.
    page: number; // Page number.
    preflightdata?: { // Preflight required data (like passwords).
        name: string; // Data name.
        value: string; // Data value.
    }[];
};

/**
 * Data returned by mod_quiz_get_attempt_data WS.
 */
export type ModQuizGetAttemptDataWSResponse = {
    attempt: {
        id?: number; // Attempt id.
        quiz?: number; // Foreign key reference to the quiz that was attempted.
        userid?: number; // Foreign key reference to the user whose attempt this is.
        attempt?: number; // Sequentially numbers this students attempts at this quiz.
        uniqueid?: number; // Foreign key reference to the question_usage that holds the
                                                 // details of the the question_attempts that make up this quiz
                                                 // attempt.

        layout?: string; // Attempt layout.
        currentpage?: number; // Attempt current page.
        preview?: number; // Whether is a preview attempt or not.
        state?: string; // The current state of the attempts. 'inprogress',
                                             // 'overdue', 'finished' or 'abandoned'.

        timestart?: number; // Time when the attempt was started.
        timefinish?: number; // Time when the attempt was submitted.
                                                 // 0 if the attempt has not been submitted yet.

        timemodified?: number; // Last modified time.
        timemodifiedoffline?: number; // Last modified time via webservices.
        timecheckstate?: number; // Next time quiz cron should check attempt for
                                                     // state changes.  NULL means never check.

        sumgrades?: number; // Total marks for this attempt.
    };
    messages: string[]; // Access messages, will only be returned for users with mod/quiz:preview capability,
                 // for other users this method will throw an exception if there are messages.

    nextpage: number; // Next page number.
    questions: {
        slot: number; // Slot number.
        type: string; // Question type, i.e: multichoice.
        page: number; // Page of the quiz this question appears on.
        html: string; // The question rendered.
        responsefileareas?: { // Response file areas including files.
            area: string; // File area name.
            files?: CoreWSExternalFile[];
        }[];
        sequencecheck?: number; // The number of real steps in this attempt.
        lastactiontime?: number; // The timestamp of the most recent step in this question attempt.
        hasautosavedstep?: boolean; // Whether this question attempt has autosaved data.
        flagged: boolean; // Whether the question is flagged or not.
        number?: number; // Question ordering number in the quiz.
        state?: string; // The state where the question is in.
                 // It will not be returned if the user cannot see it due to the quiz display correctness settings.

        status?: string; // Current formatted state of the question.
        blockedbyprevious?: boolean; // Whether the question is blocked by the previous question.
        mark?: string; // The mark awarded.
                 // It will be returned only if the user is allowed to see it.

        maxmark?: number; // The maximum mark possible for this question attempt.
                 // It will be returned only if the user is allowed to see it.

        settings?: string; // Question settings (JSON encoded).
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_get_attempt_review WS.
 */
export type ModQuizGetAttemptReviewWSParams = {
    attemptid: number; // Attempt id.
    page?: number; // Page number, empty for all the questions in all the pages.
};

/**
 * Data returned by mod_quiz_get_attempt_review WS.
 */
export type ModQuizGetAttemptReviewWSResponse = {
    grade: string; // Grade for the quiz (or empty or "notyetgraded").
    attempt: {
        id?: number; // Attempt id.
        quiz?: number; // Foreign key reference to the quiz that was attempted.
        userid?: number; // Foreign key reference to the user whose attempt this is.
        attempt?: number; // Sequentially numbers this students attempts at this quiz.
        uniqueid?: number; // Foreign key reference to the question_usage that holds the
                                                 // details of the the question_attempts that make up this quiz
                                                 // attempt.

        layout?: string; // Attempt layout.
        currentpage?: number; // Attempt current page.
        preview?: number; // Whether is a preview attempt or not.
        state?: string; // The current state of the attempts. 'inprogress',
                                             // 'overdue', 'finished' or 'abandoned'.

        timestart?: number; // Time when the attempt was started.
        timefinish?: number; // Time when the attempt was submitted.
                                                 // 0 if the attempt has not been submitted yet.

        timemodified?: number; // Last modified time.
        timemodifiedoffline?: number; // Last modified time via webservices.
        timecheckstate?: number; // Next time quiz cron should check attempt for
                                                     // state changes.  NULL means never check.

        sumgrades?: number; // Total marks for this attempt.
    };
    additionaldata: {
        id: string; // Id of the data.
        title: string; // Data title.
        content: string; // Data content.
    }[];
    questions: {
        slot: number; // Slot number.
        type: string; // Question type, i.e: multichoice.
        page: number; // Page of the quiz this question appears on.
        html: string; // The question rendered.
        responsefileareas?: { // Response file areas including files.
            area: string; // File area name.
            files?: CoreWSExternalFile[];
        }[];
        sequencecheck?: number; // The number of real steps in this attempt.
        lastactiontime?: number; // The timestamp of the most recent step in this question attempt.
        hasautosavedstep?: boolean; // Whether this question attempt has autosaved data.
        flagged: boolean; // Whether the question is flagged or not.
        number?: number; // Question ordering number in the quiz.
        state?: string; // The state where the question is in.
                 // It will not be returned if the user cannot see it due to the quiz display correctness settings.

        status?: string; // Current formatted state of the question.
        blockedbyprevious?: boolean; // Whether the question is blocked by the previous question.
        mark?: string; // The mark awarded.
                 // It will be returned only if the user is allowed to see it.

        maxmark?: number; // The maximum mark possible for this question attempt.
                 // It will be returned only if the user is allowed to see it.

        settings?: string; // Question settings (JSON encoded).
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_get_attempt_summary WS.
 */
export type ModQuizGetAttemptSummaryWSParams = {
    attemptid: number; // Attempt id.
    preflightdata?: { // Preflight required data (like passwords).
        name: string; // Data name.
        value: string; // Data value.
    }[];
};

/**
 * Data returned by mod_quiz_get_attempt_summary WS.
 */
export type ModQuizGetAttemptSummaryWSResponse = {
    questions: {
        slot: number; // Slot number.
        type: string; // Question type, i.e: multichoice.
        page: number; // Page of the quiz this question appears on.
        html: string; // The question rendered.
        responsefileareas?: { // Response file areas including files.
            area: string; // File area name.
            files?: CoreWSExternalFile[];
        }[];
        sequencecheck?: number; // The number of real steps in this attempt.
        lastactiontime?: number; // The timestamp of the most recent step in this question attempt.
        hasautosavedstep?: boolean; // Whether this question attempt has autosaved data.
        flagged: boolean; // Whether the question is flagged or not.
        number?: number; // Question ordering number in the quiz.
        state?: string; // The state where the question is in.
                 // It will not be returned if the user cannot see it due to the quiz display correctness settings.

        status?: string; // Current formatted state of the question.
        blockedbyprevious?: boolean; // Whether the question is blocked by the previous question.
        mark?: string; // The mark awarded.
                 // It will be returned only if the user is allowed to see it.

        maxmark?: number; // The maximum mark possible for this question attempt.
                 // It will be returned only if the user is allowed to see it.

        settings?: string; // Question settings (JSON encoded).
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_get_combined_review_options WS.
 */
export type ModQuizGetCombinedReviewOptionsWSParams = {
    quizid: number; // Quiz instance id.
    userid?: number; // User id (empty for current user).
};

/**
 * Data returned by mod_quiz_get_combined_review_options WS.
 */
export type ModQuizGetCombinedReviewOptionsWSResponse = {
    someoptions: {
        name: string; // Option name.
        value: number; // Option value.
    }[];
    alloptions: {
        name: string; // Option name.
        value: number; // Option value.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_get_quiz_access_information WS.
 */
export type ModQuizGetQuizAccessInformationWSParams = {
    quizid: number; // Quiz instance id.
};

/**
 * Data returned by mod_quiz_get_quiz_access_information WS.
 */
export type ModQuizGetQuizAccessInformationWSResponse = {
    canattempt: boolean; // Whether the user can do the quiz or not.
    canmanage: boolean; // Whether the user can edit the quiz settings or not.
    canpreview: boolean; // Whether the user can preview the quiz or not.
    canreviewmyattempts: boolean; // Whether the users can review their previous attempts
                                                             // or not.

    canviewreports: boolean; // Whether the user can view the quiz reports or not.
    accessrules: string[]; // List of rules.
    activerulenames: string[]; // List of active rules.
    preventaccessreasons: string[]; // List of reasons.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_get_quiz_feedback_for_grade WS.
 */
export type ModQuizGetQuizFeedbackForGradeWSParams = {
    quizid: number; // Quiz instance id.
    grade: number; // The grade to check.
};

/**
 * Data returned by mod_quiz_get_quiz_feedback_for_grade WS.
 */
export type ModQuizGetQuizFeedbackForGradeWSResponse = {
    feedbacktext: string; // The comment that corresponds to this grade (empty for none).
    feedbacktextformat?: number; // Feedbacktext format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
    feedbackinlinefiles?: CoreWSExternalFile[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_get_quiz_required_qtypes WS.
 */
export type ModQuizGetQuizRequiredQtypesWSParams = {
    quizid: number; // Quiz instance id.
};

/**
 * Data returned by mod_quiz_get_quiz_required_qtypes WS.
 */
export type ModQuizGetQuizRequiredQtypesWSResponse = {
    questiontypes: string[]; // List of question types used in the quiz.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_get_quizzes_by_courses WS.
 */
export type ModQuizGetQuizzesByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_quiz_get_quizzes_by_courses WS.
 */
export type ModQuizGetQuizzesByCoursesWSResponse = {
    quizzes: {
        id: number; // Standard Moodle primary key.
        course: number; // Foreign key reference to the course this quiz is part of.
        coursemodule: number; // Course module id.
        name: string; // Quiz name.
        intro?: string; // Quiz introduction text.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles?: CoreWSExternalFile[];
        timeopen?: number; // The time when this quiz opens. (0 = no restriction.).
        timeclose?: number; // The time when this quiz closes. (0 = no restriction.).
        timelimit?: number; // The time limit for quiz attempts, in seconds.
        overduehandling?: string; // The method used to handle overdue attempts.
                                                                 // 'autosubmit', 'graceperiod' or 'autoabandon'.

        graceperiod?: number; // The amount of time (in seconds) after the time limit
                                                             // runs out during which attempts can still be submitted,
                                                             // if overduehandling is set to allow it.

        preferredbehaviour?: string; // The behaviour to ask questions to use.
        canredoquestions?: number; // Allows students to redo any completed question
                                                                     // within a quiz attempt.

        attempts?: number; // The maximum number of attempts a student is allowed.
        attemptonlast?: number; // Whether subsequent attempts start from the answer
                                                                 // to the previous attempt (1) or start blank (0).

        grademethod?: number; // One of the values QUIZ_GRADEHIGHEST, QUIZ_GRADEAVERAGE,
                                                                 // QUIZ_ATTEMPTFIRST or QUIZ_ATTEMPTLAST.

        decimalpoints?: number; // Number of decimal points to use when displaying
                                                                 // grades.

        questiondecimalpoints?: number; // Number of decimal points to use when
                                                                         // displaying question grades.
                                                                         // (-1 means use decimalpoints.).

        reviewattempt?: number; // Whether users are allowed to review their quiz
                                                                 // attempts at various times. This is a bit field, decoded by the
                                                                 // mod_quiz_display_options class. It is formed by ORing together
                                                                 // the constants defined there.

        reviewcorrectness?: number; // Whether users are allowed to review their quiz
                                                                     // attempts at various times.
                                                                     // A bit field, like reviewattempt.

        reviewmarks?: number; // Whether users are allowed to review their quiz attempts
                                                             // at various times. A bit field, like reviewattempt.

        reviewspecificfeedback?: number; // Whether users are allowed to review their
                                                                         // quiz attempts at various times. A bit field, like
                                                                         // reviewattempt.

        reviewgeneralfeedback?: number; // Whether users are allowed to review their
                                                                         // quiz attempts at various times. A bit field, like
                                                                         // reviewattempt.

        reviewrightanswer?: number; // Whether users are allowed to review their quiz
                                                                     // attempts at various times. A bit field, like
                                                                     // reviewattempt.

        reviewoverallfeedback?: number; // Whether users are allowed to review their quiz
                                                                         // attempts at various times. A bit field, like
                                                                         // reviewattempt.

        questionsperpage?: number; // How often to insert a page break when editing
                                                                     // the quiz, or when shuffling the question order.

        navmethod?: string; // Any constraints on how the user is allowed to navigate
                                                             // around the quiz. Currently recognised values are
                                                             // 'free' and 'seq'.

        shuffleanswers?: number; // Whether the parts of the question should be shuffled,
                                                                 // in those question types that support it.

        sumgrades?: number; // The total of all the question instance maxmarks.
        grade?: number; // The total that the quiz overall grade is scaled to be
                                                         // out of.

        timecreated?: number; // The time when the quiz was added to the course.
        timemodified?: number; // Last modified time.
        password?: string; // A password that the student must enter before starting or
                                                             // continuing a quiz attempt.

        subnet?: string; // Used to restrict the IP addresses from which this quiz can
                                                         // be attempted. The format is as requried by the address_in_subnet
                                                         // function.

        browsersecurity?: string; // Restriciton on the browser the student must
                                                                 // use. E.g. 'securewindow'.

        delay1?: number; // Delay that must be left between the first and second attempt,
                                                         // in seconds.

        delay2?: number; // Delay that must be left between the second and subsequent
                                                         // attempt, in seconds.

        showuserpicture?: number; // Option to show the user's picture during the
                                                                 // attempt and on the review page.

        showblocks?: number; // Whether blocks should be shown on the attempt.php and
                                                             // review.php pages.

        completionattemptsexhausted?: number; // Mark quiz complete when the student has
                                                                             // exhausted the maximum number of attempts.

        completionpass?: number; // Whether to require passing grade.
        allowofflineattempts?: number; // Whether to allow the quiz to be attempted
                                                                         // offline in the mobile app.

        autosaveperiod?: number; // Auto-save delay.
        hasfeedback?: number; // Whether the quiz has any non-blank feedback text.
        hasquestions?: number; // Whether the quiz has questions.
        section?: number; // Course section id.
        visible?: number; // Module visibility.
        groupmode?: number; // Group mode.
        groupingid?: number; // Grouping id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_get_user_attempts WS.
 */
export type ModQuizGetUserAttemptsWSParams = {
    quizid: number; // Quiz instance id.
    userid?: number; // User id, empty for current user.
    status?: string; // Quiz status: all, finished or unfinished.
    includepreviews?: boolean; // Whether to include previews or not.
};

/**
 * Data returned by mod_quiz_get_user_attempts WS.
 */
export type ModQuizGetUserAttemptsWSResponse = {
    attempts: {
        id?: number; // Attempt id.
        quiz?: number; // Foreign key reference to the quiz that was attempted.
        userid?: number; // Foreign key reference to the user whose attempt this is.
        attempt?: number; // Sequentially numbers this students attempts at this quiz.
        uniqueid?: number; // Foreign key reference to the question_usage that holds the
                                                 // details of the the question_attempts that make up this quiz
                                                 // attempt.

        layout?: string; // Attempt layout.
        currentpage?: number; // Attempt current page.
        preview?: number; // Whether is a preview attempt or not.
        state?: string; // The current state of the attempts. 'inprogress',
                                             // 'overdue', 'finished' or 'abandoned'.

        timestart?: number; // Time when the attempt was started.
        timefinish?: number; // Time when the attempt was submitted.
                                                 // 0 if the attempt has not been submitted yet.

        timemodified?: number; // Last modified time.
        timemodifiedoffline?: number; // Last modified time via webservices.
        timecheckstate?: number; // Next time quiz cron should check attempt for
                                                     // state changes.  NULL means never check.

        sumgrades?: number; // Total marks for this attempt.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_get_user_best_grade WS.
 */
export type ModQuizGetUserBestGradeWSParams = {
    quizid: number; // Quiz instance id.
    userid?: number; // User id.
};

/**
 * Data returned by mod_quiz_get_user_best_grade WS.
 */
export type ModQuizGetUserBestGradeWSResponse = {
    hasgrade: boolean; // Whether the user has a grade on the given quiz.
    grade?: number; // The grade (only if the user has a grade).
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_process_attempt WS.
 */
export type ModQuizProcessAttemptWSParams = {
    attemptid: number; // Attempt id.
    data?: { // The data to be saved.
        name: string; // Data name.
        value: string; // Data value.
    }[];
    finishattempt?: boolean; // Whether to finish or not the attempt.
    timeup?: boolean; // Whether the WS was called by a timer when the time is up.
    preflightdata?: { // Preflight required data (like passwords).
        name: string; // Data name.
        value: string; // Data value.
    }[];
};

/**
 * Data returned by mod_quiz_process_attempt WS.
 */
export type ModQuizProcessAttemptWSResponse = {
    state: string; // State: the new attempt state:
                                                                 // inprogress, finished, overdue, abandoned.

    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_save_attempt WS.
 */
export type ModQuizSaveAttemptWSParams = {
    attemptid: number; // Attempt id.
    data: { // The data to be saved.
        name: string; // Data name.
        value: string; // Data value.
    }[];
    preflightdata?: { // Preflight required data (like passwords).
        name: string; // Data name.
        value: string; // Data value.
    }[];
};

/**
 * Data returned by mod_quiz_save_attempt WS.
 */
export type ModQuizSaveAttemptWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_start_attempt WS.
 */
export type ModQuizStartAttemptWSParams = {
    quizid: number; // Quiz instance id.
    preflightdata?: { // Preflight required data (like passwords).
        name: string; // Data name.
        value: string; // Data value.
    }[];
    forcenew?: boolean; // Whether to force a new attempt or not.
};

/**
 * Data returned by mod_quiz_start_attempt WS.
 */
export type ModQuizStartAttemptWSResponse = {
    attempt: {
        id?: number; // Attempt id.
        quiz?: number; // Foreign key reference to the quiz that was attempted.
        userid?: number; // Foreign key reference to the user whose attempt this is.
        attempt?: number; // Sequentially numbers this students attempts at this quiz.
        uniqueid?: number; // Foreign key reference to the question_usage that holds the
                                                 // details of the the question_attempts that make up this quiz
                                                 // attempt.

        layout?: string; // Attempt layout.
        currentpage?: number; // Attempt current page.
        preview?: number; // Whether is a preview attempt or not.
        state?: string; // The current state of the attempts. 'inprogress',
                                             // 'overdue', 'finished' or 'abandoned'.

        timestart?: number; // Time when the attempt was started.
        timefinish?: number; // Time when the attempt was submitted.
                                                 // 0 if the attempt has not been submitted yet.

        timemodified?: number; // Last modified time.
        timemodifiedoffline?: number; // Last modified time via webservices.
        timecheckstate?: number; // Next time quiz cron should check attempt for
                                                     // state changes.  NULL means never check.

        sumgrades?: number; // Total marks for this attempt.
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_view_attempt WS.
 */
export type ModQuizViewAttemptWSParams = {
    attemptid: number; // Attempt id.
    page: number; // Page number.
    preflightdata?: { // Preflight required data (like passwords).
        name: string; // Data name.
        value: string; // Data value.
    }[];
};

/**
 * Data returned by mod_quiz_view_attempt WS.
 */
export type ModQuizViewAttemptWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_view_attempt_review WS.
 */
export type ModQuizViewAttemptReviewWSParams = {
    attemptid: number; // Attempt id.
};

/**
 * Data returned by mod_quiz_view_attempt_review WS.
 */
export type ModQuizViewAttemptReviewWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_view_attempt_summary WS.
 */
export type ModQuizViewAttemptSummaryWSParams = {
    attemptid: number; // Attempt id.
    preflightdata?: { // Preflight required data (like passwords).
        name: string; // Data name.
        value: string; // Data value.
    }[];
};

/**
 * Data returned by mod_quiz_view_attempt_summary WS.
 */
export type ModQuizViewAttemptSummaryWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_quiz_view_quiz WS.
 */
export type ModQuizViewQuizWSParams = {
    quizid: number; // Quiz instance id.
};

/**
 * Data returned by mod_quiz_view_quiz WS.
 */
export type ModQuizViewQuizWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_resource_get_resources_by_courses WS.
 */
export type ModResourceGetResourcesByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_resource_get_resources_by_courses WS.
 */
export type ModResourceGetResourcesByCoursesWSResponse = {
    resources: {
        id: number; // Module id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // Page name.
        intro: string; // Summary.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles: CoreWSExternalFile[];
        contentfiles: CoreWSExternalFile[];
        tobemigrated: number; // Whether this resource was migrated.
        legacyfiles: number; // Legacy files flag.
        legacyfileslast: number; // Legacy files last control flag.
        display: number; // How to display the resource.
        displayoptions: string; // Display options (width, height).
        filterfiles: number; // If filters should be applied to the resource content.
        revision: number; // Incremented when after each file changes, to avoid cache.
        timemodified: number; // Last time the resource was modified.
        section: number; // Course section id.
        visible: number; // Module visibility.
        groupmode: number; // Group mode.
        groupingid: number; // Grouping id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_resource_view_resource WS.
 */
export type ModResourceViewResourceWSParams = {
    resourceid: number; // Resource instance id.
};

/**
 * Data returned by mod_resource_view_resource WS.
 */
export type ModResourceViewResourceWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_scorm_get_scorm_access_information WS.
 */
export type ModScormGetScormAccessInformationWSParams = {
    scormid: number; // Scorm instance id.
};

/**
 * Data returned by mod_scorm_get_scorm_access_information WS.
 */
export type ModScormGetScormAccessInformationWSResponse = {
    warnings?: CoreWSExternalWarning[];
    canaddinstance?: boolean; // Whether the user has the capability mod/scorm:addinstance allowed.
    canviewreport?: boolean; // Whether the user has the capability mod/scorm:viewreport allowed.
    canskipview?: boolean; // Whether the user has the capability mod/scorm:skipview allowed.
    cansavetrack?: boolean; // Whether the user has the capability mod/scorm:savetrack allowed.
    canviewscores?: boolean; // Whether the user has the capability mod/scorm:viewscores allowed.
    candeleteresponses?: boolean; // Whether the user has the capability mod/scorm:deleteresponses allowed.
    candeleteownresponses?: boolean; // Whether the user has the capability mod/scorm:deleteownresponses allowed.
};

/**
 * Params of mod_scorm_get_scorm_attempt_count WS.
 */
export type ModScormGetScormAttemptCountWSParams = {
    scormid: number; // SCORM instance id.
    userid: number; // User id.
    ignoremissingcompletion?: boolean; // Ignores attempts that haven't reported a grade/completion.
};

/**
 * Data returned by mod_scorm_get_scorm_attempt_count WS.
 */
export type ModScormGetScormAttemptCountWSResponse = {
    attemptscount: number; // Attempts count.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_scorm_get_scorm_sco_tracks WS.
 */
export type ModScormGetScormScoTracksWSParams = {
    scoid: number; // Sco id.
    userid: number; // User id.
    attempt?: number; // Attempt number (0 for last attempt).
};

/**
 * Data returned by mod_scorm_get_scorm_sco_tracks WS.
 */
export type ModScormGetScormScoTracksWSResponse = {
    data: {
        attempt: number; // Attempt number.
        tracks: {
            element: string; // Element name.
            value: string; // Element value.
        }[];
    }; // SCO data.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_scorm_get_scorm_scoes WS.
 */
export type ModScormGetScormScoesWSParams = {
    scormid: number; // Scorm instance id.
    organization?: string; // Organization id.
};

/**
 * Data returned by mod_scorm_get_scorm_scoes WS.
 */
export type ModScormGetScormScoesWSResponse = {
    scoes: {
        id: number; // Sco id.
        scorm: number; // Scorm id.
        manifest: string; // Manifest id.
        organization: string; // Organization id.
        parent: string; // Parent.
        identifier: string; // Identifier.
        launch: string; // Launch file.
        scormtype: string; // Scorm type (asset, sco).
        title: string; // Sco title.
        sortorder: number; // Sort order.
        extradata?: { // Additional SCO data.
            element: string; // Element name.
            value: string; // Element value.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_scorm_get_scorm_user_data WS.
 */
export type ModScormGetScormUserDataWSParams = {
    scormid: number; // Scorm instance id.
    attempt: number; // Attempt number.
};

/**
 * Data returned by mod_scorm_get_scorm_user_data WS.
 */
export type ModScormGetScormUserDataWSResponse = {
    data: {
        scoid: number; // Sco id.
        userdata: {
            element: string; // Element name.
            value: string; // Element value.
        }[];
        defaultdata: {
            element: string; // Element name.
            value: string; // Element value.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_scorm_get_scorms_by_courses WS.
 */
export type ModScormGetScormsByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_scorm_get_scorms_by_courses WS.
 */
export type ModScormGetScormsByCoursesWSResponse = {
    scorms: {
        id: number; // SCORM id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // SCORM name.
        intro: string; // The SCORM intro.
        introformat: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles?: CoreWSExternalFile[];
        packagesize?: number; // SCORM zip package size.
        packageurl?: string; // SCORM zip package URL.
        version?: string; // SCORM version (SCORM_12, SCORM_13, SCORM_AICC).
        maxgrade?: number; // Max grade.
        grademethod?: number; // Grade method.
        whatgrade?: number; // What grade.
        maxattempt?: number; // Maximum number of attemtps.
        forcecompleted?: boolean; // Status current attempt is forced to "completed".
        forcenewattempt?: number; // Controls re-entry behaviour.
        lastattemptlock?: boolean; // Prevents to launch new attempts once finished.
        displayattemptstatus?: number; // How to display attempt status.
        displaycoursestructure?: boolean; // Display contents structure.
        sha1hash?: string; // Package content or ext path hash.
        md5hash?: string; // MD5 Hash of package file.
        revision?: number; // Revison number.
        launch?: number; // First content to launch.
        skipview?: number; // How to skip the content structure page.
        hidebrowse?: boolean; // Disable preview mode?.
        hidetoc?: number; // How to display the SCORM structure in player.
        nav?: number; // Show navigation buttons.
        navpositionleft?: number; // Navigation position left.
        navpositiontop?: number; // Navigation position top.
        auto?: boolean; // Auto continue?.
        popup?: number; // Display in current or new window.
        width?: number; // Frame width.
        height?: number; // Frame height.
        timeopen?: number; // Available from.
        timeclose?: number; // Available to.
        displayactivityname?: boolean; // Display the activity name above the player?.
        scormtype?: string; // SCORM type.
        reference?: string; // Reference to the package.
        protectpackagedownloads?: boolean; // Protect package downloads?.
        updatefreq?: number; // Auto-update frequency for remote packages.
        options?: string; // Additional options.
        completionstatusrequired?: number; // Status passed/completed required?.
        completionscorerequired?: number; // Minimum score required.
        completionstatusallscos?: number; // Require all scos to return completion status.
        autocommit?: boolean; // Save track data automatically?.
        timemodified?: number; // Time of last modification.
        section?: number; // Course section id.
        visible?: boolean; // Visible.
        groupmode?: number; // Group mode.
        groupingid?: number; // Group id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_scorm_insert_scorm_tracks WS.
 */
export type ModScormInsertScormTracksWSParams = {
    scoid: number; // SCO id.
    attempt: number; // Attempt number.
    tracks: {
        element: string; // Element name.
        value: string; // Element value.
    }[];
};

/**
 * Data returned by mod_scorm_insert_scorm_tracks WS.
 */
export type ModScormInsertScormTracksWSResponse = {
    trackids: number[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_scorm_launch_sco WS.
 */
export type ModScormLaunchScoWSParams = {
    scormid: number; // SCORM instance id.
    scoid?: number; // SCO id (empty for launching the first SCO).
};

/**
 * Data returned by mod_scorm_launch_sco WS.
 */
export type ModScormLaunchScoWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_scorm_view_scorm WS.
 */
export type ModScormViewScormWSParams = {
    scormid: number; // Scorm instance id.
};

/**
 * Data returned by mod_scorm_view_scorm WS.
 */
export type ModScormViewScormWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_survey_get_questions WS.
 */
export type ModSurveyGetQuestionsWSParams = {
    surveyid: number; // Survey instance id.
};

/**
 * Data returned by mod_survey_get_questions WS.
 */
export type ModSurveyGetQuestionsWSResponse = {
    questions: {
        id: number; // Question id.
        text: string; // Question text.
        shorttext: string; // Question short text.
        multi: string; // Subquestions ids.
        intro: string; // The question intro.
        type: number; // Question type.
        options: string; // Question options.
        parent: number; // Parent question (for subquestions).
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_survey_get_surveys_by_courses WS.
 */
export type ModSurveyGetSurveysByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_survey_get_surveys_by_courses WS.
 */
export type ModSurveyGetSurveysByCoursesWSResponse = {
    surveys: {
        id: number; // Survey id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // Survey name.
        intro?: string; // The Survey intro.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles?: CoreWSExternalFile[];
        template?: number; // Survey type.
        days?: number; // Days.
        questions?: string; // Question ids.
        surveydone?: number; // Did I finish the survey?.
        timecreated?: number; // Time of creation.
        timemodified?: number; // Time of last modification.
        section?: number; // Course section id.
        visible?: number; // Visible.
        groupmode?: number; // Group mode.
        groupingid?: number; // Group id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_survey_submit_answers WS.
 */
export type ModSurveySubmitAnswersWSParams = {
    surveyid: number; // Survey id.
    answers: {
        key: string; // Answer key.
        value: string; // Answer value.
    }[];
};

/**
 * Data returned by mod_survey_submit_answers WS.
 */
export type ModSurveySubmitAnswersWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_survey_view_survey WS.
 */
export type ModSurveyViewSurveyWSParams = {
    surveyid: number; // Survey instance id.
};

/**
 * Data returned by mod_survey_view_survey WS.
 */
export type ModSurveyViewSurveyWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_url_get_urls_by_courses WS.
 */
export type ModUrlGetUrlsByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_url_get_urls_by_courses WS.
 */
export type ModUrlGetUrlsByCoursesWSResponse = {
    urls: {
        id: number; // Module id.
        coursemodule: number; // Course module id.
        course: number; // Course id.
        name: string; // URL name.
        intro: string; // Summary.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles: CoreWSExternalFile[];
        externalurl: string; // External URL.
        display: number; // How to display the url.
        displayoptions: string; // Display options (width, height).
        parameters: string; // Parameters to append to the URL.
        timemodified: number; // Last time the url was modified.
        section: number; // Course section id.
        visible: number; // Module visibility.
        groupmode: number; // Group mode.
        groupingid: number; // Grouping id.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_url_view_url WS.
 */
export type ModUrlViewUrlWSParams = {
    urlid: number; // Url instance id.
};

/**
 * Data returned by mod_url_view_url WS.
 */
export type ModUrlViewUrlWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_wiki_edit_page WS.
 */
export type ModWikiEditPageWSParams = {
    pageid: number; // Page ID.
    content: string; // Page contents.
    section?: string; // Section page title.
};

/**
 * Data returned by mod_wiki_edit_page WS.
 */
export type ModWikiEditPageWSResponse = {
    pageid: number; // Edited page id.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_wiki_get_page_contents WS.
 */
export type ModWikiGetPageContentsWSParams = {
    pageid: number; // Page ID.
};

/**
 * Data returned by mod_wiki_get_page_contents WS.
 */
export type ModWikiGetPageContentsWSResponse = {
    page: {
        id: number; // Page ID.
        wikiid: number; // Page's wiki ID.
        subwikiid: number; // Page's subwiki ID.
        groupid: number; // Page's group ID.
        userid: number; // Page's user ID.
        title: string; // Page title.
        cachedcontent: string; // Page contents.
        contentformat?: number; // Cachedcontent format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        caneditpage: boolean; // True if user can edit the page.
        version?: number; // Latest version of the page.
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }; // Page.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_wiki_get_page_for_editing WS.
 */
export type ModWikiGetPageForEditingWSParams = {
    pageid: number; // Page ID to edit.
    section?: string; // Section page title.
    lockonly?: boolean; // Just renew lock and not return content.
};

/**
 * Data returned by mod_wiki_get_page_for_editing WS.
 */
export type ModWikiGetPageForEditingWSResponse = {
    pagesection: {
        content?: string; // The contents of the page-section to be edited.
        contentformat?: string; // Format of the original content of the page.
        version: number; // Latest version of the page.
        warnings?: CoreWSExternalWarning[];
    };
};

/**
 * Params of mod_wiki_get_subwiki_files WS.
 */
export type ModWikiGetSubwikiFilesWSParams = {
    wikiid: number; // Wiki instance ID.
    groupid?: number; // Subwiki's group ID, -1 means current group. It will be ignored if the wiki doesn't use groups.
    userid?: number; // Subwiki's user ID, 0 means current user. It will be ignored in collaborative wikis.
};

/**
 * Data returned by mod_wiki_get_subwiki_files WS.
 */
export type ModWikiGetSubwikiFilesWSResponse = {
    files: CoreWSExternalFile[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_wiki_get_subwiki_pages WS.
 */
export type ModWikiGetSubwikiPagesWSParams = {
    wikiid: number; // Wiki instance ID.
    groupid?: number; // Subwiki's group ID, -1 means current group. It will be ignored if the wiki doesn't use groups.
    userid?: number; // Subwiki's user ID, 0 means current user. It will be ignored in collaborative wikis.
    options?: {
        sortby?: string; // Field to sort by (id, title, ...).
        sortdirection?: string; // Sort direction: ASC or DESC.
        includecontent?: number; // Include each page contents or just the contents size.
    }; // Options.
};

/**
 * Data returned by mod_wiki_get_subwiki_pages WS.
 */
export type ModWikiGetSubwikiPagesWSResponse = {
    pages: {
        id: number; // Page ID.
        subwikiid: number; // Page's subwiki ID.
        title: string; // Page title.
        timecreated: number; // Time of creation.
        timemodified: number; // Time of last modification.
        timerendered: number; // Time of last renderization.
        userid: number; // ID of the user that last modified the page.
        pageviews: number; // Number of times the page has been viewed.
        readonly: number; // 1 if readonly, 0 otherwise.
        caneditpage: boolean; // True if user can edit the page.
        firstpage: boolean; // True if it's the first page.
        cachedcontent?: string; // Page contents.
        contentformat?: number; // Cachedcontent format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        contentsize?: number; // Size of page contents in bytes (doesn't include size of attached files).
        tags?: { // Tags.
            id: number; // Tag id.
            name: string; // Tag name.
            rawname: string; // The raw, unnormalised name for the tag as entered by users.
            isstandard: boolean; // Whether this tag is standard.
            tagcollid: number; // Tag collection id.
            taginstanceid: number; // Tag instance id.
            taginstancecontextid: number; // Context the tag instance belongs to.
            itemid: number; // Id of the record tagged.
            ordering: number; // Tag ordering.
            flag: number; // Whether the tag is flagged as inappropriate.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_wiki_get_subwikis WS.
 */
export type ModWikiGetSubwikisWSParams = {
    wikiid: number; // Wiki instance ID.
};

/**
 * Data returned by mod_wiki_get_subwikis WS.
 */
export type ModWikiGetSubwikisWSResponse = {
    subwikis: {
        id: number; // Subwiki ID.
        wikiid: number; // Wiki ID.
        groupid: string; // Group ID.
        userid: number; // User ID.
        canedit: boolean; // True if user can edit the subwiki.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_wiki_get_wikis_by_courses WS.
 */
export type ModWikiGetWikisByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_wiki_get_wikis_by_courses WS.
 */
export type ModWikiGetWikisByCoursesWSResponse = {
    wikis: {
        id: number; // Wiki ID.
        coursemodule: number; // Course module ID.
        course: number; // Course ID.
        name: string; // Wiki name.
        intro?: string; // Wiki intro.
        introformat?: number; // Wiki intro format. format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        introfiles?: CoreWSExternalFile[];
        timecreated?: number; // Time of creation.
        timemodified?: number; // Time of last modification.
        firstpagetitle?: string; // First page title.
        wikimode?: string; // Wiki mode (individual, collaborative).
        defaultformat?: string; // Wiki's default format (html, creole, nwiki).
        forceformat?: number; // 1 if format is forced, 0 otherwise.
        editbegin?: number; // Edit begin.
        editend?: number; // Edit end.
        section?: number; // Course section ID.
        visible?: number; // 1 if visible, 0 otherwise.
        groupmode?: number; // Group mode.
        groupingid?: number; // Group ID.
        cancreatepages: boolean; // True if user can create pages.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_wiki_new_page WS.
 */
export type ModWikiNewPageWSParams = {
    title: string; // New page title.
    content: string; // Page contents.
    contentformat?: string; // Page contents format. If an invalid format is provided, default
                 // wiki format is used.

    subwikiid?: number; // Page's subwiki ID.
    wikiid?: number; // Page's wiki ID. Used if subwiki does not exists.
    userid?: number; // Subwiki's user ID. Used if subwiki does not exists.
    groupid?: number; // Subwiki's group ID. Used if subwiki does not exists.
};

/**
 * Data returned by mod_wiki_new_page WS.
 */
export type ModWikiNewPageWSResponse = {
    pageid: number; // New page id.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_wiki_view_page WS.
 */
export type ModWikiViewPageWSParams = {
    pageid: number; // Wiki page ID.
};

/**
 * Data returned by mod_wiki_view_page WS.
 */
export type ModWikiViewPageWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_wiki_view_wiki WS.
 */
export type ModWikiViewWikiWSParams = {
    wikiid: number; // Wiki instance ID.
};

/**
 * Data returned by mod_wiki_view_wiki WS.
 */
export type ModWikiViewWikiWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_add_submission WS.
 */
export type ModWorkshopAddSubmissionWSParams = {
    workshopid: number; // Workshop id.
    title: string; // Submission title.
    content?: string; // Submission text content.
    contentformat?: number; // The format used for the content.
    inlineattachmentsid?: number; // The draft file area id for inline attachments in the content.
    attachmentsid?: number; // The draft file area id for attachments.
};

/**
 * Data returned by mod_workshop_add_submission WS.
 */
export type ModWorkshopAddSubmissionWSResponse = {
    status: boolean; // True if the submission was created false otherwise.
    submissionid?: number; // New workshop submission id.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_delete_submission WS.
 */
export type ModWorkshopDeleteSubmissionWSParams = {
    submissionid: number; // Submission id.
};

/**
 * Data returned by mod_workshop_delete_submission WS.
 */
export type ModWorkshopDeleteSubmissionWSResponse = {
    status: boolean; // True if the submission was deleted.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_evaluate_assessment WS.
 */
export type ModWorkshopEvaluateAssessmentWSParams = {
    assessmentid: number; // Assessment id.
    feedbacktext?: string; // The feedback for the reviewer.
    feedbackformat?: number; // The feedback format for text.
    weight?: number; // The new weight for the assessment.
    gradinggradeover?: string; // The new grading grade.
};

/**
 * Data returned by mod_workshop_evaluate_assessment WS.
 */
export type ModWorkshopEvaluateAssessmentWSResponse = {
    status: boolean; // Status: true if the assessment was evaluated, false otherwise.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_evaluate_submission WS.
 */
export type ModWorkshopEvaluateSubmissionWSParams = {
    submissionid: number; // Submission id.
    feedbacktext?: string; // The feedback for the author.
    feedbackformat?: number; // The feedback format for text.
    published?: boolean; // Publish the submission for others?.
    gradeover?: string; // The new submission grade.
};

/**
 * Data returned by mod_workshop_evaluate_submission WS.
 */
export type ModWorkshopEvaluateSubmissionWSResponse = {
    status: boolean; // Status: true if the submission was evaluated, false otherwise.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_get_assessment WS.
 */
export type ModWorkshopGetAssessmentWSParams = {
    assessmentid: number; // Assessment id.
};

/**
 * Data returned by mod_workshop_get_assessment WS.
 */
export type ModWorkshopGetAssessmentWSResponse = {
    assessment: {
        id: number; // The primary key of the record.
        submissionid: number; // The id of the assessed submission.
        reviewerid: number; // The id of the reviewer who makes this assessment.
        weight: number; // The weight of the assessment for the purposes of aggregation.
        timecreated: number; // If 0 then the assessment was allocated but the reviewer has not assessed yet.
                 // If greater than 0 then the timestamp of when the reviewer assessed for the first time.

        timemodified: number; // If 0 then the assessment was allocated but the reviewer has not assessed yet.
                 // If greater than 0 then the timestamp of when the reviewer assessed for the last time.

        grade: number; // The aggregated grade for submission suggested by the reviewer.
                 // The grade 0..100 is computed from the values assigned to the assessment dimensions fields. If NULL then it has not been aggregated yet.

        gradinggrade: number; // The computed grade 0..100 for this assessment. If NULL then it has not been computed yet.
        gradinggradeover: number; // Grade for the assessment manually overridden by a teacher.
                 // Grade is always from interval 0..100. If NULL then the grade is not overriden.

        gradinggradeoverby: number; // The id of the user who has overridden the grade for submission.
        feedbackauthor: string; // The comment/feedback from the reviewer for the author.
        feedbackauthorformat?: number; // Feedbackauthor format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        feedbackauthorattachment: number; // Are there some files attached to the feedbackauthor field?
                 // Sets to 1 by file_postupdate_standard_filemanager().

        feedbackreviewer?: string; // The comment/feedback from the teacher for the reviewer.
                 // For example the reason why the grade for assessment was overridden.

        feedbackreviewerformat?: number; // Feedbackreviewer format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        feedbackcontentfiles: { // Feedbackcontentfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        feedbackattachmentfiles: { // Feedbackattachmentfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_get_assessment_form_definition WS.
 */
export type ModWorkshopGetAssessmentFormDefinitionWSParams = {
    assessmentid: number; // Assessment id.
    mode?: string; // The form mode (assessment or preview).
};

/**
 * Data returned by mod_workshop_get_assessment_form_definition WS.
 */
export type ModWorkshopGetAssessmentFormDefinitionWSResponse = {
    dimenssionscount: number; // The number of dimenssions used by the form.
    descriptionfiles: CoreWSExternalFile[];
    options: { // The form options.
        name: string; // Option name.
        value: string; // Option value.
    }[];
    fields: { // The form fields.
        name: string; // Field name.
        value: string; // Field default value.
    }[];
    current: { // The current field values.
        name: string; // Field name.
        value: string; // Current field value.
    }[];
    dimensionsinfo: { // The dimensions general information.
        id: number; // Dimension id.
        min: number; // Minimum grade for the dimension.
        max: number; // Maximum grade for the dimension.
        weight: string; // The weight of the dimension.
        scale?: string; // Scale items (if used).
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_get_grades WS.
 */
export type ModWorkshopGetGradesWSParams = {
    workshopid: number; // Workshop instance id.
    userid?: number; // User id (empty or 0 for current user).
};

/**
 * Data returned by mod_workshop_get_grades WS.
 */
export type ModWorkshopGetGradesWSResponse = {
    assessmentrawgrade?: number; // The assessment raw (numeric) grade.
    assessmentlongstrgrade?: string; // The assessment string grade.
    assessmentgradehidden?: boolean; // Whether the grade is hidden or not.
    submissionrawgrade?: number; // The submission raw (numeric) grade.
    submissionlongstrgrade?: string; // The submission string grade.
    submissiongradehidden?: boolean; // Whether the grade is hidden or not.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_get_grades_report WS.
 */
export type ModWorkshopGetGradesReportWSParams = {
    workshopid: number; // Workshop instance id.
    groupid?: number; // Group id, 0 means that the function will determine the user group.
    sortby?: string; // Sort by this element: lastname, firstname, submissiontitle,
                 // submissionmodified, submissiongrade, gradinggrade.

    sortdirection?: string; // Sort direction: ASC or DESC.
    page?: number; // The page of records to return.
    perpage?: number; // The number of records to return per page.
};

/**
 * Data returned by mod_workshop_get_grades_report WS.
 */
export type ModWorkshopGetGradesReportWSResponse = {
    report: {
        grades: {
            userid: number; // The id of the user being displayed in the report.
            submissionid: number; // Submission id.
            submissiontitle: string; // Submission title.
            submissionmodified: number; // Timestamp submission was updated.
            submissiongrade?: number; // Aggregated grade for the submission.
            gradinggrade?: number; // Computed grade for the assessment.
            submissiongradeover?: number; // Grade for the assessment overrided
                                     // by the teacher.

            submissiongradeoverby?: number; // The id of the user who overrided
                                     // the grade.

            submissionpublished?: number; // Whether is a submission published.
            reviewedby?: { // The users who reviewed the
                                     // user submission.

                userid: number; // The id of the user (0 when is configured to do not display names).
                assessmentid: number; // The id of the assessment.
                submissionid: number; // The id of the submission assessed.
                grade: number; // The grade for submission.
                gradinggrade: number; // The grade for assessment.
                gradinggradeover: number; // The aggregated grade overrided.
                weight: number; // The weight of the assessment for aggregation.
            }[];
            reviewerof?: { // The assessments the user
                                     // reviewed.

                userid: number; // The id of the user (0 when is configured to do not display names).
                assessmentid: number; // The id of the assessment.
                submissionid: number; // The id of the submission assessed.
                grade: number; // The grade for submission.
                gradinggrade: number; // The grade for assessment.
                gradinggradeover: number; // The aggregated grade overrided.
                weight: number; // The weight of the assessment for aggregation.
            }[];
        }[];
        totalcount: number; // Number of total submissions.
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_get_reviewer_assessments WS.
 */
export type ModWorkshopGetReviewerAssessmentsWSParams = {
    workshopid: number; // Workshop instance id.
    userid?: number; // User id who did the assessment review (empty or 0 for current user).
};

/**
 * Data returned by mod_workshop_get_reviewer_assessments WS.
 */
export type ModWorkshopGetReviewerAssessmentsWSResponse = {
    assessments: {
        id: number; // The primary key of the record.
        submissionid: number; // The id of the assessed submission.
        reviewerid: number; // The id of the reviewer who makes this assessment.
        weight: number; // The weight of the assessment for the purposes of aggregation.
        timecreated: number; // If 0 then the assessment was allocated but the reviewer has not assessed yet.
                 // If greater than 0 then the timestamp of when the reviewer assessed for the first time.

        timemodified: number; // If 0 then the assessment was allocated but the reviewer has not assessed yet.
                 // If greater than 0 then the timestamp of when the reviewer assessed for the last time.

        grade: number; // The aggregated grade for submission suggested by the reviewer.
                 // The grade 0..100 is computed from the values assigned to the assessment dimensions fields. If NULL then it has not been aggregated yet.

        gradinggrade: number; // The computed grade 0..100 for this assessment. If NULL then it has not been computed yet.
        gradinggradeover: number; // Grade for the assessment manually overridden by a teacher.
                 // Grade is always from interval 0..100. If NULL then the grade is not overriden.

        gradinggradeoverby: number; // The id of the user who has overridden the grade for submission.
        feedbackauthor: string; // The comment/feedback from the reviewer for the author.
        feedbackauthorformat?: number; // Feedbackauthor format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        feedbackauthorattachment: number; // Are there some files attached to the feedbackauthor field?
                 // Sets to 1 by file_postupdate_standard_filemanager().

        feedbackreviewer?: string; // The comment/feedback from the teacher for the reviewer.
                 // For example the reason why the grade for assessment was overridden.

        feedbackreviewerformat?: number; // Feedbackreviewer format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        feedbackcontentfiles: { // Feedbackcontentfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        feedbackattachmentfiles: { // Feedbackattachmentfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_get_submission WS.
 */
export type ModWorkshopGetSubmissionWSParams = {
    submissionid: number; // Submission id.
};

/**
 * Data returned by mod_workshop_get_submission WS.
 */
export type ModWorkshopGetSubmissionWSResponse = {
    submission: {
        id: number; // The primary key of the record.
        workshopid: number; // The id of the workshop instance.
        example: boolean; // Is this submission an example from teacher.
        authorid: number; // The author of the submission.
        timecreated: number; // Timestamp when the work was submitted for the first time.
        timemodified: number; // Timestamp when the submission has been updated.
        title: string; // The submission title.
        content: string; // Submission text.
        contentformat?: number; // Content format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        contenttrust: number; // The trust mode of the data.
        attachment: number; // Used by File API file_postupdate_standard_filemanager.
        grade?: number; // Aggregated grade for the submission. The grade is a decimal number from interval 0..100.
                 // If NULL then the grade for submission has not been aggregated yet.

        gradeover?: number; // Grade for the submission manually overridden by a teacher. Grade is always from interval 0..100.
                 // If NULL then the grade is not overriden.

        gradeoverby?: number; // The id of the user who has overridden the grade for submission.
        feedbackauthor?: string; // Teacher comment/feedback for the author of the submission, for example describing the reasons
                 // for the grade overriding.

        feedbackauthorformat?: number; // Feedbackauthor format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        timegraded?: number; // The timestamp when grade or gradeover was recently modified.
        published: boolean; // Shall the submission be available to other when the workshop is closed.
        late: number; // Has this submission been submitted after the deadline or during the assessment phase?.
        contentfiles?: { // Contentfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        attachmentfiles?: { // Attachmentfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_get_submission_assessments WS.
 */
export type ModWorkshopGetSubmissionAssessmentsWSParams = {
    submissionid: number; // Submission id.
};

/**
 * Data returned by mod_workshop_get_submission_assessments WS.
 */
export type ModWorkshopGetSubmissionAssessmentsWSResponse = {
    assessments: {
        id: number; // The primary key of the record.
        submissionid: number; // The id of the assessed submission.
        reviewerid: number; // The id of the reviewer who makes this assessment.
        weight: number; // The weight of the assessment for the purposes of aggregation.
        timecreated: number; // If 0 then the assessment was allocated but the reviewer has not assessed yet.
                 // If greater than 0 then the timestamp of when the reviewer assessed for the first time.

        timemodified: number; // If 0 then the assessment was allocated but the reviewer has not assessed yet.
                 // If greater than 0 then the timestamp of when the reviewer assessed for the last time.

        grade: number; // The aggregated grade for submission suggested by the reviewer.
                 // The grade 0..100 is computed from the values assigned to the assessment dimensions fields. If NULL then it has not been aggregated yet.

        gradinggrade: number; // The computed grade 0..100 for this assessment. If NULL then it has not been computed yet.
        gradinggradeover: number; // Grade for the assessment manually overridden by a teacher.
                 // Grade is always from interval 0..100. If NULL then the grade is not overriden.

        gradinggradeoverby: number; // The id of the user who has overridden the grade for submission.
        feedbackauthor: string; // The comment/feedback from the reviewer for the author.
        feedbackauthorformat?: number; // Feedbackauthor format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        feedbackauthorattachment: number; // Are there some files attached to the feedbackauthor field?
                 // Sets to 1 by file_postupdate_standard_filemanager().

        feedbackreviewer?: string; // The comment/feedback from the teacher for the reviewer.
                 // For example the reason why the grade for assessment was overridden.

        feedbackreviewerformat?: number; // Feedbackreviewer format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        feedbackcontentfiles: { // Feedbackcontentfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        feedbackattachmentfiles: { // Feedbackattachmentfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_get_submissions WS.
 */
export type ModWorkshopGetSubmissionsWSParams = {
    workshopid: number; // Workshop instance id.
    userid?: number; // Get submissions done by this user. Use 0 or empty for the current user.
    groupid?: number; // Group id, 0 means that the function will determine the user group.
                                                // It will return submissions done by users in the given group.

    page?: number; // The page of records to return.
    perpage?: number; // The number of records to return per page.
};

/**
 * Data returned by mod_workshop_get_submissions WS.
 */
export type ModWorkshopGetSubmissionsWSResponse = {
    submissions: {
        id: number; // The primary key of the record.
        workshopid: number; // The id of the workshop instance.
        example: boolean; // Is this submission an example from teacher.
        authorid: number; // The author of the submission.
        timecreated: number; // Timestamp when the work was submitted for the first time.
        timemodified: number; // Timestamp when the submission has been updated.
        title: string; // The submission title.
        content: string; // Submission text.
        contentformat?: number; // Content format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        contenttrust: number; // The trust mode of the data.
        attachment: number; // Used by File API file_postupdate_standard_filemanager.
        grade?: number; // Aggregated grade for the submission. The grade is a decimal number from interval 0..100.
                 // If NULL then the grade for submission has not been aggregated yet.

        gradeover?: number; // Grade for the submission manually overridden by a teacher. Grade is always from interval 0..100.
                 // If NULL then the grade is not overriden.

        gradeoverby?: number; // The id of the user who has overridden the grade for submission.
        feedbackauthor?: string; // Teacher comment/feedback for the author of the submission, for example describing the reasons
                 // for the grade overriding.

        feedbackauthorformat?: number; // Feedbackauthor format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        timegraded?: number; // The timestamp when grade or gradeover was recently modified.
        published: boolean; // Shall the submission be available to other when the workshop is closed.
        late: number; // Has this submission been submitted after the deadline or during the assessment phase?.
        contentfiles?: { // Contentfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        attachmentfiles?: { // Attachmentfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
    }[];
    totalcount: number; // Total count of submissions.
    totalfilesize: number; // Total size (bytes) of the files attached to all the
                 // submissions (even the ones not returned due to pagination).

    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_get_user_plan WS.
 */
export type ModWorkshopGetUserPlanWSParams = {
    workshopid: number; // Workshop instance id.
    userid?: number; // User id (empty or 0 for current user).
};

/**
 * Data returned by mod_workshop_get_user_plan WS.
 */
export type ModWorkshopGetUserPlanWSResponse = {
    userplan: {
        phases: {
            code: number; // Phase code.
            title: string; // Phase title.
            active: boolean; // Whether is the active task.
            tasks: {
                code: string; // Task code.
                title: string; // Task title.
                link: string; // Link to task.
                details?: string; // Task details.
                completed: string; // Completion information (maybe empty, maybe a boolean or generic info.
            }[];
            actions: {
                type?: string; // Action type.
                label?: string; // Action label.
                url: string; // Link to action.
                method?: string; // Get or post.
            }[];
        }[];
        examples: {
            id: number; // Example submission id.
            title: string; // Example submission title.
            assessmentid: number; // Example submission assessment id.
            grade: number; // The submission grade.
            gradinggrade: number; // The assessment grade.
        }[];
    };
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_get_workshop_access_information WS.
 */
export type ModWorkshopGetWorkshopAccessInformationWSParams = {
    workshopid: number; // Workshop instance id.
};

/**
 * Data returned by mod_workshop_get_workshop_access_information WS.
 */
export type ModWorkshopGetWorkshopAccessInformationWSResponse = {
    creatingsubmissionallowed: boolean; // Is the given user allowed to create their submission?.
    modifyingsubmissionallowed: boolean; // Is the user allowed to modify his existing submission?.
    assessingallowed: boolean; // Is the user allowed to create/edit his assessments?.
    assessingexamplesallowed: boolean; // Are reviewers allowed to create/edit their assessments of the example submissions?.
    examplesassessedbeforesubmission: boolean; // Whether the given user has assessed all his required examples before submission
             // (always true if there are not examples to assess or not configured to check before submission).

    examplesassessedbeforeassessment: boolean; // Whether the given user has assessed all his required examples before assessment
             // (always true if there are not examples to assessor not configured to check before assessment).

    warnings?: CoreWSExternalWarning[];
    canview: boolean; // Whether the user has the capability mod/workshop:view allowed.
    canaddinstance: boolean; // Whether the user has the capability mod/workshop:addinstance allowed.
    canswitchphase: boolean; // Whether the user has the capability mod/workshop:switchphase allowed.
    caneditdimensions: boolean; // Whether the user has the capability mod/workshop:editdimensions allowed.
    cansubmit: boolean; // Whether the user has the capability mod/workshop:submit allowed.
    canpeerassess: boolean; // Whether the user has the capability mod/workshop:peerassess allowed.
    canmanageexamples: boolean; // Whether the user has the capability mod/workshop:manageexamples allowed.
    canallocate: boolean; // Whether the user has the capability mod/workshop:allocate allowed.
    canpublishsubmissions: boolean; // Whether the user has the capability mod/workshop:publishsubmissions allowed.
    canviewauthornames: boolean; // Whether the user has the capability mod/workshop:viewauthornames allowed.
    canviewreviewernames: boolean; // Whether the user has the capability mod/workshop:viewreviewernames allowed.
    canviewallsubmissions: boolean; // Whether the user has the capability mod/workshop:viewallsubmissions allowed.
    canviewpublishedsubmissions: boolean; // Whether the user has the capability mod/workshop:viewpublishedsubmissions allowed.
    canviewauthorpublished: boolean; // Whether the user has the capability mod/workshop:viewauthorpublished allowed.
    canviewallassessments: boolean; // Whether the user has the capability mod/workshop:viewallassessments allowed.
    canoverridegrades: boolean; // Whether the user has the capability mod/workshop:overridegrades allowed.
    canignoredeadlines: boolean; // Whether the user has the capability mod/workshop:ignoredeadlines allowed.
    candeletesubmissions: boolean; // Whether the user has the capability mod/workshop:deletesubmissions allowed.
    canexportsubmissions: boolean; // Whether the user has the capability mod/workshop:exportsubmissions allowed.
};

/**
 * Params of mod_workshop_get_workshops_by_courses WS.
 */
export type ModWorkshopGetWorkshopsByCoursesWSParams = {
    courseids?: number[]; // Array of course ids.
};

/**
 * Data returned by mod_workshop_get_workshops_by_courses WS.
 */
export type ModWorkshopGetWorkshopsByCoursesWSResponse = {
    workshops: {
        id: number; // The primary key of the record.
        course: number; // Course id this workshop is part of.
        name: string; // Workshop name.
        intro: string; // Workshop introduction text.
        introformat?: number; // Intro format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        instructauthors?: string; // Instructions for the submission phase.
        instructauthorsformat?: number; // Instructauthors format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        instructreviewers?: string; // Instructions for the assessment phase.
        instructreviewersformat?: number; // Instructreviewers format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        timemodified?: number; // The timestamp when the module was modified.
        phase?: number; // The current phase of workshop (0 = not available, 1 = submission, 2 = assessment, 3 = closed).
        useexamples?: boolean; // Optional feature: students practise evaluating on example submissions from teacher.
        usepeerassessment?: boolean; // Optional feature: students perform peer assessment of others' work.
        useselfassessment?: boolean; // Optional feature: students perform self assessment of their own work.
        grade?: number; // The maximum grade for submission.
        gradinggrade?: number; // The maximum grade for assessment.
        strategy?: string; // The type of the current grading strategy used in this workshop.
        evaluation?: string; // The recently used grading evaluation method.
        gradedecimals?: number; // Number of digits that should be shown after the decimal point when displaying grades.
        submissiontypetext?: number; // Indicates whether text is required as part of each submission. 0 for no, 1 for optional, 2 for required.
        submissiontypefile?: number; // Indicates whether a file upload is required as part of each submission. 0 for no, 1 for optional, 2 for required.
        nattachments?: number; // Maximum number of submission attachments.
        submissionfiletypes?: string; // Comma separated list of file extensions.
        latesubmissions?: boolean; // Allow submitting the work after the deadline.
        maxbytes?: number; // Maximum size of the one attached file.
        examplesmode?: number; // 0 = example assessments are voluntary, 1 = examples must be assessed before submission,
                 // 2 = examples are available after own submission and must be assessed before peer/self assessment phase.

        submissionstart?: number; // 0 = will be started manually, greater than 0 the timestamp of the start of the submission phase.
        submissionend?: number; // 0 = will be closed manually, greater than 0 the timestamp of the end of the submission phase.
        assessmentstart?: number; // 0 = will be started manually, greater than 0 the timestamp of the start of the assessment phase.
        assessmentend?: number; // 0 = will be closed manually, greater than 0 the timestamp of the end of the assessment phase.
        phaseswitchassessment?: boolean; // Automatically switch to the assessment phase after the submissions deadline.
        conclusion?: string; // A text to be displayed at the end of the workshop.
        conclusionformat?: number; // Conclusion format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        overallfeedbackmode?: number; // Mode of the overall feedback support.
        overallfeedbackfiles?: number; // Number of allowed attachments to the overall feedback.
        overallfeedbackfiletypes?: string; // Comma separated list of file extensions.
        overallfeedbackmaxbytes?: number; // Maximum size of one file attached to the overall feedback.
        coursemodule: number; // Coursemodule.
        introfiles: { // Introfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        instructauthorsfiles?: { // Instructauthorsfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        instructreviewersfiles?: { // Instructreviewersfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
        conclusionfiles?: { // Conclusionfiles.
            filename?: string; // File name.
            filepath?: string; // File path.
            filesize?: number; // File size.
            fileurl?: string; // Downloadable file url.
            timemodified?: number; // Time modified.
            mimetype?: string; // File mime type.
            isexternalfile?: boolean; // Whether is an external file.
            repositorytype?: string; // The repository type for the external files.
        }[];
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_update_assessment WS.
 */
export type ModWorkshopUpdateAssessmentWSParams = {
    assessmentid: number; // Assessment id.
    data: { // Assessment data.
        name: string; // The assessment data (use WS get_assessment_form_definition for obtaining the data to sent).
                             // Apart from that data, you can optionally send:
                             // feedbackauthor (str); the feedback for the submission author
                             // feedbackauthorformat (int); the format of the feedbackauthor
                             // feedbackauthorinlineattachmentsid (int); the draft file area for the editor attachments
                             // feedbackauthorattachmentsid (int); the draft file area id for the feedback attachments.

        value: string; // The value of the option.
    }[];
};

/**
 * Data returned by mod_workshop_update_assessment WS.
 */
export type ModWorkshopUpdateAssessmentWSResponse = {
    status: boolean; // Status: true if the assessment was added or updated false otherwise.
    rawgrade?: number; // Raw percentual grade (0.00000 to 100.00000) for submission.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_update_submission WS.
 */
export type ModWorkshopUpdateSubmissionWSParams = {
    submissionid: number; // Submission id.
    title: string; // Submission title.
    content?: string; // Submission text content.
    contentformat?: number; // The format used for the content.
    inlineattachmentsid?: number; // The draft file area id for inline attachments in the content.
    attachmentsid?: number; // The draft file area id for attachments.
};

/**
 * Data returned by mod_workshop_update_submission WS.
 */
export type ModWorkshopUpdateSubmissionWSResponse = {
    status: boolean; // True if the submission was updated false otherwise.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_view_submission WS.
 */
export type ModWorkshopViewSubmissionWSParams = {
    submissionid: number; // Submission id.
};

/**
 * Data returned by mod_workshop_view_submission WS.
 */
export type ModWorkshopViewSubmissionWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of mod_workshop_view_workshop WS.
 */
export type ModWorkshopViewWorkshopWSParams = {
    workshopid: number; // Workshop instance id.
};

/**
 * Data returned by mod_workshop_view_workshop WS.
 */
export type ModWorkshopViewWorkshopWSResponse = {
    status: boolean; // Status: true if success.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of report_insights_action_executed WS.
 */
export type ReportInsightsActionExecutedWSParams = {
    actionname: string; // The name of the action.
    predictionids: number[]; // Array of prediction ids.
};

/**
 * Data returned by report_insights_action_executed WS.
 */
export type ReportInsightsActionExecutedWSResponse = {
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of report_insights_set_fixed_prediction WS.
 */
export type ReportInsightsSetFixedPredictionWSParams = {
    predictionid: number; // The prediction id.
};

/**
 * Data returned by report_insights_set_fixed_prediction WS.
 */
export type ReportInsightsSetFixedPredictionWSResponse = {
    success: boolean; // True if the prediction was successfully flagged as fixed.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of report_insights_set_notuseful_prediction WS.
 */
export type ReportInsightsSetNotusefulPredictionWSParams = {
    predictionid: number; // The prediction id.
};

/**
 * Data returned by report_insights_set_notuseful_prediction WS.
 */
export type ReportInsightsSetNotusefulPredictionWSResponse = {
    success: boolean; // True if the prediction was successfully flagged as not useful.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of tool_analytics_potential_contexts WS.
 */
export type ToolAnalyticsPotentialContextsWSParams = {
    query?: string; // The model id.
    modelid?: number; // The model id.
};

/**
 * Data returned by tool_analytics_potential_contexts WS.
 */
export type ToolAnalyticsPotentialContextsWSResponse = {
    id: number; // ID of the context.
    name: string; // The context name.
}[];

/**
 * Params of tool_lp_data_for_course_competencies_page WS.
 */
export type ToolLpDataForCourseCompetenciesPageWSParams = {
    courseid: number; // The course id.
    moduleid?: number; // The module id.
};

/**
 * Data returned by tool_lp_data_for_course_competencies_page WS.
 */
export type ToolLpDataForCourseCompetenciesPageWSResponse = {
    courseid: number; // The current course id.
    pagecontextid: number; // The current page context ID.
    gradableuserid?: number; // Current user id, if the user is a gradable user.
    canmanagecompetencyframeworks: boolean; // User can manage competency frameworks.
    canmanagecoursecompetencies: boolean; // User can manage linked course competencies.
    canconfigurecoursecompetencies: boolean; // User can configure course competency settings.
    cangradecompetencies: boolean; // User can grade competencies.
    settings: {
        courseid: number; // Courseid.
        pushratingstouserplans: boolean; // Pushratingstouserplans.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
    };
    statistics: {
        competencycount: number; // Competencycount.
        proficientcompetencycount: number; // Proficientcompetencycount.
        proficientcompetencypercentage: number; // Proficientcompetencypercentage.
        proficientcompetencypercentageformatted: string; // Proficientcompetencypercentageformatted.
        leastproficient: { // Leastproficient.
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            description: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            sortorder: number; // Sortorder.
            parentid: number; // Parentid.
            path: string; // Path.
            ruleoutcome: number; // Ruleoutcome.
            ruletype: string; // Ruletype.
            ruleconfig: string; // Ruleconfig.
            scaleid: number; // Scaleid.
            scaleconfiguration: string; // Scaleconfiguration.
            competencyframeworkid: number; // Competencyframeworkid.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
        }[];
        leastproficientcount: number; // Leastproficientcount.
        canbegradedincourse: boolean; // Canbegradedincourse.
        canmanagecoursecompetencies: boolean; // Canmanagecoursecompetencies.
    };
    competencies: {
        competency: {
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            description: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            sortorder: number; // Sortorder.
            parentid: number; // Parentid.
            path: string; // Path.
            ruleoutcome: number; // Ruleoutcome.
            ruletype: string; // Ruletype.
            ruleconfig: string; // Ruleconfig.
            scaleid: number; // Scaleid.
            scaleconfiguration: string; // Scaleconfiguration.
            competencyframeworkid: number; // Competencyframeworkid.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
        };
        coursecompetency: {
            courseid: number; // Courseid.
            competencyid: number; // Competencyid.
            sortorder: number; // Sortorder.
            ruleoutcome: number; // Ruleoutcome.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
        };
        coursemodules: {
            id: number; // Id.
            name: string; // Name.
            url?: string; // Url.
            iconurl: string; // Iconurl.
        }[];
        usercompetencycourse?: {
            userid: number; // Userid.
            courseid: number; // Courseid.
            competencyid: number; // Competencyid.
            proficiency: boolean; // Proficiency.
            grade: number; // Grade.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            gradename: string; // Gradename.
            proficiencyname: string; // Proficiencyname.
        };
        ruleoutcomeoptions: {
            value: number; // The option value.
            text: string; // The name of the option.
            selected: boolean; // If this is the currently selected option.
        }[];
        comppath: {
            ancestors: { // Ancestors.
                id: number; // Id.
                name: string; // Name.
                first: boolean; // First.
                last: boolean; // Last.
                position: number; // Position.
            }[];
            framework: {
                id: number; // Id.
                name: string; // Name.
                first: boolean; // First.
                last: boolean; // Last.
                position: number; // Position.
            };
            pluginbaseurl: string; // Pluginbaseurl.
            pagecontextid: number; // Pagecontextid.
            showlinks: boolean; // Showlinks.
        };
        plans: {
            name: string; // Name.
            description: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            userid: number; // Userid.
            templateid: number; // Templateid.
            origtemplateid: number; // Origtemplateid.
            status: number; // Status.
            duedate: number; // Duedate.
            reviewerid: number; // Reviewerid.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            statusname: string; // Statusname.
            isbasedontemplate: boolean; // Isbasedontemplate.
            canmanage: boolean; // Canmanage.
            canrequestreview: boolean; // Canrequestreview.
            canreview: boolean; // Canreview.
            canbeedited: boolean; // Canbeedited.
            isactive: boolean; // Isactive.
            isdraft: boolean; // Isdraft.
            iscompleted: boolean; // Iscompleted.
            isinreview: boolean; // Isinreview.
            iswaitingforreview: boolean; // Iswaitingforreview.
            isreopenallowed: boolean; // Isreopenallowed.
            iscompleteallowed: boolean; // Iscompleteallowed.
            isunlinkallowed: boolean; // Isunlinkallowed.
            isrequestreviewallowed: boolean; // Isrequestreviewallowed.
            iscancelreviewrequestallowed: boolean; // Iscancelreviewrequestallowed.
            isstartreviewallowed: boolean; // Isstartreviewallowed.
            isstopreviewallowed: boolean; // Isstopreviewallowed.
            isapproveallowed: boolean; // Isapproveallowed.
            isunapproveallowed: boolean; // Isunapproveallowed.
            duedateformatted: string; // Duedateformatted.
            commentarea: {
                component: string; // Component.
                commentarea: string; // Commentarea.
                itemid: number; // Itemid.
                courseid: number; // Courseid.
                contextid: number; // Contextid.
                cid: string; // Cid.
                autostart: boolean; // Autostart.
                canpost: boolean; // Canpost.
                canview: boolean; // Canview.
                count: number; // Count.
                collapsediconkey: string; // Collapsediconkey.
                displaytotalcount: boolean; // Displaytotalcount.
                displaycancel: boolean; // Displaycancel.
                fullwidth: boolean; // Fullwidth.
                linktext: string; // Linktext.
                notoggle: boolean; // Notoggle.
                template: string; // Template.
                canpostorhascomments: boolean; // Canpostorhascomments.
            };
            reviewer?: {
                id: number; // Id.
                email: string; // Email.
                idnumber: string; // Idnumber.
                phone1: string; // Phone1.
                phone2: string; // Phone2.
                department: string; // Department.
                institution: string; // Institution.
                fullname: string; // Fullname.
                identity: string; // Identity.
                profileurl: string; // Profileurl.
                profileimageurl: string; // Profileimageurl.
                profileimageurlsmall: string; // Profileimageurlsmall.
            };
            template?: {
                shortname: string; // Shortname.
                description: string; // Description.
                descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                duedate: number; // Duedate.
                visible: boolean; // Visible.
                contextid: number; // Contextid.
                id: number; // Id.
                timecreated: number; // Timecreated.
                timemodified: number; // Timemodified.
                usermodified: number; // Usermodified.
                duedateformatted: string; // Duedateformatted.
                cohortscount: number; // Cohortscount.
                planscount: number; // Planscount.
                canmanage: boolean; // Canmanage.
                canread: boolean; // Canread.
                contextname: string; // Contextname.
                contextnamenoprefix: string; // Contextnamenoprefix.
            };
            url: string; // Url.
        }[];
    }[];
    manageurl: string; // Url to the manage competencies page.
    pluginbaseurl: string; // Url to the course competencies page.
};

/**
 * Params of tool_lp_data_for_plan_page WS.
 */
export type ToolLpDataForPlanPageWSParams = {
    planid: number; // The plan id.
};

/**
 * Data returned by tool_lp_data_for_plan_page WS.
 */
export type ToolLpDataForPlanPageWSResponse = {
    plan: {
        name: string; // Name.
        description: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        userid: number; // Userid.
        templateid: number; // Templateid.
        origtemplateid: number; // Origtemplateid.
        status: number; // Status.
        duedate: number; // Duedate.
        reviewerid: number; // Reviewerid.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
        statusname: string; // Statusname.
        isbasedontemplate: boolean; // Isbasedontemplate.
        canmanage: boolean; // Canmanage.
        canrequestreview: boolean; // Canrequestreview.
        canreview: boolean; // Canreview.
        canbeedited: boolean; // Canbeedited.
        isactive: boolean; // Isactive.
        isdraft: boolean; // Isdraft.
        iscompleted: boolean; // Iscompleted.
        isinreview: boolean; // Isinreview.
        iswaitingforreview: boolean; // Iswaitingforreview.
        isreopenallowed: boolean; // Isreopenallowed.
        iscompleteallowed: boolean; // Iscompleteallowed.
        isunlinkallowed: boolean; // Isunlinkallowed.
        isrequestreviewallowed: boolean; // Isrequestreviewallowed.
        iscancelreviewrequestallowed: boolean; // Iscancelreviewrequestallowed.
        isstartreviewallowed: boolean; // Isstartreviewallowed.
        isstopreviewallowed: boolean; // Isstopreviewallowed.
        isapproveallowed: boolean; // Isapproveallowed.
        isunapproveallowed: boolean; // Isunapproveallowed.
        duedateformatted: string; // Duedateformatted.
        commentarea: {
            component: string; // Component.
            commentarea: string; // Commentarea.
            itemid: number; // Itemid.
            courseid: number; // Courseid.
            contextid: number; // Contextid.
            cid: string; // Cid.
            autostart: boolean; // Autostart.
            canpost: boolean; // Canpost.
            canview: boolean; // Canview.
            count: number; // Count.
            collapsediconkey: string; // Collapsediconkey.
            displaytotalcount: boolean; // Displaytotalcount.
            displaycancel: boolean; // Displaycancel.
            fullwidth: boolean; // Fullwidth.
            linktext: string; // Linktext.
            notoggle: boolean; // Notoggle.
            template: string; // Template.
            canpostorhascomments: boolean; // Canpostorhascomments.
        };
        reviewer?: {
            id: number; // Id.
            email: string; // Email.
            idnumber: string; // Idnumber.
            phone1: string; // Phone1.
            phone2: string; // Phone2.
            department: string; // Department.
            institution: string; // Institution.
            fullname: string; // Fullname.
            identity: string; // Identity.
            profileurl: string; // Profileurl.
            profileimageurl: string; // Profileimageurl.
            profileimageurlsmall: string; // Profileimageurlsmall.
        };
        template?: {
            shortname: string; // Shortname.
            description: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            duedate: number; // Duedate.
            visible: boolean; // Visible.
            contextid: number; // Contextid.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            duedateformatted: string; // Duedateformatted.
            cohortscount: number; // Cohortscount.
            planscount: number; // Planscount.
            canmanage: boolean; // Canmanage.
            canread: boolean; // Canread.
            contextname: string; // Contextname.
            contextnamenoprefix: string; // Contextnamenoprefix.
        };
        url: string; // Url.
    };
    contextid: number; // Context ID.
    pluginbaseurl: string; // Plugin base URL.
    competencies: {
        competency: {
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            description: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            sortorder: number; // Sortorder.
            parentid: number; // Parentid.
            path: string; // Path.
            ruleoutcome: number; // Ruleoutcome.
            ruletype: string; // Ruletype.
            ruleconfig: string; // Ruleconfig.
            scaleid: number; // Scaleid.
            scaleconfiguration: string; // Scaleconfiguration.
            competencyframeworkid: number; // Competencyframeworkid.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
        };
        comppath: {
            ancestors: { // Ancestors.
                id: number; // Id.
                name: string; // Name.
                first: boolean; // First.
                last: boolean; // Last.
                position: number; // Position.
            }[];
            framework: {
                id: number; // Id.
                name: string; // Name.
                first: boolean; // First.
                last: boolean; // Last.
                position: number; // Position.
            };
            pluginbaseurl: string; // Pluginbaseurl.
            pagecontextid: number; // Pagecontextid.
            showlinks: boolean; // Showlinks.
        };
        usercompetency?: {
            userid: number; // Userid.
            competencyid: number; // Competencyid.
            status: number; // Status.
            reviewerid: number; // Reviewerid.
            proficiency: boolean; // Proficiency.
            grade: number; // Grade.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            canrequestreview: boolean; // Canrequestreview.
            canreview: boolean; // Canreview.
            gradename: string; // Gradename.
            isrequestreviewallowed: boolean; // Isrequestreviewallowed.
            iscancelreviewrequestallowed: boolean; // Iscancelreviewrequestallowed.
            isstartreviewallowed: boolean; // Isstartreviewallowed.
            isstopreviewallowed: boolean; // Isstopreviewallowed.
            isstatusidle: boolean; // Isstatusidle.
            isstatusinreview: boolean; // Isstatusinreview.
            isstatuswaitingforreview: boolean; // Isstatuswaitingforreview.
            proficiencyname: string; // Proficiencyname.
            reviewer?: {
                id: number; // Id.
                email: string; // Email.
                idnumber: string; // Idnumber.
                phone1: string; // Phone1.
                phone2: string; // Phone2.
                department: string; // Department.
                institution: string; // Institution.
                fullname: string; // Fullname.
                identity: string; // Identity.
                profileurl: string; // Profileurl.
                profileimageurl: string; // Profileimageurl.
                profileimageurlsmall: string; // Profileimageurlsmall.
            };
            statusname: string; // Statusname.
            url: string; // Url.
        };
        usercompetencyplan?: {
            userid: number; // Userid.
            competencyid: number; // Competencyid.
            proficiency: boolean; // Proficiency.
            grade: number; // Grade.
            planid: number; // Planid.
            sortorder: number; // Sortorder.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            gradename: string; // Gradename.
            proficiencyname: string; // Proficiencyname.
        };
    }[];
    competencycount: number; // Count of competencies.
    proficientcompetencycount: number; // Count of proficientcompetencies.
    proficientcompetencypercentage: number; // Percentage of competencies proficient.
    proficientcompetencypercentageformatted: string; // Displayable percentage.
};

/**
 * Params of tool_lp_data_for_plans_page WS.
 */
export type ToolLpDataForPlansPageWSParams = {
    userid: number; // The user id.
};

/**
 * Data returned by tool_lp_data_for_plans_page WS.
 */
export type ToolLpDataForPlansPageWSResponse = {
    userid: number; // The learning plan user id.
    plans: {
        name: string; // Name.
        description: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        userid: number; // Userid.
        templateid: number; // Templateid.
        origtemplateid: number; // Origtemplateid.
        status: number; // Status.
        duedate: number; // Duedate.
        reviewerid: number; // Reviewerid.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
        statusname: string; // Statusname.
        isbasedontemplate: boolean; // Isbasedontemplate.
        canmanage: boolean; // Canmanage.
        canrequestreview: boolean; // Canrequestreview.
        canreview: boolean; // Canreview.
        canbeedited: boolean; // Canbeedited.
        isactive: boolean; // Isactive.
        isdraft: boolean; // Isdraft.
        iscompleted: boolean; // Iscompleted.
        isinreview: boolean; // Isinreview.
        iswaitingforreview: boolean; // Iswaitingforreview.
        isreopenallowed: boolean; // Isreopenallowed.
        iscompleteallowed: boolean; // Iscompleteallowed.
        isunlinkallowed: boolean; // Isunlinkallowed.
        isrequestreviewallowed: boolean; // Isrequestreviewallowed.
        iscancelreviewrequestallowed: boolean; // Iscancelreviewrequestallowed.
        isstartreviewallowed: boolean; // Isstartreviewallowed.
        isstopreviewallowed: boolean; // Isstopreviewallowed.
        isapproveallowed: boolean; // Isapproveallowed.
        isunapproveallowed: boolean; // Isunapproveallowed.
        duedateformatted: string; // Duedateformatted.
        commentarea: {
            component: string; // Component.
            commentarea: string; // Commentarea.
            itemid: number; // Itemid.
            courseid: number; // Courseid.
            contextid: number; // Contextid.
            cid: string; // Cid.
            autostart: boolean; // Autostart.
            canpost: boolean; // Canpost.
            canview: boolean; // Canview.
            count: number; // Count.
            collapsediconkey: string; // Collapsediconkey.
            displaytotalcount: boolean; // Displaytotalcount.
            displaycancel: boolean; // Displaycancel.
            fullwidth: boolean; // Fullwidth.
            linktext: string; // Linktext.
            notoggle: boolean; // Notoggle.
            template: string; // Template.
            canpostorhascomments: boolean; // Canpostorhascomments.
        };
        reviewer?: {
            id: number; // Id.
            email: string; // Email.
            idnumber: string; // Idnumber.
            phone1: string; // Phone1.
            phone2: string; // Phone2.
            department: string; // Department.
            institution: string; // Institution.
            fullname: string; // Fullname.
            identity: string; // Identity.
            profileurl: string; // Profileurl.
            profileimageurl: string; // Profileimageurl.
            profileimageurlsmall: string; // Profileimageurlsmall.
        };
        template?: {
            shortname: string; // Shortname.
            description: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            duedate: number; // Duedate.
            visible: boolean; // Visible.
            contextid: number; // Contextid.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            duedateformatted: string; // Duedateformatted.
            cohortscount: number; // Cohortscount.
            planscount: number; // Planscount.
            canmanage: boolean; // Canmanage.
            canread: boolean; // Canread.
            contextname: string; // Contextname.
            contextnamenoprefix: string; // Contextnamenoprefix.
        };
        url: string; // Url.
    }[];
    pluginbaseurl: string; // Url to the tool_lp plugin folder on this Moodle site.
    navigation: string[];
    canreaduserevidence: boolean; // Can the current user view the user's evidence.
    canmanageuserplans: boolean; // Can the current user manage the user's plans.
};

/**
 * Params of tool_lp_data_for_user_competency_summary WS.
 */
export type ToolLpDataForUserCompetencySummaryWSParams = {
    userid: number; // Data base record id for the user.
    competencyid: number; // Data base record id for the competency.
};

/**
 * Data returned by tool_lp_data_for_user_competency_summary WS.
 */
export type ToolLpDataForUserCompetencySummaryWSResponse = {
    showrelatedcompetencies: boolean; // Showrelatedcompetencies.
    cangrade: boolean; // Cangrade.
    competency: {
        linkedcourses: { // Linkedcourses.
            id: number; // Id.
            fullname: string; // Fullname.
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            summary: string; // Summary.
            summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            startdate: number; // Startdate.
            enddate: number; // Enddate.
            visible: boolean; // Visible.
            fullnamedisplay: string; // Fullnamedisplay.
            viewurl: string; // Viewurl.
            courseimage: string; // Courseimage.
            progress?: number; // Progress.
            hasprogress: boolean; // Hasprogress.
            isfavourite: boolean; // Isfavourite.
            hidden: boolean; // Hidden.
            timeaccess?: number; // Timeaccess.
            showshortname: boolean; // Showshortname.
            coursecategory: string; // Coursecategory.
        }[];
        relatedcompetencies: { // Relatedcompetencies.
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            description: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            sortorder: number; // Sortorder.
            parentid: number; // Parentid.
            path: string; // Path.
            ruleoutcome: number; // Ruleoutcome.
            ruletype: string; // Ruletype.
            ruleconfig: string; // Ruleconfig.
            scaleid: number; // Scaleid.
            scaleconfiguration: string; // Scaleconfiguration.
            competencyframeworkid: number; // Competencyframeworkid.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
        }[];
        competency: {
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            description: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            sortorder: number; // Sortorder.
            parentid: number; // Parentid.
            path: string; // Path.
            ruleoutcome: number; // Ruleoutcome.
            ruletype: string; // Ruletype.
            ruleconfig: string; // Ruleconfig.
            scaleid: number; // Scaleid.
            scaleconfiguration: string; // Scaleconfiguration.
            competencyframeworkid: number; // Competencyframeworkid.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
        };
        framework: {
            shortname: string; // Shortname.
            idnumber: string; // Idnumber.
            description: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            visible: boolean; // Visible.
            scaleid: number; // Scaleid.
            scaleconfiguration: string; // Scaleconfiguration.
            contextid: number; // Contextid.
            taxonomies: string; // Taxonomies.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            canmanage: boolean; // Canmanage.
            competenciescount: number; // Competenciescount.
            contextname: string; // Contextname.
            contextnamenoprefix: string; // Contextnamenoprefix.
        };
        hascourses: boolean; // Hascourses.
        hasrelatedcompetencies: boolean; // Hasrelatedcompetencies.
        scaleid: number; // Scaleid.
        scaleconfiguration: string; // Scaleconfiguration.
        taxonomyterm: string; // Taxonomyterm.
        comppath: {
            ancestors: { // Ancestors.
                id: number; // Id.
                name: string; // Name.
                first: boolean; // First.
                last: boolean; // Last.
                position: number; // Position.
            }[];
            framework: {
                id: number; // Id.
                name: string; // Name.
                first: boolean; // First.
                last: boolean; // Last.
                position: number; // Position.
            };
            pluginbaseurl: string; // Pluginbaseurl.
            pagecontextid: number; // Pagecontextid.
            showlinks: boolean; // Showlinks.
        };
        pluginbaseurl: string; // Pluginbaseurl.
    };
    user: {
        id: number; // Id.
        email: string; // Email.
        idnumber: string; // Idnumber.
        phone1: string; // Phone1.
        phone2: string; // Phone2.
        department: string; // Department.
        institution: string; // Institution.
        fullname: string; // Fullname.
        identity: string; // Identity.
        profileurl: string; // Profileurl.
        profileimageurl: string; // Profileimageurl.
        profileimageurlsmall: string; // Profileimageurlsmall.
    };
    usercompetency?: {
        userid: number; // Userid.
        competencyid: number; // Competencyid.
        status: number; // Status.
        reviewerid: number; // Reviewerid.
        proficiency: boolean; // Proficiency.
        grade: number; // Grade.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
        canrequestreview: boolean; // Canrequestreview.
        canreview: boolean; // Canreview.
        gradename: string; // Gradename.
        isrequestreviewallowed: boolean; // Isrequestreviewallowed.
        iscancelreviewrequestallowed: boolean; // Iscancelreviewrequestallowed.
        isstartreviewallowed: boolean; // Isstartreviewallowed.
        isstopreviewallowed: boolean; // Isstopreviewallowed.
        isstatusidle: boolean; // Isstatusidle.
        isstatusinreview: boolean; // Isstatusinreview.
        isstatuswaitingforreview: boolean; // Isstatuswaitingforreview.
        proficiencyname: string; // Proficiencyname.
        reviewer?: {
            id: number; // Id.
            email: string; // Email.
            idnumber: string; // Idnumber.
            phone1: string; // Phone1.
            phone2: string; // Phone2.
            department: string; // Department.
            institution: string; // Institution.
            fullname: string; // Fullname.
            identity: string; // Identity.
            profileurl: string; // Profileurl.
            profileimageurl: string; // Profileimageurl.
            profileimageurlsmall: string; // Profileimageurlsmall.
        };
        statusname: string; // Statusname.
        url: string; // Url.
    };
    usercompetencyplan?: {
        userid: number; // Userid.
        competencyid: number; // Competencyid.
        proficiency: boolean; // Proficiency.
        grade: number; // Grade.
        planid: number; // Planid.
        sortorder: number; // Sortorder.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
        gradename: string; // Gradename.
        proficiencyname: string; // Proficiencyname.
    };
    usercompetencycourse?: {
        userid: number; // Userid.
        courseid: number; // Courseid.
        competencyid: number; // Competencyid.
        proficiency: boolean; // Proficiency.
        grade: number; // Grade.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
        gradename: string; // Gradename.
        proficiencyname: string; // Proficiencyname.
    };
    evidence: { // Evidence.
        usercompetencyid: number; // Usercompetencyid.
        contextid: number; // Contextid.
        action: number; // Action.
        actionuserid: number; // Actionuserid.
        descidentifier: string; // Descidentifier.
        desccomponent: string; // Desccomponent.
        desca: string; // Desca.
        url: string; // Url.
        grade: number; // Grade.
        note: string; // Note.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
        actionuser?: {
            id: number; // Id.
            email: string; // Email.
            idnumber: string; // Idnumber.
            phone1: string; // Phone1.
            phone2: string; // Phone2.
            department: string; // Department.
            institution: string; // Institution.
            fullname: string; // Fullname.
            identity: string; // Identity.
            profileurl: string; // Profileurl.
            profileimageurl: string; // Profileimageurl.
            profileimageurlsmall: string; // Profileimageurlsmall.
        };
        description: string; // Description.
        gradename: string; // Gradename.
        userdate: string; // Userdate.
        candelete: boolean; // Candelete.
    }[];
    commentarea?: {
        component: string; // Component.
        commentarea: string; // Commentarea.
        itemid: number; // Itemid.
        courseid: number; // Courseid.
        contextid: number; // Contextid.
        cid: string; // Cid.
        autostart: boolean; // Autostart.
        canpost: boolean; // Canpost.
        canview: boolean; // Canview.
        count: number; // Count.
        collapsediconkey: string; // Collapsediconkey.
        displaytotalcount: boolean; // Displaytotalcount.
        displaycancel: boolean; // Displaycancel.
        fullwidth: boolean; // Fullwidth.
        linktext: string; // Linktext.
        notoggle: boolean; // Notoggle.
        template: string; // Template.
        canpostorhascomments: boolean; // Canpostorhascomments.
    };
};

/**
 * Params of tool_lp_data_for_user_competency_summary_in_course WS.
 */
export type ToolLpDataForUserCompetencySummaryInCourseWSParams = {
    userid: number; // Data base record id for the user.
    competencyid: number; // Data base record id for the competency.
    courseid: number; // Data base record id for the course.
};

/**
 * Data returned by tool_lp_data_for_user_competency_summary_in_course WS.
 */
export type ToolLpDataForUserCompetencySummaryInCourseWSResponse = {
    usercompetencysummary: {
        showrelatedcompetencies: boolean; // Showrelatedcompetencies.
        cangrade: boolean; // Cangrade.
        competency: {
            linkedcourses: { // Linkedcourses.
                id: number; // Id.
                fullname: string; // Fullname.
                shortname: string; // Shortname.
                idnumber: string; // Idnumber.
                summary: string; // Summary.
                summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                startdate: number; // Startdate.
                enddate: number; // Enddate.
                visible: boolean; // Visible.
                fullnamedisplay: string; // Fullnamedisplay.
                viewurl: string; // Viewurl.
                courseimage: string; // Courseimage.
                progress?: number; // Progress.
                hasprogress: boolean; // Hasprogress.
                isfavourite: boolean; // Isfavourite.
                hidden: boolean; // Hidden.
                timeaccess?: number; // Timeaccess.
                showshortname: boolean; // Showshortname.
                coursecategory: string; // Coursecategory.
            }[];
            relatedcompetencies: { // Relatedcompetencies.
                shortname: string; // Shortname.
                idnumber: string; // Idnumber.
                description: string; // Description.
                descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                sortorder: number; // Sortorder.
                parentid: number; // Parentid.
                path: string; // Path.
                ruleoutcome: number; // Ruleoutcome.
                ruletype: string; // Ruletype.
                ruleconfig: string; // Ruleconfig.
                scaleid: number; // Scaleid.
                scaleconfiguration: string; // Scaleconfiguration.
                competencyframeworkid: number; // Competencyframeworkid.
                id: number; // Id.
                timecreated: number; // Timecreated.
                timemodified: number; // Timemodified.
                usermodified: number; // Usermodified.
            }[];
            competency: {
                shortname: string; // Shortname.
                idnumber: string; // Idnumber.
                description: string; // Description.
                descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                sortorder: number; // Sortorder.
                parentid: number; // Parentid.
                path: string; // Path.
                ruleoutcome: number; // Ruleoutcome.
                ruletype: string; // Ruletype.
                ruleconfig: string; // Ruleconfig.
                scaleid: number; // Scaleid.
                scaleconfiguration: string; // Scaleconfiguration.
                competencyframeworkid: number; // Competencyframeworkid.
                id: number; // Id.
                timecreated: number; // Timecreated.
                timemodified: number; // Timemodified.
                usermodified: number; // Usermodified.
            };
            framework: {
                shortname: string; // Shortname.
                idnumber: string; // Idnumber.
                description: string; // Description.
                descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                visible: boolean; // Visible.
                scaleid: number; // Scaleid.
                scaleconfiguration: string; // Scaleconfiguration.
                contextid: number; // Contextid.
                taxonomies: string; // Taxonomies.
                id: number; // Id.
                timecreated: number; // Timecreated.
                timemodified: number; // Timemodified.
                usermodified: number; // Usermodified.
                canmanage: boolean; // Canmanage.
                competenciescount: number; // Competenciescount.
                contextname: string; // Contextname.
                contextnamenoprefix: string; // Contextnamenoprefix.
            };
            hascourses: boolean; // Hascourses.
            hasrelatedcompetencies: boolean; // Hasrelatedcompetencies.
            scaleid: number; // Scaleid.
            scaleconfiguration: string; // Scaleconfiguration.
            taxonomyterm: string; // Taxonomyterm.
            comppath: {
                ancestors: { // Ancestors.
                    id: number; // Id.
                    name: string; // Name.
                    first: boolean; // First.
                    last: boolean; // Last.
                    position: number; // Position.
                }[];
                framework: {
                    id: number; // Id.
                    name: string; // Name.
                    first: boolean; // First.
                    last: boolean; // Last.
                    position: number; // Position.
                };
                pluginbaseurl: string; // Pluginbaseurl.
                pagecontextid: number; // Pagecontextid.
                showlinks: boolean; // Showlinks.
            };
            pluginbaseurl: string; // Pluginbaseurl.
        };
        user: {
            id: number; // Id.
            email: string; // Email.
            idnumber: string; // Idnumber.
            phone1: string; // Phone1.
            phone2: string; // Phone2.
            department: string; // Department.
            institution: string; // Institution.
            fullname: string; // Fullname.
            identity: string; // Identity.
            profileurl: string; // Profileurl.
            profileimageurl: string; // Profileimageurl.
            profileimageurlsmall: string; // Profileimageurlsmall.
        };
        usercompetency?: {
            userid: number; // Userid.
            competencyid: number; // Competencyid.
            status: number; // Status.
            reviewerid: number; // Reviewerid.
            proficiency: boolean; // Proficiency.
            grade: number; // Grade.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            canrequestreview: boolean; // Canrequestreview.
            canreview: boolean; // Canreview.
            gradename: string; // Gradename.
            isrequestreviewallowed: boolean; // Isrequestreviewallowed.
            iscancelreviewrequestallowed: boolean; // Iscancelreviewrequestallowed.
            isstartreviewallowed: boolean; // Isstartreviewallowed.
            isstopreviewallowed: boolean; // Isstopreviewallowed.
            isstatusidle: boolean; // Isstatusidle.
            isstatusinreview: boolean; // Isstatusinreview.
            isstatuswaitingforreview: boolean; // Isstatuswaitingforreview.
            proficiencyname: string; // Proficiencyname.
            reviewer?: {
                id: number; // Id.
                email: string; // Email.
                idnumber: string; // Idnumber.
                phone1: string; // Phone1.
                phone2: string; // Phone2.
                department: string; // Department.
                institution: string; // Institution.
                fullname: string; // Fullname.
                identity: string; // Identity.
                profileurl: string; // Profileurl.
                profileimageurl: string; // Profileimageurl.
                profileimageurlsmall: string; // Profileimageurlsmall.
            };
            statusname: string; // Statusname.
            url: string; // Url.
        };
        usercompetencyplan?: {
            userid: number; // Userid.
            competencyid: number; // Competencyid.
            proficiency: boolean; // Proficiency.
            grade: number; // Grade.
            planid: number; // Planid.
            sortorder: number; // Sortorder.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            gradename: string; // Gradename.
            proficiencyname: string; // Proficiencyname.
        };
        usercompetencycourse?: {
            userid: number; // Userid.
            courseid: number; // Courseid.
            competencyid: number; // Competencyid.
            proficiency: boolean; // Proficiency.
            grade: number; // Grade.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            gradename: string; // Gradename.
            proficiencyname: string; // Proficiencyname.
        };
        evidence: { // Evidence.
            usercompetencyid: number; // Usercompetencyid.
            contextid: number; // Contextid.
            action: number; // Action.
            actionuserid: number; // Actionuserid.
            descidentifier: string; // Descidentifier.
            desccomponent: string; // Desccomponent.
            desca: string; // Desca.
            url: string; // Url.
            grade: number; // Grade.
            note: string; // Note.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            actionuser?: {
                id: number; // Id.
                email: string; // Email.
                idnumber: string; // Idnumber.
                phone1: string; // Phone1.
                phone2: string; // Phone2.
                department: string; // Department.
                institution: string; // Institution.
                fullname: string; // Fullname.
                identity: string; // Identity.
                profileurl: string; // Profileurl.
                profileimageurl: string; // Profileimageurl.
                profileimageurlsmall: string; // Profileimageurlsmall.
            };
            description: string; // Description.
            gradename: string; // Gradename.
            userdate: string; // Userdate.
            candelete: boolean; // Candelete.
        }[];
        commentarea?: {
            component: string; // Component.
            commentarea: string; // Commentarea.
            itemid: number; // Itemid.
            courseid: number; // Courseid.
            contextid: number; // Contextid.
            cid: string; // Cid.
            autostart: boolean; // Autostart.
            canpost: boolean; // Canpost.
            canview: boolean; // Canview.
            count: number; // Count.
            collapsediconkey: string; // Collapsediconkey.
            displaytotalcount: boolean; // Displaytotalcount.
            displaycancel: boolean; // Displaycancel.
            fullwidth: boolean; // Fullwidth.
            linktext: string; // Linktext.
            notoggle: boolean; // Notoggle.
            template: string; // Template.
            canpostorhascomments: boolean; // Canpostorhascomments.
        };
    };
    course: {
        id: number; // Id.
        fullname: string; // Fullname.
        shortname: string; // Shortname.
        idnumber: string; // Idnumber.
        summary: string; // Summary.
        summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        startdate: number; // Startdate.
        enddate: number; // Enddate.
        visible: boolean; // Visible.
        fullnamedisplay: string; // Fullnamedisplay.
        viewurl: string; // Viewurl.
        courseimage: string; // Courseimage.
        progress?: number; // Progress.
        hasprogress: boolean; // Hasprogress.
        isfavourite: boolean; // Isfavourite.
        hidden: boolean; // Hidden.
        timeaccess?: number; // Timeaccess.
        showshortname: boolean; // Showshortname.
        coursecategory: string; // Coursecategory.
    };
    coursemodules: { // Coursemodules.
        id: number; // Id.
        name: string; // Name.
        url?: string; // Url.
        iconurl: string; // Iconurl.
    }[];
    plans: { // Plans.
        name: string; // Name.
        description: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        userid: number; // Userid.
        templateid: number; // Templateid.
        origtemplateid: number; // Origtemplateid.
        status: number; // Status.
        duedate: number; // Duedate.
        reviewerid: number; // Reviewerid.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
        statusname: string; // Statusname.
        isbasedontemplate: boolean; // Isbasedontemplate.
        canmanage: boolean; // Canmanage.
        canrequestreview: boolean; // Canrequestreview.
        canreview: boolean; // Canreview.
        canbeedited: boolean; // Canbeedited.
        isactive: boolean; // Isactive.
        isdraft: boolean; // Isdraft.
        iscompleted: boolean; // Iscompleted.
        isinreview: boolean; // Isinreview.
        iswaitingforreview: boolean; // Iswaitingforreview.
        isreopenallowed: boolean; // Isreopenallowed.
        iscompleteallowed: boolean; // Iscompleteallowed.
        isunlinkallowed: boolean; // Isunlinkallowed.
        isrequestreviewallowed: boolean; // Isrequestreviewallowed.
        iscancelreviewrequestallowed: boolean; // Iscancelreviewrequestallowed.
        isstartreviewallowed: boolean; // Isstartreviewallowed.
        isstopreviewallowed: boolean; // Isstopreviewallowed.
        isapproveallowed: boolean; // Isapproveallowed.
        isunapproveallowed: boolean; // Isunapproveallowed.
        duedateformatted: string; // Duedateformatted.
        commentarea: {
            component: string; // Component.
            commentarea: string; // Commentarea.
            itemid: number; // Itemid.
            courseid: number; // Courseid.
            contextid: number; // Contextid.
            cid: string; // Cid.
            autostart: boolean; // Autostart.
            canpost: boolean; // Canpost.
            canview: boolean; // Canview.
            count: number; // Count.
            collapsediconkey: string; // Collapsediconkey.
            displaytotalcount: boolean; // Displaytotalcount.
            displaycancel: boolean; // Displaycancel.
            fullwidth: boolean; // Fullwidth.
            linktext: string; // Linktext.
            notoggle: boolean; // Notoggle.
            template: string; // Template.
            canpostorhascomments: boolean; // Canpostorhascomments.
        };
        reviewer?: {
            id: number; // Id.
            email: string; // Email.
            idnumber: string; // Idnumber.
            phone1: string; // Phone1.
            phone2: string; // Phone2.
            department: string; // Department.
            institution: string; // Institution.
            fullname: string; // Fullname.
            identity: string; // Identity.
            profileurl: string; // Profileurl.
            profileimageurl: string; // Profileimageurl.
            profileimageurlsmall: string; // Profileimageurlsmall.
        };
        template?: {
            shortname: string; // Shortname.
            description: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            duedate: number; // Duedate.
            visible: boolean; // Visible.
            contextid: number; // Contextid.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            duedateformatted: string; // Duedateformatted.
            cohortscount: number; // Cohortscount.
            planscount: number; // Planscount.
            canmanage: boolean; // Canmanage.
            canread: boolean; // Canread.
            contextname: string; // Contextname.
            contextnamenoprefix: string; // Contextnamenoprefix.
        };
        url: string; // Url.
    }[];
    pluginbaseurl: string; // Pluginbaseurl.
};

/**
 * Params of tool_lp_data_for_user_competency_summary_in_plan WS.
 */
export type ToolLpDataForUserCompetencySummaryInPlanWSParams = {
    competencyid: number; // Data base record id for the competency.
    planid: number; // Data base record id for the plan.
};

/**
 * Data returned by tool_lp_data_for_user_competency_summary_in_plan WS.
 */
export type ToolLpDataForUserCompetencySummaryInPlanWSResponse = {
    usercompetencysummary: {
        showrelatedcompetencies: boolean; // Showrelatedcompetencies.
        cangrade: boolean; // Cangrade.
        competency: {
            linkedcourses: { // Linkedcourses.
                id: number; // Id.
                fullname: string; // Fullname.
                shortname: string; // Shortname.
                idnumber: string; // Idnumber.
                summary: string; // Summary.
                summaryformat: number; // Summary format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                startdate: number; // Startdate.
                enddate: number; // Enddate.
                visible: boolean; // Visible.
                fullnamedisplay: string; // Fullnamedisplay.
                viewurl: string; // Viewurl.
                courseimage: string; // Courseimage.
                progress?: number; // Progress.
                hasprogress: boolean; // Hasprogress.
                isfavourite: boolean; // Isfavourite.
                hidden: boolean; // Hidden.
                timeaccess?: number; // Timeaccess.
                showshortname: boolean; // Showshortname.
                coursecategory: string; // Coursecategory.
            }[];
            relatedcompetencies: { // Relatedcompetencies.
                shortname: string; // Shortname.
                idnumber: string; // Idnumber.
                description: string; // Description.
                descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                sortorder: number; // Sortorder.
                parentid: number; // Parentid.
                path: string; // Path.
                ruleoutcome: number; // Ruleoutcome.
                ruletype: string; // Ruletype.
                ruleconfig: string; // Ruleconfig.
                scaleid: number; // Scaleid.
                scaleconfiguration: string; // Scaleconfiguration.
                competencyframeworkid: number; // Competencyframeworkid.
                id: number; // Id.
                timecreated: number; // Timecreated.
                timemodified: number; // Timemodified.
                usermodified: number; // Usermodified.
            }[];
            competency: {
                shortname: string; // Shortname.
                idnumber: string; // Idnumber.
                description: string; // Description.
                descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                sortorder: number; // Sortorder.
                parentid: number; // Parentid.
                path: string; // Path.
                ruleoutcome: number; // Ruleoutcome.
                ruletype: string; // Ruletype.
                ruleconfig: string; // Ruleconfig.
                scaleid: number; // Scaleid.
                scaleconfiguration: string; // Scaleconfiguration.
                competencyframeworkid: number; // Competencyframeworkid.
                id: number; // Id.
                timecreated: number; // Timecreated.
                timemodified: number; // Timemodified.
                usermodified: number; // Usermodified.
            };
            framework: {
                shortname: string; // Shortname.
                idnumber: string; // Idnumber.
                description: string; // Description.
                descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                visible: boolean; // Visible.
                scaleid: number; // Scaleid.
                scaleconfiguration: string; // Scaleconfiguration.
                contextid: number; // Contextid.
                taxonomies: string; // Taxonomies.
                id: number; // Id.
                timecreated: number; // Timecreated.
                timemodified: number; // Timemodified.
                usermodified: number; // Usermodified.
                canmanage: boolean; // Canmanage.
                competenciescount: number; // Competenciescount.
                contextname: string; // Contextname.
                contextnamenoprefix: string; // Contextnamenoprefix.
            };
            hascourses: boolean; // Hascourses.
            hasrelatedcompetencies: boolean; // Hasrelatedcompetencies.
            scaleid: number; // Scaleid.
            scaleconfiguration: string; // Scaleconfiguration.
            taxonomyterm: string; // Taxonomyterm.
            comppath: {
                ancestors: { // Ancestors.
                    id: number; // Id.
                    name: string; // Name.
                    first: boolean; // First.
                    last: boolean; // Last.
                    position: number; // Position.
                }[];
                framework: {
                    id: number; // Id.
                    name: string; // Name.
                    first: boolean; // First.
                    last: boolean; // Last.
                    position: number; // Position.
                };
                pluginbaseurl: string; // Pluginbaseurl.
                pagecontextid: number; // Pagecontextid.
                showlinks: boolean; // Showlinks.
            };
            pluginbaseurl: string; // Pluginbaseurl.
        };
        user: {
            id: number; // Id.
            email: string; // Email.
            idnumber: string; // Idnumber.
            phone1: string; // Phone1.
            phone2: string; // Phone2.
            department: string; // Department.
            institution: string; // Institution.
            fullname: string; // Fullname.
            identity: string; // Identity.
            profileurl: string; // Profileurl.
            profileimageurl: string; // Profileimageurl.
            profileimageurlsmall: string; // Profileimageurlsmall.
        };
        usercompetency?: {
            userid: number; // Userid.
            competencyid: number; // Competencyid.
            status: number; // Status.
            reviewerid: number; // Reviewerid.
            proficiency: boolean; // Proficiency.
            grade: number; // Grade.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            canrequestreview: boolean; // Canrequestreview.
            canreview: boolean; // Canreview.
            gradename: string; // Gradename.
            isrequestreviewallowed: boolean; // Isrequestreviewallowed.
            iscancelreviewrequestallowed: boolean; // Iscancelreviewrequestallowed.
            isstartreviewallowed: boolean; // Isstartreviewallowed.
            isstopreviewallowed: boolean; // Isstopreviewallowed.
            isstatusidle: boolean; // Isstatusidle.
            isstatusinreview: boolean; // Isstatusinreview.
            isstatuswaitingforreview: boolean; // Isstatuswaitingforreview.
            proficiencyname: string; // Proficiencyname.
            reviewer?: {
                id: number; // Id.
                email: string; // Email.
                idnumber: string; // Idnumber.
                phone1: string; // Phone1.
                phone2: string; // Phone2.
                department: string; // Department.
                institution: string; // Institution.
                fullname: string; // Fullname.
                identity: string; // Identity.
                profileurl: string; // Profileurl.
                profileimageurl: string; // Profileimageurl.
                profileimageurlsmall: string; // Profileimageurlsmall.
            };
            statusname: string; // Statusname.
            url: string; // Url.
        };
        usercompetencyplan?: {
            userid: number; // Userid.
            competencyid: number; // Competencyid.
            proficiency: boolean; // Proficiency.
            grade: number; // Grade.
            planid: number; // Planid.
            sortorder: number; // Sortorder.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            gradename: string; // Gradename.
            proficiencyname: string; // Proficiencyname.
        };
        usercompetencycourse?: {
            userid: number; // Userid.
            courseid: number; // Courseid.
            competencyid: number; // Competencyid.
            proficiency: boolean; // Proficiency.
            grade: number; // Grade.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            gradename: string; // Gradename.
            proficiencyname: string; // Proficiencyname.
        };
        evidence: { // Evidence.
            usercompetencyid: number; // Usercompetencyid.
            contextid: number; // Contextid.
            action: number; // Action.
            actionuserid: number; // Actionuserid.
            descidentifier: string; // Descidentifier.
            desccomponent: string; // Desccomponent.
            desca: string; // Desca.
            url: string; // Url.
            grade: number; // Grade.
            note: string; // Note.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            actionuser?: {
                id: number; // Id.
                email: string; // Email.
                idnumber: string; // Idnumber.
                phone1: string; // Phone1.
                phone2: string; // Phone2.
                department: string; // Department.
                institution: string; // Institution.
                fullname: string; // Fullname.
                identity: string; // Identity.
                profileurl: string; // Profileurl.
                profileimageurl: string; // Profileimageurl.
                profileimageurlsmall: string; // Profileimageurlsmall.
            };
            description: string; // Description.
            gradename: string; // Gradename.
            userdate: string; // Userdate.
            candelete: boolean; // Candelete.
        }[];
        commentarea?: {
            component: string; // Component.
            commentarea: string; // Commentarea.
            itemid: number; // Itemid.
            courseid: number; // Courseid.
            contextid: number; // Contextid.
            cid: string; // Cid.
            autostart: boolean; // Autostart.
            canpost: boolean; // Canpost.
            canview: boolean; // Canview.
            count: number; // Count.
            collapsediconkey: string; // Collapsediconkey.
            displaytotalcount: boolean; // Displaytotalcount.
            displaycancel: boolean; // Displaycancel.
            fullwidth: boolean; // Fullwidth.
            linktext: string; // Linktext.
            notoggle: boolean; // Notoggle.
            template: string; // Template.
            canpostorhascomments: boolean; // Canpostorhascomments.
        };
    };
    plan: {
        name: string; // Name.
        description: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        userid: number; // Userid.
        templateid: number; // Templateid.
        origtemplateid: number; // Origtemplateid.
        status: number; // Status.
        duedate: number; // Duedate.
        reviewerid: number; // Reviewerid.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
        statusname: string; // Statusname.
        isbasedontemplate: boolean; // Isbasedontemplate.
        canmanage: boolean; // Canmanage.
        canrequestreview: boolean; // Canrequestreview.
        canreview: boolean; // Canreview.
        canbeedited: boolean; // Canbeedited.
        isactive: boolean; // Isactive.
        isdraft: boolean; // Isdraft.
        iscompleted: boolean; // Iscompleted.
        isinreview: boolean; // Isinreview.
        iswaitingforreview: boolean; // Iswaitingforreview.
        isreopenallowed: boolean; // Isreopenallowed.
        iscompleteallowed: boolean; // Iscompleteallowed.
        isunlinkallowed: boolean; // Isunlinkallowed.
        isrequestreviewallowed: boolean; // Isrequestreviewallowed.
        iscancelreviewrequestallowed: boolean; // Iscancelreviewrequestallowed.
        isstartreviewallowed: boolean; // Isstartreviewallowed.
        isstopreviewallowed: boolean; // Isstopreviewallowed.
        isapproveallowed: boolean; // Isapproveallowed.
        isunapproveallowed: boolean; // Isunapproveallowed.
        duedateformatted: string; // Duedateformatted.
        commentarea: {
            component: string; // Component.
            commentarea: string; // Commentarea.
            itemid: number; // Itemid.
            courseid: number; // Courseid.
            contextid: number; // Contextid.
            cid: string; // Cid.
            autostart: boolean; // Autostart.
            canpost: boolean; // Canpost.
            canview: boolean; // Canview.
            count: number; // Count.
            collapsediconkey: string; // Collapsediconkey.
            displaytotalcount: boolean; // Displaytotalcount.
            displaycancel: boolean; // Displaycancel.
            fullwidth: boolean; // Fullwidth.
            linktext: string; // Linktext.
            notoggle: boolean; // Notoggle.
            template: string; // Template.
            canpostorhascomments: boolean; // Canpostorhascomments.
        };
        reviewer?: {
            id: number; // Id.
            email: string; // Email.
            idnumber: string; // Idnumber.
            phone1: string; // Phone1.
            phone2: string; // Phone2.
            department: string; // Department.
            institution: string; // Institution.
            fullname: string; // Fullname.
            identity: string; // Identity.
            profileurl: string; // Profileurl.
            profileimageurl: string; // Profileimageurl.
            profileimageurlsmall: string; // Profileimageurlsmall.
        };
        template?: {
            shortname: string; // Shortname.
            description: string; // Description.
            descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
            duedate: number; // Duedate.
            visible: boolean; // Visible.
            contextid: number; // Contextid.
            id: number; // Id.
            timecreated: number; // Timecreated.
            timemodified: number; // Timemodified.
            usermodified: number; // Usermodified.
            duedateformatted: string; // Duedateformatted.
            cohortscount: number; // Cohortscount.
            planscount: number; // Planscount.
            canmanage: boolean; // Canmanage.
            canread: boolean; // Canread.
            contextname: string; // Contextname.
            contextnamenoprefix: string; // Contextnamenoprefix.
        };
        url: string; // Url.
    };
};

/**
 * Params of tool_lp_data_for_user_evidence_list_page WS.
 */
export type ToolLpDataForUserEvidenceListPageWSParams = {
    userid: number; // The user ID.
};

/**
 * Data returned by tool_lp_data_for_user_evidence_list_page WS.
 */
export type ToolLpDataForUserEvidenceListPageWSResponse = {
    canmanage: boolean; // Can the current user manage the user's evidence.
    userid: number; // The user ID.
    pluginbaseurl: string; // Url to the tool_lp plugin folder on this Moodle site.
    evidence: {
        userid: number; // Userid.
        name: string; // Name.
        description: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        url: string; // Url.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
        canmanage: boolean; // Canmanage.
        filecount: number; // Filecount.
        files: { // Files.
            contextid: number; // Contextid.
            component: string; // Component.
            filearea: string; // Filearea.
            itemid: number; // Itemid.
            filepath: string; // Filepath.
            filename: string; // Filename.
            isdir: boolean; // Isdir.
            isimage: boolean; // Isimage.
            timemodified: number; // Timemodified.
            timecreated: number; // Timecreated.
            filesize: number; // Filesize.
            author: string; // Author.
            license: string; // License.
            filenameshort: string; // Filenameshort.
            filesizeformatted: string; // Filesizeformatted.
            icon: string; // Icon.
            timecreatedformatted: string; // Timecreatedformatted.
            timemodifiedformatted: string; // Timemodifiedformatted.
            url: string; // Url.
        }[];
        hasurlorfiles: boolean; // Hasurlorfiles.
        urlshort: string; // Urlshort.
        competencycount: number; // Competencycount.
        usercompetencies?: { // Usercompetencies.
            competency: {
                shortname: string; // Shortname.
                idnumber: string; // Idnumber.
                description: string; // Description.
                descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                sortorder: number; // Sortorder.
                parentid: number; // Parentid.
                path: string; // Path.
                ruleoutcome: number; // Ruleoutcome.
                ruletype: string; // Ruletype.
                ruleconfig: string; // Ruleconfig.
                scaleid: number; // Scaleid.
                scaleconfiguration: string; // Scaleconfiguration.
                competencyframeworkid: number; // Competencyframeworkid.
                id: number; // Id.
                timecreated: number; // Timecreated.
                timemodified: number; // Timemodified.
                usermodified: number; // Usermodified.
            };
            usercompetency: {
                userid: number; // Userid.
                competencyid: number; // Competencyid.
                status: number; // Status.
                reviewerid: number; // Reviewerid.
                proficiency: boolean; // Proficiency.
                grade: number; // Grade.
                id: number; // Id.
                timecreated: number; // Timecreated.
                timemodified: number; // Timemodified.
                usermodified: number; // Usermodified.
                canrequestreview: boolean; // Canrequestreview.
                canreview: boolean; // Canreview.
                gradename: string; // Gradename.
                isrequestreviewallowed: boolean; // Isrequestreviewallowed.
                iscancelreviewrequestallowed: boolean; // Iscancelreviewrequestallowed.
                isstartreviewallowed: boolean; // Isstartreviewallowed.
                isstopreviewallowed: boolean; // Isstopreviewallowed.
                isstatusidle: boolean; // Isstatusidle.
                isstatusinreview: boolean; // Isstatusinreview.
                isstatuswaitingforreview: boolean; // Isstatuswaitingforreview.
                proficiencyname: string; // Proficiencyname.
                reviewer?: {
                    id: number; // Id.
                    email: string; // Email.
                    idnumber: string; // Idnumber.
                    phone1: string; // Phone1.
                    phone2: string; // Phone2.
                    department: string; // Department.
                    institution: string; // Institution.
                    fullname: string; // Fullname.
                    identity: string; // Identity.
                    profileurl: string; // Profileurl.
                    profileimageurl: string; // Profileimageurl.
                    profileimageurlsmall: string; // Profileimageurlsmall.
                };
                statusname: string; // Statusname.
                url: string; // Url.
            };
        }[];
        userhasplan: boolean; // Userhasplan.
    }[];
    navigation: string[];
};

/**
 * Params of tool_lp_data_for_user_evidence_page WS.
 */
export type ToolLpDataForUserEvidencePageWSParams = {
    id: number; // The user evidence ID.
};

/**
 * Data returned by tool_lp_data_for_user_evidence_page WS.
 */
export type ToolLpDataForUserEvidencePageWSResponse = {
    userevidence: {
        userid: number; // Userid.
        name: string; // Name.
        description: string; // Description.
        descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
        url: string; // Url.
        id: number; // Id.
        timecreated: number; // Timecreated.
        timemodified: number; // Timemodified.
        usermodified: number; // Usermodified.
        canmanage: boolean; // Canmanage.
        filecount: number; // Filecount.
        files: { // Files.
            contextid: number; // Contextid.
            component: string; // Component.
            filearea: string; // Filearea.
            itemid: number; // Itemid.
            filepath: string; // Filepath.
            filename: string; // Filename.
            isdir: boolean; // Isdir.
            isimage: boolean; // Isimage.
            timemodified: number; // Timemodified.
            timecreated: number; // Timecreated.
            filesize: number; // Filesize.
            author: string; // Author.
            license: string; // License.
            filenameshort: string; // Filenameshort.
            filesizeformatted: string; // Filesizeformatted.
            icon: string; // Icon.
            timecreatedformatted: string; // Timecreatedformatted.
            timemodifiedformatted: string; // Timemodifiedformatted.
            url: string; // Url.
        }[];
        hasurlorfiles: boolean; // Hasurlorfiles.
        urlshort: string; // Urlshort.
        competencycount: number; // Competencycount.
        usercompetencies?: { // Usercompetencies.
            competency: {
                shortname: string; // Shortname.
                idnumber: string; // Idnumber.
                description: string; // Description.
                descriptionformat?: number; // Description format (1 = HTML, 0 = MOODLE, 2 = PLAIN or 4 = MARKDOWN).
                sortorder: number; // Sortorder.
                parentid: number; // Parentid.
                path: string; // Path.
                ruleoutcome: number; // Ruleoutcome.
                ruletype: string; // Ruletype.
                ruleconfig: string; // Ruleconfig.
                scaleid: number; // Scaleid.
                scaleconfiguration: string; // Scaleconfiguration.
                competencyframeworkid: number; // Competencyframeworkid.
                id: number; // Id.
                timecreated: number; // Timecreated.
                timemodified: number; // Timemodified.
                usermodified: number; // Usermodified.
            };
            usercompetency: {
                userid: number; // Userid.
                competencyid: number; // Competencyid.
                status: number; // Status.
                reviewerid: number; // Reviewerid.
                proficiency: boolean; // Proficiency.
                grade: number; // Grade.
                id: number; // Id.
                timecreated: number; // Timecreated.
                timemodified: number; // Timemodified.
                usermodified: number; // Usermodified.
                canrequestreview: boolean; // Canrequestreview.
                canreview: boolean; // Canreview.
                gradename: string; // Gradename.
                isrequestreviewallowed: boolean; // Isrequestreviewallowed.
                iscancelreviewrequestallowed: boolean; // Iscancelreviewrequestallowed.
                isstartreviewallowed: boolean; // Isstartreviewallowed.
                isstopreviewallowed: boolean; // Isstopreviewallowed.
                isstatusidle: boolean; // Isstatusidle.
                isstatusinreview: boolean; // Isstatusinreview.
                isstatuswaitingforreview: boolean; // Isstatuswaitingforreview.
                proficiencyname: string; // Proficiencyname.
                reviewer?: {
                    id: number; // Id.
                    email: string; // Email.
                    idnumber: string; // Idnumber.
                    phone1: string; // Phone1.
                    phone2: string; // Phone2.
                    department: string; // Department.
                    institution: string; // Institution.
                    fullname: string; // Fullname.
                    identity: string; // Identity.
                    profileurl: string; // Profileurl.
                    profileimageurl: string; // Profileimageurl.
                    profileimageurlsmall: string; // Profileimageurlsmall.
                };
                statusname: string; // Statusname.
                url: string; // Url.
            };
        }[];
        userhasplan: boolean; // Userhasplan.
    };
    pluginbaseurl: string; // Url to the tool_lp plugin folder on this Moodle site.
};

/**
 * Params of tool_mobile_call_external_functions WS.
 */
export type ToolMobileCallExternalFunctionsWSParams = {
    requests: {
        function: string; // Function name.
        arguments?: string; // JSON-encoded object with named arguments.
        settingraw?: boolean; // Return raw text.
        settingfilter?: boolean; // Filter text.
        settingfileurl?: boolean; // Rewrite plugin file URLs.
        settinglang?: string; // Session language.
    }[];
};

/**
 * Data returned by tool_mobile_call_external_functions WS.
 */
export type ToolMobileCallExternalFunctionsWSResponse = {
    responses: {
        error: boolean; // Whether an exception was thrown.
        data?: string; // JSON-encoded response data.
        exception?: string; // JSON-encoed exception info.
    }[];
};

/**
 * Params of tool_mobile_get_autologin_key WS.
 */
export type ToolMobileGetAutologinKeyWSParams = {
    privatetoken: string; // Private token, usually generated by login/token.php.
};

/**
 * Data returned by tool_mobile_get_autologin_key WS.
 */
export type ToolMobileGetAutologinKeyWSResponse = {
    key: string; // Auto-login key for a single usage with time expiration.
    autologinurl: string; // Auto-login URL.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of tool_mobile_get_config WS.
 */
export type ToolMobileGetConfigWSParams = {
    section?: string; // Settings section name.
};

/**
 * Data returned by tool_mobile_get_config WS.
 */
export type ToolMobileGetConfigWSResponse = {
    settings: { // Settings.
        name: string; // The name of the setting.
        value: string; // The value of the setting.
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of tool_mobile_get_content WS.
 */
export type ToolMobileGetContentWSParams = {
    component: string; // Component where the class is e.g. mod_assign.
    method: string; // Method to execute in class \$component\output\mobile.
    args?: { // Args for the method are optional.
        name: string; // Param name.
        value: string; // Param value.
    }[];
};

/**
 * Data returned by tool_mobile_get_content WS.
 */
export type ToolMobileGetContentWSResponse = {
    templates: { // Templates required by the generated content.
        id: string; // ID of the template.
        html: string; // HTML code.
    }[];
    javascript: string; // JavaScript code.
    otherdata: { // Other data that can be used or manipulated by the template via 2-way data-binding.
        name: string; // Field name.
        value: string; // Field value.
    }[];
    files: CoreWSExternalFile[];
    restrict: {
        users?: number[]; // List of allowed users.
        courses?: number[]; // List of allowed courses.
    }; // Restrict this content to certain users or courses.
    disabled?: boolean; // Whether we consider this disabled or not.
};

/**
 * Params of tool_mobile_get_plugins_supporting_mobile WS.
 */
export type ToolMobileGetPluginsSupportingMobileWSParams = {
};

/**
 * Data returned by tool_mobile_get_plugins_supporting_mobile WS.
 */
export type ToolMobileGetPluginsSupportingMobileWSResponse = {
    plugins: {
        component: string; // The plugin component name.
        version: string; // The plugin version number.
        addon: string; // The Mobile addon (package) name.
        dependencies: string[]; // The list of Mobile addons this addon depends on.
        fileurl: string; // The addon package url for download
                                                         // or empty if it doesn't exist.

        filehash: string; // The addon package hash or empty if it doesn't exist.
        filesize: number; // The addon package size or empty if it doesn't exist.
        handlers?: string; // Handlers definition (JSON).
        lang?: string; // Language strings used by the handlers (JSON).
    }[];
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of tool_mobile_get_public_config WS.
 */
export type ToolMobileGetPublicConfigWSParams = {
};

/**
 * Data returned by tool_mobile_get_public_config WS.
 */
export type ToolMobileGetPublicConfigWSResponse = {
    wwwroot: string; // Site URL.
    httpswwwroot: string; // Site https URL (if httpslogin is enabled).
    sitename: string; // Site name.
    guestlogin: number; // Whether guest login is enabled.
    rememberusername: number; // Values: 0 for No, 1 for Yes, 2 for optional.
    authloginviaemail: number; // Whether log in via email is enabled.
    registerauth: string; // Authentication method for user registration.
    forgottenpasswordurl: string; // Forgotten password URL.
    authinstructions: string; // Authentication instructions.
    authnoneenabled: number; // Whether auth none is enabled.
    enablewebservices: number; // Whether Web Services are enabled.
    enablemobilewebservice: number; // Whether the Mobile service is enabled.
    maintenanceenabled: number; // Whether site maintenance is enabled.
    maintenancemessage: string; // Maintenance message.
    logourl?: string; // The site logo URL.
    compactlogourl?: string; // The site compact logo URL.
    typeoflogin: number; // The type of login. 1 for app, 2 for browser, 3 for embedded.
    launchurl?: string; // SSO login launch URL.
    mobilecssurl?: string; // Mobile custom CSS theme.
    tool_mobile_disabledfeatures?: string; // Disabled features in the app.
    identityproviders?: { // Identity providers.
        name: string; // The identity provider name.
        iconurl: string; // The icon URL for the provider.
        url: string; // The URL of the provider.
    }[];
    country?: string; // Default site country.
    agedigitalconsentverification?: boolean; // Whether age digital consent verification
                 // is enabled.

    supportname?: string; // Site support contact name
                 // (only if age verification is enabled).

    supportemail?: string; // Site support contact email
                 // (only if age verification is enabled).

    autolang?: number; // Whether to detect default language
                 // from browser setting.

    lang?: string; // Default language for the site.
    langmenu?: number; // Whether the language menu should be displayed.
    langlist?: string; // Languages on language menu.
    locale?: string; // Sitewide locale.
    tool_mobile_minimumversion?: string; // Minimum required version to access.
    tool_mobile_iosappid?: string; // IOS app's unique identifier.
    tool_mobile_androidappid?: string; // Android app's unique identifier.
    tool_mobile_setuplink?: string; // App download page.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of tool_mobile_get_tokens_for_qr_login WS.
 */
export type ToolMobileGetTokensForQrLoginWSParams = {
    qrloginkey: string; // The user key for validating the request.
    userid: number; // The user the key belongs to.
};

/**
 * Data returned by tool_mobile_get_tokens_for_qr_login WS.
 */
export type ToolMobileGetTokensForQrLoginWSResponse = {
    token: string; // A valid WebService token for the official mobile app service.
    privatetoken: string; // Private token used for auto-login processes.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of tool_mobile_validate_subscription_key WS.
 */
export type ToolMobileValidateSubscriptionKeyWSParams = {
    key: string; // Site subscription temporary key.
};

/**
 * Data returned by tool_mobile_validate_subscription_key WS.
 */
export type ToolMobileValidateSubscriptionKeyWSResponse = {
    validated: boolean; // Whether the key is validated or not.
    warnings?: CoreWSExternalWarning[];
};

/**
 * Params of tool_moodlenet_search_courses WS.
 */
export type ToolMoodlenetSearchCoursesWSParams = {
    searchvalue: string; // Search value.
};

/**
 * Data returned by tool_moodlenet_search_courses WS.
 */
export type ToolMoodlenetSearchCoursesWSResponse = {
    courses: {
        id: number; // Course id.
        fullname: string; // Course full name.
        hidden: number; // Is the course visible.
        viewurl: string; // Next step of import.
        coursecategory: string; // Category name.
        courseimage: string; // Course image.
    }[];
};

/**
 * Params of tool_moodlenet_verify_webfinger WS.
 */
export type ToolMoodlenetVerifyWebfingerWSParams = {
    profileurl: string; // The profile url that the user has given us.
    course: number; // The course we are adding to.
    section: number; // The section within the course we are adding to.
};

/**
 * Data returned by tool_moodlenet_verify_webfinger WS.
 */
export type ToolMoodlenetVerifyWebfingerWSResponse = {
    result: boolean; // Was the passed content a valid WebFinger?.
    message: string; // Our message for the user.
    domain?: string; // Domain to redirect the user to.
};
