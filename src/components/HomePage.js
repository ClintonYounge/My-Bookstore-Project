// src/components/HomePage.js
import '../styles/HomePage.css';
import { useState } from 'react';

import Booklist from './Booklist';
import BookForm from './BookForm';

export default function Book() {
  const [books, setBooks] = useState([]);

  const filterBooksById = (books, id) => books.filter((book) => book.id !== id);

  const handleDelete = (id) => {
    const filteredBooks = filterBooksById(books, id);
    setBooks(filteredBooks);
  };

  const handleCreate = (title, author) => {
    const newBook = { id: books.length, title, author };
    setBooks([...books, newBook]);
  };

  return (
    <div className="main-container">
      <Booklist books={books} onDelete={handleDelete} />
      <BookForm onCreate={handleCreate} />
    </div>
  );
}
