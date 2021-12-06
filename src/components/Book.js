import React from 'react'
import './Book.css'

function Book(props) {
  const { aBook } = props
  console.log(aBook)
  return (
    <div className = "bookRow">
      <div className='bookInfo'>
        <p className="category">{aBook.category}</p>
        <h1 className="title"> {aBook.title}</h1>
        <p className="author">{aBook.author}</p>
      </div>
      <div className ='actions'>
        <ul>
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
    </div>
  )
}

export default Book
