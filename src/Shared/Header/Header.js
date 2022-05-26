import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import image from '../../images/computer.jpg'

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
        navigate('/');
    }

    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/portfolio'>My Portfolio</NavLink></li>
        {/* <li><NavLink to='/dashboard'>Dashboard</NavLink></li> */}
        <li>
            {
                user ? <>
                    <button onClick={handleLogout}>Log out</button>
                    <NavLink to='/dashboard'>Dashboard</NavLink></>
                    :
                    <NavLink to='/login'>Log in</NavLink>
            }
        </li>

    </>
    return (
        <div class="navbar bg-slate-50 drop-shadow-md sticky top-0 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                        {menuItems}
                    </ul>
                </div>
                <NavLink to='/'>
                    <div class="avatar lg:mr-2">
                        <div class="w-16 rounded-full">
                            <img src={image} alt="compact" />
                        </div>
                    </div>
                </NavLink>
                <Link to='/' class="text-2xl md:text-4xl italic font-bold text-purple-600">COMPACT</Link>
            </div>
            <div class="navbar-center hidden lg:flex ">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-end">
                <h1 className='text-purple-600 text-base md:text-lg font-bold pl-2'>{user?.displayName}</h1>
                <label tabindex="0" class="btn btn-ghost lg:hidden" for="dashboard-sidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    );
};

export default Header;