/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import initialBooks from '../../initialBooks';

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      return state.filter((book) => book.itemId !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
