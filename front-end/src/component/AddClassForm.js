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
    name: '',
    type: '',
    startTime: '',
    duration: '',
    intensity: '',
    location: '',
    registered: 0,
    maxClass: 1,
};
const AddClassForm = (props) => {
    const [newClass, setNewClass] = useState(initialState);
    const onChange = e => {
        setNewClass({
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();
        // axiosWithAuth().post('', newClass)
        //     .then(resp => {
        //          push();
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     })
        
    }
    return(
        <StyledDiv>
            <h1>Class Management</h1>
            <form className='addClass form' onSubmit={onSubmit}>
                <label>Name
                    <input
                        type='text'
                        value={newClass.name}
                        name='name'
                        placeholder='Class name'
                        onChange={onChange}
                    /></label><br />
                <label>Type
                    <select value={newClass.type} onChange={onChange}>
                        <option value=''>--Choose one--</option>
                        <option value='pilates'>Pilates</option>
                        <option value='yoga'>Yoga</option>
                        <option value='insanity'>Insanity</option>
                        <option value='ripped'>RIPPED</option>
                    </select></label><br />
                <label>Start Time
                    <input
                        type='text'
                        value={newClass.startTime}
                        name='startTime'
                        placeholder='8 am'
                        onChange={onChange}
                    /></label><br />
                <label>Duration
                    <input
                        type='text'
                        value={newClass.duration}
                        name='duration'
                        placeholder='30 min'
                        onChange={onChange}
                    /></label><br />
                <label>Intensity level
                    <input
                        type='text'
                        value={newClass.intensity}
                        name='intensity'
                        placeholder='Beginner'
                        onChange={onChange}
                    /></label><br />
                <label>Location
                    <input
                        type='text'
                        value={newClass.location}
                        name='location'
                        placeholder='B15'
                        onChange={onChange}
                    /></label><br />
                <label>Max class size
                    <input
                        type='text'
                        value={newClass.maxClass}
                        name='maxClass'
                        placeholder='12'
                        onChange={onChange}
                    /></label><br />
                <button>Add class</button>
            </form>
        </StyledDiv>
    )
}

export default AddClassForm;