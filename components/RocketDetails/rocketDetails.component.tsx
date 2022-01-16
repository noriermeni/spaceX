import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";

import styles from './rocketDetails.module.scss';

import {QUERY_ROCKET} from "../../graphql/querys/queryRocket";

import {RocketType} from "../../types/RocketType/rocketType";

import PageTitle from "../PageTitle/pageTitle.component";
import {TitleSizeType} from "../../enums/TitleSize/titleSize.type";
import RocketContent from "../RocketContent/rocketContent.component";

interface Props {
    rocketId?: string | Array<string>;

    setRocketDetails(rocket: RocketType): void;
}

export default function RocketDetails({rocketId, setRocketDetails}: Props) {
    const { data, loading } = useQuery(QUERY_ROCKET, { variables: { rocketId: rocketId }})
    const [ rocket, setRocket ] = useState<RocketType>(initialRocketState);

    useEffect(() => {
        console.log(`Rocket `, data?.rocket)
        setRocket(data?.rocket);
        setRocketDetails(data?.rocket);
    }, [data])

    return <div className={styles.container}>
        <div className={styles.wall}>
            {!loading && <>
                <PageTitle
                    title={`${rocket?.name}`}
                    description={`${rocket?.description}`} />
            </>}
        </div>
        <RocketContent rocket={rocket} loading={loading} />
    </div>
}

const initialRocketState: RocketType = {
    __typename: "",
    active: false,
    boosters: 0,
    company: "",
    cost_per_launch: 0,
    country: "",
    description: "",
    diameter: {__typename: "", feet: 0, meters: 0},
    engines: {
        __typename: "",
        engine_loss_max: 0,
        layout: "",
        number: 0,
        propellant_1: "",
        propellant_2: "",
        thrust_sea_level: {__typename: "", kN: 0, lbf: 0},
        thrust_to_weight: 0,
        thrust_vacuum: {__typename: "", kN: 0, lbf: 0},
        type: "",
        version: ""
    },
    first_flight: "",
    first_stage: {
        __typename: "",
        burn_time_sec: 0,
        engines: 0,
        fuel_amount_tons: 0,
        reusable: false,
        thrust_sea_level: {__typename: "", kN: 0, lbf: 0},
        thrust_vacuum: {__typename: "", kN: 0, lbf: 0}
    },
    height: {__typename: "", feet: 0, meters: 0},
    id: "",
    landing_legs: {__typename: "", material: "", number: 0},
    mass: {__typename: "", kg: 0, lb: 0},
    name: "",
    payload_weights: [],
    second_stage: {
        __typename: "",
        burn_time_sec: 0,
        engines: 0,
        fuel_amount_tons: 0,
        payloads: {
            __typename: "",
            composite_fairing: {
                __typename: "",
                diameter: {__typename: "", feet: 0, meters: 0},
                height: {__typename: "", feet: 0, meters: 0}
            },
            option_1: ""
        },
        thrust: {__typename: "", kN: 0, lbf: 0}
    },
    stages: 0,
    success_rate_pct: 0,
    type: "",
    wikipedia: ""
}