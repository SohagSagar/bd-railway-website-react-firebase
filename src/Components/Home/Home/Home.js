import React from 'react';
import Footer from '../../SharedSection/Footer/Footer';
import BodyMidSection from '../BodyMidSection/BodyMidSection';
import BodyTopSection from '../BodyTopSection/BodyTopSection';
import PaymentMethodIntro from '../PaymentMethodIntro/PaymentMethodIntro';

const Home = () => {
    return (
        <div className='container'>
            <BodyTopSection></BodyTopSection>
            <BodyMidSection></BodyMidSection>
            <PaymentMethodIntro></PaymentMethodIntro>
            <Footer></Footer>
        </div>
    );
};

export default Home;