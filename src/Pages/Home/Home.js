import React from 'react';
import Banner from './Banner';
import HomeParts from './HomeParts'
import RatingReview from './RatingReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeParts></HomeParts>
            <RatingReview></RatingReview>
        </div>      
    );
};

export default Home;