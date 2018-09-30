import { FETCH_BOOKS } from './types';

export const fetchBooks = () => dispatch => {
    const books = ['Genesis', 'John', 'Revelation'];
    dispatch({
        "type": FETCH_BOOKS,
        "payload": books
    })
}