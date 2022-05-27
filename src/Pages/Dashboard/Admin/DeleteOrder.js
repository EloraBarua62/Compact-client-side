import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrder = ({ removeOrder, setRemoveOrder }) => {
    console.log(removeOrder)
    const confirmDelete = id => {
        const url = `https://shielded-castle-46219.herokuapp.com/manage_order/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                toast.success('Order removed');
                setRemoveOrder(null);
            })
    }
    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-2xl font-bold'>Item</h3>
                    <h3 className='text-lg font-bold'>Purchaser name : {removeOrder.name}</h3>
                    <h3 className='text-lg font-bold'>Purchaser email : {removeOrder.email}</h3>
                    <h3 className='text-lg font-bold'>Product ID : {removeOrder._id}</h3>
                    <h3 className='text-lg font-bold'>Product name : {removeOrder.partsName}</h3>
                    <div class="avatar">
                        <div class="w-20 rounded">
                            <img src={removeOrder.img} alt="compact" />
                        </div>
                    </div>

                    <h3 class="font-bold text-lg">Do you want to cancel the order?</h3>
                    {/* <button onClick={() => confirmDelete(removeOrder._id)} className='btn btn-error'>Yes</button>*/}
                    <div class="modal-action"> 
                        <button onClick={() => confirmDelete(removeOrder._id)} for="order-modal" className='font-medium text-lg p-3 bg-purple-600 text-white hover:bg-purple-800'>Yes</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteOrder;