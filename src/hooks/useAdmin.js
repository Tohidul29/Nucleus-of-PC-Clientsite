import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoad, setAdminLoad] = useState(true); 
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://enigmatic-sea-26065.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoad(false);
                })
        }
    }, [user])
    return [admin, adminLoad]
}

export default useAdmin;