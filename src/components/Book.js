import React from 'react';
import './Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ singleBook }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(removeBook(singleBook.id));
  };
  return (
    <div className="bookRow">
      <div className="bookInfo">
        <p className="category">{singleBook.category}</p>
        <h1 className="title">
          {' '}
          {singleBook.title}
        </h1>
        <p className="author">{singleBook.author}</p>
      </div>
      <div className="actions">
        <ul>
          <li><button type="submit">Comments</button></li>
          <li><button onClick={deleteHandler} type="submit"> Remove </button></li>
          <li><button type="submit">Edit</button></li>
        </ul>
      </div>
    </div>
  );
}

Book.propTypes = {
  singleBook: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Book;
