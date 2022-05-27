import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    // console.log(part._id);
    const navigate = useNavigate();

    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card card-compact w-60 bg-base-100 shadow-xl shadow-purple-400">
            <figure><img src={part.img} alt="Shoes" /></figure>
            <div class="card-body text-left">
                <h2 class="card-title">{part.name}</h2>
                <p className='text-lg'>{part.description}</p>
                <h2 class="text-lg">Availability : {part.available_quantity}</h2>
                <h2 class="text-md">Minimum order : {part.minimum_order}</h2>
                
                <h2 class="text-md">Price : {part.price} per unit</h2>
                <div class="card-actions justify-start">
                    <button onClick={() => handlePurchase(part._id)} class="py-2 px-3 bg-red-600 rounded-md text-white font-medium text-lg">Purcase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;