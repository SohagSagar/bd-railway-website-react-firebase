import React from 'react';
import { Form } from 'react-bootstrap';
import './BodyTopSection.js.css'

const BodyTopSection = () => {
    return (
        <div className='top-section'>

            <form >

                <div className='destination-form '>
                    <div>
                        <label>From</label><br />
                        <input className='form-control' type="text" name="from-station" id="" placeholder='Form Station' />
                    </div>

                    <div>
                        <label>To</label><br />
                        <input className='form-control' type="text" name="to-station" id="" placeholder='To Station' />
                    </div>

                    <div>
                        <label>Date of Journey</label><br />
                        <input className='form-control' type="date" name="journey-date" id="" placeholder='Pick a date' />
                    </div>

                    <div>
                        <label>Choose class</label><br />
                        <input className='form-control' type="text" name="choose-class" id="" placeholder='Choose a Class' />
                    </div>

                </div>
                <button className='w-100 mt-4 btn btn-success' type="submit"> FIND TICKET</button>
            </form>

            <div className="top-banner-img mt-5">
                <img src='./train-illustration.jpg' alt="" />
            </div>
        </div>
    );
};

export default BodyTopSection;