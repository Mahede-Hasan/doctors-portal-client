import React from 'react';

const TestimonialReview = (props) => {
    const { name, img, description, address } = props.review;
    return (
        <div className='rounded shadow-lg my-4'>
            <div className="box mx-4 pl-4">
                <p>{description}</p>
                <div className='flex items-center pt-4 pb-6'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='pl-6'>
                        <h5>{name}</h5>
                        <h6>{address}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialReview;