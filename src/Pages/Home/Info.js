import React from 'react';

import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';
import CardInfo from './CardInfo';

const Info = () => {

    return (
        <div className='grid grid-cols-1 my-24 lg:grid-cols-3 md:grid-cols-2'>
            <CardInfo CardDescribe={'24hours our sevice opern'} CardTitle={'Opening Hours'} bgClass={'bg-gradient-to-r from-primary to-secondary'} img={clock}></CardInfo>
            <CardInfo CardDescribe={'Brooklyn, NY 10036, United States'} CardTitle={'Visit our location'} bgClass={'bg-accent'} img={marker}></CardInfo>
            <CardInfo CardDescribe={'+000 123 456789'} CardTitle={'Contact us now'} bgClass={'bg-gradient-to-r from-primary to-secondary'} img={phone}></CardInfo>
        </div>
    );
};

export default Info;