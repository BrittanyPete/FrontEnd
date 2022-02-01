import React from 'react';

import './Orientation.css';

const Orientation = () => {

    const slides = [1, 2, 3, 4, 5];

    return(

        <div className='orientation-container'>
            <div className='title'>Welcome to Anytime Fitness!</div>
            <button className='back-arrow'> ← </button>
            <div className='slides'>
                {
                    slides.map((slides, i) => {
                        return(
                            <div className='slide-card'> This is it
                            </div>
                        )
                    })
                }
            </div>
            <button className='forward-arrow'> →  </button>

        </div>

    )
}

export default Orientation;