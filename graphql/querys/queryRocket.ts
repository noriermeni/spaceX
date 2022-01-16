import {gql} from "@apollo/client";

export const QUERY_LAUNCHES = gql`
    query Rocket($id: String) {
        rocket(id: $id) {
            active
            boosters
            company
            cost_per_launch
            country
            description
            diameter {
                feet
                meters
            }
            engines {
                engine_loss_max
                layout
                number
                propellant_1
                propellant_2
                thrust_sea_level {
                    kN
                    lbf
                }
                thrust_vacuum {
                    kN
                    lbf
                }
                thrust_to_weight
                type
                version
            }
            first_flight
            first_stage {
                burn_time_sec
                fuel_amount_tons
                engines
                reusable
                thrust_sea_level {
                    kN
                    lbf
                }
                thrust_vacuum {
                    kN
                    lbf
                }
            }
            height {
                meters
                feet
            }
            id
            landing_legs {
                material
                number
            }
            name
            mass {
                lb
                kg
            }
            payload_weights {
                id
                kg
                lb
                name
            }
            second_stage {
                burn_time_sec
                engines
                fuel_amount_tons
                payloads {
                    composite_fairing {
                        diameter {
                            feet
                            meters
                        }
                        height {
                            feet
                            meters
                        }
                    }
                    option_1
                }
                thrust {
                    kN
                    lbf
                }
            }
            wikipedia
            type
            success_rate_pct
            stages
        }
    }
`;