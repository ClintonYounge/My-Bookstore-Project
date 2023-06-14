// src/redux/books/booksSlive.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hK5bVdhKIYawlUH0NiMI/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addNewBook = createAsyncThunk('books/addNewBook', async (newBook) => {
  try {
    const response = await axios.post(url, newBook);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add a new book');
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      return state.filter((book) => book.itemId !== bookId);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },

});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
