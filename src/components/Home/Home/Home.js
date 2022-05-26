import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import UserReview from '../../UserReview/UserReview';
import AddedProducts from '../AddedProducts/AddedProducts';
import Banner from '../Banner/Banner';
import BusinessSummary from '../Business_summary/BusinessSummary';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <AddedProducts></AddedProducts>
            <UserReview></UserReview>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;