// src/components/BookForm.js

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook, fetchBooks } from '../redux/books/booksSlice';

export default function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Uncategorized');

  const handleAddBook = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addNewBook(newBook));
    setTimeout(() => {
      dispatch(fetchBooks());
    }, 600);

    // Reset input fields after adding the book
    setTitle('');
    setAuthor('');
    setCategory('Uncategorized');
  };

  return (
    <div className="book-form">
      <h1 className="add-new-book">ADD NEW BOOK</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="book-name-input"
        />
        <input
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="author-name-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-selection"
        >
          <option value="Uncategorized" className="option">Select Category</option>
          <option value="Fiction" className="option">Fiction</option>
          <option value="Non Fiction" className="option">Non Fiction</option>
        </select>
        <button
          aria-label="add-btn"
          type="button"
          className="add-btn"
          onClick={handleAddBook}
        >
          ADD BOOK
        </button>
      </div>
    </div>
  );
}
