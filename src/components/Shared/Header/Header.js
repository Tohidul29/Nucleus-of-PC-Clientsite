import { faComputer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems =
        <>
            <li tabIndex="0"><Link to='/home'>Home</Link></li>
            <li tabIndex="1"><Link to='/blogs'>Blogs</Link></li>
            <li tabIndex="2"><Link to='/login'>Login</Link></li>
            <li tabIndex="3"><Link to='/register'>Register</Link></li>
        </>
    return (
        <div className="navbar bg-[#03203C] text-yellow-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#03203C] text-yellow-50 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><FontAwesomeIcon icon={faComputer} className="mr-4"/> Nucleus of PC</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 bg-[#03203C]">
                    {menuItems}
                </ul>
            </div>
        </div>
        
    );
};

export default Header;