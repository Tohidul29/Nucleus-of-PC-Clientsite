import React from 'react';
import logo from '../../../img/Person/elon.jpg'

const Business_summary = () => {
    return (
        <div>
        <h1 className='text-3xl font-bold text-center text-[#03203C]'>Nucleus of PC Business Summary 2022</h1>
            <div className='flex justify-center'>
                <div className="stats stats-vertical lg:stats-horizontal shadow bg-[#120E43] text-white text-center lg:w-[900px] md:w-1/2 lg:h-[200px] my-12">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Products Sell</div>
                        <div className="stat-value text-primary">102K+</div>
                        <div className="stat-desc">33% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Export Countries</div>
                        <div className="stat-value text-secondary">120+</div>
                        <div className="stat-desc">countries</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src={logo} alt='logo' />
                                </div>
                            </div>
                        </div>
                        <div className="stat-title">Total Satisfied</div>
                        <div className="stat-value">151+</div>
                        <div className="stat-desc text-secondary">Clients</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business_summary;