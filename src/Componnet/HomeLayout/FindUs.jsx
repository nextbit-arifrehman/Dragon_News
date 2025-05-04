import React from 'react';
import { FaFacebook, FaInstagram, FaTwitch } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-4'>Find Us on</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn 
             bg-base-100 justify-start
              join-item"><FaFacebook size={24} color='green'></FaFacebook>Facebook</button>
                    <button className="btn 

             bg-base-100 justify-start
              join-item"><FaTwitch size={24} color='aqua'></FaTwitch>Twich</button>
                    <button className="btn 

             bg-base-100 justify-start
              join-item"><FaInstagram size={24} color='blue'></FaInstagram>Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;