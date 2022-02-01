import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {

    return (
        <div className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="nav">
                    <Link className="home-button" to='/'>Anywhere Fitness</Link>
                    <Link className="button" to='/classes'>Classes</Link>
                    <Link className="button" to='/login'>Login</Link>
                    <Link className="button" to='/register'>Register</Link>
                    </div>


    <div className="copyright">
<p>
  Copyright 2022 | Privacy | Terms of Service
</p>
         </div>
      </div>
    </div>
</div>

    )
};
// create links to home etc, 
export default Footer;