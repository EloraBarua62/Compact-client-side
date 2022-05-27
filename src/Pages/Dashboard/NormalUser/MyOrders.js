import { React, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import SingleOrder from './SingleOrder';
import Loading from '../../../Shared/Loading'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()

    const url = `https://shielded-castle-46219.herokuapp.com/my_orders?email=${user?.email}`


    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    toast.warning('Your access has been cancaled')
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }

                return res.json()
            })
            .then(data => {
                console.log(data);
                setOrders(data);
            })
    }, [navigate, url,user])


    // const { data: orders, isLoading, refetch } = useQuery('my_order', 
    // () => fetch(url)
    // .then(res => res.json()))

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {orders.length ? <>
                <h1 className='text-xl font-bold py-5'>All orders list</h1>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Serial no</th>
                                <th>Product name</th>
                                <th>Product image</th>
                                <th>Quantity</th>
                                <th>User info</th>
                                <th>Payment</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <SingleOrder
                                    key={order._id}
                                    order={order}
                                    index={index}
                                // refetch={refetch}
                                ></SingleOrder>)
                            }
                        </tbody>
                    </table>
                </div>
            </> : <h1 className='text-3xl font-bold  py-10'>Check dashboard options on the left side</h1>}
        </div>
    );
};

export default MyOrders;