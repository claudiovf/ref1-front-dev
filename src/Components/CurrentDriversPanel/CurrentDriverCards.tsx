
import React from 'react';
import styled from 'styled-components';
import { Driver } from '../../types';
import { getDriverStyle } from '../../utils/currentInfo';
import { Fonts } from '../LayoutComponents';




const Cards = styled.div<{ bg: string}>`
    
    background-color: ${props => props.bg};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    min-width: 8rem;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
`;

const CodeNumber = styled.div<{ color: string;}>`
    color: ${props => props.color};
    font-family: "Work Sans Bold";
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    font-size: 1.75rem;
`;

const DriverName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: 4rem;
    padding: 0.5rem;
    
`;

const First = styled.div<{ color: string }>`
    color: ${props => props.color};
    font-family: "Work Sans reg";
    font-size: 0.75rem;
`;

const Last = styled.div<{ color: string }>`
    color: ${props => props.color};
    font-family: "Work Sans Bold";
    font-size: 1rem;
`;

const Team = styled.div`
    color: #FFFFFF;
    font-family: "Work Sans Bold";
    font-size: 0.75rem;
    min-height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;



const CurrentDriverCards: React.FC<{ driver: Driver }> = ({driver}: {driver: Driver}) => {
    const driverStyle = getDriverStyle(driver.driverId);

    return (
        <>
            <Fonts />
            <Cards onClick={() => console.log(driver.driverId)} bg={driverStyle.primary}>
                <CodeNumber color={driverStyle.secondary}>
                    {driver.code} {driver.permanentNumber}</CodeNumber>

                <DriverName>
                    <First color={driverStyle.secondary}>
                        {driver.givenName}</First>

                    <Last color={driverStyle.secondary}>
                        {driver.familyName.toUpperCase()}</Last>

                </DriverName>
                <Team>
                    {driverStyle.team}</Team>
            </Cards>
        </>
    );
};

export default CurrentDriverCards;