import { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState([]);
    useEffect(()=>{
        fetch('https://enigmatic-sea-26065.herokuapp.com/tools')
        .then(response => response.json())
        .then(data => setTools(data))
    },[])
    return [tools, setTools]
};

export default useTools;