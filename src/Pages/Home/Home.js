import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusnissSummary';
import HomeParts from './HomeParts'
import Person from './Person';
import Question from './Question';
import RatingReview from './RatingReview';
import WebsiteDetails from './WebsiteDetails';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WebsiteDetails></WebsiteDetails>
            <HomeParts></HomeParts>
            <RatingReview></RatingReview>
            <BusinessSummary></BusinessSummary>
            <Person></Person>
            <Question></Question>
        </div>      
    );
};

export default Home;