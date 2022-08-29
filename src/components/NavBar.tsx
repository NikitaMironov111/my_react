import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="posts">
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;