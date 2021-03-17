import { Search, TeamNameId,
    SET_SEARCH, TOGGLE_OPEN, SET_TEAM_NAMES,
    SetSearchAction, ToggleOpenAction, SetTeamNamesAction
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