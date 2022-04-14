import React from 'react';
import './BodyMidSection.css'

const BodyMidSection = () => {
    return (
        <div className='body-mid-section'>
            <div className="search w-25">
                <img src="./search.svg" alt="" srcset="" />
                <h3>Search</h3>
                <p>Choose your origin, destination, journey dates and search for trains</p>
            </div>

            <div className="select w-25">
                <img src="./select.svg" alt="" srcset="" />
                <h3>Select</h3>
                <p>Select your desired trip and choose your seats </p>
            </div>

            <div className="pay w-25">
                <img src="./pay.svg" alt="" srcset="" />
                <h3>Pay</h3>
                <p>Pay for the tickets via Debit / Credit Cards or bKash </p>
            </div>
        </div>
    );
};

export default BodyMidSection;