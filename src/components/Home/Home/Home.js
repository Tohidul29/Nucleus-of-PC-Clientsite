import React from 'react';
import SecondSection from '../../SecondSection/SecondSection';
import Footer from '../../Shared/Footer/Footer';
import UserReview from '../../UserReview/UserReview';
import AddedProducts from '../AddedProducts/AddedProducts';
import Banner from '../Banner/Banner';
import BusinessSummary from '../Business_summary/BusinessSummary';
import FirstSection from '../FirstSection/FirstSection';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <AddedProducts></AddedProducts>
            <FirstSection></FirstSection>
            <UserReview></UserReview>
            <SecondSection></SecondSection>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;