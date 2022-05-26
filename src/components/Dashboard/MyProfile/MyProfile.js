import { faMailBulk, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import userImg from '../../../img/Person/person_img.jfif'

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-6">
                <div className="w-24 mask mask-squircle mx-auto mt-6">
                    <img src={userImg} alt='img'/>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {user.displayName}</h2>
                    <h2 className="card-title"><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>{user.email}</h2>
                    <div className="card-actions">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;