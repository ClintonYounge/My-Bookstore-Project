// // src/redux/books/booksSlice.js

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

export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId) => {
  const deleteUrl = `${url}/${bookId}`;
  await axios.delete(deleteUrl);
  return bookId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
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
      }))

      .addCase(addNewBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addNewBook.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(addNewBook.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }))

      .addCase(deleteBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteBook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: Object.fromEntries(
          Object.entries(state.books).filter(([itemId]) => itemId !== action.payload),
        ),
      }))
      .addCase(deleteBook.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
