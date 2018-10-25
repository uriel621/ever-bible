import axios from 'axios';
import { _FETCH_CHAPTER, _ACTIVE_CHAPTER } from './types';

export const fetchChapter = (book, chapter) => dispatch => {
    axios.get(`http://api.eversbible.com//book/${book}/chapter/${chapter}`)
        .then(function (chapter) {
            const verses = [];
            for (let verse in chapter.data) {
                verses.push(chapter.data[verse])
            }
            dispatch({
                "type": _FETCH_CHAPTER,
                "payload": verses
            })
        })
}

// export const activeChapter = (chapter) => dispatch => {
//     dispatch({
//         "type": ACTIVE_CHAPTER,
//         "payload": chapter
//     })
// }