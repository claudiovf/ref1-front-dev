export interface TeamNameId {
    name: string;
    constructorId: string;
}

export interface Search {
    resultsFor?: string;
    sortBy?: string;
    filterBy?: string;
    period?: TeamNameId | string;
}


export interface SearchState {
    selections: Search;
    isOpen: boolean;
    teamNames: TeamNameId[];

}

export const SET_SEARCH = 'SET_SEARCH';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const SET_TEAM_NAMES = 'SET_TEAM_NAMES';

export interface SetSearchAction {
    type: typeof SET_SEARCH
    payload: Search
}

export interface ToggleOpenAction {
    type: typeof TOGGLE_OPEN
}

export interface SetTeamNamesAction {
    type: typeof SET_TEAM_NAMES
    payload: TeamNameId[]
}

export type ActionTypes = SetSearchAction | ToggleOpenAction | SetTeamNamesAction;