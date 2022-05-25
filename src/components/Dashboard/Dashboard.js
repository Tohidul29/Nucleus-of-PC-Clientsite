import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start mt-8">
                <h2 className='font-bold text-3xl mb-5 text-[#120E43]'>Welcome to Dashboard</h2>
                <Outlet />
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Side Menu</label>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 text-white bg-primary">
                    <li><Link to='/myprofile'>My Profile</Link></li>
                    <li><Link to='/addreview'>Add A Review</Link></li>
                    <li><Link to='/dashboard/myorder'>My Orders</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;