/* eslint-disable arrow-body-style */
import { useSelector } from 'react-redux';
import Books from './Books';

export default function BookContainer() {
  const books = useSelector((state) => state.books);

  return (
    <section className="books">
      {books.map((book) => {
        return (
          <Books
            key={book.itemId}
            itemId={book.itemId}
            title={book.title}
            author={book.author}
          />
        );
      })}
    </section>
  );
}
