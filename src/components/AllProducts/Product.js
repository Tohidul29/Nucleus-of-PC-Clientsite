import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, _id, img, price, description, available_quantity, minimum_order_quantity } = product;

    const navigate = useNavigate();
    const navigatePurchase = (id) => {
        navigate(`/purchase/${id}`);
    }

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
                    <button onClick={() => navigatePurchase(_id)} className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;