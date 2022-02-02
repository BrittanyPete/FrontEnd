import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FitnessClassCard from './FitnessClassCard';

// still needs search bar


const Class = () => {

     const [classes, setClasses] = useState();

    useEffect(() => {
        const getClass = () => {
            axios.get(`./DummyData`)
            .then(res => {
                setClasses(res);
            }).catch(err => {
                console.error(err);
            })
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
        axios.get(`./DummyData`)
            .then((res) => {
                setClasses({
                    ...classes,
                    classes: res.data
                })
            }).catch((err) => {
                console.error(err)
            })
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChanges}/>
            </form>
            {/* { 
            classes.map(class => (
                <FitnessClassCard class={class} />
            ))};  */}
        </div>
    )
}

export default Class;