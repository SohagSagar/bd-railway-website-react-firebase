import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer container '>
            <div className="bd-railway-logo">
                <img src="./bd_logo.png" alt="" />
                <div className='railway-slogan'>
                    <h3>Bangladesh Railway</h3>
                    <p>নিরাপদ . আরামদায়ক . সাশ্রয়ী</p>
                </div>
            </div>

            <div className="shohoz-logo">
                <p>Powered by</p>
                <h3>Shohoz-Synesis-Vincen JV </h3>
            </div>
        </div>
    );
};

export default Footer;