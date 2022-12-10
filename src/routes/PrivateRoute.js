import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <Spinner></Spinner>
    }
    if (user?.uid) {
        return children;
    }
    return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;