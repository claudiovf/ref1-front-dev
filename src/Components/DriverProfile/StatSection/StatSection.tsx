import React, { useEffect, useState } from 'react';
import { Driver, DriverPeriod } from '../../../types';
import { getDriverStyle } from '../../../utils/currentInfo';
import { formattedPeriod } from '../../../utils/formatting';
import PeriodButtons from './PeriodButtons';
import PeriodRaceStats from './PeriodRaceStats';
import PeriodStats from './PeriodStats';



interface Props {
    driver: Driver;
    period: string;
    changeProfilePeriod: (selected: string) => void;
}

const StatInfo: React.FC<Props> = ({ driver, period, changeProfilePeriod }: Props) => {
    const [ periodSelected, setPeriodSelected] = useState<string>(period);
    const [ displayPeriod, setDisplayPeriod ] = useState<DriverPeriod | null>(null);
    const driverStyle = getDriverStyle(driver.driverId);
    
    useEffect(() => {
        const periodToDisplay = driver.entries.find(p => p.period === periodSelected);
        if ( periodToDisplay ) {
            setDisplayPeriod(periodToDisplay);
        }
    }, [periodSelected]);
    
    if ( !driver ) return null;



    const handlePeriodChange = (selected: string) => {
        changeProfilePeriod(formattedPeriod(selected));
        setPeriodSelected(selected);
    };



    return (
        <React.Fragment>
                <PeriodButtons 
                    periods={driver.entries}
                    handlePeriodChange={handlePeriodChange}
                    style={driverStyle}
                    periodSelected={periodSelected}
                />
                
                {displayPeriod
                ? <PeriodStats 
                    displayPeriod={displayPeriod} 
                    driverStyle={driverStyle}
                />
                : null}

                {displayPeriod
                ? <PeriodRaceStats
                    displayPeriod={displayPeriod}
                    driverStyle={driverStyle}
                />
                : null}
        </React.Fragment>
    );
};

export default StatInfo;
