import React from 'react';
import person from '../../images/CEO.jpg'

const Person = () => {
    return (
        <div className='w-full  bg-slate-300 py-10'>
            <h1 className='text-3xl font-bold text-center'>Meet our CEO</h1>
        <div className='flex justify-center items-center w-full py-20'>           
            <div className='grid grid-cols-1 md:grid-cols-2 gap-40'>
                <img src={person} alt="" className='w-96 h-96 rounded-lg px-4'/>
                <div className='w-96 px-4'>
                    <p className='text-2xl font-medium pb-5'>I'm Richard.CEO of COMPACT.Working with all of my expert employee for many years.I'm here to know about your experience.Send us email,messages if you need us.</p>
                    <div className='bg-slate-400 rounded-lg'>
                        <form className='p-10 flex'>
                            <input type="email" name="" id="" className='border-2 border-slate-900 w-full p-2'/>
                            <button className='bg-slate-900 text-white p-2'>Submit</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Person;