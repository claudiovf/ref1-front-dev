import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { RootState } from '../../store';
import { setSearch } from '../../store/actions';
import { SearchState } from '../../store/searchTypes';
import { getDriverStyle } from '../../utils/currentInfo';
import { formattedPeriod } from '../../utils/formatting';
import Spinner from '../Common/Spinner';
import { SelectionButton, Title } from '../LayoutComponents';

const overlayAnimation = keyframes`
    0% { opacity: 0;}
    100% { opacity: 1}
`;

const slideUpAnimation = keyframes`
    0% { opacity: 0;}
    50% { opacity: 0; top: 90%; }
    100% { opacity: 1}
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.95);
    animation-name: ${overlayAnimation};
    animation-duration: 0.6s;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0.5rem 0.5rem 0 0;
    padding-top: 3rem;
`;

const ModalContainer = styled.div<{ teams: boolean }>`
    width: 100%;
    height: ${props => props.teams ? "75vh" : "62vh"};
    padding-top: ${props => props.teams ? "0" : "5rem"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    animation-name: ${slideUpAnimation};
    animation-duration: 0.5s;

`;

const OptionsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    width: auto;
    height: auto;
    min-height: 12rem;
    margin: 0.5rem 1.5rem;
    overflow: scroll;
`;


const FilterTitle = styled(Title)`
    font-family: "Work Sans Bold";
    font-size: 1rem;
`;

const TeamTitle = styled(Title)`
    font-family: "Work Sans Bold";
    font-size: 0.75rem;
`;

const OptionsButton = styled(SelectionButton)`
    min-width: 4.25rem;
`;



const FilterModal: React.FC = () => {

    const search: SearchState = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();
    
    if (search.selections.filterBy && search.selections.filterBy !== "All Time" && !search.selections.period) {

    const options = [];
    for (let i = 1950; i < 2021; i++) {
        options.push(i.toString());
    }

    const currentTeams = search.teamNames.filter(team => getDriverStyle(team.constructorId).team !== "NA");
    const sortedTeams = search.teamNames.slice().sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1 );

        return (
                <Overlay>
                    <ModalContainer teams={ search.selections.filterBy !== "Season" }>
                        <FilterTitle>Select a {formattedPeriod(search.selections.filterBy)}</FilterTitle>
                        {
                            search.selections.filterBy === "Season"
                            ? <OptionsContainer>
                                {options.reverse().map(option => <OptionsButton 
                                    key={option}
                                    selected={false}
                                    bg={"#bfc8c9"}
                                    color={"#2F2F2F"}
                                    border={"#bfc8c9"}
                                    onClick={() => dispatch(setSearch({...search.selections, period: option}))}
                                    >
                                        {formattedPeriod(option)}
                                </OptionsButton>)}
                            </OptionsContainer>

                            : <>
                                <TeamTitle>Current Teams</TeamTitle>
                                <OptionsContainer>
                                { 
                                    search.teamNames.length === 0
                                        ? <Spinner />
                                        : currentTeams.map(option => {
                                            const optionTeam = getDriverStyle(option.constructorId);
                                            return (
                                                <OptionsButton 
                                                    key={option.constructorId}
                                                    selected={false}
                                                    bg={optionTeam.primary}
                                                    color={optionTeam.secondary}
                                                    border={optionTeam.primary}
                                                    onClick={() => dispatch(setSearch({...search.selections, period: option}))}
                                                    >
                                                        {formattedPeriod(option.name)}
                                                </OptionsButton>
                                            );
                                        })
                                }
                                </OptionsContainer>
                                <TeamTitle>All Teams</TeamTitle>
                                <OptionsContainer>
                                { 
                                    search.teamNames.length === 0
                                        ? <Spinner />
                                        : sortedTeams.map(option => 
                                            <OptionsButton 
                                                key={option.constructorId}
                                                selected={false}
                                                bg={"#bfc8c9"}
                                                color={"#2F2F2F"}
                                                border={"#bfc8c9"}
                                                onClick={() => dispatch(setSearch({...search.selections, period: option}))}
                                                >
                                                    {formattedPeriod(option.name)}
                                            </OptionsButton>
                                        )
                                    }
                                </OptionsContainer>
                            </>
                        }
                        
                    </ModalContainer>
                </Overlay>
            
        );
    } else {
        return <></>;
    }
};

export default FilterModal;