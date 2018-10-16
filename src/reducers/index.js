import { combineReducers } from 'redux';
import booksReducer from './BooksReducer';
import chaptersReducer from './ChaptersReducer';

export default combineReducers({
    "books": booksReducer,
    "chapter": chaptersReducer,
})