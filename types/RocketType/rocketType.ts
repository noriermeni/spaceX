export interface RocketType {
    __typename: string;
    active: boolean;
    boosters: number;
    company:  string;
    cost_per_launch: number;
    country: string;
    description:  string;
    diameter: {
        __typename: string;
        feet: number;
        meters: number;
    };
    engines: {
        __typename: string;
        engine_loss_max: number;
        layout: string;
        number: number;
        propellant_1: string;
        propellant_2: string;
        thrust_sea_level: {
            __typename: string;
            kN: number;
            lbf: number;
        };
        thrust_vacuum: {
            __typename: string;
            kN: number;
            lbf: number;
        };
        thrust_to_weight: number;
        type: string;
        version: string;
    };
    first_flight: string;
    first_stage: {
        __typename: string;
        burn_time_sec: number;
        fuel_amount_tons: number;
        engines: number;
        reusable: boolean;
        thrust_sea_level: {
            __typename: string;
            kN: number;
            lbf: number;
        },
        thrust_vacuum: {
            __typename: string;
            kN: number;
            lbf: number;
        };
    };
    height: {
        __typename: string;
        meters: number;
        feet: number;
    },
    id: string;
    landing_legs: {
        __typename: string;
        material: string;
        number: number;
    },
    name: string;
    mass: {
        __typename: string;
        lb: number;
        kg: number;
    },
    payload_weights: Array<{
            __typename: string;
            id: string;
            kg: number;
            lb: number;
            name: string;
    }>;
    second_stage: {
        __typename: string;
        burn_time_sec: number;
        engines: number;
        fuel_amount_tons: number;
        payloads: {
            __typename: string;
            composite_fairing: {
                __typename: string;
                diameter: {
                    __typename: string;
                    feet: number;
                    meters: number;
                },
                height: {
                    __typename: string;
                    feet: number;
                    meters: number;
                }
            },
            option_1: string;
        },
        thrust: {
            __typename: string;
            kN: number;
            lbf: number;
        }
    },
    wikipedia: string;
    type: string;
    success_rate_pct: number;
    stages: number;
}