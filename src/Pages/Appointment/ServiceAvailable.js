import React from 'react';

const ServiceAvailable = ({ service }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another day</span>
                    }</p>
                    <p className={!slots.length && 'text-red-500'}>{slots.length} {slots.length ? 'spaces' : 'space'} Available</p>
                    <div className="card-actions justify-start">
                        <button disabled={slots.length === 0} className="btn btn-secondary uppercase font-bold text-white">Book available</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAvailable;