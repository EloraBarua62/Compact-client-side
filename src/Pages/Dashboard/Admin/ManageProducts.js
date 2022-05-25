import React from 'react';
import useParts from '../../../hooks/useParts';

const ManageProducts = () => {
    const [parts] = useParts();
    console.log(parts.length)
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
                            parts.map((part, index) => <tr>

                                <th>{index + 1}</th>
                                <td>{part._id}</td>
                                <td>{part.name}</td>
                                <td>
                                    <div class="avatar">
                                        <div class="w-20 rounded">
                                            <img src={part.img} alt="compact" />
                                        </div>
                                    </div>
                                </td>
                                <td><button><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg></button></td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;