import { _FETCH_CHAPTER, _ACTIVE_CHAPTER } from '../actions/types'

const initialState = {
    "chapter": null,
    "activeChapter": null
};

export default function(state = initialState, action){
    if(action.type === _FETCH_CHAPTER){
        return {
            ...state,
            "chapter": action.payload
        };
    }
    else if(action.type === _ACTIVE_CHAPTER){
        return {
            ...state,
            "activeChapter": action.payload
        };
    }
    else {
        return state;
    }
}