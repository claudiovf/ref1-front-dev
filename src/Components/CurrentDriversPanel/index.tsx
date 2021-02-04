import React from 'react';
import { Section, Title, Spacer, Scroll } from '../LayoutComponents';
import CurrentDriverCards from './CurrentDriverCards';
import { useQuery } from '@apollo/client';
import { Driver } from '../../types';
import { CURRENT_DRIVERS_HOME } from '../../queries';



const CurrentDriversPanel: React.FC = () => {
    const { loading, data } = useQuery<{ allDrivers: Driver[] }>(CURRENT_DRIVERS_HOME);

    
    const displayOrder = [
        'hamilton', 'bottas', 'max_verstappen', 'albon', 
        'leclerc', 'vettel', 'perez', 'stroll', 
        'ricciardo', 'ocon', 'sainz', 'norris', 
        'gasly', 'kvyat', 'raikkonen', 'giovinazzi', 
        'russell', 'latifi', 
        'hulkenberg', 'aitken', 'pietro_fittipaldi'];
        

    return (
        <React.Fragment>
            <Spacer />
            <Section>  
                <Title>2020 Drivers</Title>
                    { loading ? <p>Loading ... </p> : null}
                <Scroll>
                    { data ? console.log(data.allDrivers) : null}
                    { data ?  (
                        displayOrder.map(driver => {
                            const driverToDisplay = data.allDrivers.find(d => d.driverId === driver);

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

export default CurrentDriversPanel;