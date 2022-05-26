import React from 'react';
import { useForm } from 'react-hook-form';

const AddTool = () => {
    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data)
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
            </div>
        </div >
    );
};

export default AddTool;