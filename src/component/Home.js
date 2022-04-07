import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
    return(
        <div className='bodyDiv'>
            <div>
            <hr/>
            <h1>Welcome to Anywhere Fitness!</h1>
            <img 
                className='home-image'
                src='https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                alt='black and white gym'
            />
            <h3 className = "mission">Where our mission is to allow you to attend a fitness class ANYWHERE!</h3>
            </div>

            <div>
                <div>
                <h4>New Client?</h4>
                <Link className='button' to='/signup'>Sign Up!</Link>
                </div>
                <div>
                <h4>Already have an Account?</h4>
                <Link className='button' to='/login'>Login!</Link>
                </div>
            </div>
           
                <h2>Some classes we offer:</h2>
                <div className='classlist'>
                <ul>
                    <li>Mindful Yoga</li>
                    <li>Kickboxing</li>
                    <li>HIIT</li>
                    <li>Spin</li>
                    <li>Cross-Fit</li>
                </ul>
            </div>
            
        </div>
    )
};
export default Home;