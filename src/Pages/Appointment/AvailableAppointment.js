import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceAvailable from './ServiceAvailable';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] =useState(null)

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }
    ,[])
    return (
        <div className='my-12 px-12'>
            <h2 className='text-secondary text-center font-bold text-3xl '>Available Appointment  {format(date, 'PP')}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12'>
                {
                    services.map(service => <ServiceAvailable
                    key={service._id}
                    service={service}
                    ></ServiceAvailable>)
                }
                {
                    services && <BookingModal treatment={treatment}></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;