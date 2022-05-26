import {React,useState,useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import SingleOrder from './SingleOrder';
import Loading from '../../../Shared/Loading'

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const url = `http://localhost:4000/my_orders?email=${user?.email}`
    const [orders , setOrders] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setOrders(data);
            // const accessToken = data.token;
            // localStorage.setItem('accessToken',accessToken);
        })
    },[url])
    

    // const { data: orders, isLoading, refetch } = useQuery('my_order', 
    // () => fetch(url)
    // .then(res => res.json()))

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h1 className='text-xl font-bold'>All orders list</h1>
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

        </div>
    );
};

export default MyOrders;