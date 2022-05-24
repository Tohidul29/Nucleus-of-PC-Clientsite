import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);

    console.log(user)

    const userName = user.displayName;
    const userEmail = user.email;


    const { id } = useParams();
    const [tool, setTool] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, []);

    const [quantity, setQuantity] = useState();

    const { name, img, description, price, minimum_order_quantity, available_quantity } = tool;

    return (
        <div>
            <div className='mt-12 lg:w-[1000px] text-[#242B2E] sm:w-full mx-auto'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center mb-1">Product Name: {name}</h2>
                        <h2 className="card-title text-center mb-1">Product Price: ${price}</h2>
                        <h2 className="card-title text-center">About Product: </h2><p>{description}</p>
                        <h2 className='card-title text-center mt-1'>Minimum Order Quantity: {minimum_order_quantity}</h2>
                        <h2 className='card-title text-center mt-1'>Available on Stock: {available_quantity}</h2>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className="card lg:card-side bg-base-100 text-[#242B2E] lg:w-[700px] sm:w-full shadow-xl mx-auto">
                    <div className="card-body items-center text-center my-4">
                        <h2 className="card-title mt-2">Customer Name: {userName}</h2>
                        <h2 className="card-title mt-2">Customer Email: {userEmail}</h2>
                        <div className="card-actions justify-center mt-3">
                            <button className="btn btn-primary text-white">Purchase Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;