import React from 'react';

const Order = ({ data }) => {
    const { productName, productCost, buyerEmail, buyerName, buyerAddress, productQuantity, transectionId } = data;
    return (
        <tr>
            <td>{buyerName}</td>
            <td>{buyerEmail}</td>
            <td>{buyerAddress}</td>
            <td>{productName}</td>
            <td>{productQuantity}</td>
            <td>{productCost}</td>
            <td>{(transectionId && <span className='text-green-500'>Paid</span> || <span className='text-red-500'>Not paid yet</span>)}</td>
        </tr>
    );
};

export default Order;