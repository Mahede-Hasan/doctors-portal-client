import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    let activeStyle = {
        backgroundColor: 'lightgray',
    };

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-5xl font-bold text-blue-500 pt-4 pl-4'>Dashboard</h1>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard' className='mb-2 text-black font-bold' style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>My Appointment</NavLink></li>
                    <li><NavLink to='/dashboard/myreview' className='mb-2 text-black font-bold' style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>My Review</NavLink></li>
                    <li><NavLink to='/dashboard/history' className='mb-2 text-black font-bold' style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Treatment History</NavLink></li>
                    {admin && <li><NavLink to='/dashboard/user' className='mb-2 text-black font-bold' style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>All User</NavLink></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;