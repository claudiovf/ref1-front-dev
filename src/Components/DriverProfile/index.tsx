import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Driver } from '../../types';
import { BackHome, Period, StyledLink, Spinner } from '../LayoutComponents';

import StatSection from './StatSection';
import GeneralInfo from './GeneralInfo';

import { DRIVER_PROFILE } from '../../queries';



const DriverProfile: React.FC = () => {
    const [ driver, setDriver ] = useState<Driver | null>(null);
    const [ period, setPeriod ] = useState<string>("Career");
    

    const { driverId } = useParams<{ driverId: string }>();
    const { loading, data } = useQuery<{ findDriver: Driver }>(DRIVER_PROFILE,
          { variables: { driverId } });
    
    useEffect(() => {
        if ( data ) {
            setDriver(data.findDriver);
        }
    }, [data]);

    const changeProfilePeriod = ( period: string ) => {
        setPeriod(period);
    };
    
    
    if ( loading ) return <Spinner>Loading ...</Spinner>;

    if ( !driver ) return null;

    return (
        <React.Fragment>
            <StyledLink to="/">
                <BackHome>
                    &larr;&nbsp;&nbsp;{driver.givenName} {driver.familyName}
                    <Period>/{period}</Period>
                </BackHome>
            </StyledLink>
            <GeneralInfo driver={driver} />
            <StatSection 
                driver={driver} 
                period={period} 
                changeProfilePeriod={changeProfilePeriod} />
        </React.Fragment>
    );
};

export default DriverProfile;