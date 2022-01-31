import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const initialState = {
        username: '',
        password: '', 
        role: ''
    }

    const [creds, setCreds] = useState(initialState);
    const {navigate} = useNavigate();

    const handleSubmitClient = e => {
        e.preventDefault();
        axios.post(``, creds)
            .then(resp => {
                console.log(resp)
                // const { token, username, role } = resp.data;
                // localStorage.setItem('token', token);
                // localStorage.setItem('username', username);
                // localStorage.setItem('role', role);
                // navigate('/class')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmitInstructor = e => {
        e.preventDefault();
        axios.post(``, creds)
            .then(resp => {
                console.log(resp)
                // const { token, username, role } = resp.data;
                // localStorage.setItem('token', token);
                // localStorage.setItem('username', username);
                // localStorage.setItem('role', role);
                // navigate('/instructor')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setCreds({
            ...creds,
            [name]: value,
        });
    };



return (
    <div>
        <div>
        <form onSubmit={handleSubmitClient}>
            <h3>Client Login</h3>
            <label>
                <input
                    type='text'
                    name='username'
                    value={creds.username}
                    onChange={handleChange}
                    placeholder='Enter Username'
                />
                <input
                    type='password'
                    name='password'
                    value={creds.password}
                    onChange={handleChange}
                    placeholder='Enter Password'
                />
            </label>
            <button type='submit'>Login</button>
        </form>
        </div>
        <div>
        <form onSubmit={handleSubmitInstructor}>
            <h3>Instructor Login</h3>
            <label>
                <input
                    type='text'
                    name='username'
                    value={creds.username}
                    onChange={handleChange}
                    placeholder='Enter Username'
                />
                <input
                    type='password'
                    name='password'
                    value={creds.password}
                    onChange={handleChange}
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