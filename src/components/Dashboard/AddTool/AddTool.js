import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddTool = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const product = {
            name: data.name,
            img: data.img,
            description: data.description,
            price: parseInt(data.price),
            minimum_order_quantity: parseInt(data.minimum_order_quantity),
            available_quantity: parseInt(data.available_quantity)
        }
        fetch('https://enigmatic-sea-26065.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json)
            .then(data => {
                toast.success('order placed successfully');
            })
    };

    return (
        <div>
            <h2 className='text-2xl text-center font-semibold text-[blue]'>Add a New Product</h2>
            <div className="card-body w-96 mx-auto items-center text-center my-4 bg-slate-200 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: "product name is required"
                        }
                    })} type='text' placeholder='Product Name' className="input input-bordered w-full max-w-xs text-center mb-3" />

                    <input {...register("img", {
                        required: {
                            value: true,
                            message: "product img is required"
                        }
                    })} type='text' placeholder='Product Image' className="input input-bordered w-full max-w-xs text-center mb-3" />

                    <textarea {...register("description", {
                        required: {
                            value: true,
                            message: "product description needed"
                        }
                    })} type='text' placeholder='Product Description' className="input input-bordered w-full max-w-xs text-center mb-3" />

                    <input {...register("price", {
                        required: {
                            value: true,
                            message: "product price is required"
                        }
                    })} type='text' placeholder='Product Price' className="input input-bordered w-full max-w-xs text-center mb-3" />

                    <input {...register("minimum_order_quantity", {
                        required: {
                            value: true,
                            message: "minimum order quantity is needed"
                        }
                    })} type='text' placeholder='Minimum Order Quantity' className="input input-bordered w-full max-w-xs text-center mb-3" />

                    <input {...register("available_quantity", {
                        required: {
                            value: true,
                            message: "available quantity is needed"
                        }
                    })} type='text' placeholder='Available Quantity' className="input input-bordered w-full max-w-xs text-center mb-3" />

                    <input type="submit" value='Add' className='btn btn-primary mt-4 block mx-auto text-white' />
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div >
    );
};

export default AddTool;