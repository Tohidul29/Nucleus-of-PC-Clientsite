import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import googleLogo from '../../img/Social-icon/google.png';
import Loading from '../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (error) {
        toast(error.message);
    }

    if (user) {
        navigate('/home');
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className="btn btn-accent text-white">Google Login <img src={googleLogo} width={30} height={30} alt="icon" /></button>
        </div>
    );
};

export default SocialLogin;