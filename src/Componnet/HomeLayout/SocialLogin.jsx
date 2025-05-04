import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-4'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn
                 btn-secondary w-full btn-outline'><FaGoogle color='#FF90BB' size={20} />Login With Google</button>
                <button className='btn 
                btn-primary w-full btn-outline'><FaGithub color='green'size={20} />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;