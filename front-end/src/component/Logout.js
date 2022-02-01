import React, { useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { navigate } = useNavigate();
    useEffect(() => {
        axiosWithAuth()
            .post('/logout')
            .then(resp => {
                console.log(resp)
                localStorage.removeItem('token')
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div></div>
    )
}

export default Logout;