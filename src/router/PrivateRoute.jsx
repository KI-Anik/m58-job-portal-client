import React, { useContext } from 'react';
import AuthContext from '../context/authContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // const location =useLocation()
    const { pathname } = useLocation() //destructure location

    if (loading) {
        return <span className="loading loading-spinner text-error"></span>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/signin'} state={pathname} ></Navigate>
};

export default PrivateRoute;