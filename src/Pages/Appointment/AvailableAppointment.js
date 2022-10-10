import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import ServiceAvailable from './ServiceAvailable';
import Loading from '../Shared/Loading';


const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://shielded-plains-83097.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-12 px-12'>
            <h2 className='text-secondary text-center font-bold text-3xl'> Available Appointment  {format(date, 'PP')}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12'>
                {
                    services?.map(service => <ServiceAvailable
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></ServiceAvailable>)
                }
                {
                    treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch}></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;