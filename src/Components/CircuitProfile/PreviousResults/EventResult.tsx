import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GET_EVENT_RESULTS } from '../../../queries';
import { CircuitEvent, CircuitPos } from '../../../types';
import Spinner from '../../Common/Spinner';

const Container = styled.div`
    width: 100%;
    height: auto;
    //background-color: tomato;
`;
const SpinnerContainer = styled.div`
    width: 100%;
    min-height: 80vh;
`;

const SummaryWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: auto;
    max-width: 100vw;
    margin:  0 1.25rem;
`;
const Table = styled.table`
    font-family: "Work Sans Semi Bold";
    padding: 0.25rem 0 0.25rem 0;
    vertical-align: bottom;
    text-align: left;
    font-size: 1rem;
    width: 100%;

    @media (min-width: 768px) {
        max-width: 600px;
        min-width: 600px;
        padding: 0;
    }
`;

const TdName = styled.td`
    color: #2f2f2f;
`;
const TdTeam = styled.td`
    font-size: 0.75rem;
    color: #828282;
    padding-bottom: 1.25rem;
`;

const Tr = styled.tr`
    td:first-child {
        width: 2rem;
        color: #2f2f2f;
    }
    td:nth-child(3) {
        text-align: right;
        font-family: "Work Sans Reg";
        font-size: 0.75rem;
        color: #2f2f2f;
    }
`;

interface Props {
    displayEvent: CircuitEvent;
}

const EventResult: React.FC<Props> = ({displayEvent}: Props) => {
    const [ result, setResult ] = useState<CircuitPos[] | null>(null);

    const { loading, data } = useQuery<{ getCircuitResults: CircuitEvent }>(GET_EVENT_RESULTS, {
        fetchPolicy: "cache-and-network", 
        variables: { season: displayEvent.season, round: displayEvent.round } 
    });
    
    useEffect(() => {
        if (data) {
           setResult([...data.getCircuitResults.results].sort((a,b) => Number(a.position) - Number(b.position)));
        }
    }, [data]);

    if (loading) return <SpinnerContainer><Spinner /> </SpinnerContainer>;
    if (!data) return null;

    return (
        <React.Fragment>
            <Container>
                <SummaryWrap>
                    <Table>
                        <tbody>
                            {result?.map(pos =>
                                <>
                                    <Tr key={pos.position}>
                                        <td>{pos.position}</td>
                                        <TdName>{pos.Driver.givenName} {pos.Driver.familyName}</TdName>
                                        <td>{pos.Time ? pos.Time.time : pos.status}</td>
                                    </Tr>
                                    <Tr>
                                        <td></td>
                                        <TdTeam>{pos.Constructor.name.toUpperCase()}</TdTeam>
                                        <td></td>
                                    </Tr>
                                </>
                            )}
                        </tbody>
                    </Table>
 
                </SummaryWrap>
            </Container>
        </React.Fragment>
    );
};

export default EventResult;