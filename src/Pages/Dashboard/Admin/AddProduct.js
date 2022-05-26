import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageAPIKey = 'a693f93ac43fe53804e6101b2d7eafaa';


    const onSubmit = async data => {
        const formData = new FormData();
        const img = data.image[0];
        formData.append('image', img);

        const url = `https://api.imgbb.com/1/upload?key=${imageAPIKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const part = {
                        name: data.name,
                        img: image,
                        description: data.description,
                        minimum_order: data.minimum_order,
                        available_quantity: data.available_quantity,
                        price: data.price
                    }

                    fetch(`https://shielded-castle-46219.herokuapp.com/parts`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(part)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted)
                            if (inserted.insertedId) {
                                toast.success('New computer parts added successfully')
                                reset();
                            }
                            else {
                                toast.error("Failed to add new computer parts")
                            }
                        })

                }
            })
    }

    return (
        <div>
            <h1>Add Computer Parts</h1>
            <div className='flex justify-center items-center h-screen'>
                <div class="card w-9/12 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-3xl font-bold">Product Info Form</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex-col'>
                            <input
                                type="text"
                                class="input input-bordered w-full max-w-2xl my-2"
                                placeholder='Product Name'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Product name is required'
                                    }
                                })
                                } />
                            <textarea
                                class="textarea textarea-bordered w-full max-w-2xl my-2"
                                placeholder='Product Description'
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Add product description for more clarify'
                                    }
                                })
                                } />
                            <input
                                type="number"
                                class="input input-bordered w-full max-w-2xl my-2"
                                placeholder='Total Product Quantity'
                                {...register("available_quantity", {
                                    required: {
                                        value: true,
                                        message: 'Total Product Quantity is required'
                                    }
                                })
                                } />
                            <input
                                type="number"
                                class="input input-bordered w-full max-w-2xl my-2"
                                placeholder='Minimum Order Quantity'
                                {...register("minimum_order", {
                                    required: {
                                        value: true,
                                        message: 'Minimum Order Quantity is required'
                                    }
                                })
                                } />
                            <input
                                type="number"
                                class="input input-bordered w-full max-w-2xl my-2"
                                placeholder='Price per unit'
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is required'
                                    }
                                })
                                } />

                            <input
                                type="file"
                                class="input input-bordered w-full max-w-2xl my-2"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Upload Image'
                                    }
                                })} />

                            <label class="label">
                                <div>
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                                </div>
                                <div>
                                    {errors.description?.type === 'required' && <span class="label-text-alt text-red-600">{errors.description.message}</span>}

                                </div>
                                <div>
                                    {errors.available_quantity?.type === 'required' && <span class="label-text-alt text-red-600">{errors.available_quantity.message}</span>}
                                </div>
                                <div>
                                    {errors.minimum_order?.type === 'required' && <span class="label-text-alt text-red-600">{errors.minimum_order.message}</span>}
                                </div>
                                <div>
                                    {errors.price?.type === 'required' && <span class="label-text-alt text-red-600">{errors.price.message}</span>}
                                </div>
                                <div>
                                    {errors.img?.type === 'required' && <span class="label-text-alt text-red-600">{errors.img.message}</span>}
                                </div>

                            </label>
                            <input type="submit" class="input input-bordered w-full max-w-xs my-2 font-medium text-lg bg-purple-600 text-white hover:bg-purple-300 hover:text-black" />

                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;