import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment,refetch}) => {
    const [user] = useAuthState(auth);
    const { name, slots, _id } = treatment;
    const formatDate = format(date, 'PP');
    const handleBooking = event => {
        event.preventDefault()

        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // to close the modal
                if (data.success) {
                    toast(`Appointment is set, ${formatDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setTreatment(null)
                refetch()
            })



    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom lg:modal-middle sm:modal-middle">
                <div className="modal-box ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle mt-4 mr-4 absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary ml-14 text-lg py-4">{name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-4 ml-14'
                    >
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <button className='btn btn-secondary text-white font-bold w-1/2' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;