import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../SharedSection/Footer/Footer';
import './Login.css'
const Login = () => {
    return (
        <div className='container login-section'>
            <div className="login-container ">
                <div className='forgot-pass-heading'>
                    <p style={{ color: '#DA924E', fontWeight: '600' }}>Forgot Password?</p>
                    <p style={{ coloe: '#B3B9BC', fontWeight: '600' }}>Need Help?</p>
                </div>

                <form>
                    <input className='form-control mb-2' type="email" name="email" id="" placeholder='Enter Email' />

                    <input className='form-control' type="password" name="password" id="" placeholder='Enter Password' />
                    <button className='btn btn-success w-100 mt-3'>Login</button>
                </form>


                <div className='hr-line'>
                    <hr />
                    <p>OR</p>
                    <hr />
                </div>

                <div className='sign-in-options'>
                    <p className='text-center'>Continue with <img style={{width:'15px'}} src="./google_logo.png" alt="" srcset="" /> Google</p>
                </div>

                <hr className='mt-4 ' style={{color:'green'}}/>

                <p className='text-center'>New User? <span ><Link to={'/register'}>Register</Link></span></p>

            </div>


            <Footer></Footer>
        </div>
    );
};

export default Login;