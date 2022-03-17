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
                <Link className="eachmenu" dataglitch="Home" to='/'> Home </Link>
            </ul>
            <ul>
                <Link className="eachmenu" dataglitch="Planner" to="/planner"> Planner</Link>
            </ul>
            <ul>
                <Link className="eachmenu" dataglitch="Settings" to='/settings'> Settings</Link>
            </ul>
            <ul>
                <Link className="eachmenu" dataglitch="Explore" to='/explore'> Explore</Link>
            </ul>
            <ul>
                <Link className="eachmenu" dataglitch="Continue Watching" to='/current'> Continue Watching</Link>
            </ul>
        </ul>
    )
}

export default Menu