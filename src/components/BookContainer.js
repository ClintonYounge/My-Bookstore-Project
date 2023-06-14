// src/redux/components/BookContainer.js

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Books from './Books';
import BookForm from './BookForm';
import { fetchBooks } from '../redux/books/booksSlice';

export default function BookContainer() {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error !== undefined) {
    return 'Error... something went wrong';
  }

  return (
    <section className="books">
      {Object.keys(books).map((bookId) => {
        const book = books[bookId][0]; // Assuming each book ID has only one book object
        return (
          <Books
            key={bookId}
            itemId={bookId}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        );
      })}
      <BookForm />
    </section>
  );
}
