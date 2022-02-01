import React, { useState } from 'react';

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

        <div className='orientation-container'>
            <div className='title'>Welcome to Anytime Fitness!</div>
            <button className='back-arrow' onClick={handleClickLeft}> ← </button> 

                    <div className='slides'>
                        {
                            slides.map((slides, i) => {
                                return( 
                                    <div className='slide-card'> This is a card with stuff in it
                                    </div>
                                
                                )
                            })
                        }
                    </div>
                    <button className='forward-arrow' onClick={handleClickRight}> →  </button>
        </div>

    )
}

export default Orientation;