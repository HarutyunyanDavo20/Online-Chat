import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import "./ProfilePage.scss";

const ProfilePage = () => {
    const auth = getAuth()
    const [user, loading]= useAuthState(auth)
    const navigate = useNavigate()

    const handleSignOut = () => {
        const auth = getAuth()
        signOut(auth).then(()=>navigate('/'))
    }

    if(loading){
        return <Loader/>
    }
    
    return (
        <div className='content content-profile'>
            {user.displayName}
            <button onClick={handleSignOut}>LogOut</button>
        </div>
    );
};

export default ProfilePage;