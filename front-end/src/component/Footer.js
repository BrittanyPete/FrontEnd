import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Footer = () => {

    return (
        <div className="footer-section">
                <div className="row">
                    <div className="nav">
                    <Link className="home-button" to='/'>Anywhere Fitness</Link>
                    <Link className="button" to='/class'>Classes</Link>
                    <Link className="button" to='/login'>Login</Link>
                    <Link className="button" to='/signUp'>Register</Link>
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