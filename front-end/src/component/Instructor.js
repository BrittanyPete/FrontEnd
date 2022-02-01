import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

import AddClassForm from './AddClassForm';
import ClassCard from './ClassCard';
import dummyData from './DummyData';

const Instructor = () => {
    const [classes, setClasses] = useState(dummyData);
    const { navigate } = useNavigate();
    useEffect(() => {
        // axiosWithAuth().get('')
        //     .then(resp => {
        //          // set classes
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     })
    }, []);

    const handleEdit = (id) => {
        navigate(`/editClass/:${id}`);
    }
    const handleDelete = (id) => {
        const filteredClasses = classes.filter(fitClass => {
            return fitClass.class_id !== id;
        });
        setClasses(filteredClasses);
    }

    return(
        <div>
            <AddClassForm  />
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Intensity</th>
                    <th>Location</th>
                    <th>Start Time</th>
                    <th>Duration</th>
                    <th>Class Size</th>
                </tr>
                </thead>
                <tbody>
                {
                    classes.map(fitClass => {
                        return(
                            <ClassCard
                                key={fitClass.class_id}
                                fitClass={fitClass}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Instructor;