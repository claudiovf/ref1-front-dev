import React from 'react';
import styled from 'styled-components';
import { CurrTeamStyles, DriverPeriod } from '../../../types';
import { InfoRow, InfoBox, Value, Label } from '../../LayoutComponents';


const StatsContainer = styled.div<{ bg: string }>`
    background-color: ${props => props.bg};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: center;
    widht: 100%;

    padding-top: 1rem;

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
    font-size: 1rem;
    color: #2F2F2F;
`;

const DarkLabel = styled(Label)`
    color: #AFAFAF;
    font-size: 0.75rem;
`;

const RaceValue = styled(Value)`
    font-size: 1rem;
    color: #2F2F2F;
`;
const DateValue = styled(Value)`
    font-size: 0.75rem;
    color: #2F2F2F;
`;



const CenterInfoBox = styled(InfoBox)`
    min-width: 5rem;
`;

const InfoRowWithBorder = styled(InfoRow)`
    border-bottom: 1px solid #DDDDDD;
`;


export const Icon = styled.div`
    color: #5f48f7;
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
                                <DarkLabel>Entries</DarkLabel>
                            </CenterInfoBox>
                            { displayPeriod.championshipRank > 0 
                            ? <CenterInfoBox>
                                <DarkValue>{displayPeriod.championshipRank}</DarkValue>
                                <DarkLabel>Championship Rank</DarkLabel>
                            </CenterInfoBox>
                            : null}
                        </InfoRowWithBorder>
                        <InfoRowWithBorder>
                            <CenterInfoBox>
                                <DarkValue>{displayPeriod.points}</DarkValue>
                                <DarkLabel>Points</DarkLabel>
                            </CenterInfoBox>
                            <CenterInfoBox>
                                <DarkValue>{displayPeriod.avgPoints}</DarkValue>
                                <DarkLabel>Average Points</DarkLabel>
                            </CenterInfoBox>
                        </InfoRowWithBorder>
                        <InfoRowWithBorder>
                            <CenterInfoBox>
                                <DarkValue>{displayPeriod.bestResult}</DarkValue>
                                <DarkLabel>Best Result</DarkLabel>
                            </CenterInfoBox>
                            <CenterInfoBox>
                                <DarkValue>{displayPeriod.avgPosition}</DarkValue>
                                <DarkLabel>Average Result</DarkLabel>
                            </CenterInfoBox>
                        </InfoRowWithBorder>
                        <InfoRow>
                            <Icon>&#10066;</Icon>
                            <CenterInfoBox>
                                <RaceValue>{displayPeriod.firstEntry.race}</RaceValue>
                                <DateValue>{displayPeriod.firstEntry.date}</DateValue>
                                <DarkLabel>First Entry</DarkLabel>
                            </CenterInfoBox>
                        </InfoRow>
                        <InfoRow>
                            <Icon>&#10066;</Icon>
                            <CenterInfoBox>
                                <RaceValue>{displayPeriod.lastEntry.race}</RaceValue>
                                <DateValue>{displayPeriod.lastEntry.date}</DateValue>
                                <DarkLabel>Last Entry</DarkLabel>
                            </CenterInfoBox>
                        </InfoRow>
                   
                </TopStats>
            </StatsContainer>
        </React.Fragment>
    );

};

export default PeriodStats;