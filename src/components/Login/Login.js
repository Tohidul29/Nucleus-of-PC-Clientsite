import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );


    const navigate = useNavigate();

    const navigateRegister = event => {
        navigate('/register');
    }

    if(user){
        navigate('/home');
    }

    let errorMsg;

    if (error) {
        errorMsg =
            <div className='text-[red] mt-2'>
                <p>Error: {error.message}</p>
            </div>
    }
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (loading) {
        return <Loading></Loading>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Reset password Email sent');
        }
        else {
            toast.warn('Please Enter your Email on the input field');
        }
    }
    return (
        <div className="mx-auto mt-8 card w-1/3 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-3xl font-semibold text-center mb-4">Nucleus of PC Login <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon></h2>
                <form onSubmit={handleLogin}>
                    <input required ref={emailRef} type="text" placeholder="Enter your Email Address" className="mb-4 input input-bordered w-full" />
                    <input required ref={passwordRef} type="password" placeholder="Enter your Password" className="mb-4 input input-bordered w-full" />
                    <div className="card-actions justify-center">
                        <button className="btn btn-accent text-white" type='submit'>login</button>
                    </div>
                    {
                        errorMsg
                    }
                </form>
                <div className='mt-3'>
                    <p>New to Nucleus of PC? <Link to='/register' className='text-accent text-decoration-none btn-link' onClick={navigateRegister}>Go to Register</Link> </p>
                    <p className='mt-2'>Forget Password? <button className='text-accent text-decoration-none btn-link' onClick={resetPassword}>Reset Password</button></p>
                </div>
                <div class="divider">OR</div>
                <div className="card-actions justify-center">
                    <SocialLogin></SocialLogin>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Login;