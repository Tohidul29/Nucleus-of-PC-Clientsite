import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [quantity, setQuantity] = useState('');

    const [user] = useAuthState(auth);

    const userName = user.displayName;
    const userEmail = user.email;

    const available_quantity = tool.available_quantity;
    const minimum_order_quantity = tool.minimum_order_quantity;

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, []);

    const onSubmit = data => {
        // console.log(data)
        const name = tool.name;
        const price = tool.price;
        const purchase = {
            productName: name,
            productCost: price,
            buyerEmail: data.email,
            buyerName: data.name,
            buyerAddress: data.address,
            productQuantity: data.quantity
        }
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
        .then(res => res.json)
        .then(data => {
            toast('order placed successfully');
        })
    };

    const quantityInput = event => {
        const inputValue = event.target.value;
        setQuantity(inputValue);
    }

    // const address = event.target.address.value




    let displayError = '';
    if (quantity < minimum_order_quantity) {
        displayError = <p className='text-[red]'>You must have to order {minimum_order_quantity} pieces</p>
    }
    if (quantity > available_quantity) {
        displayError = <p className='text-[red]'>You can't order more than {available_quantity} pieces</p>
    }

    const { name, img, description, price } = tool;

    // const purchase = {
    //         productName: name,
    //         productPrice: price,
    //         buyerName: userName,
    //         buyerEmail: userEmail,
    //         productQuantity: quantity,
    //         buyerAddress: address,
    //     }


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
                        <h2 className='text-2xl text-center font-semibold mb-5'>Buyer Information <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input value={userName} readOnly {...register("name")} className="input input-bordered w-full max-w-xs text-center font-semibold mb-3" />

                            <input value={userEmail} readOnly {...register("email")} className="input input-bordered w-full max-w-xs text-center font-semibold mb-3" />

                            <input {...register("address", {
                                required: {
                                    value: true,
                                    message: "address is required"
                                }
                            })} type='text' placeholder='Please give your address' className="input input-bordered w-full max-w-xs text-center mb-3" />
                            <label className='label'>
                                {errors.address?.type === 'required' && <span className='label-text-alt mx-auto text-red-600'>{errors.address.message}</span>}
                            </label>

                            <input {...register("phone_number", {
                                required: {
                                    value: true,
                                    message: "Phone number is required"
                                },
                                minLength: {
                                    value: 11,
                                    message: 'Phone number must 11 characters or longer'
                                }
                            })} type='number' placeholder='Please give your Phone number' className="input input-bordered w-full max-w-xs text-center mb-3" />
                            <label className='label'>
                                {errors.phone_number?.type === 'required' && <span className='label-text-alt mx-auto text-red-600'>{errors.phone_number.message}</span>}
                                {errors.phone_number?.type === 'minLength' && <span className='label-text-alt mx-auto text-red-600'>{errors.phone_number.message}</span>}
                            </label>

                            <input {...register("quantity")} type="number" name='quantity' onChange={quantityInput} className="input input-bordered w-full max-w-xs text-center font-semibold mb-3" />
                            {displayError}

                            <input type="submit" value='Submit' className='btn btn-primary mt-4 block mx-auto text-white' disabled={quantity < minimum_order_quantity || quantity > available_quantity}/>
                        </form>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;