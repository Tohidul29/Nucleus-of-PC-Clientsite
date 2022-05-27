import { faEdit, faRemove, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useTools from '../../../hooks/useTools';

const ManageProducts = () => {
    const [products, setProducts] = useTools()
    return (
        <div>
            <h2 className='text-2xl text-center font-semibold my-8 text-[#120E43]'>All Tools We have on Stock <FontAwesomeIcon icon={faTools}></FontAwesomeIcon></h2>
            <div className="overflow-x-auto">
                <table className="table w-full my-4 mb-8">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Minimum Order Quantity</th>
                            <th>Available Quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => <tr
                            key={product._id}
                        >
                            <td>{product.name}</td>
                            <td>
                                <div class="w-12 mask mask-squircle">
                                    <img src={product.img} alt='img' />
                                </div>
                            </td>
                            <td>{product.description.slice(0,30)}...</td>
                            <td>{product.price}</td>
                            <td>{product.minimum_order_quantity}</td>
                            <td>{product.available_quantity}</td>
                            <td><button><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></button></td>
                            <td><button className='text-[red]'><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;