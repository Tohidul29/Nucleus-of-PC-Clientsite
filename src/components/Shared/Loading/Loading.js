import React from 'react';

const Loading = () => {
    return (
        <div className='mx-auto text-center'>
            <button className="btn loading">loading <progress className="progress ml-4 bg-white w-56"></progress></button>
        </div>
    );
};

export default Loading;