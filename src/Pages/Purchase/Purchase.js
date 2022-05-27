import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import usePartsId from '../../hooks/usePartsId';

const Purchase = () => {
    const { id } = useParams();
    const [part] = usePartsId(id);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    // const [quantityError, setQuantityError] = useState('');

    // console.log(user)

    const handleForm = event => {
        event.preventDefault();
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const quantity = event.target.quantity.value;

        const order = {
            partsId: part._id,
            partsImg: part.img,
            partsName: part.name,
            name: user.displayName,
            email: user.email,
            location: location,
            phone: phone,
            quantity: quantity,
            price: part.price
        }

        console.log(order);
        fetch('https://shielded-castle-46219.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Your order has been placed');
                navigate('/');
            })
    }

    // const handleQuantity = event => {
    //     const quantity = event.target.quantity.value;
    //     if (quantity < part.minimum_order) {
    //         setQuantityError("You can't order less than minimum order quantity");
    //     }
    //     else if (quantity > part.minimum_order) {
    //         setQuantityError("You can't order more than available quantity");
    //     }
    //     else
    //         setQuantityError('');
    // };

    return (
        <div className='flex-col justify-center my-20'>
            <h1 className='text-4xl font-bold text-purple-700 mb-5'>Product Details</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 border-2 rounded-md shadow-2xl shadow-purple-500 mx-10 px-5'>
                <img src={part.img} alt="" className='w-3/4'/>
                <div className='my-auto'>
                    <h1 className='text-2xl font-medium'>Product name : {part.name}</h1>
                    <p className='text-xl font-medium'>Description : {part.description}</p>
                    <h1 className='text-lg font-medium'>Available quantity : {part.available_quantity}</h1>
                    <h1 className='text-lg font-medium'>Minimum order quantity : {part.minimum_order}</h1>
                    <h1 className='text-md font-medium'>Price : ${part.price}</h1>
                </div>
            </div>


            <div className='flex w-full justify-center mt-36'>
                <div class="card w-1/2 bg-base-100 shadow-2xl shadow-purple-500">
                    <div class="card-body">
                        <h3 class="font-bold text-lg">Purcheser Information</h3>
                        <form onSubmit={handleForm} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                            <input type="text" name='name' disabled defaultValue={user?.displayName} placeholder="Name" class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='email' disabled defaultValue={user?.email} placeholder="Email" class="input input-bordered w-full max-w-xs" />
                            <textarea name='location' placeholder="Location" class="input input-bordered w-full max-w-xs" />
                            <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />

                            <h2>Add quantity</h2>
                            <input type="number" name='quantity' min={part.minimum_order} max={part.available_quantity} placeholder="Quantity" class="input input-bordered w-full max-w-xs" />
                            <input type="submit" valaue="Submit" class="input input-bordered w-full max-w-xs bg-purple-600 text-white hover:bg-purple-800 font-bold text-xl" />
                            {/* {quantityError}
                            {
                                quantityError.length ?
                                    <input type="submit" valaue="Submit" class="input input-bordered w-full max-w-xs" disabled />
                                    :
                                    <input type="submit" valaue="Submit" class="input input-bordered w-full max-w-xs" />
                            } */}

                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;