import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

import AddClassForm from './AddClassForm';
import ClassCard from './ClassCard';

const Instructor = () => {
    const [classes, setClasses] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://anywhere-fitness-buildweek.herokuapp.com/api/clients/classes/public')
            .then(resp => {
                 // set classes
                 setClasses(resp.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const handleEdit = (id) => {
        navigate(`/editClass/:${id}`);
    }
    const handleDelete = (id) => {
        const filteredClasses = classes.filter(fitClass => {
            return fitClass.class_id !== id;
        });
        setClasses(filteredClasses);
        axiosWithAuth().delete(`/instructors/delete/${id}`)
            .then(resp => {

            })
            .catch(err => {
                console.error(err);
            })
    }

    return(
        <div>
            <AddClassForm  classes={classes} setClasses={setClasses} />
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