import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PublicRoute = () => {
    let userid = localStorage.getItem("token") === null ? true : false
    return (
        <>
        { userid ? <Outlet /> : <Navigate to={"/home"} /> }
        </>
    )
}

export default PublicRoute