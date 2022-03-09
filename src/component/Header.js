import React from 'react';
import { Link } from 'react-router-dom';
 

function Header() {
  return (
    <div className="header">
      <nav>
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/classes">
            Classes
          </Link>
          <Link className="links" to="/login">
            Login
          </Link>
          <Link className="links" to="/signup">
            Register
          </Link>
          <Link className="links" to="/logout">
            Sign Out
          </Link>
      </nav>
      <h1> Anywhere Fitness </h1>
    </div>
  );
}

export default Header;