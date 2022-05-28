import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    const [pur, setPur] = useState([]);

    const navigate = useNavigate();

    //load data:
    useEffect(() => {
        if (user) {
            fetch(`https://enigmatic-sea-26065.herokuapp.com/purchase?buyerEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setPur(data)
                });
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
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pur.map((p, index) =>
                                <tr key={p._id}>
                                    <th>{index + 1}</th>
                                    <td>{p.productName}</td>
                                    <td>{p.productQuantity}</td>
                                    <td>{p.productCost}</td>
                                    <td>{p.buyerName}</td>
                                    <td>{p.buyerEmail}</td>
                                    <td>{p.buyerAddress}</td>
                                    <td>
                                        {(p.productCost && !p.paid) && <Link to={`/dashboard/payment/${p._id}`}><button className='text-white btn btn-xs btn-success'>Pay Now</button></Link>}
                                        {(p.productCost && p.paid) && <div>
                                            <p><span className='text-green-500'>Paid</span></p>
                                            <p>Transaction ID: <span className='text-blue-500'>{p.transectionId}</span></p>
                                        </div>}
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;