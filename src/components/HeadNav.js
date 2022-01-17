import React from 'react';
import { NavLink } from 'react-router-dom';

const Naver = () => (
  <div className="navs">
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Bookstore CMS
        </NavLink>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories">
                Categories
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Naver;
