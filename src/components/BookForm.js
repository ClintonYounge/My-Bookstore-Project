// src/components/BookForm.js
import '../styles/bookform.css';

import { useState } from 'react';

export default function BookForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, author);
    setTitle('');
    setAuthor('');
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <form className="input-book" onSubmit={handleSubmit}>
      <p className="add-book">Add a new Book</p>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter book title here"
        className="title-input"
      />
      <input
        type="text"
        value={author}
        onChange={handleAuthorChange}
        placeholder="Enter book author here"
      />
      <button className="submit-button" type="submit">Add book</button>
    </form>
  );
}
