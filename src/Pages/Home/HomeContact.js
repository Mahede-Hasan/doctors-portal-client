import React from 'react';
import appointmentBg from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const HomeContact = () => {
    return (
        <section 
        style={{
            background: `url(${appointmentBg})`,
            backgroundSize: 'cover'
        }}
        className='py-12 mb-24'>
            <div className="text-center py-8">
            <h5 className='text-primary text-xl'>Contact Us</h5>
            <h2 className='text-4xl text-white'>Stay connected with us</h2>
            </div>
            <form> 
                <input className='w-96 py-2 rounded pl-2 mb-0.25 mx-auto block' type="email" name="email" placeholder='Email' required id="" />
                <br />
                <input className='w-96 py-2 rounded pl-2 mb-0.25 mx-auto block' type="text" name="subject" placeholder='Subject' required id="" />
                <br />
                <textarea className='w-96 py-2 rounded pl-2 mb-0.25 mx-auto block' placeholder='Your Message' name="" id="" cols="40" rows="5" required ></textarea>
                <button className="btn btn-secondary bg-gradient-to-r from-primary to-secondary text-white bold uppercase mx-auto block my-6  px-6 text-lg">Get Started</button>
            </form>
            
        </section>
    );
};

export default HomeContact;