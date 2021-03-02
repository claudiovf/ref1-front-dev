import React from 'react';
import styled from 'styled-components';
import { Stat } from '../../types';
import { InfoRow, InfoBox } from '../LayoutComponents';
import { Icon } from './PeriodRaceStats';
import { formattedPeriod } from '../../utils/formatting';


const isDark = (stat: string): boolean => {
    if ( stat === "wins" || stat === "pointsFinish") return false;
    else return true;
    return true;
};

const StatCardStyle = styled.div<{ dark: boolean, rad: string }>`
    background-color: ${props => props.dark ? '#2F2F2F' : '#FFFFFF'};
    color: ${props => props.dark ? '#FFFFFF' : '#2F2F2F'};
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.5rem 0 0.5rem 0;
    border-radius: ${props => props.rad};
`;

const StatTitle = styled.div<{ colorTitle: boolean }>`
    text-align: left;
    color: ${props => props.colorTitle ? "#2F2F2F" : "#FFFFFF" };
    font-family: "Work Sans Bold";
    font-size: 1rem;
    padding: 1rem 0.5rem;
`;

const StatInfoRow = styled(InfoRow)`
    align-items: flex-start;
`;

const StatValue = styled.div<{ colorDark: boolean }>`
    font-family: "Work Sans Semi Bold";
    display: flex;
    display-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1rem;
    color: ${props => props.colorDark ? "#2F2F2F" : "#FFFFFF" };
`;

const StatLabel = styled.div`
    font-family: "Work Sans Semi Bold";
    font-size: 0.75rem;
    color: rgb(150, 150, 150, 0.5)
`;



interface Props {
    s: Stat; 
    rad: string; 
}

const StatCard: React.FC<Props> = ({s, rad}: Props) => {
    if(s.total === 0 ) {
        return (
            <StatCardStyle dark={isDark(s.stat)} rad={rad}>
                <InfoBox>
                    <StatTitle colorTitle={!isDark(s.stat)}>{formattedPeriod(s.stat)}</StatTitle>
                    <StatInfoRow>
                        <Icon>&#10066;</Icon>
                        <InfoBox>
                            <StatValue colorDark={!isDark(s.stat)}>{s.total}</StatValue>
                            <StatLabel>{formattedPeriod(s.stat)}</StatLabel>
                        </InfoBox>
                    </StatInfoRow>
            
                </InfoBox>
            </StatCardStyle>
        );
    }
    return (
        <StatCardStyle dark={isDark(s.stat)} rad={rad}>
            <InfoBox>
                <StatTitle colorTitle={!isDark(s.stat)}>{formattedPeriod(s.stat)}</StatTitle>
                <StatInfoRow>
                    <Icon>&#10066;</Icon>
                    <InfoBox>
                        <StatValue colorDark={!isDark(s.stat)}>{s.total}</StatValue>
                        <StatLabel>{formattedPeriod(s.stat)}</StatLabel>
                    </InfoBox>
                </StatInfoRow>
                <StatInfoRow>
                    <Icon>&#10066;</Icon>
                    <InfoBox>
                        <StatValue colorDark={!isDark(s.stat)}>{s.pct}</StatValue>
                        <StatLabel>{`${formattedPeriod(s.stat)}/Entries`}</StatLabel>
                    </InfoBox>
                </StatInfoRow>
                <StatInfoRow>
                    <Icon>&#10066;</Icon>
                    <InfoBox>
                        <StatValue colorDark={!isDark(s.stat)}>{s.first.race}</StatValue>
                        <StatValue colorDark={!isDark(s.stat)}>{s.first.date}</StatValue>
                        <StatLabel>First</StatLabel>
                    </InfoBox>
                </StatInfoRow>
                <StatInfoRow>
                    <Icon>&#10066;</Icon>
                    <InfoBox>
                        <StatValue colorDark={!isDark(s.stat)}>{s.last.race}</StatValue>
                        <StatValue colorDark={!isDark(s.stat)}>{s.last.date}</StatValue>
                        <StatLabel>Last</StatLabel>
                    </InfoBox>
                </StatInfoRow>
            </InfoBox>
        </StatCardStyle>
    );
};

export default StatCard;