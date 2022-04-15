import React from 'react';
import Footer from '../SharedSection/Footer/Footer';
import './VerifyTicket.css';

const VerifyTicket = () => {
    return (
        <div className='container ticket-verify'>
            <h3>Verify Ticket</h3><hr style={{ color: '#006847' }} />
            <div className="verify-section ">
                <div className="verify-form">
                    <form>
                        <input className='form-control' type="text" placeholder='Enter E-mail' />
                        <input className='form-control mt-3' type="text" placeholder='Enter PNR/Ticket Number' />
                        <button className='btn btn-success mt-3'>VERIFY TICKET</button>
                    </form>
                </div>
                <div className="verify-instructions ">
                    <p>Please enter your PNR/Ticket Number and the mobile number you used during ticket purchase.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default VerifyTicket;