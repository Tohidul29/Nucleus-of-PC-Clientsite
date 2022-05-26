import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Product from './Product';

const AddedProducts = () => {
    const { data, isLoading } = useQuery('addedProducts', () => fetch('http://localhost:5000/tools').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const productSlice = data.slice(10, 100);

    return (
        <div className='mb-12'>
            <h2 className='text-center my-12 text-[#03203C] font-bold text-3xl'>Hot Products We have on Stock <FontAwesomeIcon icon={faFire}></FontAwesomeIcon></h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:my-8 sm:w-full mx-auto'>
                {
                    productSlice.map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </div>
        </div>
    );
};

export default AddedProducts;