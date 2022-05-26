import React, { useEffect, useState } from 'react';



const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return (
        <div>
            <h1 className='text-2xl text-center font-semibold text-[#03203C] my-4'>Nucleus of PC All Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((u, index) =>
                                <tr key={u._id}>
                                    <th>{index + 1}</th>
                                    <td>{u.email}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;