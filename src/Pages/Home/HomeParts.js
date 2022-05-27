import React from 'react';
import useParts from '../../hooks/useParts';
import Part from './Part';

const HomeParts = () => {
    const [parts] = useParts();
    // const parts_array = parts.reverse();
    return (
        <div className='bg-zinc-50 py-20'>
            <h1 className='text-4xl font-bold pb-10 text-purple-600'>OUR PRODUCTS </h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                    {
                        parts.slice(0,6).map(part => <Part
                            key={part._id}
                            part={part}
                        ></Part>)
                    }
                </div>

            </div>
        </div>
    );
};

export default HomeParts;