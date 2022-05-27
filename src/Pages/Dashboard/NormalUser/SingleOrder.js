import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePartsId from '../../../hooks/usePartsId';
import DeleteOrder from '../Admin/DeleteOrder';

const SingleOrder = ({order,index,refetch}) => {
    const [removeOrder, setRemoveOrder] = useState(null);

    // const  partsId order?.partsId;

    // const [part] = usePartsId(order?.partsId);
    console.log(order.partsId);
    return (
        <tr>
            <th>{index+1}</th>
            <td>{order.partsName}</td>
            <td>
                <div class="avatar">
                    <div class="w-20 rounded">
                        <img src={order.partsImg} alt="compact" />
                    </div>
                </div>
            </td>
            <td>{order.quantity}</td>
            <td>
                <div>
                    <div class="font-bold">{order.name}</div>
                    <div class="text-sm opacity-50">{order.email}</div>
                </div>
            </td>
            <td>
                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success btn-sm text-base font-bold'>Pay</button></Link>}
                {(order.price && order.paid) && <span className='text-purple-700 text-lg font-bold'>PAID</span>}
               
            </td>
            <td>{(order.price && !order.paid) && <label for="order-modal" class="btn modal-button" onClick={() => setRemoveOrder(order)}><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg></label>}
                {(order.price && order.paid) && <span className='text-green-700 text-lg font-bold'>Already paid</span>}

                {removeOrder && <DeleteOrder removeOrder={removeOrder} setRemoveOrder={setRemoveOrder}></DeleteOrder>}
            </td>
        </tr>
    );
};

export default SingleOrder;