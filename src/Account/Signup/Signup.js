import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Shared/Loading';
import google from '../../images/GoogleIcon.ico'

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const [message,SetMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = async data => {
        const email = data.email;
        const password = data.password;
        const confirm_password = data.confirm_password;
        console.log(data);
        if(password === confirm_password){
            SetMessage('');
            await createUserWithEmailAndPassword(email,password);
            await updateProfile({ displayName: data.name });
            toast.success('User created successfully');

        }
        else{
            SetMessage("Password didn't match");
        }
        
    };

    if(loading || gloading)
        return <Loading></Loading>;

    if(error || gerror)
        SetMessage(error.message);

    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Create Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            class="input input-bordered w-full max-w-xs my-2"
                            placeholder='Your name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Insert name'
                                },
                                maxLength: {
                                    value: 15,
                                    message: 'Invalid name' 
                                }
                            })
                            } />
                        <input
                            type="email"
                            class="input input-bordered w-full max-w-xs my-2"
                            placeholder='Your email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Insert email'
                                },
                                pattern:{
                                    value: /.+@.+\.[A-Za-z]+$/,
                                    message: 'Invalid email'

                                }
                            })
                            } />
                        <input
                            type="password"
                            class="input input-bordered w-full max-w-xs my-2"
                            placeholder='Password'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Insert password'
                                },
                                minLength: {
                                    value: 5,
                                    message: 'Minimum length is 5' 
                                }
                            })
                            } />
                        <input
                            type="password"
                            class="input input-bordered w-full max-w-xs my-2"
                            placeholder='Confirm password'
                            {...register("confirm_password", {
                                required: true
                            })
                            } />

                        <label class="label">
                            <div>
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}
                            </div>
                            <div>
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                            </div>
                            <div>
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                            </div>
                            
                        </label>
                        <input type="submit" class="input input-bordered w-full max-w-xs my-2 hover:bg-black hover:text-white"/>
                        <div>
                            <p className='text-md font-semibold text-red-700'>{message && message}</p>
                        </div>
                    </form>
                    <div class="divider-vertical">OR</div>
                    <div>
                        <button onClick={() => signInWithGoogle()}>
                            <img src={google} alt="" className='w-10 h-10 ' />
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Signup;