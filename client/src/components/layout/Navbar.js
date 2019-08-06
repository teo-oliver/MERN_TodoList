import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div class="navbar-brand">Todo_List</div>

        <div class="d-flex justify-content-end">
          <a
            class="navbar-brand navbar-link"
            href="https://github.com/teo-oliver/MERN_TodoList"
            target="_blank"
          >
            GitHub
          </a>
          <a
            class="navbar-brand navbar-link"
            href="https://teo-oliver.github.io/"
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
