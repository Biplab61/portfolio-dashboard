import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PreLoader from '../PreLoader';

const ProtectedRoute = (props) => {

    const { Component } = props;
    let isLogin = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date();
        const shortDate = `B$${today.getDate()}I${today.getMonth() + 1}@P${today.getFullYear()}&LA*B%`;
        // console.log(shortDate);
        if (isLogin === null || isLogin !== shortDate) {
            localStorage.removeItem("token");
            navigate('/login');
        }

    });

    return (
    <>
        {props.data ? <Component data={props.data} /> : <PreLoader/>}
    </>
    );
}

export default ProtectedRoute;
