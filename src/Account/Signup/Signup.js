import React from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            class="input input-bordered w-full max-w-xs my-2"
                            placeholder='Your name'
                            {...register("name", {
                                required: true,
                                maxLength: 15
                            })
                            } />
                        <input
                            type="email"
                            class="input input-bordered w-full max-w-xs my-2"
                            placeholder='Your email'
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Za-z]+$/i
                            })
                            } />
                        <input
                            type="password"
                            class="input input-bordered w-full max-w-xs my-2"
                            placeholder='Password'
                            {...register("password", {
                                required: true,
                                pattern: /^[A-Za-z]+$/i
                            })
                            } />
                        <input
                            type="password"
                            class="input input-bordered w-full max-w-xs my-2"
                            placeholder='Confirm password'
                            {...register("confirm_password", {
                                required: true, pattern: /^[A-Za-z]+$/i
                            })
                            } />
                        <input type="submit" class="input input-bordered w-full max-w-xs my-2"/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Signup;