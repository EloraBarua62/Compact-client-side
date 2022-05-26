import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content bg-slate-100 p-4">
                <h1 className='text-3xl font-bold'>DashBoard</h1>
                {/* <!-- Page content here --> */}
                {/* <label for="dashboard-sidebar" class="btn btn-primary drawer-button">Open drawer</label> */}
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && <li><Link to='/dashboard'>My Orders</Link></li>}
                    {!admin && <li><Link to='/dashboard/add_review'>Add Review</Link></li>}
                    <li><Link to='/dashboard/my_profile'>My Profile</Link></li>
                    {admin && <li><Link to='/dashboard/manage_orders'>Manage Orders</Link></li>}
                    {admin && <li><Link to='/dashboard/manage_products'>Manage Products</Link></li>}
                    {admin && <li><Link to='/dashboard/add_product'>Add Product</Link></li>}
                    {admin && <li><Link to='/dashboard/make_admin'>Make Admin</Link></li>}

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;