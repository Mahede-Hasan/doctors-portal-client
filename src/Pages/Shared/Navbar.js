import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    let activeStyle = {
        backgroundColor: '#3A4256',
        color: 'white'
    };

    const logOut = () => {
        signOut(auth)
    }

    const navMenu = <>
        <NavLink className='px-4 py-2 font-semibold text-base' to='/home' style={({ isActive }) =>
            isActive ? activeStyle : undefined
        }>Home</NavLink>
        <NavLink className='px-4 py-2 font-semibold text-base' to='/about' style={({ isActive }) =>
            isActive ? activeStyle : undefined
        }>About</NavLink>
        <NavLink className='px-4 py-2 font-semibold text-base' to='/appointment' style={({ isActive }) =>
            isActive ? activeStyle : undefined
        }>Appointment</NavLink>
        <NavLink className='px-4 py-2 font-semibold text-base' to='/reviews' style={({ isActive }) =>
            isActive ? activeStyle : undefined
        }>Reviews</NavLink>
        <NavLink className='px-4 py-2 font-semibold text-base' to='/contactus' style={({ isActive }) =>
            isActive ? activeStyle : undefined
        }>Contact Us</NavLink>
        {
            user && <NavLink className='px-4 py-2 font-semibold text-base' to='/dashboard' style={({ isActive }) =>
                isActive ? activeStyle : undefined
            }>Dashboard</NavLink>
        }
        {user ?
            <NavLink onClick={logOut} className='px-4 py-2 font-semibold text-base border' >SignOut</NavLink> :
            <NavLink className='px-4 py-2 font-semibold text-base' to='/login' style={({ isActive }) =>
                isActive ? activeStyle : undefined
            }>Login</NavLink>}
    </>
    return (
        <div className="navbar bg-slate-100">
            <div className="navbar-start">
                <div className='navbar-center'>
                    <Link to='/home'><img className='ml-12' src={logo} style={{ width: '40px' }} alt="" /></Link>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal pr-3">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-center">
                <label tabIndex={1} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
            </div>

        </div>
    );
};

export default Navbar;