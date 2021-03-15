import { Search, SET_SEARCH, TOGGLE_OPEN, SetSearchAction, ToggleOpenAction } from './searchTypes';

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