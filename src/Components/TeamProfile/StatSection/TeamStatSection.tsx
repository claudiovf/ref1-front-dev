import React, { useEffect, useState } from 'react';
import { Team, TeamPeriod } from '../../../types';
import { getDriverStyle } from '../../../utils/currentInfo';
import { formattedPeriod } from '../../../utils/formatting';
import TeamPeriodButtons from './TeamPeriodButtons';
import TeamPeriodStats from './TeamPeriodStats';
import TeamPeriodRaceStats from './TeamPeriodRaceStats';



interface Props {
    team: Team;
    period: string;
    changeProfilePeriod: (selected: string) => void;
}

const TeamStatInfo: React.FC<Props> = ({ team, period, changeProfilePeriod }: Props) => {
    const [ periodSelected, setPeriodSelected] = useState<string>(period);
    const [ displayPeriod, setDisplayPeriod ] = useState<TeamPeriod | null>(null);
    const teamStyle = getDriverStyle(team.constructorId);
    
    useEffect(() => {
        const correctedPeriod = (period: string): string => period === 'All Time' ? 'Career' : period;

        const periodToDisplay = team.entries.find(p => p.period === correctedPeriod(period));
        if ( periodToDisplay ) {
            setDisplayPeriod(periodToDisplay);
        }
    }, [periodSelected]);
    
    if ( !team ) return null;



    const handlePeriodChange = (selected: string) => {

        changeProfilePeriod(formattedPeriod(selected));
        setPeriodSelected(selected);
    };



    return (
        <React.Fragment>
                <TeamPeriodButtons 
                    periods={team.entries}
                    handlePeriodChange={handlePeriodChange}
                    style={teamStyle}
                    periodSelected={periodSelected}
                />
                
                {displayPeriod
                ? <TeamPeriodStats 
                    displayPeriod={displayPeriod} 
                    teamStyle={teamStyle}
                />
                : null}

                {displayPeriod
                ? <TeamPeriodRaceStats
                    displayPeriod={displayPeriod}
                    teamStyle={teamStyle}
                />
                : null}
        </React.Fragment>
    );
};

export default TeamStatInfo;
