import axios from 'axios';
import { FETCH_CHAPTERS, ACTIVE_CHAPTER } from './types';

export const fetchChapters = (chapter) => dispatch => {
    axios.get(`http://api.eversbible.com/chapter/${chapter}`)
        .then(function (chapters) {
            dispatch({
                "type": FETCH_CHAPTERS,
                "payload": chapters.data
            })
        })
}

export const activeChapter = (chapter) => dispatch => {
    dispatch({
        "type": ACTIVE_CHAPTER,
        "payload": chapter
    })
}