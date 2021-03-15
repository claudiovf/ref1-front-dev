export interface Search {
    resultsFor?: string;
    sortBy?: string;
    filterBy?: string;
    period?: string;
}

export interface SearchState {
    selections: Search;
    isOpen: boolean;
}

export const SET_SEARCH = 'SET_SEARCH';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';

export interface SetSearchAction {
    type: typeof SET_SEARCH
    payload: Search
}

export interface ToggleOpenAction {
    type: typeof TOGGLE_OPEN
}