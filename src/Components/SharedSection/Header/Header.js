import React from 'react';
import CustomLink from '../../Utilities/CustomLink/CustomLink';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';




const Header = () => {
    return (

        <nav className='header '>
            <div className='container nav-links'>
                <div className="logo">
                    <img src='./bd_logo.png' alt="" />
                    <div className="logo-name">
                        <p>Bangladesh</p>
                        <p>Railway</p>
                    </div>
                </div>
                <div className="menu-links">
                    <CustomLink to={'/'}>Home </CustomLink>
                    <CustomLink to={'/login'}>Login</CustomLink>
                    <CustomLink to={'/verify-ticket'}>Verify Ticket</CustomLink>
                    <CustomLink to={'/contract'}>Contract</CustomLink>
                    <GiHamburgerMenu className='hamberger-icon'/>
                </div>
            </div>

            
        </nav>

    );
};

export default Header;