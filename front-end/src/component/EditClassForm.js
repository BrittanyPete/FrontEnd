import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialState = {
    "class_id": "",
    "class_name": "",
    "class_start_time": '',
    "class_type": "",
    "class_duration": 0,
    "class_intensity_level": 0,
    "class_location": "",
    "total_clients": 0,
    "max_class_size": 0,
    "instructor_id": 0
};

const EditClassForm = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [fitClass, setFitClass] = useState(initialState);
    useEffect(() => {
        axiosWithAuth().get(`/instructors/classes/${id}`)
            .then(resp => {
                setFitClass(resp.data[0]);
                console.log(resp.data[0]);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    const handleChange = e => {
        setFitClass({
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        const toSubmit = [{fitClass}];
        axiosWithAuth().put(`/instructors/update/${fitClass.class_id}`, toSubmit)
            .then(resp => {
                navigate('/instructor');
            })
            .catch(err => {
                console.error(err);
            })
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Edit Class</h2>
                <label>Name
                    <input
                        name='class_name'
                        type='text'
                        value={fitClass.class_name}
                        onChange={handleChange}
                    />
                </label>
                <label>Type
                    <input
                        name='class_type'
                        type='text'
                        value={fitClass.class_type}
                        onChange={handleChange}
                    />
                </label>
                <label>Intensity
                    <input
                        name='class_intensity_level'
                        type='number'
                        value={fitClass.class_intensity_level}
                        onChange={handleChange}
                    />
                </label>
                <label>Location
                    <input
                        name='class_location'
                        type='text'
                        value={fitClass.class_location}
                        onChange={handleChange}
                    />
                </label>
                <label>Start Time
                    <input
                        name='class_start_time'
                        type='time'
                        value={fitClass.class_start_time}
                        onChange={handleChange}
                    />
                </label>
                <label>Duration
                    <input
                        name='class_duration'
                        type='number'
                        value={fitClass.class_duration}
                        onChange={handleChange}
                    />
                </label>
                <label>Class Size
                    <input
                        name='max_class_size'
                        type='number'
                        value={fitClass.max_class_size}
                        onChange={handleChange}
                    />
                </label>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditClassForm;