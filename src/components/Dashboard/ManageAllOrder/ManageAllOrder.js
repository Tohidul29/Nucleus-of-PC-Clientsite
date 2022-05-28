import React, { useEffect, useState } from 'react';
import Order from './Order';


const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-sea-26065.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    console.log(orders);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Buyer Address</th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Total Cost</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                orders.map(data => <Order key={data._id} data={data}></Order>)
                            }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrder;