import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../SharedSection/Footer/Footer';
import './Register.css'

const Register = () => {
    return (
        <div className='container registration-container'>
            <h3>Registration</h3><hr style={{ color: '#006847' }} />
            <div className="registration-section">

                <form>
                    <input className='form-control' type="text" placeholder='Full Name' />
                    <input className='form-control' type="text" placeholder='E-mail' />
                    <input className='form-control' type="text" placeholder='Mobile Number' />
                    <input className='form-control' type="text" placeholder='Confirm Mobile' />
                    <input className='form-control' type="text" placeholder='Enter Password' />
                    <input className='form-control' type="text" placeholder='Confirm Password' />
                    <select className='form-control' name="" id="">
                        <option value="nid">Select Identification Type</option>
                        <option value="nid">NID</option>
                        <option value="birth-certificate">Birth Certificate</option>
                    </select>

                    <input className='form-control' type="text" placeholder='Identification Number' />

                    <input className='form-control' type="text" placeholder='Post Code' /><br />

                    <textarea className='form-control w-100' name="address" id="" placeholder='Address'></textarea><br />

                    <div className='regi-btn'>
                        <button className='btn btn-success w-50 mt-2'>SIGN UP</button> 
                        <p><Link to={'/login'}>Already Registered</Link></p>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;