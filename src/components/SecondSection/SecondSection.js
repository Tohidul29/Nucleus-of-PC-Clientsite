import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import bgImg from '../../img/Bg-img/bg.jpg';

const SecondSection = () => {
    const handleLike = () =>{
        toast.success('Thanks for your like. stay touched with us...')
    }
    return (
        <div className="hero lg:w-1/2 min-h-screen sm:w-full rounded-xl mx-auto my-16"  style={{
            background: `url(${bgImg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-overlay bg-opacity-80 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Nucleus of PC</h1>
                    <p className="mb-5 text-xl">We are running our business from 2017 to still now. We grow our company with joy and pleasure. We have huge product collection. If you want to know more about our company please get touch with via our contact and visiting our website, Thank you.</p>
                    <button onClick={handleLike} className="btn btn-warning text-white">Give a like</button>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default SecondSection;