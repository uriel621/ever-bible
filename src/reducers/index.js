import { combineReducers } from 'redux';
import booksReducer from './BooksReducer';
import chaptersReducer from './ChaptersReducer';
import chapterReducer from './ChapterReducer';

export default combineReducers({
    "books": booksReducer,
    "chapter": chaptersReducer,
    "chapterx": chapterReducer,
})