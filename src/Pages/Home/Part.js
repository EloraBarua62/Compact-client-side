import React from 'react';

const Part = ({part}) => {
    console.log(part._id);
    return (
        <div class="card card-compact w-60 bg-base-100 shadow-xl">
            <figure><img src={part.img} alt="Shoes" /></figure>
            <div class="card-body text-left">
                <h2 class="card-title">{part.name}</h2>
                <p>{part.description}</p>
                <h2 class="text-lg">Minimum order : {part.minimum_order}</h2>
                <h2 class="text-md">Availability : {part.available_quantity}</h2>
                <h2 class="text-md">Price : {part.price}</h2>
                <div class="card-actions justify-start">
                    <button class="btn btn-primary">Purcase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;