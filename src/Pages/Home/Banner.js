import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from '../../images/bram-naus-N1gUD_dCvJE-unsplash.jpg'
import image2 from '../../images/christian-wiediger-3GUW88tRmv8-unsplash.jpg'
import image3 from '../../images/daniel-lezuch-I4DcRJ_Evd8-unsplash.jpg'
import image4 from '../../images/nakul-QxPRz2oTOWo-unsplash.jpg'

const Banner = () => {
    return (
        <Carousel infiniteLoop useKeyboardArrows autoPlay interval={5000} showThumbs={false} showStatus={false}>
            <div>
                <img src={image1} className='h-[300px] md:h-[500px] lg:h-[600px] '/>
            </div>
            <div>
                <img src={image2} className='h-[300px] md:h-[500px] lg:h-[600px]' />
            </div>
            <div>
                <img src={image3} className='h-[300px] md:h-[500px] lg:h-[600px]'/>
                
            </div>
            <div>
                <img src={image4} className='h-[300px] md:h-[500px] lg:h-[600px]'/>
                
            </div>
        </Carousel>
    );
};

export default Banner;