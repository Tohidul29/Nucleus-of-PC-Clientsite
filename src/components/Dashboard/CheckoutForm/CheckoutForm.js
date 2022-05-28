import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { Suspense, useEffect, useState } from 'react';

const CheckoutForm = ({ productPurchase }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, productCost, buyerName, buyerEmail } = productPurchase;

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ productCost })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })

    }, [productCost])

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
        setSuccess('');
        setProcessing(true)

        //card pay confirmation:
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransectionId(paymentIntent.id);
            setSuccess('Payment successfully done...')

            //store payment info to my backend:
            const payment = {
                pay: _id,
                transectionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/purchase/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })
        }
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
            {
                success && <div className='text-[green]'>
                    <p>{success}</p>
                    <p>TransectionID: <span className='text-blue-500 font-semibold'>{transectionId}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;