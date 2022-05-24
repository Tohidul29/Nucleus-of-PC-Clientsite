import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [updateProfile, updating] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



    let errorMsg;

    if (error) {
        errorMsg = <div className='text-[red] mt-2'>
            <p>Error: {error.message}</p>
        </div>
    }

    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const fullNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const displayName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: displayName });
    }
    return (
        <div className="mx-auto mt-8 card lg:w-1/3 sm:w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-3xl font-semibold text-center mb-4">Nucleus of PC Login <FontAwesomeIcon icon={faDoorClosed}></FontAwesomeIcon></h2>
                <form onSubmit={handleRegister}>
                    <input required ref={fullNameRef} type="text" placeholder="Enter your Full Name" className="mb-4 input input-bordered w-full" />
                    <input required ref={emailRef} type="text" placeholder="Enter your Email Address" className="mb-4 input input-bordered w-full" />
                    <input required ref={passwordRef} type="password" placeholder="Enter your Password" className="mb-4 input input-bordered w-full" />
                    <div className="card-actions justify-center">
                        <button className="btn btn-accent text-white" type='submit'>Register</button>
                    </div>
                    {
                        errorMsg
                    }
                </form>
                <div className='mt-3'>
                    <p>Already have an account? <Link to='/login' className='text-accent text-decoration-none btn-link' onClick={navigateLogin}>Go to Login</Link> </p>
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

export default Register;