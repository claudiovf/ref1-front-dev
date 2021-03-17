import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { Title } from '../LayoutComponents';
import { RootState } from '../../store';
import { SearchState } from '../../store/searchTypes';
import { setSearch, toggleOpen, setTeamNames } from '../../store/actions';
import FilterBy from './FilterBy';
import SortBy from './SortBy';
import ResutsFor from './ResultsFor';
import { useQuery } from '@apollo/client';
import { GET_TEAM_NAMES } from '../../queries';
import { Team } from '../../types';

const overlayAnimation = keyframes`
    0% { opacity: 0;}
    100% { opacity: 1}
`;
const overlayClosingAnimation = keyframes`
    0% { opacity: 1;}
    50% { opacity: 1}
    100% { opacity: 0}
`;

const slideUpAnimation = keyframes`
    0% { opacity: 0;}
    50% { opacity: 0; top: 90%; }
    100% { opacity: 1}
`;

const slideDownAnimation = keyframes`
    0% { opacity: 1;}
    50% { opacity: 1; top: 56%;  }
    100% { opacity: 0; top: 100%;  }
`;



const Overlay = styled.div<{ overlayClosing: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    animation-name: ${props => props.overlayClosing ? overlayClosingAnimation: overlayAnimation};
    animation-duration: 0.6s;
`;

const ModalContainer = styled.div<{ closing: boolean }>`
    width: 100.5%;
    height: 100vh;
    background-color: white;
    position:absolute;                        
    top: 56%;                        
    left: 50%;                        
    transform:translate(-50%,-50%);  
    border-radius:1rem 1rem 0 0;
    animation-name: ${props => props.closing ? slideDownAnimation : slideUpAnimation};
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
    font-size: 1rem;
    margin: 1rem;
    border-radius: 50%;
`;


const SearchModal: React.FC = () => {
    const [closing, setClosing] = useState<boolean>(false);

    const search: SearchState = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();

    const teamNames = useQuery<{ findManyTeams: Team[] }>(GET_TEAM_NAMES);

    useEffect(() => {
        if ( teamNames.data ) {
            dispatch(setTeamNames(teamNames.data.findManyTeams));
        }
    }, [teamNames.data]);


    const handleSearchClose = () => {
        setClosing(true);
        setTimeout(() => {
            dispatch( setSearch({}) );
            dispatch( toggleOpen() );
            setClosing(false);
        }, 600);
    };

    
    if (search.isOpen) {
        return (
                <Overlay overlayClosing={closing}>
                    <ModalContainer closing={closing}>
                        <SearchHeader>
                            <SearchTitle>Search</SearchTitle>
                            <CloseX onClick={() => handleSearchClose()}>&#x2715;</CloseX>
                        </SearchHeader>

                        <ResutsFor />
                        <SortBy />
                        <FilterBy />
                        
                    </ModalContainer>
                </Overlay>
            
        );
    } else {
        return <></>;
    }
};

export default SearchModal;