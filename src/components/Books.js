import React from 'react';
import './Books.css';
// import { useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';

// import your Action Creators
// import { addBook, removeBook } from './redux/books/books';

// const dispatch = useDispatch();

// const submitBookToStore = () => {
//   const newBook = {
//     title: 'Some book',
//     id: 1,
//     author: 'Someone',
//     category: 'Fiction',
//   };

//   // dispatch an action and pass it the newBook object (your action's payload)
//   dispatch(addBook(newBook));
// };

const list = [
  {
    title: 'Some book',
    id: 1,
    author: 'Someone',
    category: 'Fiction',
  },
];

function Books() {
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
