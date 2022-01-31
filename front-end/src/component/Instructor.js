import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Instructor = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        axiosWithAuth().get('https://pokeapi.co/api/v2/pokemon/1')
            .then(resp => {
                console.log(resp);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    return(
        <div>
            
        </div>
    )
}

export default Instructor;