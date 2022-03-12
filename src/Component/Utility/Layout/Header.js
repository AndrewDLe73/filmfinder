import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from "./logo.png"


const Header = ({ active, setActive }) => {
    return (
        <div className="header">
            <div className="header__content">
                <div className="logo"><img src={logo} ></img></div>

                <div
                    className={`menu-toggle ${active ? 'active' : ''} `}
                    onClick={() => setActive(!active)}>
                    <MenuIcon className="menu_ menu_icon" style={{ fontSize: '3rem', transition: 'all .3s ease-in-out' }} />
                    <CloseIcon className="close_ menu_icon" style={{ fontSize: '3rem', transition: 'all .3s ease-in-out' }} />
                </div>
            </div>
        </div>
    )
}

export default Header