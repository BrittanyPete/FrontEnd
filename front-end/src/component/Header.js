import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Header() {
  return (
    <div className="header">
      <h1>Anywhere Fitness!</h1>
            <div className="header-Sub">Stay Fit Anywhere!</div>
            <div className="header-section">
                <div className="row">
                    <div className="nav">
                    <Link className="home-button" to='/'>Anywhere Fitness</Link>
                    <Link className="button" to='/class'>Classes</Link>
                    <Link className="button" to='/login'>Login</Link>
                    <Link className="button" to='/signUp'>Register</Link>
                    </div>
                  </div>
               </div>
            </div>
       
  )
};

export default Header;



