import React from 'react';
import { Section, Title, Spacer, Scroll } from '../LayoutComponents';
import Spinner from '../Common/Spinner';
import CurrentDriverCards from './CurrentDriverCards';
import { useQuery } from '@apollo/client';
import { Driver } from '../../types';
import { GET_SEASON_DRIVERS } from '../../queries';


const CurrentDriversPanel: React.FC = () => {

    const driversList = [
        'hamilton', 'bottas', 'max_verstappen', 'albon', 
        'leclerc', 'vettel', 'perez', 'stroll', 
        'ricciardo', 'ocon', 'sainz', 'norris', 
        'gasly', 'kvyat', 'raikkonen', 'giovinazzi', 
        'kevin_magnussen', 'grosjean', 'russell', 'latifi', 
        'hulkenberg', 'aitken', 'pietro_fittipaldi'
    ];
        
    const { loading, data } = useQuery<{ findManyDrivers: Driver[] }>(GET_SEASON_DRIVERS,
        { variables: { driversList } });

    return (
        <React.Fragment>
            <Spacer />
            <Section>  
                <Title>2020 Drivers</Title>
                    { loading ? <Spinner /> : null}
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

export default CurrentDriversPanel;