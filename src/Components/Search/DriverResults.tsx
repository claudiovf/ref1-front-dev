import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import { SearchState } from '../../store/searchTypes';
import { formattedPeriod } from '../../utils/formatting';

const Table = styled.table`
    width: 100%;
    max-width: 100vw;
    height: auto;
    margin: 2rem 0 5rem 0;
    padding: 1rem;
`;

const Tbody = styled.tbody`
    max-width: 100vw;
`;  

const Th = styled.th`
    font-family: "Work Sans Semi Bold";
    color: #bfc8c9;
    padding: 0.25rem 0;
    font-size: 0.75rem;
`;

const Td = styled.td`
    font-family: "Work Sans Bold";
    color: #2F2F2F;
    padding: 0.25rem 0;
    font-size: 1rem;
`;
const Tr = styled.tr`
    & ${Th}:nth-child(2) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        
    }
     ${Th}:nth-child(1) {
         color: #FFFFFF;
    }
    
`;

const Rank = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 0.5rem;
    padding: 0.25rem 0.25rem;
    background-color: #bfc8c9;
    border-radius: 0.25rem;
`;

const TableCell = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0.25rem 0.5rem;
    max-width: 14rem;
    & span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;    
    }
`;






const DriverResults: React.FC = () => {

    const drivers = [
        {
            familyName: "hamilton",
            givenName: "Lewis",
            wins: 95,
            entries: 250
        },
        {
            familyName: "Michael",
            givenName: "Schummacher",
            wins: 91,
            entries: 300
        },
        {
            familyName: "Giovinazzi",
            givenName: "Antonio",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Giovinaasdzzi",
            givenName: "Antongreqio",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Giovinadfsagzzi",
            givenName: "Antoqgeqrgnio",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Giovineqgqazzi",
            givenName: "Antonreegio",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Giovgqerginazzi",
            givenName: "Antogqerbnenio",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Giovirefeqwfnazzi",
            givenName: "Antonsdfasfio",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Giovazzi",
            givenName: "Anto",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Gioviazzi",
            givenName: "Antono",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Gioazzi",
            givenName: "Antoio",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Giazzi",
            givenName: "Ano",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Giovinzzi",
            givenName: "Aio",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Giovinaz",
            givenName: "Anton",
            wins: 0,
            entries: 30
        },
        {
            familyName: "Giovnazzi",
            givenName: "An",
            wins: 0,
            entries: 30
        },
    ];

    const search: SearchState = useSelector((state: RootState) => state.search);
    
    console.log(search.selections);

    return (
        <React.Fragment>
            {
                search.selections.resultsFor 
                && search.selections.sortBy
                && search.selections.filterBy
                && search.selections.period
                    ? <Table>
                        <Tbody>
                            <Tr>
                                <Th></Th>
                                <Th><TableCell>Name</TableCell></Th>
                                <Th>{formattedPeriod(search.selections.sortBy)}</Th>
                            </Tr>
                            {drivers.map(driver => <Tr key={driver.familyName}>
                                <Td><Rank>{drivers.indexOf(driver) + 1}</Rank></Td>
                                <Td><TableCell><span>{driver.givenName} {driver.familyName}</span></TableCell></Td>
                                <Td>{driver.wins}</Td>
                            </Tr>)}
                        </Tbody>
                    </Table>
                    : <></>
            }
        </React.Fragment>
    );
};

export default DriverResults;

// typeof search.selections.period === 'string' 
//     ? formattedPeriod(search.selections.period) 
//     : search.selections.period.name}</ResValue>