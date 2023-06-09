// src/components/Booklist.js

import '../styles/booklist.css';
import PropTypes from 'prop-types';
import progressImg from '../images/progress-circle.png';

export default function BookList({ books, onDelete }) {
  const renderBook = (book) => (
    <div className="book-card">
      <li key={book.id} className="book">
        <span className="book-info">
          {book.title}
          <br />
          <span className="author">
            {book.author}
            {' '}
          </span>
        </span>
        <ul className="functionality">
          <li className="separator">Comment</li>
          <li className="separator delete-book"><button type="button" onClick={() => onDelete(book.id)}>Remove</button></li>
          <li>Edit</li>
          <img className="progress-img" src={progressImg} alt="" />
        </ul>
      </li>
      <ul className="right-content">
        <li className="progress-stat">
          X%
          <br />
          Completed
        </li>
        <ul>
          <li>Current Chapter</li>
          <li>Chapter X: Lorem ipsum</li>
          <li className="up-progress">Update Progress</li>
        </ul>
      </ul>
    </div>
  );

  const renderNoBooksMessage = () => <li className="no-books">Added books will be displayed here.</li>;

  return <ul className="book-list">{books.length > 0 ? books.map(renderBook) : renderNoBooksMessage()}</ul>;
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
