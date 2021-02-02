import React from 'react';
import { Section, Title, Spacer, Scroll } from './style';
import CurrentDriverCards from './CurrentDriverCards';


const CurrentDriversPanel: React.FC = () => {

    const drivers: Array<string> = ['HAM', 'VER', 'RIC', 'GAS', 'PER', 'LEC', 'BOT', 'ALO'];
    return (
        <React.Fragment>
            <Spacer />
            <Section>
                <Title>2020 Drivers</Title>
                <Scroll>
                    { drivers.map(d => (
                        <CurrentDriverCards driver={d} key={d} />
                    ))}
                </Scroll>
            </Section>
        </React.Fragment>
    );
};

export default CurrentDriversPanel;