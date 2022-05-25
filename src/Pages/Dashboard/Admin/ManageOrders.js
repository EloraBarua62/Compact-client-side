import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';
import DeleteOrder from './DeleteOrder';

const ManageOrders = () => {

    const { data: orders, isLoading } = useQuery('manageOrders', () => fetch('http://localhost:4000/manage_orders')
        .then(res => res.json()))

    const [removeOrder, setRemoveOrder] = useState(null);

    if(isLoading)
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
                                <td><button className='btn btn-xs bg-green-700 text-white'>Paid</button> </td>                              
                                <td><label for="order-modal"  onClick={() => setRemoveOrder(order)}><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg></label></td>

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