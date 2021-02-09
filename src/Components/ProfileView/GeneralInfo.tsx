import React from 'react';
import styled from 'styled-components';
import { Driver } from '../../types';
import { getDriverStyle } from '../../utils/currentInfo';
import { Spacer } from '../LayoutComponents';
import Achievements from './Achievements';

const GenContainer = styled.div<{ bg: string }>`
    background-color: ${props => props.bg};
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    min-height: auto;
    padding: 0.5rem;
`;


const ProfileName = styled.div<{ color: string}>`
    color: ${props => props.color};
    font-family: "Work Sans Extra Bold";
    align-text: center;
    font-size: 2rem;
    padding: 1.5rem 0 1rem 0;
    width: 100%;
`;

const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    
`;

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    padding: 1rem;
`;

const Label = styled.div`
    font-family: "Work Sans Semi Bold";
    color: rgb(255,255,255,0.75);
    font-size: 0.75rem;
`;

const Value = styled.div`
    font-family: "Work Sans Bold";
    color: #FFFFFF;
    font-size: 1rem;
`;




const GeneralInfo: React.FC<{ driver: Driver; }> = ( {driver}: { driver: Driver } ) => {
    const driverStyle = getDriverStyle(driver.driverId);

    return (
        <React.Fragment>
            
            <GenContainer bg={driverStyle.primary}>
                <Spacer />
                <ProfileName color={driverStyle.secondary}>
                    {[driver.givenName, driver.familyName].join(" ").toUpperCase()}</ProfileName>
                <InfoRow>
                    <InfoBox>
                        <Value>{driver.nationality}</Value>
                        <Label>Nationality</Label>
                    </InfoBox>
                    <InfoBox>
                        <Value>{driver.dateOfBirth}</Value>
                        <Label>Born</Label>
                    </InfoBox>
                </InfoRow>
                <InfoRow>
                    <InfoBox>
                        <Value>{driver.championships.length}</Value>
                        <Label>Championships</Label>
                    </InfoBox>
                </InfoRow>
                { driverStyle.team !== 'NA' 
                ? <InfoRow>
                    <InfoBox>
                        <Value>{driverStyle.team}</Value>
                        <Label>Current Team</Label>
                    </InfoBox>
                </InfoRow>
                : null }


                <Achievements driver={driver} />
            
            </GenContainer>
        </React.Fragment>
    );
};

export default GeneralInfo;