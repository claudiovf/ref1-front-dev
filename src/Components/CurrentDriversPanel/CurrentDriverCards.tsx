/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';


//to be moved to component index
const getTeamColor = (team: string) => {
    switch(true) {
        case team === 'HAM':
            return "teal";
        case team === 'RIC':
            return "yellow";
        default:
            return "gray";
    }
};

const CurrentDriverCards: React.FC<{ driver: string }> = ({driver}: {driver: string}) => {

    const Cards = styled.div<{ team: string}>`
    
        background-color: ${props => getTeamColor(props.team)};
        height: 10rem;
        min-width: 8rem;
        margin: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
    `;
    
    return (
        <Cards team={driver}>{driver}</Cards>
    );
};

export default CurrentDriverCards;