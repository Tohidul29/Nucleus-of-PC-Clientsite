import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({ review }) => {
    const { name, img, about, rating } = review;

    return (
        <div className="card lg:w-96 bg-neutral text-neutral-content sm:w-full">
            <div className="card-body items-center text-center">
                <div class="avatar">
                    <div className="w-24 rounded-full">
                        <img src={img} alt='user-img' />
                    </div>
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{about}</p>
                <div className="card-actions justify-center">
                    <h3 className='text-xl font-semibold'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Rating: {rating} out of 5</h3>
                </div>
            </div>
        </div>
    );
};

export default Review;