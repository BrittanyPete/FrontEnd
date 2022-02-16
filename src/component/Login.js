import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const initialClientState = {
        username: '',
        password: '', 
        role: 'client'
    }
    const initialInstructorState = {
        username: '',
        password: '', 
        role: 'instructor'
    }

    const [creds, setCreds] = useState(initialClientState);
    const [instCreds, setInstCreds] = useState(initialInstructorState);
    const navigate = useNavigate();

    const handleSubmitClient = e => {
        e.preventDefault();
        axios.post(`https://anywhere-fitness-buildweek.herokuapp.com/api/clients/login`, creds)
            .then(resp => {
                const { token } = resp.data;
                localStorage.setItem('token', token);
                navigate('/orientation')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmitInstructor = e => {
        e.preventDefault();
        axios.post(`https://anywhere-fitness-buildweek.herokuapp.com/api/instructors/login`, instCreds)
            .then(resp => {
                const { token, instructor_id } = resp.data;
                localStorage.setItem('token', token);
                localStorage.setItem('id', instructor_id);
                navigate('/instructor')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChangeClient = e => {
        const { name, value } = e.target;
        setCreds({
            ...creds,
            [name]: value,
        });
    };

    const handleChangeInstructor = e => {
        const { name, value } = e.target;
        setInstCreds({
            ...instCreds,
            [name]: value,
        });
    };



return (
    <div>
        <div>
        <form onSubmit={handleSubmitClient}>
            <h3>Client Login</h3>
            <label>UserName:
                <input
                    type='text'
                    name='username'
                    value={creds.username}
                    onChange={handleChangeClient}
                    placeholder='Enter Username'
                />
            </label>
            <label>Password:
                <input
                    type='password'
                    name='password'
                    value={creds.password}
                    onChange={handleChangeClient}
                    placeholder='Enter Password'
                />
            </label>
            <button type='submit'>Login</button>
        </form>
        </div>

        <div>
        <form onSubmit={handleSubmitInstructor}>
            <h3>Instructor Login</h3>
            <label>UserName:
                <input
                    type='text'
                    name='username'
                    value={instCreds.username}
                    onChange={handleChangeInstructor}
                    placeholder='Enter Username'
                />
            </label>
            <label>Password:
                <input
                    type='password'
                    name='password'
                    value={instCreds.password}
                    onChange={handleChangeInstructor}
                    placeholder='Enter Password'
                />
            </label>
            <button type='submit'>Login</button>
        </form>
        </div>

    </div>
)

};

export default Login;