import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link class="navbar-brand navbar-link" to="/">
          Mern_Todo
        </Link>
        <div class="d-flex justify-content-end">
          <Link class="navbar-brand navbar-link" to="/app">
            TodoList
          </Link>

          <a
            class="navbar-brand navbar-link"
            href="https://github.com/teo-oliver"
            target="_blank"
          >
            GitHub
          </a>
          <a
            class="navbar-brand navbar-link"
            href="https://www.linkedin.com/in/teo-oliver-84b33185/"
            target="_blank"
          >
            About
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
