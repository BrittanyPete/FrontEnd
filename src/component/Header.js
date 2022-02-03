import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <h1>Anywhere Fitness!</h1>
            <div className="header-Sub">Stay fit Anywhere!</div>
            <div className="header-section">
            <div className="container">
                <div className="row">
                    <div className="nav">
                    <Link className="home-button" to='/'>Anywhere Fitness</Link>
                    <Link className="button" to='/classes'>Classes</Link>
                    <Link className="button" to='/login'>Login</Link>
                    <Link className="button" to='/register'>Register</Link>
                    </div>
                  </div>
               </div>
            </div>
       </div>
  )
}

export default Header;