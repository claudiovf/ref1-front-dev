import React from 'react';
import styled from 'styled-components';
import { CurrTeamStyles, DriverPeriod } from '../../types';
// import { InfoRow, InfoBox, Value, Label } from '../LayoutComponents';


const StatsContainer = styled.div<{ bg: string }>`
    background-color: ${props => props.bg};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: center;
    widht: 100%;

`;

const RaceStats = styled.div`
    background-color: rgb(255,255,255);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0rem 1.5rem 1.5rem 1.5rem;
    border-radius: 0.5rem;
`;

// const DarkValue = styled(Value)`
//     font-size: 1.25rem;
//     color: #2F2F2F;
// `;

// const DarkLabel = styled(Label)`
//     color: #AFAFAF;
//     font-size: 0.75rem;
// `;

// const RaceValue = styled(Value)`
//     font-size: 1rem;
//     color: #2F2F2F;
// `;
// const DateValue = styled(Value)`
//     font-size: 0.75rem;
//     color: #2F2F2F;
// `;



// const CenterInfoBox = styled(InfoBox)`
//     min-width: 5rem;
// `;

// const InfoRowWithBorder = styled(InfoRow)`
//     border-bottom: 1px solid #DDDDDD;
// `;


export const Icon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    padding: 0.5rem;
`;

const StatCard = styled.div<{ dark: boolean}>`
    background-color: ${props => props.dark ? '#2F2F2F' : '#FFFFFF'};
    color: ${props => props.dark ? '#FFFFFF' : '#2F2F2F'};
    display: flex;
    flex-direction: column;
    width: 100%;
`;



interface Props {
    displayPeriod: DriverPeriod;
    driverStyle: CurrTeamStyles;
}
const PeriodRaceStats: React.FC<Props> = ({ displayPeriod, driverStyle }: Props) => {

   
    return (
        <React.Fragment>
            <StatsContainer bg={driverStyle.primary}>
                <RaceStats>
                        {displayPeriod.stats.map(s => 
                            <StatCard dark={true} key={s.stat}>{s.stat}</StatCard>
                        )}
                </RaceStats>
            </StatsContainer>
        </React.Fragment>
    );

};

export default PeriodRaceStats;