import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router'

import styles from './box.module.scss';
import { Grid, Stack } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { MissionType } from "../../types/MissionsTypes/mission";
import CustomButton from "../CustomButton/customButton.component";

interface Props {
    mission: MissionType;
    disableButton?: boolean;
}

export default function Box({mission, disableButton}: Props) {

    const router = useRouter()
    const { mission_name, links, launch_year, rocket, launch_site } = mission;

    return (
        <Grid item xs={2} sm={4} md={4}>
            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent={{ xs: 'center', sm: 'center', md: 'flex-start' }}
                className={styles.container}
            >
                {links?.mission_patch && <img src={links.mission_patch} alt={mission_name} />}
                <Stack direction={'column'} >
                    <Stack marginBottom={2}>
                        <h3>{mission_name}</h3>
                        <p>{launch_year}</p>
                    </Stack>
                    <span>{rocket.rocket_name}</span>
                    <span>{launch_site.site_name}</span>

                    {!disableButton && <CustomButton
                        handleClick={() => {
                            router.push(`/rocket-details/${rocket.rocket.id}`)
                        }}
                        title={'Go to Rocket'}
                    />}
                </Stack>
            </Stack>
        </Grid>
    )
}