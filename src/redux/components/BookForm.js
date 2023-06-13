import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../books/booksSlice';

export default function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    const newBook = {
      itemId: 'id generator to be implemented',
      title,
      author,
    };
    dispatch(addBook(newBook));

    // Reset input fields after adding the book
    setTitle('');
    setAuthor('');
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
