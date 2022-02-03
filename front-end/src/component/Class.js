import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FitnessClassCard from './FitnessClassCard';


const Class = () => {

    // const [classes, setClasses] = useState();

    // useEffect(() => {
    //     const getClass = () => {
    //         axios.get('')
    //         .then(res => {
    //             setClass(res);
    //         }).catch(err => {
    //             console.error(err);
    //         })
    //     }
    //     getClass();
    // }, []);

    return(
        <div>
            {/* {
            classes.map( class => (
                <FitnessClassCard class={class} />
            ))}; */}
        </div>
    )
}

export default Class;