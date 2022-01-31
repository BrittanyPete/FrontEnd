import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

import AddClassForm from './AddClassForm';
import FitnessClassCard from './FitnessClassCard';

const dummyData = [
    {
        name: 'Lift weights',
        type: 'Weights',
        startTime: '8 am',
        duration: '30 mins',
        intensity: '⭐⭐⭐',
        location: 'Gym',
        maxSize: '10'
    },
    {
        name: 'Yoga with dogs',
        type: 'Yoga',
        startTime: '9 am',
        duration: '30 mins',
        intensity: '⭐',
        location: 'Gym',
        maxSize: '5'
    }
];

const Instructor = () => {
    const [classes, setClasses] = useState(dummyData);
    const [addForm, setAddForm] = useState(false);
    useEffect(() => {
        // axiosWithAuth().get('')
        //     .then(resp => {
        //          // set classes
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     })
    }, []);
    const handleAdd = () => {
        setAddForm(true);
    }
    return(
        <div>
            <AddClassForm setAddForm={setAddForm} />
            {
                classes.map(fitnessClass => {
                    return(
                        <FitnessClassCard />
                    )
                })
            }
        </div>
    )
}

export default Instructor;