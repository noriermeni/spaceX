import React from "react";
import styles from './rocketContent.module.scss';
import moment from 'moment';

import BoxWrapper from "../BoxWrapper/boxWrapper.component";

import { RocketType } from "../../types/RocketType/rocketType";
import {Grid} from "@mui/material";

interface Props {
    rocket: RocketType;
    loading: boolean;
}

export default function RocketContent({rocket}: Props) {
    return (
        <BoxWrapper>
            <Grid className={styles.mainDetails} paddingTop={3} container spacing={{ xs: 2, md: 3 }} >
                <Grid item xs={12} sm={4} md={4}>
                    <h3>Company</h3>
                    <p>{rocket?.company}</p>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <h3>Country</h3>
                    <p>{rocket?.country}</p>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <h3>First flight</h3>
                    <p>{moment(rocket?.first_flight).format('LL')}</p>
                </Grid>
            </Grid>
            <div className={styles.overview}>
                <h4>{rocket?.name}</h4>
                <h2>OVERFLOW</h2>
                <div>
                    <span>Height</span>
                    <span><b>{rocket?.height?.meters}m</b> / {rocket?.height?.feet}ft</span>
                </div>
                <div>
                    <span>Diameter</span>
                    <span><b>{rocket?.diameter?.meters}m</b> / {rocket?.diameter?.feet}ft</span>
                </div>
                <div>
                    <span>Mass</span>
                    <span><b>{rocket?.mass?.kg}kg</b> / {rocket?.mass?.lb}lb</span>
                </div>
                {rocket?.payload_weights.length > 0 && rocket?.payload_weights.map(payload => <div key={payload?.id}>
                    <span>{payload.name}</span>
                    <span><b>{payload?.kg}kg</b> / {payload?.lb}lb</span>
                </div>)}
            </div>

            <Grid paddingTop={3} container spacing={{ xs: 2, md: 3 }} >
                <Grid className={styles.stages} item xs={12} sm={6} md={6}>
                    <h2>FIRST STAGE</h2>
                    <div>
                        <span>Burn time sec</span>
                        <span>{rocket?.first_stage?.burn_time_sec}</span>
                    </div>
                    <div>
                        <span>Engines</span>
                        <span>{rocket?.first_stage?.engines}</span>
                    </div>
                    <div>
                        <span>Fuel amount tons</span>
                        <span>{rocket?.first_stage?.fuel_amount_tons}</span>
                    </div>
                    <div>
                        <span>Thrust sea level</span>
                        <span><b>{rocket?.first_stage?.thrust_sea_level?.kN}kN</b> / {rocket?.first_stage?.thrust_sea_level?.lbf}lbf</span>
                    </div>
                </Grid>
                <Grid className={styles.stages} item xs={12} sm={6} md={6}>
                    <h2>SECOND STAGE</h2>
                    <div>
                        <span>Burn time sec</span>
                        <span>{rocket?.second_stage?.burn_time_sec}</span>
                    </div>
                    <div>
                        <span>Engines</span>
                        <span>{rocket?.second_stage?.engines}</span>
                    </div>
                    <div>
                        <span>Fuel amount tons</span>
                        <span>{rocket?.second_stage?.fuel_amount_tons}</span>
                    </div>
                    <div>
                        <span>Thrust</span>
                        <span><b>{rocket?.second_stage?.thrust?.kN}kN</b> / {rocket?.second_stage?.thrust?.lbf}lbf</span>
                    </div>
                    <div>
                        <span>Composite fairing diameter</span>
                        <span><b>{rocket?.second_stage?.payloads?.composite_fairing?.diameter?.meters}m</b> / {rocket?.second_stage?.payloads?.composite_fairing?.diameter?.feet}ft</span>
                    </div>
                    <div>
                        <span>Composite fairing height</span>
                        <span><b>{rocket?.second_stage?.payloads?.composite_fairing?.height?.meters}m</b> / {rocket?.second_stage?.payloads?.composite_fairing?.height?.feet}ft</span>
                    </div>
                </Grid>
            </Grid>
        </BoxWrapper>
    )
}