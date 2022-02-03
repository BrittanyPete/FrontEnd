import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialState = [{
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
}];

const EditClassForm = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [fitClass, setFitClass] = useState(initialState);
    useEffect(() => {
        axiosWithAuth().get(`/instructors/classes/${id}`)
            .then(resp => {
                setFitClass(resp.data);
                console.log(resp.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [id]);
    const handleChange = e => {
        setFitClass([{
            [e.target.name]: e.target.value
        }]);
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().put(`/instructors/update/${fitClass.class_id}`, fitClass)
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
                        type='text'
                        value={fitClass[0].class_name}
                        onChange={handleChange}
                    />
                </label>
                <label>Type
                    <input
                        type='text'
                        value={fitClass[0].class_type}
                        onChange={handleChange}
                    />
                </label>
                <label>Intensity
                    <input
                        type='number'
                        value={fitClass[0].class_intensity_level}
                        onChange={handleChange}
                    />
                </label>
                <label>Location
                    <input
                        type='text'
                        value={fitClass[0].class_location}
                        onChange={handleChange}
                    />
                </label>
                <label>Start Time
                    <input
                        type='time'
                        value={fitClass[0].class_start_time}
                        onChange={handleChange}
                    />
                </label>
                <label>Duration
                    <input
                        type='number'
                        value={fitClass[0].class_duration}
                        onChange={handleChange}
                    />
                </label>
                <label>Class Size
                    <input
                        type='number'
                        value={fitClass[0].max_class_size}
                        onChange={handleChange}
                    />
                </label>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditClassForm;