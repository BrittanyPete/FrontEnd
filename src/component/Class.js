import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import ClassCard from './ClassCard';
import './Class.css';
import dummyData from './DummyData';

import axiosWithAuth from '../utils/axiosWithAuth';

// still needs search bar


const Class = (props) => {

     const [classes, setClasses] = useState();
     const { id } = useParams();


    useEffect(() => {
            axiosWithAuth().get(`/clients/classes`)
            .then(res => {
                console.log('hello from get class',res);
                setClasses(res.data);
            }).catch(err => {
                console.error(err);
            });
            }, []);

    const handleChanges = (e) => {
        e.preventDefault();
        setClasses([{
            ...classes, 
        [e.target.value]: e.target.value
        }])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /* needs to plug search criteria into url */
        // axiosWithAuth().get(`/clients/classes/${id}`)
        //     .then(res => {
        //         console.log('hello from submit', res);
        //         setClasses(res.data);
        //     }).catch(err => {
        //         console.error(err);
        //     })
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChanges}/>
                <button>Search</button>
            </form>
            <p>
            {
                 classes && classes.map(i => <ClassCard />)
            }
            </p>
        </div>
    )
}

export default Class;