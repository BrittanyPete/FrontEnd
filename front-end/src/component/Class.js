import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ClassCard from './FitnessClassCard';
import './Class.css';

import axiosWithAuth from '../utils/axiosWithAuth';

// still needs search bar


const Class = () => {

     const [classes, setClasses] = useState();


    useEffect(() => {
        const getClass = () => {
            axiosWithAuth().get(`/clients/classes`)
            .then(res => {
                setClasses(res.data);
            }).catch(err => {
                console.error(err);
            });
            }
                getClass();
            }, []);

    const handleChanges = (e) => {
        e.preventDefault();
        setClasses({
            ...classes, 
        [e.target.value]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /* needs to plug search criteria into url */
        axios.get(`https://anywhere-fitness-buildweek.herokuapp.com/api/clients/classes`)
            .then((res) => {
                console.log(res)
                 setClasses({
                     ...classes,
                     classes: res
                })
            }).catch((err) => {
                console.error(err)
            })
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChanges}/>
                <button>Search</button>
            </form>
            <div>
            {/* {
                classes.map(i => <ClassCard key={i.id} />)
            } */}
            </div> 
        </div>
    )
}

export default Class;