import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditMovieForm = (props) => {
    const [fitClass, setFitClass] = useState({
        "class_id": 1,
        "class_name": "Mindful Yoga",
        "class_type": "Yoga",
        "class_intensity_level": 1,
        "class_location": "Miami",
        "class_start_time": "09:00:00",
        "class_duration": 30,
        "max_class_size": 15,
        "total_clients": 0
    })
    useEffect(() => {
        //axios
    }, []);
    const handleChange = e => {
        setFitClass({
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        //axios
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

export default EditMovieForm;