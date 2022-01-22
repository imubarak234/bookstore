import React from 'react';
import { NavLink } from 'react-router-dom';
import './BookContainer.css';

const Naver = () => (
  <div className="navs navigate">
    <nav className="navbar navbar-expand-lg navbar-light bg-lignt lead">
      <div className="container">
        <NavLink className="navbar-brand h1 fw-normal" to="/" id="title">
          Bookstore CMS
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-start">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-dark fw-normal pe-4" to="/">
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark fw-normal pe-4" to="/categories">
                Categories
              </NavLink>
            </li>

          </ul>
        </div>
        <i className="bi bi-person-circle h1" id="headicon" />
      </div>
    </nav>
  </div>
);

export default Naver;
