import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

export default function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Uncategorized');

  const handleAddBook = () => {
    const newBook = {
      itemId: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));

    // Reset input fields after adding the book
    setTitle('');
    setAuthor('');
    setCategory('Uncategorized');
  };

  return (
    <div className="book-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <select placeholder="Category" onChange={(e) => setCategory(e.target.value)}>
        <option>
          Select Category
        </option>
        <option value="Fiction" onClick={(e) => setCategory(e.target.value)}>
          Fiction
        </option>
        <option value="Non Fiction" onClick={(e) => setCategory(e.target.value)}>
          Non Fiction
        </option>
      </select>

      <button
        aria-label="add-btn"
        type="button"
        className="add-btn"
        onClick={handleAddBook}
      >
        Add Book
      </button>
    </div>
  );
}
