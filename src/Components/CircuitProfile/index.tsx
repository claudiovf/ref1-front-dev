import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { CircuitType } from '../../types';
import { BackHome, ProfileContainer, 
        Spacer, StyledLink, 
        ProfileName, ProfileWrap, Label } from '../LayoutComponents';
import Spinner from '../Common/Spinner';

import { CIRCUIT_PROFILE } from '../../queries';
import { getGP } from '../../utils/formatting';
import styled from 'styled-components';

const ProfileBody = styled(ProfileWrap)`
    background-color: #00c49a;
    min-height: 100%;
`;

const CircuitProfile: React.FC = () => {
    const [ circuit, setCircuit ] = useState<CircuitType | null>(null);
    

    const { circuitId } = useParams<{ circuitId: string }>();
    const { loading, data } = useQuery<{ findCircuit: CircuitType }>(CIRCUIT_PROFILE,
          { variables: { circuitId } });
    
    useEffect(() => {
        if ( data ) {
            setCircuit(data.findCircuit);
        }
    }, [data]);

    
    if ( loading ) return <> <Spacer /><Spinner /> </>;

    if ( !circuit ) return null;

    
    return (
        <React.Fragment>
            <ProfileContainer>
                <StyledLink to="/">
                    <BackHome>
                        &larr; {getGP(circuit.circuitId)} Grand Prix
                    </BackHome>
                </StyledLink>
                <Spacer />
                <ProfileBody>
                    <Label>{circuit.raceName}</Label>
                    <ProfileName color={"#FFF"} bg={"none"}>
                        {getGP(circuit.circuitId).toUpperCase()} GP</ProfileName>
                </ProfileBody>
            </ProfileContainer>
        </React.Fragment>
    );
};

export default CircuitProfile;