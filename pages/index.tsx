import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './home/Home.module.scss';

import React, {useEffect, useState} from "react";
import {ApolloQueryResult, useQuery} from "@apollo/client";

import { QUERY_MISSIONS } from "../querys/queryMissions";

import Container from '@mui/material/Container';
import BoxLayout from "../components/BoxLayout/boxLayout.component";
import PageTitle from "../components/PageTitle/pageTitle.component";
import {MissionType} from "../types/MissionsTypes/mission";


const Home: NextPage = () => {

    const [ missions, setMissions ] = useState<Array<MissionType>>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const { data, loading, fetchMore } = useQuery(QUERY_MISSIONS, {
        variables: {
            offset: 0,
            limit: 15
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
            <Container maxWidth="lg" className={styles.container}>
                <PageTitle title={'SpaceX Missions'} />
                <BoxLayout
                    missions={missions}
                    loading={isLoading}
                    fetchMore={fetchMoreMissions}
                />
            </Container>
        </div>
    );
}

export default Home;