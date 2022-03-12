import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './MainLayout.css';

import Menu from './Menu'
import Header from './Header'

const MainLayout = () => {


    const [active, setActive] = useState(false);
    const handleActive = () => {
        setActive(false);
    }
    const [activeWindow, setActiveWindow] = useState('home')

    const overlayClick = () => {
        if (active === true) {
            setActive(!active)
        }
    }



    return (
        <div className={`layout_container ${active ? 'active' : ''}`}>
            < Header
                active={active}
                setActive={setActive}
            />
            <div className="main-container" >
                <div className="main">
                    <div className="content">
                        <div className="overlay" onClick={() => overlayClick()}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
            <Menu active={active} handleActive={handleActive} />
        </div >
    )
}

export default MainLayout