// @ts-ignore
let test: any = {
    active: true,
    boosters: 0,
    company: "SpaceX",
    country: "United States",
    cost_per_launch: '50 000 000 DOLLAR',

    diameter: {
        feet: 12,
        meters: 3.7,
        __typename: "Distance"
    },
    engines: {
        engine_loss_max: "2",
            layout: "octaweb",
            number: 9,
            propellant_1: "liquid oxygen",
            propellant_2: "RP-1 kerosene",
            thrust_sea_level: {
            kN: 845,
            lbf: 190000,
            __typename: "Force"
        },
        thrust_vacuum: {
            kN: 914,
            lbf: 205500,
            __typename: "Force"
        },
        thrust_to_weight: 180.1,
            type: "merlin",
            version: "1D+",
            __typename: "RocketEngines"
    },
    first_flight: "2010-06-04",
    height: {
        meters: 70,
        feet: 229.6,
        __typename: "Distance"
    },

    landing_legs: {
        material: "carbon fiber",
        number: 4,
        __typename: "RocketLandingLegs"
    },

    mass: {
        lb: 1207920,
        kg: 549054,
        __typename: "Mass"
    },
    payload_weights: [
        {
            id: "leo",
            kg: 22800,
            lb: 50265,
            name: "Low Earth Orbit",
            __typename: "RocketPayloadWeight"
        },
        {
            id: "gto",
            kg: 8300,
            lb: 18300,
            name: "Geosynchronous Transfer Orbit",
            __typename: "RocketPayloadWeight"
        },
        {
            id: "mars",
            kg: 4020,
            lb: 8860,
            name: "Mars Orbit",
            __typename: "RocketPayloadWeight"
        }
    ],

    first_stage: {
        burn_time_sec: 162,
        fuel_amount_tons: 385,
        engines: 9,
        reusable: true,
        thrust_sea_level: {
            kN: 7607,
            lbf: 1710000,
            __typename: "Force"
        },
        thrust_vacuum: {
            kN: 8227,
            lbf: 1849500,
            __typename: "Force"
        },
        __typename: "RocketFirstStage"
    },

    second_stage: {
        burn_time_sec: 397,
        engines: 1,
        fuel_amount_tons: 90,
        payloads: {
            composite_fairing: {
                diameter: {
                    feet: 17.1,
                    meters: 5.2,
                    __typename: "Distance"
                },
                height: {
                    feet: 43,
                        meters: 13.1,
                        __typename: "Distance"
                },
                __typename: "RocketSecondStagePayloadCompositeFairing"
            },
            option_1: "dragon",
            __typename: "RocketSecondStagePayloads"
        },
        thrust: {
            kN: 934,
            lbf: 210000,
            __typename: "Force"
        },
        __typename: "RocketSecondStage"
    },

    success_rate_pct: 97,
    stages: 2,

    wikipedia: "https://en.wikipedia.org/wiki/Falcon_9",

    __typename: "Rocket",
    type: "rocket",
}