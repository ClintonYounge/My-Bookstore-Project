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
      {books.map((book) => (
        <Books
          key={book.itemId}
          itemId={book.itemId}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <BookForm />
    </section>
  );
}
