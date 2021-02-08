import React from 'react';
import styled from 'styled-components';
import { Driver } from '../../types';

const AchieveContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 100%;
`;

const Title = styled.div`
    width: 100%;
    padding-bottom: 0.5rem;
    font-size: 1rem;
`;

const AchieveCard = styled.div`
    background-color: rgb(255,255,255,0.15);
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    padding: 1rem;
    margin: 1rem;
    font-size: 0.75rem;
    font-family: "Work Sans Semi Bold";
    color: #FFFFFF;
    border-radius: 0.5rem;
    line-height: 1.5rem;
`;

const AchIcon = styled.span`
    font-size: 1.5rem;
    padding: 0.5rem;
`;

const Achievements: React.FC<{driver: Driver}> = ({ driver }: { driver: Driver }) => {
    const career = driver.entries.find(p => p.period === "Career");

    if (!career ) return null;

    const wins = career.stats.find(s => s.stat === "wins");
    const podiums = career.stats.find(s => s.stat === "podiums");
    const pointsFinish = career.stats.find(s => s.stat === "pointsFinish");

    if (!wins || !podiums || !pointsFinish) return null;

    return (
        <React.Fragment>
            <AchieveContainer>
                <AchieveCard>
                <Title>Achievements</Title>
                {driver.championships.length > 0
                ? <div><AchIcon>&#10003;</AchIcon> World Champion</div>
                : null}
                {wins.total > 0
                ? <div><AchIcon>&#10003;</AchIcon> Race Winner</div>
                : null}
                {podiums.total > 0
                ? <div><AchIcon>&#10003;</AchIcon> Podium Finish</div>
                : null}
                {pointsFinish.total > 0
                ? <div><AchIcon>&#10003;</AchIcon> Point Finish</div>
                : null}
                </AchieveCard>
            </AchieveContainer>
        </React.Fragment>
    );
};

export default Achievements;
