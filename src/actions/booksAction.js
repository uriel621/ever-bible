import { FETCH_BOOKS } from './types';

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