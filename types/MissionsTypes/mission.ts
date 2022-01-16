export interface MissionType {
    id: string;
    details: string;
    launch_year: string;
    launch_site: {
        site_id: string;
        site_name: string;
        site_name_long: string;
    }
    launch_success: string;
    links: {
        mission_patch: string;
        mission_patch_small: string;
        article_link: string;
        flickr_images: string | Array<string>;
        video_link: string;
    }
    mission_id: string;
    mission_name: string;
    rocket: {
        rocket_name: string;
        rocket_type: string;
        rocket: {
            id: string;
            name: string;
            type: string;
            company: string;
        }
    }
    launch_date_local: string;
}
