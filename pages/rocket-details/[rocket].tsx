import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ApolloQueryResult, useQuery } from "@apollo/client";

import { QUERY_ROCKET_LAUNCHES } from "../../graphql/querys/queryRocketLaunches";
import BoxLayout from "../../components/BoxesList/boxesList.component";
import RocketDetails from "../../components/RocketDetails/rocketDetails.component";
import PageWrapper from "../../components/PageWrapper/pageWrapper.component";

import { MissionType } from "../../types/MissionsTypes/mission";
import { RocketType } from "../../types/RocketType/rocketType";

const Rocket: NextPage = () => {
    const router = useRouter()
    const { rocket } = router.query

    const { data, loading:launchesLoading, fetchMore:fetchMoreLaunches } = useQuery(QUERY_ROCKET_LAUNCHES, {
        variables: { offset: 0, limit: 10, find: { rocket_id: rocket }}
    });

    const [ missions, setMissions ] = useState<Array<MissionType>>([]);
    const [ rocketDetails, setRocketDetails ] = useState<RocketType>();
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    useEffect(() => {
        console.log(`Launches `, data);
        if(data) {
            setMissions(data?.launches);
            setIsLoading(launchesLoading);
        }
    },[data])

    const fetchMoreMissions = () => fetchMoreLaunches({
        variables: {
            offset: data?.launches?.length
        }
    }).then((res: ApolloQueryResult<any>) => {
        setMissions(currentMissions => [...currentMissions, ...res?.data?.launches]);
        setIsLoading(launchesLoading);
    })

    return (
        <div>
          <Head>
            <title>SpaceX | Rocket Details</title>
            <meta name="description" content="Starlink mission" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <PageWrapper>
              {rocket && <RocketDetails
                  rocketId={rocket}
                  setRocketDetails={(rocketData: RocketType) => setRocketDetails(rocketData)}
              />}
              <BoxLayout
                  title={`Rocket ${rocketDetails?.name} Launches`}
                  missions={missions}
                  loading={isLoading}
                  fetchMore={fetchMoreMissions}
                  disableButton  />
          </PageWrapper>
        </div>
      )
}

export default Rocket
