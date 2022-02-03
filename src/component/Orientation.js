import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Orientation.css';


const Orientation = () => {

    // have to build out the actual slide data
    // these are placeholder slides
    const slides = [1, 2, 3, 4, 5];

    const handleClickLeft = () => {
        
    }

    const handleClickRight = () => {  

    }

    return(
    <div className='page-container'>
        
        <div className='orientation-container'>
            <a href='http://localhost:3000/'>Skip tutorial</a>
            <h2 className='title'>Welcome to Anywhere Fitness!</h2>
            <button className='back-arrow' onClick={handleClickLeft}> ← </button> 
                    <div className='slides'>
                        {
                            slides.map((slides, i) => {
                                return( <div className='slide-card'>
                                            <div className='card-stuff'> This is a card with stuff in it

                                            <img src='https://images.unsplash.com/photo-1618265341355-d0e2d1fdf26b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' alt='filler'/>
                                            </div>
                                        </div>
                                )
                            })
                        }
                    </div>
                    <button className='forward-arrow' onClick={handleClickRight}> →  </button>
        </div>
    </div>
    )
}


export default Orientation;