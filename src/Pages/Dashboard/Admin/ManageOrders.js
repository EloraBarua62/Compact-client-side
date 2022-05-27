import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../Shared/Loading';
import DeleteOrder from './DeleteOrder';

const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('manageOrders', () => fetch('https://shielded-castle-46219.herokuapp.com/manage_orders')
        .then(res => res.json()))

    const [removeOrder, setRemoveOrder] = useState(null);
    const [pending, setPending] = useState(true);

    const handlePending = () => {
        setPending(false);
        toast.success('Order shipped successfully');
        refetch();
    }

    if (isLoading)
        return <Loading></Loading>
    return (
        <div>
            <h1 className='text-xl font-bold'>Manage All Orders</h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Serial no</th>
                            <th>User info</th>
                            <th>Location</th>
                            <th>Product ID</th>
                            <th>Product name</th>
                            <th>Product image</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>

                                <th>{index + 1}</th>
                                <td>
                                    <div>
                                        <div class="font-bold">{order.name}</div>
                                        <div class="text-sm opacity-50">{order.email}</div>
                                    </div>
                                </td>
                                <td>{order.location}</td>
                                <td>{order.partsId}</td>
                                <td>{order.partsName}</td>
                                <td>
                                    <div class="avatar">
                                        <div class="w-20 rounded border-2">
                                            <img src={order.partsImg} alt="compact" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {(order.price && !order.paid) && <span className='text-red-500 text-lg font-bold'>UNPAID</span>}
                                    {(order.price && order.paid && pending) && <button onClick={handlePending} className='btn btn-sm btn-primary text-lg text-black hover:text-white'>PENDING</button>}
                                    {(order.price && order.paid && !pending) && <span className='text-green-700 text-lg font-bold'>SHIPPED</span>}

                                </td>
                                <td>{(order.price && !order.paid) && <label for="order-modal" class="btn modal-button" onClick={() => setRemoveOrder(order)}><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg></label>}
                                    {(order.price && order.paid) && <span className='text-green-700 text-lg font-bold'>ACTIVE USER</span>}

                                </td>

                            </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>
            {removeOrder && <DeleteOrder removeOrder={removeOrder} setRemoveOrder={setRemoveOrder}></DeleteOrder>}
        </div>
    );
};

export default ManageOrders;