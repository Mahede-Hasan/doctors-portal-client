import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('https://shielded-plains-83097.herokuapp.com/service').then(res => res.json()))

    const imageStorageKey = 'ca0d2fb430f1f2d53eb594915f50d99d';

    const onSubmit = async (data) => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send to your database
                    fetch('https://shielded-plains-83097.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                reset()
                                toast.success('doctor added successfully')

                            }
                            else {
                                toast.error('failed to added doctor')
                                reset()
                            }
                        })
                }
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div >
            <h1 className="text-2xl pl-4 py-2 text-purple-500 text-center">Add a Doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs mx-auto block">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text"
                        name='name'
                        placeholder="Enter Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        name='email'
                        autoComplete='off'
                        placeholder="Enter Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Please valid email address'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>

                    <label className="label">
                        <span className="label-text">Spacialist</span>
                    </label>
                    <select {...register('specialty')} class="select input-bordered w-full max-w-xs mb-4">
                        {
                            services.map(s => <option key={s._id} value={s.name}>{s.name}</option>)
                        }
                    </select>

                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"

                        className="input input-bordered w-full max-w-xs pt-2"
                        {...register("image")}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>


                    <button className='btn btn-accent text-white w-full font-bold'>ADD</button>

                </div>
            </form>
        </div>
    );
};

export default AddDoctor;