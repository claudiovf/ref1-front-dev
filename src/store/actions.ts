import { Driver } from '../types';
import { Search, TeamNameId,
    SET_SEARCH, TOGGLE_OPEN, SET_TEAM_NAMES,
    SetSearchAction, ToggleOpenAction, SetTeamNamesAction, SetCurrResults, SetPrevResults, SET_CURR_RESULTS, SET_PREV_RESULTS
} from './searchTypes';

export const setSearch = (newSearch: Search): SetSearchAction => {
    return {
        type: SET_SEARCH,
        payload: newSearch
    };
};

export const toggleOpen = (): ToggleOpenAction => {
    return {
        type: TOGGLE_OPEN
    };
};

export const setTeamNames = (nameList: TeamNameId[]): SetTeamNamesAction => {
    return {
        type: SET_TEAM_NAMES,
        payload: nameList
    };
};

export const setCurrResults = (currList: Driver[]): SetCurrResults => {
    return {
        type: SET_CURR_RESULTS,
        payload: currList
    };
};

export const setPrevResults = (prevList: Driver[]): SetPrevResults => {
    return {
        type: SET_PREV_RESULTS,
        payload: prevList
    };
};