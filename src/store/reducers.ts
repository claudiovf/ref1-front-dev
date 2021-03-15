import { SearchState, SetSearchAction, ToggleOpenAction, SET_SEARCH, TOGGLE_OPEN } from './searchTypes';

const initialState: SearchState = {
    selections: {},
    isOpen: false
};

export const searchReducer = ( state = initialState, action: SetSearchAction | ToggleOpenAction ): SearchState => {
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
        default:
            return state;
    }
};