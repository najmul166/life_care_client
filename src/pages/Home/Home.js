import React from 'react';
import Amount from './Amount/Amount';
import Banner from './Banner/Banner';
import Frequently from './Frequently/Frequently';
import OneLine from './OneLine/OneLine';
import Services from './Service/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OneLine></OneLine>
            <Services></Services>
            <Frequently></Frequently>
            <Amount></Amount>
        </div>
    );
};

export default Home;