import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import HomeAppointment from './HomeAppointment';
import HomeContact from './HomeContact';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <HomeAppointment></HomeAppointment>
            <Testimonial></Testimonial>
            <HomeContact></HomeContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;