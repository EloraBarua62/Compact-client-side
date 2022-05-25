import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ removePart, setRemovePart }) => {
    console.log(removePart)
    const confirmDelete = id => {
        const url = `http://localhost:4000/manage_products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                toast.success('Deletion complete');
                setRemovePart(null);
            })
    }
    return (
        <div>
           
            <input type="checkbox" id="parts-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="parts-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-2xl font-bold'>Item</h3>
                    <h3 className='text-lg font-bold'>ID : {removePart._id}</h3>
                    <h3 className='text-lg font-bold'>Product name : {removePart.name}</h3>
                    <div class="avatar">
                        <div class="w-20 rounded">
                            <img src={removePart.img} alt="compact" />
                        </div>
                    </div>

                    <h3 class="font-bold text-lg">Are you sure you want to delete?</h3>
                    {/* <button onClick={() => confirmDelete(removePart._id)} className='btn btn-error'>Yes</button>*/}
                    <div class="modal-action">
                        <button onClick={() => confirmDelete(removePart._id)} for="parts-modal" >Yes</button>
                    </div>
                </div>
            </div>


            {/* <!-- The button to open modal -->
            <label for="my-modal" class="btn modal-button">open modal</label>

            {/* <!-- Put this part before </body> tag-- > */}
            {/* <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="my-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default DeleteModal;