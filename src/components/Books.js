// src/redux/components/Book.js

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

export default function Books({
  itemId,
  title,
  author,
  category,
}) {
  const dispatch = useDispatch();
  const percentage = Math.floor(Math.random() * 100);
  return (
    <div className="book-card">
      <li key={itemId} className="book">
        <ul className="book-info">
          <li className="category">
            {category}
          </li>
          <li className="title">
            {title}
          </li>
          <li className="author">
            {author}
          </li>
        </ul>
        <ul className="functionality">
          <li className="separator">Comment</li>
          <li className="separator delete-book"><button type="button" onClick={() => dispatch(deleteBook(itemId))}>Remove</button></li>
          <li>Edit</li>
        </ul>
      </li>
      <ul className="right-content">
        <li><CircularProgressbar className="progress-img" value={percentage} /></li>
        <li className="progress-stat">
          <p className="progress-percentage">{`${percentage}%`}</p>
          <p className="completed">Completed</p>
        </li>
        <ul>
          <li className="current-chap">Current Chapter</li>
          <li className="chap-X">Chapter X: Lorem ipsum</li>
          <li className="up-progress">UPDATE PROGRESS</li>
        </ul>
      </ul>
    </div>
  );
}

Books.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
