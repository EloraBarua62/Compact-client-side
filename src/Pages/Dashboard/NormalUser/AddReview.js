import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageAPIKey = 'a693f93ac43fe53804e6101b2d7eafaa';
    const [user] = useAuthState(auth);

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
                    const userProfile = {
                        name: user.displayName,
                        img: image,
                        email: user.email,
                        review: data.review,
                        rating: data.rating
                    }

                    fetch(`https://shielded-castle-46219.herokuapp.com/user_rating`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(userProfile)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted)
                            toast.success('Rating and review posted successfully')
                            reset();
                            // if (inserted.insertedId) {
                            //     toast.success('Rating and review posted successfully')
                            //     reset();
                            // }
                            // else {
                            //     toast.error("Failed to post rating and review")
                            // }
                        })

                }
            })
    }
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div class="card w-9/12 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-3xl font-bold">Add Rating and Review</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex-col'>

                            <textarea
                                class="textarea textarea-bordered w-full max-w-2xl my-2"
                                placeholder='Review'
                                {...register("review", {
                                    required: {
                                        value: true,
                                        message: 'Add review'
                                    }
                                })
                                } />
                            <input
                                type="number"
                                class="input input-bordered w-full max-w-2xl my-2"
                                min={1}
                                max={5}
                                placeholder='Rating'
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Rating is required'
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
                            </label>
                            <input type="submit" class="input input-bordered w-full max-w-xs my-2  font-medium text-lg bg-purple-600 text-white hover:bg-purple-300 hover:text-black" />

                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddReview;