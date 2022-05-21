import React from 'react';
import NotFoundImg from '../../img/Not-Found/notfound.jpg';

const NotFound = () => {
    return (
        <div className='mt-24'>
            <img src={NotFoundImg} className="mx-auto" alt="not_found_image" />
        </div>
    );
};

export default NotFound;