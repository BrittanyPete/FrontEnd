import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        role: ''
    };

    const [creds, setCreds] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`https://anywhere-fitness-buildweek.herokuapp.com/api/clients/register`, creds)
            .then(resp => {
                navigate('/class')
                axios.post(`https://anywhere-fitness-buildweek.herokuapp.com/api/clients/login`, creds)
                    .then(resp => {
                        localStorage.setItem('token', resp.data.token);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            
    };


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
            <h2>Create an Account!</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <label>First Name:
                    <input 
                        type='text'
                        name='firstName'
                        value={creds.firstName}
                        onChange={handleChange}
                        placeholder='Enter First Name'
                    />
                </label>
                <label>Last Name:
                    <input 
                        type='text'
                        name='lastName'
                        value={creds.lastName}
                        onChange={handleChange}
                        placeholder='Enter Last Name'
                    />
                </label>
                <label>Email:
                    <input 
                        type='email'
                        name='email'
                        value={creds.email}
                        onChange={handleChange}
                        placeholder='Enter Valid Email'
                    />
                </label>
                <label>Username:
                    <input 
                        type='text'
                        name='username'
                        value={creds.username}
                        onChange={handleChange}
                        placeholder='Enter Username'
                    />
                </label>
                <label>Password:
                    <input 
                        type='password'
                        name='password'
                        value={creds.password}
                        onChange={handleChange}
                        placeholder='Enter Password'
                    />
                </label>
                <button>Sign Up</button>
            </form>

        </div>
    )
}

export default Signup;