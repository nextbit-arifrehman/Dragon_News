import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn btn-secondary w-full btn-outline'>Login With Google</button>
                <button className='btn btn-primary w-full btn-outline'>Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;