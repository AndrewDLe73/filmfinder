import React, { useState } from 'react'
import "./NavBar.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReturnToTop from '../Utility/Button/ReturnToTop';


const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
        ;




    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="navbar_container">
                <div className="left">
                    <img src='' onClick={ReturnToTop} alt="" />
                    <span>Explore</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    {isScrolled ? <span onClick={ReturnToTop}> Return to Top</span> : ""}
                    < SearchIcon className="icon" />
                    <NotificationsIcon className="icon" />
                    <AccountCircleIcon className="icon" />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon arrow" />
                        <div className="options">
                            <span> Settings</span>
                            <span> Log Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar