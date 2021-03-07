import React from 'react';
import styled from 'styled-components';
import { Driver } from '../../types';
import { getDriverStyle } from '../../utils/currentInfo';
import { InfoBox, InfoRow, Label, Spacer, Value } from '../LayoutComponents';

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
            </GenContainer>
        </React.Fragment>
    );
};

export default GeneralInfo;