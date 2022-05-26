import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        fetch(`https://shielded-castle-46219.herokuapp.com/user_info/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.parse(data)
        })
            .then(res => res.json())
            .then(data => toast.success('Profile updated'))
    }
    return (
        <div className='p-20'>
            <h1 className='text-2xl font bold p-3'>User:{user?.displayName}</h1>
            <h1 className='text-xl font bold p-3'>Email{user?.email}</h1>
            <div className='flex justify-center items-center h-screen'>
                <div class="card w-9/12 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-3xl font-bold">User Info Form</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex-col'>
                            <input
                                type="text"
                                class="input input-bordered w-full max-w-2xl my-2"
                                placeholder='User Name'
                                {...register("name")
                                } />
                            <textarea
                                class="textarea textarea-bordered w-full max-w-2xl my-2"
                                placeholder='Email'
                                {...register("email")
                                } />
                            <input
                                type="number"
                                class="input input-bordered w-full max-w-2xl my-2"
                                placeholder='Education'
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'Phone number is required'
                                    }
                                })
                                } />
                            <input
                                type="number"
                                class="input input-bordered w-full max-w-2xl my-2"
                                placeholder='Location'
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: 'Location is required'
                                    }
                                })
                                } />
                            <input
                                type="number"
                                class="input input-bordered w-full max-w-2xl my-2"
                                placeholder='Phone number'
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone number is required'
                                    }
                                })
                                } />

                            <input
                                type="file"
                                class="input input-bordered w-full max-w-2xl my-2"
                                {...register("link", {
                                    required: {
                                        value: true,
                                        message: 'Upload Linked profile'
                                    }
                                })} />



                            <input type="submit" class="input input-bordered w-full max-w-xs my-2 font-medium text-lg bg-purple-600 text-white hover:bg-purple-300 hover:text-black" />

                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;