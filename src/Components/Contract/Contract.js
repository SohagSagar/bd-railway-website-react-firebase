import React from 'react';
import Footer from '../SharedSection/Footer/Footer';
import './Contract.css'


const Contract = () => {
    return (
        <div className='container contract-section'>
            <h3>Contract With Us</h3><hr style={{ color: '#006847' }} />

            <div className="unsuccessful-issue ">
                <p className='report-heading'>For refund of unsuccessful purchases and card charging issues </p><hr />

                <div className='d-flex justify-content-between align-items-center'>
                    <h5 style={{fontWeight:'600',color:'grey'}}>VISA/MASTER Cards</h5>
                    <p style={{fontWeight:'600', color:'#C78547'}}>N/A</p>
                </div><hr />

                <div className='d-flex justify-content-between align-items-center'>
                    <h5 style={{fontWeight:'600',color:'grey'}}>bkash</h5>
                    <p style={{fontWeight:'600', color:'#C78547'}}>16247</p>
                </div>

            </div>

            <div className="support  mx-auto mt-4 ">
                <p className='report-heading'>For Technical Support </p><hr />
                <div className='d-flex justify-content-between'>
                    <h5 style={{fontWeight:'600',color:'grey'}}>Tech Support Team</h5>
                    <p style={{fontWeight:'600', color:'#C78547'}}>support@eticket.railway.gov.bd</p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Contract;