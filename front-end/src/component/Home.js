import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <div>
            <h2>Welcome to Anywhere Fitness!</h2>
            <h3>Where our mission is to allow you to attend a fitness class ANYWHERE!</h3>
            </div>
            <div>
                <div>
                <h3>New Client?</h3>
                <Link to='/signup'>Sign Up Here</Link>
                </div>
                <div>
                <h3>Already have an Account?</h3>
                <Link to='/login'>Client Login</Link>
                </div>
                <div>
                <h3>Are you an Instructor?</h3>
                <Link to='/login'>Instructor Login</Link>
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
            
        </div>
    )
}
export default Home;