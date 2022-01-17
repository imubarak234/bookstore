import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import registerServiceWorker from 'react-service-worker';
import Naver from './components/HeadNav';
import BookContainer from './components/BookContainer';
import Categories from './redux/categories/Categories';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Naver />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

registerServiceWorker.unregister();
