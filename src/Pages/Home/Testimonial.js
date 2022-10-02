import React from 'react';
import quote from '../../assets/icons/quote.svg';
import TestimonialReview from './TestimonialReview';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonial = () => {
    const reviewsPeople = [
        { _id: 1, img: people1, description: 'The services that I receive from (DN) is excellent. Dr. Winson Herry and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends.', name: 'Winson Herry', address: 'California' },
        { _id: 2, img: people2, description: 'Dr. Emma did a great job with my first ever health exam. She explained everything to me in a very clear manner. She was also kind and friendly. All of the staff was great they were helpful, patient and helped with my insurance.', name: 'Emma', address: 'Barlin' },
        { _id: 3, img: people3, description: 'Dr. Larry is a great doctor! He’s very understanding and listens to your concerns. He takes time with the patient to help them with their health issues! I highly recommend him to anyone looking for a specialist.', name: 'Larry', address: 'Denver' }
    ]
    return (
        <div className=''>
            <div className="testimonial-header flex justify-between pb-12">
                <div className="">
                    <h3 className='text-primary text-xl pb-2'>Testimonial</h3>
                    <h1 className='text-4xl '>What Our Patients Says</h1>
                </div>
                <div className="">
                    <img src={quote} style={{ width: '192px', height: '156' }} alt="" />
                </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
                {
                    reviewsPeople.map(review => <TestimonialReview
                        key={review._id}
                        review={review}
                    ></TestimonialReview>)
                }
            </div>
        </div>
    );
};

export default Testimonial;