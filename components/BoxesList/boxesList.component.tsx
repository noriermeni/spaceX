import React from "react";

import _ from "lodash"
import InfiniteScroll from 'react-infinite-scroll-component';
import {Grid} from "@mui/material";

import Box from "../Box/box.component";
import Spinner from "../Spinner/spinner.component";
import BoxWrapper from "../BoxWrapper/boxWrapper.component";

import { MissionType } from "../../types/MissionsTypes/mission";

interface Props {
    missions: Array<MissionType>;
    loading: boolean;
    disableButton?: boolean;
    title?: string;

    fetchMore(): void;
}

export default function BoxLayout({fetchMore, missions = [], loading, disableButton, title}: Props) {
    return (
        <BoxWrapper title={title}>
            <InfiniteScroll
                dataLength={missions.length}
                next={fetchMore}
                hasMore={true}
                loader={loading && <>
                    <Spinner/>
                    Loading...
                </>}
            >
                <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} padding={1}>
                    {missions && !loading && _.map(missions, (mission: MissionType, idx: number) => <Box
                        key={`${mission.id}_${idx}`}
                        mission={mission}
                        disableButton={disableButton}
                    />)}
                </Grid>
            </InfiniteScroll>
        </BoxWrapper>
    )
}