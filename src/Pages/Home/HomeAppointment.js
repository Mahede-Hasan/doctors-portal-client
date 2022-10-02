import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';
const HomeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className="flex justify-center items-center mb-24">

            <div className="flex-1 hidden lg:block">
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className="flex-1 px-12 pb-12">
                <h2 className='text-primary py-4 text-2xl'>Appointment</h2>
                <h1 className='text-4xl text-white pb-4'>Make an appointment Today</h1>
                <p className='text-white pb-4'>Dr. Ronal worked in Stamfond Dental College, California as Assistant Professor and Head, Department of Orthodontics from October 2012 to April 2013. Thereafter he joined  as  Assistant Professor in Department of Orthodontics  of California State Medical University, Dhaka (CSMUD)  in June 2013. He has more than 14 years clinical experience in Dental Surgery and Orthodontic. He is the member of California Orthodontic Society.</p>
                <PrimaryButton></PrimaryButton>
            </div>

        </section>
    );
};

export default HomeAppointment;