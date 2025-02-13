import React, { useContext } from 'react';
import AuthContext from '../../context/authContext/AuthContext';

const SocialLogin = () => {
    const {signInwithGoogle} =useContext(AuthContext)

    const handleGoogle=()=>{
        signInwithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    return (
        <div className='m-4'>
            <div className="divider">Or</div>
            <button onClick={handleGoogle} className="btn">Google</button>
        </div>
    );
};

export default SocialLogin;