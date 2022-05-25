import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import useParts from '../../../hooks/useParts';
import DeleteModal from './DeleteModal';

const ManageProducts = () => {
    const [parts] = useParts();
    const [removePart , setRemovePart] = useState(null);
    // const [remove , setRemove] = useState(false);


    // const handleDelete = part => {
    //     setRemovePart(part);
        // const url = `http://localhost:4000/manage_products/${id}`;
        // let remove = false;
        // <div>
        //     <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        //     <div class="modal modal-bottom sm:modal-middle">
        //         <div class="modal-box">
        //             <h3 class="font-bold text-lg">Are you sure you want to delete?</h3>
        //             <div class="modal-action">
        //                 {remove=true}
        //                 <label for="my-modal-6" class="btn">Yes</label>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // if (remove) {
        //     fetch(url, {
        //         method: 'DELETE'
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             toast('Deletion complete')
        //         })
        // }
    // }
    
    return (
        <div>
            <h1 className='text-xl font-bold'>Manage All Products</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Serial no</th>
                            <th>Product ID</th>
                            <th>Product name</th>
                            <th>Product image</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((part, index) => <tr class="hover">

                                <th>{index + 1}</th>
                                <td>{part._id}</td>
                                <td>{part.name}</td>
                                <td>
                                    <div class="avatar">
                                        <div class="w-20 rounded border-2">
                                            <img src={part.img} alt="compact" />
                                        </div>
                                    </div>
                                </td>
                                <td><label for="parts-modal" class="btn modal-button" onClick={() => setRemovePart(part)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg></label></td>
                               
                            </tr>
                            )
                        }

                    </tbody>
                </table>
                
            </div>
            {removePart && <DeleteModal removePart={removePart} setRemovePart={setRemovePart}></DeleteModal>}
        </div>
    );
};

export default ManageProducts;