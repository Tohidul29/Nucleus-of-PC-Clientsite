import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import userPic from '../../img/Person/person_img.jfif'

const MyPortfolio = () => {
    return (
        <div className="card lg:w-1/2 sm:w-full bg-[#120E43] text-white shadow-xl mx-auto mt-12">
            <div className="avatar mx-auto mt-8">
                <div className="w-24 mask mask-hexagon">
                    <img src={userPic} alt='my img' />
                </div>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: MD TOHIDUL ISLAM</h2>
                <h2 className="card-title">Email Address: tohidswfu@gmail.com</h2>
                <h4 className='text-xl'>Education: BEng in Computer Science and Technology (<FontAwesomeIcon icon={faUniversity}></FontAwesomeIcon> SWFU, China)</h4>
                <h2 className='text-2xl mt-6 mb-2'>My Projects</h2>
                <div className="card-actions">
                    <a href='https://relaxed-yonath-0f6e13.netlify.app/' target='_blank' className='mr-4 hover:text-[yellow]'>Project 1</a>
                    <a href='https://assignment-10-cc88c.web.app/' target='_blank' className='mr-4 hover:text-[yellow]'>Project 2</a>
                    <a href='https://brave-ramanujan-25af5c.netlify.app/' target='_blank' className='mr-4 hover:text-[yellow]'>Project 3</a>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;