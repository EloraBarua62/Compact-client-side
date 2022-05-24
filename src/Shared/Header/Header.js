import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogout = () =>{
        signOut(auth);
        navigate('/');
    }

    const menuItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li>
        {
            user ?
            <button onClick={handleLogout}>Log out</button>
            :
            <NavLink to='/login'>Log in</NavLink>
        }
        </li>
        
    </>
    return (
        <div class="navbar bg-slate-50 drop-shadow-md sticky top-0 z-50">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">COMPACT</a>
            </div>
            <div class="navbar-center hidden lg:flex ">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Header;