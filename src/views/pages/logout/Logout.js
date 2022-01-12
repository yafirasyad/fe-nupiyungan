import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useData } from 'src/context/DataContext'


const Logout = () => {
    const {state: dataState, cleanState} = useData()
    cleanState()
    localStorage.removeItem('token')
    return <Redirect to='/' />
}

export default Logout