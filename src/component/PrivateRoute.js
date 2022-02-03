import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children, redirectTo}) => {
    if(localStorage.getItem('token')) {
        return children;
    }else {
        return <Navigate to={redirectTo} />
    }
}

export default PrivateRoute;