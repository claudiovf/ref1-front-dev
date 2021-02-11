import React from 'react';
import styled from 'styled-components';
import { CurrTeamStyles, DriverPeriod } from '../../types';
import { InfoRow, InfoBox, Value, Label } from '../LayoutComponents';


const StatsContainer = styled.div<{ bg: string }>`
    background-color: ${props => props.bg};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: center;
    widht: 100%;

`;

const TopStats = styled.div`
    background-color: rgb(255,255,255);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0rem 1.5rem 1.5rem 1.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
`;

const DarkValue = styled(Value)`
    font-size: 1.25rem;
    color: #2F2F2F;
`;


const RaceValue = styled(Value)`
    font-size: 1rem;
    color: #2F2F2F;
`;
const DateValue = styled(Value)`
    font-size: 0.75rem;
    color: #2F2F2F;
`;

const DarkLabel = styled(Label)`
    color: #6F6F6F;
    font-size: 0.5rem;
`;


const CenterInfoBox = styled(InfoBox)`
    min-width: 5rem;
`;

const InfoRowWithBorder = styled(InfoRow)`
    border-bottom: 1px solid #DDDDDD;
`;


export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    padding: 0.5rem;
`;



interface Props {
    displayPeriod: DriverPeriod;
    driverStyle: CurrTeamStyles;
}
const PeriodStats: React.FC<Props> = ({ displayPeriod, driverStyle }: Props) => {

   
    return (
        <React.Fragment>
            <StatsContainer bg={driverStyle.primary}>
                <TopStats>
                        <InfoRowWithBorder>
                            <CenterInfoBox>
                                <DarkValue>{displayPeriod.entries}</DarkValue>
                                <DarkLabel>ENTRIES</DarkLabel>
                            </CenterInfoBox>
                            { displayPeriod.championshipRank > 0 
                            ? <CenterInfoBox>
                                <DarkValue>{displayPeriod.championshipRank}</DarkValue>
                                <DarkLabel>CHAMPIONSHIP RANK</DarkLabel>
                            </CenterInfoBox>
                            : null}
                        </InfoRowWithBorder>
                        <InfoRowWithBorder>
                            <CenterInfoBox>
                                <DarkValue>{displayPeriod.points}</DarkValue>
                                <DarkLabel>POINTS</DarkLabel>
                            </CenterInfoBox>
                            <CenterInfoBox>
                                <DarkValue>{displayPeriod.avgPoints}</DarkValue>
                                <DarkLabel>AVERAGE POINTS</DarkLabel>
                            </CenterInfoBox>
                        </InfoRowWithBorder>
                        <InfoRowWithBorder>
                            <CenterInfoBox>
                                <DarkValue>{displayPeriod.bestResult}</DarkValue>
                                <DarkLabel>BEST RESULT</DarkLabel>
                            </CenterInfoBox>
                            <CenterInfoBox>
                                <DarkValue>{displayPeriod.avgPosition}</DarkValue>
                                <DarkLabel>AVERAGE RESULT</DarkLabel>
                            </CenterInfoBox>
                        </InfoRowWithBorder>
                        <InfoRow>
                            <Icon>&#10066;</Icon>
                            <CenterInfoBox>
                                <RaceValue>{displayPeriod.firstEntry.race}</RaceValue>
                                <DateValue>{displayPeriod.firstEntry.date}</DateValue>
                                <DarkLabel>FIRST ENTRY</DarkLabel>
                            </CenterInfoBox>
                        </InfoRow>
                        <InfoRow>
                            <Icon>&#10066;</Icon>
                            <CenterInfoBox>
                                <RaceValue>{displayPeriod.lastEntry.race}</RaceValue>
                                <DateValue>{displayPeriod.lastEntry.date}</DateValue>
                                <DarkLabel>LAST ENTRY</DarkLabel>
                            </CenterInfoBox>
                        </InfoRow>
                   
                </TopStats>
            </StatsContainer>
        </React.Fragment>
    );

};

export default PeriodStats;