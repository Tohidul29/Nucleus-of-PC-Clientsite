import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({productPurchase}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const {productCost} = productPurchase;

    useEffect(()=>{
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({productCost})
        })
        .then(res => res.json())
        .then(data => {
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        })

    },[productCost])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '');

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-success btn-sm mt-6' type="submit" disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-[red]'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;