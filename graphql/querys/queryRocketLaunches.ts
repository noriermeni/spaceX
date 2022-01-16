// Params: { rocket_id: "falcon9" }
import {gql} from "@apollo/client";

export const QUERY_ROCKET_LAUNCHES = gql`
    # import '../types/types.graphql'
    query LaunchesByRocket($find: LaunchFind, $offset: Int, $limit: Int) {
        launches(find: $find, offset: $offset, limit: $limit) {
            id
            details
            launch_year
            launch_site {
                site_id
                site_name
                site_name_long
            }
            launch_success
            links {
                mission_patch
                mission_patch_small
                article_link
                flickr_images
                video_link
            }
            mission_id
            mission_name
            rocket {
                rocket_name
                rocket_type
                rocket {
                    id
                    name
                    type
                    company
                }
            }
            launch_date_local
        }
    }
`;