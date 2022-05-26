import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../../../img/Brand-Logo/img-1.jpg';
import img2 from '../../../img/Brand-Logo/img-2.jpg';
import img3 from '../../../img/Brand-Logo/img-3.jpg';
import img4 from '../../../img/Brand-Logo/img-4.jpg';
import img5 from '../../../img/Brand-Logo/img-5.jpg';
import img6 from '../../../img/Brand-Logo/img-6.jpg';
import img7 from '../../../img/Brand-Logo/img-7.jpg';


const FirstSection = () => {
    return (
        <div className='mb-20'>
            <h2 className='text-3xl font-bold text-center my-8 text-[#120E43]'>Famous Companies Product We Stocked <FontAwesomeIcon icon={faHome}></FontAwesomeIcon></h2>
            <div className="carousel carousel-center mx-auto w-1/2 p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                    <img src={img1} className="rounded-box" alt='img-1' />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="rounded-box" alt='img-2' />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="rounded-box" alt='img-3' />
                </div>
                <div className="carousel-item">
                    <img src={img4} className="rounded-box" alt='img-4' />
                </div>
                <div className="carousel-item">
                    <img src={img5} className="rounded-box" alt='img-5' />
                </div>
                <div className="carousel-item">
                    <img src={img6} className="rounded-box" alt='img-6' />
                </div>
                <div className="carousel-item">
                    <img src={img7} className="rounded-box" alt='img-7' />
                </div>
            </div>
        </div>
    );
};

export default FirstSection;