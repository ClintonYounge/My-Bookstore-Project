// src/redux/components/BookContainer.js

import { useSelector } from 'react-redux';
import Books from './Books';
import BookForm from './BookForm';

export default function BookContainer() {
  const books = useSelector((state) => state.books);

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
