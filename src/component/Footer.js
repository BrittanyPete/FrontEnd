import React from 'react';
import { Link } from 'react-router-dom';



const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};


const Footer = () => {

    return (
        <div className="footer-section">
                <div className="row">
                  
                    <div className="nav">
                    <Link className="home-button" to='/' style ={linkStyle}>Anywhere Fitness</Link>
                    <Link className="button" to='/classes'style ={linkStyle}>Classes</Link>
                    <Link className="button" to='/login'style ={linkStyle}>Login</Link>
                    <Link className="button" to='/signup' style ={linkStyle}>Register</Link>
                    <Link className="button" to='/logout' style = {linkStyle}>Sign Out</Link>
                    
                    </div>
                    
    <div className="copyright">
<p>
  Copyright 2022 | Privacy | Terms of Service
</p>
         </div>
      </div>
    </div>
    )
};

export default Footer;