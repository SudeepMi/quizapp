import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    let userid = localStorage.getItem("token") === null ? false : true
    return (
        <>
        { userid ? <Outlet /> : <Navigate to={"/signin"} /> }
        </>
    )
}

export default PrivateRoute