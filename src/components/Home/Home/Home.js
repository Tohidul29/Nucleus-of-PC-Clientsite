import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Business_summary from '../Business_summary/Business_summary';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Business_summary></Business_summary>
            <Footer></Footer>
        </div>
    );
};

export default Home;