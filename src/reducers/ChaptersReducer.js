import { FETCH_CHAPTERS, ACTIVE_CHAPTER } from '../actions/types'

const initialState = {
    "chapters": null,
    "activeChapter": null
};

export default function(state = initialState, action){
    if(action.type === FETCH_CHAPTERS){
        return {
            ...state,
            "chapters": action.payload
        };
    }
    else if(action.type === ACTIVE_CHAPTER){
        return {
            ...state,
            "activeChapter": action.payload
        };
    }
    else {
        return state;
    }
}
