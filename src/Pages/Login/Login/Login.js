import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let location = useLocation();
    let navigate = useNavigate();

    let from = location.state?.from?.pathname || '/';

    if (gUser || user) {
        navigate(from, { replace: true });
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    let errorElement;
    if (gError || error) {
        errorElement = <p>{error?.message || gError?.message}</p>
    }


    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password);


    };


    return (
        <div className='my-8 flex justify-center items-center'>
            <div className="card w-96  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-4xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
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
                            <p className='text-sm pb-2'>Forget password <Link to='/' className='text-secondary pl-2'>Reset Password</Link></p>

                            {errorElement}
                            <button className='btn btn-accent text-white font-bold'>Login</button>
                            <p className='text-sm pt-2'>New to Doctor Service? <Link to='/signup' className='text-secondary pl-2'>SignUp</Link> </p>
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

export default Login;