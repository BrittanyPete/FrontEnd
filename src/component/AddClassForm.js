import React, { useState } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

const StyledDiv = styled.div`
    box-sizing: border-box;
    h1 {
        text-align: center;
        margin: 0 auto;
    }
    .addClass {
        border: 2px solid black;
        width: 75%;
        margin: 5% auto;
        border-radius: 2px;
        padding: 2%;
    }
    input {
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
    }
    label {
        text-align: left;
    }
    button {
        width: 40%;
        padding: 2% 5%;
    }
`
const initialState = {
    "class_name": "",
    "class_start_time": '',
    "class_type": "",
    "class_duration": 0,
    "class_intensity_level": 0,
    "class_location": "",
    "max_class_size": 0,
    "instructor_id": 0
};
const AddClassForm = (props) => {
    const [newClass, setNewClass] = useState(initialState);
    const { classes, setClasses } = props;
    const inst_id = localStorage.getItem('id');
    const onChange = e => {
        setNewClass({
            ...newClass,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        const toSubmit = {
            ...newClass,
            instructor_id: inst_id
        };
        axiosWithAuth().post(`/instructors/create`, toSubmit)
            .then(resp => {
                setClasses([...classes, newClass]);
            })
            .catch(err => {
                console.error(err);
            })
        
    }
    return(
        <StyledDiv>
            <h1>Class Management</h1>
            <form className='addClass form' onSubmit={onSubmit}>
                <label>Name
                    <input
                        type='text'
                        value={newClass.class_name}
                        name='class_name'
                        placeholder='Class name'
                        onChange={onChange}
                    /></label><br />
                <label>Type
                    <select name='class_type' value={newClass.class_type} onChange={onChange}>
                        <option value=''>--Choose one--</option>
                        <option value='pilates'>Pilates</option>
                        <option value='yoga'>Yoga</option>
                        <option value='insanity'>Insanity</option>
                        <option value='ripped'>RIPPED</option>
                    </select></label><br />
                <label>Start Time
                    <input
                        type='text'
                        value={newClass.class_start_time}
                        name='class_start_time'
                        placeholder='8 am'
                        onChange={onChange}
                    /></label><br />
                <label>Duration
                    <input
                        type='text'
                        value={newClass.class_duration}
                        name='class_duration'
                        placeholder='30 min'
                        onChange={onChange}
                    /></label><br />
                <label>Intensity level
                    <input
                        type='text'
                        value={newClass.class_intensity_level}
                        name='class_intensity_level'
                        placeholder='Beginner'
                        onChange={onChange}
                    /></label><br />
                <label>Location
                    <input
                        type='text'
                        value={newClass.class_location}
                        name='class_location'
                        placeholder='B15'
                        onChange={onChange}
                    /></label><br />
                <label>Max class size
                    <input
                        type='text'
                        value={newClass.max_class_size}
                        name='max_class_size'
                        placeholder='12'
                        onChange={onChange}
                    /></label><br />
                <button>Add class</button>
            </form>
        </StyledDiv>
    )
}

export default AddClassForm;