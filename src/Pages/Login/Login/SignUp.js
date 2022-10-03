import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()

    if (gUser || user) {
        console.log(gUser, user);
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    let errorElement;
    if (gError || error || updateError) {
        errorElement = <p>{error?.message || gError?.message || updateError?.message}</p>
    }

    const onSubmit = async (data) => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate("/appointment")
    };

    return (
        <div className='my-8 flex justify-center items-center'>
            <div className="card w-96  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-4xl">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
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
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Enter Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character or longer'
                                    }

                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                            {errorElement}
                            <button className='btn btn-accent text-white font-bold'>SignUp</button>
                            <p className='text-sm pt-2'>Already have an account? <Link to='/login' className='text-secondary pl-2'>Login</Link> </p>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;