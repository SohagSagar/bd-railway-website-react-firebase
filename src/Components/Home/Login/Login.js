import React from 'react';
import Footer from '../../SharedSection/Footer/Footer';
import './Login.css'
const Login = () => {
    return (
        <div className='container'>
            <div className="login-section ">
                <div className='forgot-pass-heading'>
                    <p style={{color:'#DA924E', fontWeight:'600'}}>Forgot Password?</p>
                    <p style={{coloe:'#B3B9BC', fontWeight:'600'}}>Need Help?</p>
                </div>
                <input className='form-control mb-2' type="email" name="email" id="" placeholder='Enter Email' />

                <input className='form-control' type="password" name="password" id="" placeholder='Enter Password' />

                <button className='btn btn-success w-100 mt-3'>Login</button>
            </div>


            {/* <Footer></Footer> */}
        </div>
    );
};

export default Login;