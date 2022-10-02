import React, {useState} from 'react';
import Footer from '../Shared/Footer';
import BannerAppointment from './BannerAppointment';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <BannerAppointment date={date} setDate={setDate}></BannerAppointment>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;