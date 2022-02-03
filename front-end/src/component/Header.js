import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'royalblue',
  border: '4px black solid',
  background: 'white',
  hover: 'green',
 };


 const HeadTitle = styled.h1`
        color:white;
        background-color: royalblue;
        -webkit-box-shadow: 5px 1px 15px 5px #000000; 
box-shadow: 5px 1px 15px 5px #000000;
        &:hover {
            background-color:gray;
            
        }
      };`
 

function Header() {
  return (
    <div className="header">
    <HeadTitle> Anywhere Fitness</HeadTitle>
            <div className="header-section">
            <div className="container">
                <div className="row">
                    <div className="nav">
                    <Link className="home-button" to='/' style ={linkStyle}>Anywhere Fitness</Link>
                    <Link className="button" to='/classes'style ={linkStyle}>Classes</Link>
                    <Link className="button" to='/login'style ={linkStyle}>Login</Link>
                    <Link className="button" to='/signup' style ={linkStyle}>Register</Link>
                    <Link className="button" to='/logout' style = {linkStyle}>Sign Out</Link>
                    </div>
                  </div>
               </div>
            </div>
       </div>
  )
}

export default Header;