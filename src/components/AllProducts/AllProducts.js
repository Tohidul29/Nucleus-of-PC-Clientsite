import React from 'react';
import useTools from '../../hooks/useTools';
import Product from './Product';

const AllProducts = () => {
    const [tools, setTools] = useTools();

    return (
        <div>
        <h1 className='text-3xl text-[#03203C] text-center my-8 font-bold'>All Products We Have on Stock</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:my-8 sm:w-full mx-auto'>
                {
                    tools.map(product => <Product
                        key={product._key}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts; <h1>This is all products page</h1>