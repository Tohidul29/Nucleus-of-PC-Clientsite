import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const { register, handleSubmit } = useForm();

    const { name, img, description } = product;

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const onSubmit = data => {
        const updatedProductDetails = {
            price: parseInt(data.price),
            minimum_order_quantity: parseInt(data.minimum_order_quantity),
            available_quantity: parseInt(data.available_quantity)
        }

        fetch(`https://localhost:5000/tools/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedProductDetails),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product updated successfully');
            })
    };

    return (
        <div>
            <h2 className='text-2xl text-center font-semibold text-[blue] my-4'>Update Your Existing Product</h2>
            <div className="card-body w-96 mx-auto items-center text-center my-4 bg-slate-200 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <img src={img} className="w-32 mx-auto my-4 rounded-xl" alt="img" />
                    <input {...register("name", {
                        required: {
                            value: false,
                            message: "product name is required"
                        }
                    })} type='text' readOnly placeholder={name} className="text-black font-bold input input-bordered w-full max-w-xs text-center mb-3" />

                    <textarea {...register("description", {
                        required: {
                            value: false,
                            message: "product description needed"
                        }
                    })} type='text' readOnly placeholder={description} className="input input-bordered w-full max-w-xs text-center mb-3" />

                    <input {...register("price", {
                        required: {
                            value: true,
                            message: "product price is required"
                        }
                    })} type='text' placeholder='Update Product Price' className="input input-bordered w-full max-w-xs text-center mb-3" />

                    <input {...register("minimum_order_quantity", {
                        required: {
                            value: true,
                            message: "minimum order quantity is needed"
                        }
                    })} type='text' placeholder='Update Minimum Order Quantity (If Needed)' className="input input-bordered w-full max-w-xs text-center mb-3" />

                    <input {...register("available_quantity", {
                        required: {
                            value: true,
                            message: "available quantity is needed"
                        }
                    })} type='text' placeholder='Update Available Quantity' className="input input-bordered w-full max-w-xs text-center mb-3" />

                    <input type="submit" value='Update' className='btn btn-primary mt-4 block mx-auto text-white' />
                </form>
            </div>
        </div >
    );
};

export default UpdateProduct;