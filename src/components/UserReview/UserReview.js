import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Review from './Review';

const UserReview = () => {
    const {data, isLoading} = useQuery('allReviews', ()=> fetch('http://localhost:5000/reviews').then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center my-8 text-[#03203C] font-bold text-2xl'>Customers Review about Our Company <FontAwesomeIcon icon={faComment}></FontAwesomeIcon></h2>
            <div className='grid lg:grid-cols-3 gap-6 mx-auto sm:grid-cols-1 lg:mx-20 mb-20'>
                {
                    data.map(review => <Review
                        key={review._id}
                        review = {review}
                    >
                    </Review>)
                }
            </div>
        </div>
    );
};

export default UserReview;