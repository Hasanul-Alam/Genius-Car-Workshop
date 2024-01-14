import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Booking from '../../Booking/Booking';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const {user} = useAuth();
    return (
        <>
            {user.email ? <Booking /> : <Navigate to = '/login' />}
        </>
    );
};

export default PrivateRoute;