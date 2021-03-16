import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { RootState } from '../../store';
import { setSearch } from '../../store/actions';
import { SearchState } from '../../store/searchTypes';
import { formattedPeriod } from '../../utils/formatting';
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
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    width: 100%;
    height: 58vh;
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
    margin: 0.5rem 1.5rem;
    overflow: scroll;
`;

const FilterTitle = styled(Title)`
    font-family: "Work Sans Bold";
    font-size: 1rem;
`;

const OptionsButton = styled(SelectionButton)`
    min-width: 4.25rem;
`;



const FilterModal: React.FC = () => {

    const search: SearchState = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();
    
    if (search.selections.filterBy && search.selections.filterBy !== "All Time" && !search.selections.period) {

        const getPeriodOptions = (filter: string): string[] => {
            if ( filter === "Season" ) {
                const options = [];
                for (let i = 1950; i < 2021; i++) {
                    options.push(i.toString());
                }
                return options.reverse();
            } else {
                return ['mercedes', 'red_bull', 'mclaren', 'ferrari', 'alfa', 'williams'];
            }
        };

        const periodOptions = getPeriodOptions(search.selections.filterBy);
        return (
                <Overlay>
                    <ModalContainer>
                        <FilterTitle>Select a {formattedPeriod(search.selections.filterBy)}</FilterTitle>
                        <OptionsContainer>
                            {periodOptions.map(option => <OptionsButton 
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
                    </ModalContainer>
                </Overlay>
            
        );
    } else {
        return <></>;
    }
};

export default FilterModal;