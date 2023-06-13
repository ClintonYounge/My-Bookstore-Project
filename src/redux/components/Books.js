// src/redux/components/Book.js

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../books/booksSlice';

export default function Books({
  itemId,
  title,
  author,
  category,
}) {
  const dispatch = useDispatch();
  return (
    <section className="rendered-book">
      <div>
        <p>{title}</p>
        <p>{author}</p>
        <p>{category}</p>
      </div>
      <div>
        <button
          aria-label="remove-btn"
          type="button"
          className="remove-btn"
          onClick={() => dispatch(removeBook(itemId))}
        >
          Remove
        </button>
      </div>
    </section>
  );
}

Books.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
