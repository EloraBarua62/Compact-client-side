import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import google from '../../images/GoogleIcon.ico';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;

    // Foem submit
    const onSubmit = data => {
        const email = data.email
        const password = data.password;
        
        signInWithEmailAndPassword(email,password);
    };

    if(loading || gloading){
        return <Loading></Loading>;
    }
        
    if(user || guser){
        navigate(from, { replace: true });
    }

    if (error || gerror) {
        errorMessage = <p className='text-red-600'>{error.message}</p>
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="email"
                            class="input input-bordered w-full max-w-xs my-2"
                            placeholder='Your email'
                            {...register("email", {
                                required: {
                                    value:true,
                                    message:'Insert email'
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
                                }
                               
                            })
                            } />
                        
                        <input type="submit" class="input input-bordered w-full max-w-xs my-2 hover:bg-black hover:text-white" value='Login'/>

                        <label class="label">
                            
                            <div>
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                
                            </div>
                            <div>
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                
                            </div>

                        </label>
                        {errorMessage}
                    </form>

                    <div class="divider-vertical">OR</div>
                    <div className='flex justify-center gap-2'>
                        <h2 className='text-xl font-bold text-blue-900'>Login with</h2>
                        <button onClick={() => signInWithGoogle()}>
                            <img src={google} alt="" className='w-8 h-8' />
                        </button>
                    </div>
                    <Link to='/signup'>New to COMPACT?</Link>
                    
                </div>
            </div>

        </div>
    );
};

export default Login;