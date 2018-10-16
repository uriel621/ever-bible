import { FETCH_CHAPTERS, ACTIVE_CHAPTER } from './types';

export const fetchChapters = (chapter) => dispatch => {
    fetch(`http://127.0.0.1:5000/chapter/${chapter}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(chapters) {
            dispatch({
                "type": FETCH_CHAPTERS,
                "payload": chapters
            })
        });
}

export const activeChapter = (chapter) => dispatch => {
    dispatch({
        "type": ACTIVE_CHAPTER,
        "payload": chapter
    })
}