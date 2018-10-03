import { FETCH_BOOKS, ACTIVE_BOOK } from './types';

export const fetchBooks = () => dispatch => {
    fetch('http://api.eversbible.com/')
        .then(function(response) {
            return response.json();
        })
        .then(function(books) {
            dispatch({
                "type": FETCH_BOOKS,
                "payload": books
            })
        });
}

export const activeBook = (book) => dispatch => {
    dispatch({
        "type": ACTIVE_BOOK,
        "payload": book
    })
}