import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import initialBooks from '../../initialBooks';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hK5bVdhKIYawlUH0NiMI/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(url);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      return state.filter((book) => book.itemId !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
