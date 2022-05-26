import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTools from '../../../hooks/useTools';
import Tool from './Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useTools();
    const toolsSliceing = tools.slice(0, 6);

    const navigate = useNavigate()

    const handleAllProducts = () => {
        navigate('/allproducts');
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-[#03203C] mt-12 mb-4'>Tools Available on Our Company Now <FontAwesomeIcon icon={faTools}></FontAwesomeIcon></h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:my-8 sm:w-full mx-auto'>
                {
                    toolsSliceing.map(tool => <Tool
                        key={tool._key}
                        tool={tool}
                    ></Tool>)
                }
            </div>
            <div className='text-center my-8'>
                <button onClick={handleAllProducts} className='btn btn-primary text-white'>All Tools Have on Stock</button>
            </div>
        </div>
    );
};

export default Tools;