
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { GET_DRIVER_RESULTS } from '../../queries';
import { RootState } from '../../store';
import { SearchState, TeamNameId} from '../../store/searchTypes';
import { Driver } from '../../types';
import { formattedPeriod } from '../../utils/formatting';
import Spinner from '../Common/Spinner';
import { SelectionButton, Spacer } from '../LayoutComponents';

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

const CloseContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const OptionsButton = styled(SelectionButton)`
    min-width: 4.25rem;
`;




const DriverResults: React.FC = () => {
    const [results, setResults] = useState<Driver[]>([]);
    const search: SearchState = useSelector((state: RootState) => state.search);

    const getPeriod = (statePeriod: TeamNameId | string): string => 
        typeof statePeriod === "string" 
            ? statePeriod === "All Time" ? "Career" : statePeriod 
            : statePeriod.constructorId;

    const splitStat = (stateStat: string): { stat: string; isPct: boolean; } => {
        const split = stateStat.split("_");
        if (split.length === 1 ) return { stat: stateStat, isPct: false};
        else return { stat: split[0], isPct: true };
    };

    
    if (!search.selections.period || !search.selections.sortBy ) return null;

    const { loading, data } = useQuery<{ findDriverResults: Driver[] }>(GET_DRIVER_RESULTS,
        { variables: {
            "period": getPeriod(search.selections.period),
            "stat": splitStat(search.selections.sortBy).stat,
            "skip": 0,
            "pct": splitStat(search.selections.sortBy).isPct            
          }});
        
  useEffect(() => {
      if ( data ) {
          setResults(data.findDriverResults);
      }
  }, [data]);

  if ( loading ) return <> <Spacer /><Spinner /> </>;

  if ( results.length === 0 ) return null;



    return (
        <React.Fragment>
            <Table>
                <Tbody>
                    <Tr>
                        <Th></Th>
                        <Th><TableCell>Name</TableCell></Th>
                        <Th>{search.selections.sortBy ? formattedPeriod(search.selections.sortBy) : null}</Th>
                        <Th>Entries</Th>
                    </Tr>
                    {results.map(driver => <Tr key={driver.familyName}>
                        <Td><Rank>{results.indexOf(driver) + 1}</Rank></Td>
                        <Td><TableCell><span>{driver.givenName} {driver.familyName}</span></TableCell></Td>
                        <Td>{
                            search.selections.sortBy 
                            ? splitStat(search.selections.sortBy).isPct 
                                ? driver.entries[0].stats[0].pct 
                                : driver.entries[0].stats[0].total
                            : null
                        }</Td>
                        <Td>{driver.entries[0].entries}</Td>
                    </Tr>)}
                </Tbody>
            </Table>

            <CloseContainer>
                <OptionsButton
                    selected={false}
                    bg={"#FFF"}
                    color={"#2F2F2F"}
                    border={"#FFF"}
                    onClick={() => {
                        console.log("this");
                    }}  
                >
                    Load More
                </OptionsButton>
            </CloseContainer>
            
        </React.Fragment>
    );
    
};

export default DriverResults;

// typeof search.selections.period === 'string' 
//     ? formattedPeriod(search.selections.period) 
//     : search.selections.period.name}</ResValue>