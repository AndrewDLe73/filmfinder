import React, { useEffect } from 'react'

import { Link, useLocation } from 'react-router-dom'

import './Menu.css'

const Menu = ({ active, handleActive }) => {
    const location = useLocation()

    useEffect(() => {
        handleActive()
    }, [location])



    return (
        <ul className={`menu ${active ? 'active' : ''} `}>
            <ul>
                <Link to='/'> Home </Link>
            </ul>
            <ul>
                <Link to="/planner"> Planner</Link>
            </ul>
            <ul>
                <Link to='/settings'> Settings</Link>
            </ul>
            <ul>
                <Link to='/explore'> Explore</Link>
            </ul>
            <ul>
                <Link to='/current'> Continue Watching</Link>
            </ul>
        </ul>
    )
}

export default Menu