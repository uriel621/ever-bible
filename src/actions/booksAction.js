import axios from 'axios';
import { FETCH_BOOKS, ACTIVE_BOOK } from './types';

export const fetchBooks = () => dispatch => {
    axios.get('https://api.eversbible.com/')
        .then(function (books) {
            dispatch({
                "type": FETCH_BOOKS,
                "payload": books.data
            })
        })
}

export const activeBook = (book) => dispatch => {
    dispatch({
        "type": ACTIVE_BOOK,
        "payload": book
    })
}