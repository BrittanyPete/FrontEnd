import React from 'react';
import styled from 'styled-components';

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
const AddClassForm = (props) => {
    const onChange = props.onChange;
    return(
        <StyledDiv>
            <h1>Class Management</h1>
            <form className='addClass form'>
                <label>Name
                    <input
                        type='text'
                        name='name'
                        placeholder='Class name'
                        onChange={onChange}
                    /></label><br />
                <label>Type
                    <input
                        type='text'
                        name='type'
                        placeholder='Weights'
                        onChange={onChange}
                    /></label><br />
                <label>Start Time
                    <input
                        type='text'
                        name='startTime'
                        placeholder='8 am'
                        onChange={onChange}
                    /></label><br />
                <label>Duration
                    <input
                        type='text'
                        name='duration'
                        placeholder='30 min'
                        onChange={onChange}
                    /></label><br />
                <label>Intensity level
                    <input
                        type='text'
                        name='intensity'
                        placeholder='Beginner'
                        onChange={onChange}
                    /></label><br />
                <label>Location
                    <input
                        type='text'
                        name='location'
                        placeholder='B15'
                        onChange={onChange}
                    /></label><br />
                <label>Max class size
                    <input
                        type='text'
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