import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
console.log(user)
    useEffect(() => {
        if (user) {
            const url = `http://localhost:5000/booking?patient=${user.email}`
            fetch(url)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }
    }, [user])

    return (
        <div>
            <h1 className='text-2xl py-4 text-purple-500 font-bold'>My Appointment {appointments.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map( (a,index)=><tr>
                            <th>{index+1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.treatment}</td>
                            <td>{a.date}</td>
                    
                        </tr>)
                }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;