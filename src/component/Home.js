import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue',
    border: "3px black solid",
    padding: "3px",
    backgroundcolor: "green"
  };
  

   const HomeStyle = styled.div`
 background-color: #B3D9FF ;

 
   `;

   

const Home = () => {
    return(
        <HomeStyle>
            <div>
            <h2>Welcome to Anywhere Fitness!</h2>
            <h3>Where our mission is to allow you to attend a fitness class ANYWHERE!</h3>
            </div>
            <div>
                <div>
                <h3>New Client?</h3>
                <Link to='/signup' style ={linkStyle}>Sign Up Here</Link>
                </div>
                <div>
                <h3>Already have an Account?</h3>
                <Link to='/login' style ={linkStyle}>Client Login</Link>
                </div>
                <div>
                <h3>Are you an Instructor?</h3>
                <Link to='/login ' style ={linkStyle}>Instructor Login</Link>
                </div>
            </div>
            <div>
                <h2>Some of the classes we offer:</h2>
                <ul>
                    <li>Mindful Yoga</li>
                    <li>Kickboxing</li>
                    <li>HIIT</li>
                    <li>Spin</li>
                    <li>Cross-Fit</li>
                </ul>
            </div>
            
        </HomeStyle>
    )
};
export default Home;