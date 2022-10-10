import React from 'react';

const ServiceAvailable = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div>
            <div className="card my-6 lg:max-w-lg bg-base-100 pl-14 mx-4 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date</span>
                    }</p>
                    <p className={!slots.length && 'text-red-500'}>{slots.length} {slots.length ? 'spaces' : 'space'} Available</p>
                    <p><small>Price: ${price}</small></p>
                    <div className="card-actions justify-start">

                        <label htmlFor="booking-modal" disabled={slots.length === 0}
                            onClick={() => setTreatment(service)} className="btn btn-secondary uppercase font-bold text-white">Book available</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAvailable;