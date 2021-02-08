import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Driver } from '../../types';
import GeneralInfo from './GeneralInfo';

import { DRIVER_PROFILE } from '../../queries';
import { BackHome, Period, StyledLink } from '../LayoutComponents';



const ProfileView: React.FC = () => {
    const [ driver, setDriver ] = useState<Driver | null>(null);
    const [ period ] = useState<string>("Career");

    const { driverId } = useParams<{ driverId: string }>();
    const { loading, data } = useQuery<{ findDriver: Driver }>(DRIVER_PROFILE,
          { variables: { driverId } }
        );
    
        useEffect(() => {
            if ( data ) {
                setDriver(data.findDriver);
            }
        }, [data]);
    
    
    if ( loading ) return <div>Loading ...</div>;



    return (
        <React.Fragment>
            { driver ? 
            <>
            <StyledLink to="/">
                <BackHome>
                    &larr;&nbsp;&nbsp;{driver.givenName} {driver.familyName}
                    <Period>/{period}</Period>
                </BackHome>
            </StyledLink>
            <GeneralInfo driver={driver} />
            </>
            : null}

        </React.Fragment>
    );
};

export default ProfileView;