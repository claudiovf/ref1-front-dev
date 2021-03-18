import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSearch, toggleOpen } from '../../store/actions';
import { formattedPeriod } from '../../utils/formatting';
import { Section, Title, Scroll, popOutAnimation } from '../LayoutComponents';


const StandingCard = styled.div`
    font-family: "Work Sans Bold";
    background-image: linear-gradient(rgba(255,255,255,0.15), #6279B8 , #6279B8 );
    background-color: #6279B8;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    min-width: 11.2rem;
    height: 7rem;
    margin: 0.25rem;
    padding: 1rem;
    border-radius: 0.5rem;
    animation-name: ${popOutAnimation};
    animation-duration: 1s;
`;

const Year = styled.div`
    font-size: 1.5rem;
    color: #2E2E2E;
`;
const StandTitle = styled.div`
    font-size: 0.75rem;
    font-family: "Work Sans Semi Bold";
    color: #2E2E2E;
`;

const TeamWinners: React.FC = () => {

    const teamsList = [
        'mercedes', 'red_bull', 'racing_point', 'renault', 
        'mclaren', 'ferrari', 'alphatauri', 'alfa', 
        'haas', 'williams'
    ];

    const dispatch = useDispatch();


    return (
        <React.Fragment>
            <Section>  
                <Title>Wins for Teams</Title>
                <Scroll>
                    {
                        teamsList.map(team => 
                            <StandingCard 
                                key={team}
                                onClick={() => {
                                    dispatch( setSearch({
                                        resultsFor: "drivers",
                                        sortBy: "wins",
                                        filterBy: "Team",
                                        period: team
                                    }) );
                                    dispatch( toggleOpen() );
                                }}
                                >
                                    <StandTitle>Most Wins for</StandTitle>
                                    <Year>{formattedPeriod(team)}</Year>
                            </StandingCard>)
                    }
                </Scroll>
            </Section>
        </React.Fragment>
    );
};

export default TeamWinners;