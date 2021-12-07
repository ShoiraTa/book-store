import React, { useState } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const authorHandler = (event) => {
    setAuthor(event.target.value);
  };
  const tileHandler = (event) => {
    setTitle(event.target.value);
  };
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      id: Math.floor(Math.random() * 100),
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input className="bookInput" type="text" placeholder="Book title" onChange={tileHandler} value={title} required />
      <input className="bookInput" type="text" placeholder="Author" onChange={authorHandler} value={author} required />
      <select className="bookSelect" name="category" value={category} placeholder="optiopn" onChange={categoryHandler} required>
        <option value="Fiction">Fiction</option>
        <option value="History">History</option>
        <option value="History">Manga</option>
      </select>
      <input className="submit" type="submit" value="Add book" />
    </form>
  );
}

export default Form;
