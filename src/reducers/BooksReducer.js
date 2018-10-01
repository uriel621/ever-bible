import { FETCH_BOOKS } from '../actions/types'

const initialState = {
    "books": []
}

export default function(state = initialState, action){
    if(action.type === FETCH_BOOKS){
        if(action.type === FETCH_BOOKS){
            return action.payload;
        }
        // return {
        //     ...state,
        //     "books": action.payload
        // };
    }
    else {
        return state;
    }
}
