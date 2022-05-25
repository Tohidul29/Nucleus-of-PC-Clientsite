import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    const [pur, setPur] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?buyerEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setPur(data))
        }
    }, [user])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Product Cost</th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Buyer Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pur.map((p, index) =>
                                <tr key={pur._id}>
                                    <th>{index + 1}</th>
                                    <td>{p.productName}</td>
                                    <td>{p.productQuantity}</td>
                                    <td>{p.productCost}</td>
                                    <td>{p.buyerName}</td>
                                    <td>{p.buyerEmail}</td>
                                    <td>{p.buyerAddress}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;