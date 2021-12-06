import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Categories from './components/Categories'

ReactDOM.render(
  <Router>
    <header>
      <Link to='/'> Bookstore</Link>
      <Link to='/'>Books</Link>
      <Link to='/categories'>Categories</Link>
    </header>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/categories' element = {<Categories/>} />
    </Routes>

  </Router>,
  document.getElementById('root')
);
