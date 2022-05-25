import React from 'react';
import image from '../images/404-error-page-not-found.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={image} alt="" className='w-1/2 h-1/2'/>
        </div>
    );
};

export default NotFound;