import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'
import image3 from '../../images/image3.jpg'
import image4 from '../../images/image4.jpg'

const Banner = () => {
    return (
        <Carousel infiniteLoop useKeyboardArrows autoPlay interval={5000} showThumbs={false} showStatus={false}>
            <div className='w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden'>
                <img alt='banner' src={image1} className='w-full  h-full object-cover  '/>
            </div>
            <div className='w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden'>
                <img alt='banner' src={image2} className='w-full  h-full object-cover ' />
            </div>
            <div className='w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden'>
                <img alt='banner' src={image3} className='w-full h-full  object-cover '/>
                
            </div>
            <div className='w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden'>
                <img alt='banner' src={image4} className='w-full h-full  object-cover '/>
                
            </div>
        </Carousel>
    );
};

export default Banner;