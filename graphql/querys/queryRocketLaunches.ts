// Params: { rocket_id: "falcon9" }
import {gql} from "@apollo/client";

export const QUERY_ROCKET_LAUNCHES = gql`
    # import './types.graphql'
    query LaunchesByRocket($find: LaunchFind, $offset: Int, $limit: Int) {
        launchesPast(find: $find, offset: $offset, limit: $limit) {
            id
            details
            mission_name
           
        }
    }
`;

/*
 launch_date_local
            launch_site {
                site_name_long
            }
            ships {
                name
                home_port
                image
                class
                imo
                type
                    url
            }
            launch_success
            launch_year
            links {
                mission_patch
                video_link
                wikipedia
                presskit
            }
            is_tentative
            mission_id
            upcoming
            telemetry {
                flight_club
            }
* */