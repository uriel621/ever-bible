import { FETCH_BOOKS } from './types';

export const fetchBooks = () => dispatch => {
    fetch('http://localhost:5000/')
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