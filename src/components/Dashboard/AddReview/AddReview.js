import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const review = {
                name: data.name,
                img: data.img,
                about: data.about,
                rating: data.rating
            }
            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json)
                .then(data => {
                    toast.success('Review Added Successfully');
                })
        };
        return (
            <div>
                <h2 className='text-2xl text-center font-semibold text-[#120E43]'>Add a New Product</h2>
                <div className="card-body w-96 mx-auto items-center text-center my-4 bg-slate-200 rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", {
                            required: {
                                value: true,
                                message: "UserName is required"
                            }
                        })} type='text' placeholder='Reviewer Name' className="input input-bordered w-full max-w-xs text-center mb-3" />

                        <input {...register("img", {
                            required: {
                                value: true,
                                message: "user image is required"
                            }
                        })} type='text' placeholder='Reviewer Image' className="input input-bordered w-full max-w-xs text-center mb-3" />

                        <textarea {...register("about", {
                            required: {
                                value: true,
                                message: "field is required"
                            }
                        })} type='text' placeholder='Say About Our Company' className="input input-bordered w-full max-w-xs text-center mb-3" />

                        <input {...register("rating", {
                            required: {
                                value: true,
                                message: "need to give rating"
                            }
                        })} type='text' placeholder='Reviewer Rating on Our Company' className="input input-bordered w-full max-w-xs text-center mb-3" />

                        <input type="submit" value='Post Review' className='btn btn-primary mt-4 block mx-auto text-white' />
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div >
        );
    };

    export default AddReview;