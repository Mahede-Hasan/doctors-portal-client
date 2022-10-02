import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import backgroundBanner from '../../assets/images/bg.png';

const BannerAppointment = ({date, setDate}) => {
    
    return (
        <section className='mb-24'
        style={{
            background: `url(${backgroundBanner})`
        }}
        >
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row sm:flex-row-reverse">
                   <div className='mx-8'>
                   <DayPicker 
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    ></DayPicker>
                   </div>
                    <div><img src={chair} alt=''  className="mx-auto lg:w-[100%] lg:h-[300px] md:w-[100%] md:h-[200px] rounded-lg shadow-2xl" /></div>
                </div>
            </div>
        </section>
    );
};

export default BannerAppointment;