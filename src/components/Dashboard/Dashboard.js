import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-8 ml-4">
                <h2 className='font-bold text-3xl mb-5 text-[#120E43]'>Welcome to Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 text-white bg-primary">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/addreview'>Add A Review</Link></li>
                    <li><Link to='/dashboard/myorder'>My Orders</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;