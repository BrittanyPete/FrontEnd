import React from 'react';
import { Link } from 'react-router-dom';
 

function Header() {
  return (
    <div className="header">
      <h2> Anywhere Fitness </h2>
      <nav class="top-nav">


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
            Logout
          </Link>
      </nav>
    </div>

  );
}

export default Header;