import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4G7EHmNqUCn9bp6aZFXxwpfH7pibuZy47paV77ulwmTRbI8TFsh4HmhodK9xWT0nCPeYslDv5zTLg0Mp5th1rp00jNy7O4ZO');


const Payment = () => {
    const { id } = useParams();
    const url = `https://enigmatic-sea-26065.herokuapp.com/purchase/${id}`;

    const { data: productPurchase, isLoading } = useQuery(['payment', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center text-primary text-3xl my-6'>Payment Your Purchase Products</h2>
            <div className="card w-50 bg-base-100 max-w-md shadow-xl my-14 mx-auto">
                <div className="card-body mx-auto">
                    <h2 className="card-title text-purple-400">Welcome: {productPurchase.buyerName}</h2>
                    <h2 className="card-title">Pay For Your Product: {productPurchase.productName}</h2>
                    <h2 className="card-title">Total Product Quantity: {productPurchase.productQuantity}</h2>
                    <h2 className="card-title">Total Cost: ${productPurchase.productCost}</h2>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm  productPurchase={productPurchase}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;