import React from 'react';
import './PaymentMethodIntro.css'

const PaymentMethodIntro = () => {
    return (
        <div className='payments-options '>
            <hr />
            <div className="methods">
                <img src="./bkash.png" alt="" />
                <img src="./master-card.png" alt="" />
                <img src="./visa.png" alt="" />
            </div>
            <hr />
            <p>* The Tickets are issued by Bangladesh Railway’s Centrally Computerized Seat Reservation & Ticketing System (CCSRTS) and Shohoz-Synesis-Vincen JV is responsible for designing, development, implementation, technical operation & maintenance of the system. </p>
        </div>
    );
};

export default PaymentMethodIntro;