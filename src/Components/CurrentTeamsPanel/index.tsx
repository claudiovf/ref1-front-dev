import React from 'react';
import { Section, Title, Scroll } from '../LayoutComponents';
import CurrentTeamCards from './CurrentTeamCards';
import { useQuery } from '@apollo/client';
import { Team } from '../../types';
import { CURRENT_TEAMS_HOME } from '../../queries';



const CurrentTeamsPanel: React.FC = () => {
    const { loading, data } = useQuery<{ allTeams: Team[] }>(CURRENT_TEAMS_HOME);

    
    const topRowOrder = [
        'mercedes', 'ferrari','racing_point', 
        'mclaren', 'alfa' ,];
    const bottomRowOrder = [
        'red_bull', 'renault', 
        'alphatauri', 'haas', 'williams',];
        

    return (
        <React.Fragment>
            <Section>  
                <Title>2020 Teams</Title>
                    { loading ? <p>Loading ... </p> : null}
                <Scroll>
                    { data ?  (
                        topRowOrder.map(team => {
                            const teamToDisplay = data.allTeams.find(t => t.constructorId === team);

                            if(!teamToDisplay) return null;

                            return (
                                <CurrentTeamCards 
                                    team={teamToDisplay} 
                                    key={teamToDisplay.constructorId} />
                            );
                        })
                        ) : null
                    }
                </Scroll>
                <Scroll>
                    { data ?  (
                        bottomRowOrder.map(team => {
                            const teamToDisplay = data.allTeams.find(t => t.constructorId === team);

                            if(!teamToDisplay) return null;

                            return (
                                <CurrentTeamCards 
                                    team={teamToDisplay} 
                                    key={teamToDisplay.constructorId} />
                            );
                        })
                        ) : null
                    }
                </Scroll>
            </Section>
        </React.Fragment>
    );
};

export default CurrentTeamsPanel;