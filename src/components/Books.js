import React from 'react';
import './Books.css';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
// import { addBook } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state);

  const list = books.reducer;

  return (
    <div className="booksContainer">
      {list.map((book) => (
        <Book singleBook={book} key={book.id} />
      ))}
      <div className="formContainer">
        <h1>Add a new Book</h1>
        <Form />
      </div>
    </div>
  );
}

export default Books;
