import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Team } from '../../types';
import { BackHome, Period, StyledLink } from '../LayoutComponents';

import TeamStatSection from './StatSection/TeamStatSection';
import TeamInfo from './TeamInfo/TeamInfo';


import { TEAM_PROFILE } from '../../queries';



const TeamProfile: React.FC = () => {
    const [ team, setTeam ] = useState<Team | null>(null);
    const [ period, setPeriod ] = useState<string>("Career");
    

    const { constructorId } = useParams<{ constructorId: string }>();
    const { loading, data } = useQuery<{ findTeam: Team }>(TEAM_PROFILE,
          { variables: { constructorId } });
    
    useEffect(() => {
        if ( data ) {
            setTeam(data.findTeam);
        }
    }, [data]);

    const changeProfilePeriod = ( period: string ) => {
        setPeriod(period);
    };
    
    
    if ( loading ) return <div>Loading ...</div>;

    if ( !team ) return null;

    return (
        <React.Fragment>
            <StyledLink to="/">
                <BackHome>
                    &larr;&nbsp;&nbsp;{team.name}
                    <Period>/{period}</Period>
                </BackHome>
            </StyledLink>
            <TeamInfo team={team} />
            <TeamStatSection 
                team={team} 
                period={period} 
                changeProfilePeriod={changeProfilePeriod} />
        </React.Fragment>
    );
};

export default TeamProfile;