import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialState = {
    "class_id": 0,
    "class_name": "",
    "class_start_time": "",
    "class_type": "",
    "class_duration": 0,
    "class_intensity_level": 1,
    "class_location": "",
    "total_clients": 0,
    "max_class_size": 25,
    "instructor_id": 3
};

const EditClassForm = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [fitClass, setFitClass] = useState(initialState)
    useEffect(() => {
        axiosWithAuth().get(`/clients/classes/${id}`)
            .then(resp => {
                setFitClass(resp.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [id]);
    const handleChange = e => {
        setFitClass({
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().put(`/instructors/1/update/${fitClass.class_id}`, fitClass)
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
                        value={fitClass.class_name}
                        onChange={handleChange}
                    />
                </label>
                <label>Type
                    <input
                        type='text'
                        value={fitClass.class_type}
                        onChange={handleChange}
                    />
                </label>
                <label>Intensity
                    <input
                        type='text'
                        value={fitClass.class_intensity_level}
                        onChange={handleChange}
                    />
                </label>
                <label>Location
                    <input
                        type='text'
                        value={fitClass.class_location}
                        onChange={handleChange}
                    />
                </label>
                <label>Start Time
                    <input
                        type='text'
                        value={fitClass.class_start_time}
                        onChange={handleChange}
                    />
                </label>
                <label>Duration
                    <input
                        type='text'
                        value={fitClass.class_duration}
                        onChange={handleChange}
                    />
                </label>
                <label>Class Size
                    <input
                        type='text'
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