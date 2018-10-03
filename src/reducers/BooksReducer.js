import { FETCH_BOOKS, ACTIVE_BOOK } from '../actions/types'

const initialState = {
    "books": [],
    "activeBook": ''
};

export default function(state = initialState, action){
    if(action.type === FETCH_BOOKS){
        return {
            ...state,
            "books": action.payload
        };
    }
    else if(action.type === ACTIVE_BOOK){
        return {
            ...state,
            "activeBook": action.payload
        };
    }
        // return {
        //     ...state,
        //     "books": action.payload
        // };
    else {
        return state;
    }
}
