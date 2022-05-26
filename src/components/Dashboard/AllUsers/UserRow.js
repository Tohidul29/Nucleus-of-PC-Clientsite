import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const UserRow = ({ user }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    toast.success('successfully make an admin')
                }
            })
    }
    return (
        <tr>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-outline btn-primary'>Make Admin</button>}</td>
            <td><button className='btn btn-outline btn-warning'>Remove User</button></td>
            <ToastContainer></ToastContainer>
        </tr>
    );
};

export default UserRow;