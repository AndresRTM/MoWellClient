import { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router';
import Navbar from './Navbar';
import { checkAuthentication } from '../services/authService';

export default function Layout() {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const check = async () => {
            setIsAuth(await checkAuthentication());
        };
        check();
    }, []);

    if (isAuth === null) return <p>Loading...</p>;
    if (!isAuth) return <Navigate to="/" replace />;


    return (
        <>
            <Navbar />
            <Outlet /> 
        </>
    );
}