import React from 'react';
import { Link } from 'react-router-dom';
import usePartsId from '../../../hooks/usePartsId';

const SingleOrder = ({order,index,refetch}) => {

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
                {/* {part.price && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-success btn-xs'>Pay</button></Link>} */}
                {/* {(order.price && order.paid) && <span className='text-success'>paid</span>} */}
            </td>
        </tr>
    );
};

export default SingleOrder;