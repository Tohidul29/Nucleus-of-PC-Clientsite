import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, description, price, minimum_order_quantity, available_quantity } = tool;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl m-6 sm:w-full">
            <figure className="px-10 pt-10">
                <img src={img} alt={name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Price: ${price}</h2>
                <p>{description}</p>
                <h4 className='text-xl'>Available Quantity: {available_quantity}</h4>
                <h4 className='text-xl'>Minimum Order Quantity: {minimum_order_quantity}</h4>
                <div className="card-actions">
                    <button className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;