import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from '../../images/pavan-trikutam-avJ9uz9Qhcw-unsplash.jpg'
import image2 from '../../images/pexels-rachel-claire-4846461.jpg'

const Banner = () => {
    return (
        <Carousel infiniteLoop useKeyboardArrows autoPlay interval={5000} showThumbs={false} showStatus={false}>
            <div>
                <img src={image1} className='h-[300px] md:h-[500px]'/>
            </div>
            <div>
                <img src={image2} className='h-[300px] md:h-[500px]' />
            </div>
            <div>
                <img src={image1} className='h-[300px] md:h-[500px]'/>
                
            </div>
        </Carousel>
    );
};

export default Banner;