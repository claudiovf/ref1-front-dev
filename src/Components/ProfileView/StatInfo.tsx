import React, { useEffect, useState } from 'react';
import { Driver } from '../../types';
import { getDriverStyle } from '../../utils/currentInfo';
import { formattedPeriod } from '../../utils/formatting';
import PeriodButtons from './PeriodButtons';


interface Props {
    driver: Driver;
    period: string;
    changeProfilePeriod: (selected: string) => void;
}

const StatInfo: React.FC<Props> = ({ driver, period, changeProfilePeriod }: Props) => {
    const [ periodSelected, setPeriodSelected] = useState<string>(period);
    const driverStyle = getDriverStyle(driver.driverId);
    
    useEffect(() => {
        console.log(periodSelected);
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
        </React.Fragment>
    );
};

export default StatInfo;
