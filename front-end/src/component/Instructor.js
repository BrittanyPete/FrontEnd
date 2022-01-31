import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

import AddClassForm from './AddClassForm';
import FitnessClassCard from './FitnessClassCard';


const Instructor = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        axiosWithAuth().get('https://pokeapi.co/api/v2/pokemon/1')
            .then(resp => {
                console.log(resp.data);
                setClasses(resp.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    const onChange = e => {
        e.preventDefault();
    }
    const handleAdd = () => {
        return <AddClassForm onChange={onChange} />;
    }
    return(
        <div>
            <button onClick={handleAdd}>Add a Class</button>
            {
                classes.map(fitnessClass => {
                    return <FitnessClassCard fitnessClass={fitnessClass}/>;
                })
            }
        </div>
    )
}

export default Instructor;