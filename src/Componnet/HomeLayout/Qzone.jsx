import React from 'react';
import swiming from "../../assets/swimming.png";
import playground from '../../assets/playground.png';
import classes from '../../assets/class.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-4'>
              Q-Zone
            </h2>
            <div className='space-y-5 flex flex-col  justify-center'>
                <img src={swiming} alt="" />
                <img src={playground} alt="" />
                <img src={classes} alt="" />
            </div>
        </div>
    );
};

export default Qzone;