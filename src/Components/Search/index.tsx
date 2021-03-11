import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Title } from '../LayoutComponents';
import SelectionSection from './SelectionSection';

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
    background: rgba(0,0,0,0.3);
    animation-name: ${overlayAnimation};
    animation-duration: 0.8s;
`;

const ModalContainer = styled.div`
    width: 100.5%;
    height: 90vh;
    background-color: white;
    position:absolute;                        
    top: 56%;                        
    left: 50%;                        
    transform:translate(-50%,-50%);  
    border-radius:1rem 1rem 0 0;
    animation-name: ${slideUpAnimation};
    animation-duration: 0.5s;
`;

const SearchHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 3rem;
    width: 100%;
`;

const SearchTitle = styled(Title)`
    margin: 1rem;
    padding: 0;
`;

const CloseX = styled.div`
    background-color: #D1DADC;
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    height: 2rem;
    width: 2rem;
    font-size: 1.5rem;
    margin: 1rem;
    border-radius: 50%;
`;

interface Props {
    isOpen: boolean;
    handleClose: () => void;
}
const SearchModal: React.FC<Props> = ({ isOpen, handleClose}: Props) => {
    const [resultSelection, setResultSelection ] = useState<string | null>(null);
    const [sortSelection, setSortSelection ] = useState<string | null>(null);
    const [filterSelection, setFilterSelection ] = useState<string | null>(null);

    const handleResultSelection = (selection: string | null) => {
        setResultSelection(selection);
        if(!selection) {
            setSortSelection(null);
            setFilterSelection(null);
        }
    };

    const handleSortSelection = (selection: string | null) => {
        setSortSelection(selection);
    };
    const handleFilterSelection = (selection: string | null) => {
        setFilterSelection(selection);
    };

    const filterOptionsFor = (resultSel: string): string[] => {
        if ( resultSel === "drivers" ) return ["All Time", "Season", "Team"];
        else return ["All Time", "Season"];
    };
    
    if (isOpen) {
        return (
                <Overlay>
                    <ModalContainer>
                        <SearchHeader>
                            <SearchTitle>Search</SearchTitle>
                            <CloseX onClick={() => {
                                handleClose();
                                handleResultSelection(null);
                            }}>&#x2715;</CloseX>
                        </SearchHeader>
                        <SelectionSection 
                        title={"Show results for"}
                        optionsArr={["drivers", "teams"]}
                        selected={resultSelection}
                        handleResultSelection={handleResultSelection}
                        />
                        {resultSelection
                            ? <>
                                <SelectionSection 
                                    title={"Sort by"}
                                    optionsArr={["wins", "podiums", "points"]}
                                    selected={sortSelection}
                                    handleResultSelection={handleSortSelection}
                                />
                                {sortSelection || filterSelection
                                    ? <SelectionSection 
                                        title={"Filter by"}
                                        optionsArr={filterOptionsFor(resultSelection)}
                                        selected={filterSelection}
                                        handleResultSelection={handleFilterSelection}
                                    />
                                    : null
                                }
                            </>
                            : null
                        }
                    </ModalContainer>
                </Overlay>
            
        );
    } else {
        return <></>;
    }
};

export default SearchModal;