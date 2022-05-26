import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const UserReview = () => {
    const {data, isLoading} = useQuery('allReviews', ()=> fetch('http://localhost:5000/reviews').then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Total review: {data.length}</h2>
        </div>
    );
};

export default UserReview;