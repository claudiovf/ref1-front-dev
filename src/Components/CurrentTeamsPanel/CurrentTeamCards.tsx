
import React from 'react';
import styled from 'styled-components';
import { Team } from '../../types';
import { getDriverStyle } from '../../utils/currentInfo';
import { Cards, Fonts } from '../LayoutComponents';


const TeamName = styled.div<{ color: string;}>`
    color: ${props => props.color};
    font-family: "Work Sans Semi Bold";
    display: flex;
    flex-direction: row nowrap;
    padding: 0.5rem;
    font-size: 1rem;
    width: auto;
    height: auto;
    white-space: nowrap;
`;



const CurrentTeamCards: React.FC<{ team: Team }> = ({team}: {team: Team}) => {
    const teamStyle = getDriverStyle(team.constructorId);

    return (
        <>
            <Fonts />
            <Cards onClick={() => console.log(team)} bg={teamStyle.primary}>
                <TeamName color={teamStyle.secondary}>
                    {team.name} </TeamName>
            </Cards>
        </>
    );
};

export default CurrentTeamCards;