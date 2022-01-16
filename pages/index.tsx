import type { NextPage } from 'next';
import Head from 'next/head';

import React, {useEffect, useState} from "react";
import {ApolloQueryResult, useQuery} from "@apollo/client";

import { QUERY_MISSIONS } from "../graphql/querys/queryMissions";

import BoxLayout from "../components/BoxesList/boxesList.component";
import PageTitle from "../components/PageTitle/pageTitle.component";
import {MissionType} from "../types/MissionsTypes/mission";
import PageWrapper from "../components/PageWrapper/pageWrapper.component";


const Home: NextPage = () => {

    const [ missions, setMissions ] = useState<Array<MissionType>>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const { data, loading, fetchMore } = useQuery(QUERY_MISSIONS, {
        variables: {
            offset: 0,
            limit: 15,
            find: { rocket_id: "falcon9" }
        }
    });

    useEffect(() => {
        if(data) {
            setMissions(data.launches);
            setIsLoading(loading);
        }
    }, [data])

    const fetchMoreMissions = () => fetchMore({
        variables: {
            offset: data?.launches?.length
        }
    }).then((res: ApolloQueryResult<any>) => {
        setMissions(currentMissions => [...currentMissions, ...res.data.launches]);
        setIsLoading(loading);
    })

    return (
        <div>
            <Head>
                <title>SpaceX | Missions</title>
                <meta name="description" content="Starlink mission" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageWrapper>
                <PageTitle title={'SpaceX Missions'} />
                <BoxLayout
                    missions={missions}
                    loading={isLoading}
                    fetchMore={fetchMoreMissions}
                />
            </PageWrapper>
        </div>
    );
}

export default Home;