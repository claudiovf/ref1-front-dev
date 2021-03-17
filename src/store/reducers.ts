import { SearchState, ActionTypes, SET_SEARCH, TOGGLE_OPEN, SET_TEAM_NAMES } from './searchTypes';

const initialState: SearchState = {
    selections: {},
    isOpen: false,
    teamNames: []
};

export const searchReducer = ( state = initialState, action: ActionTypes ): SearchState => {
    switch (action.type) {
        case SET_SEARCH:
            return { 
                ...state,
                selections: action.payload 
            };
        case TOGGLE_OPEN:
            return { 
                ...state,
                isOpen: !state.isOpen
            };
        case SET_TEAM_NAMES:
            return { 
                ...state,
                teamNames: action.payload
            };
        default:
            return state;
    }
};