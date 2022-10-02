import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';
import SingleService from './SingleService';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    const services = [
        { _id: 1, img: fluoride, name: 'Fluoride Treatment', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
        { _id: 2, img: cavity, name: 'Cavity Filling', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
        { _id: 3, img: teeth, name: 'Teeth Whitening', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' }
    ]
    return (
        <div className='service-container mt-32 mb-12'>
            <div className="text-center font-semibold">
                <h6 className=' text-primary uppercase text-xl'>Our Service</h6>
                <h1 className=' text-4xl'>Service we provide</h1>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-24">
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
            <div className="service min-h-screen ">
                <div className="hero-content grid mx-24 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <img src={treatment} alt='' style={{height: '476px'}} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">DENTAL CENTRE</h1>
                        <p className="py-6">A comprehensive Dental Centre became operational at United Hospital on 29th April 2012. The Dental Centre has been set up with the aim to provide an international standard dental treatment facility to satisfy and meet the demands of our community.Our dentists Dr Md. Nazrul Islam and Dr Lutfun Nahar both completed their Masters from National University of UK and have a 5-years working experience in UK.</p>
                        <PrimaryButton></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;