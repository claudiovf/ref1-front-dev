import React from 'react';
import { Section, Title, Scroll, Spinner } from '../LayoutComponents';
import CurrentDriverCards from '../CurrentDriversPanel/CurrentDriverCards';
import { useQuery } from '@apollo/client';
import { Driver } from '../../types';
import { GET_THIS_DRIVERS } from '../../queries';


const SkySportsPanel: React.FC = () => {

    const driversList = [
       "brundle", "chandhok", "herbert", "damon_hill", "button", "davidson", "resta", "rosberg"
    ];

    const { loading, data } = useQuery<{ findManyDrivers: Driver[] }>(GET_THIS_DRIVERS,
        { variables: { driversList } });


    return (
        <React.Fragment>
            <Section>  
                <Title>Crofty`s Friends</Title>
                    { loading ? <Spinner>Loading ... </Spinner> : null}
                <Scroll>
                    { data ?  (
                        driversList.map(driver => {
                            const driverToDisplay = data.findManyDrivers.find(d => d.driverId === driver);

                            if(!driverToDisplay) return null;

                            return (
                                <CurrentDriverCards 
                                    driver={driverToDisplay} 
                                    key={driverToDisplay.driverId} />
                            );
                        })
                        ) : null
                    }
                </Scroll>
            </Section>
        </React.Fragment>
    );
};

export default SkySportsPanel;