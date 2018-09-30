import { combineReducers } from 'redux';
import booksReducer from './BooksReducer';

export default combineReducers({
    "books": booksReducer,
})