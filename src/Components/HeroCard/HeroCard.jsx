import React from 'react';
import leftImg from '../../assets/vector1.png'

const HeroCard = ({inProgress, resolved}) => {
    return (
        
        <div className='md:flex px-5 md:px-0 gap-6 md:justify-between md:items-center w-full py-20 mx-auto'>
            <div className='mb-4 md:mb-0 relative bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white rounded-lg grid grid-cols-3 overflow-hidden'>
                <img src={leftImg} alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <p>In-Progress</p>
                    <p className='font-semibold text-6xl'>{inProgress.length}</p>
                </div>
                <img className='transform rotate-y-180' src={leftImg} alt="" />
            </div>
            <div className='relativ bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white rounded-lg grid grid-cols-3 overflow-hidden'>
                <img src={leftImg} alt="" />
                <div className='flex flex-col justify-center items-center'>
                    <p>Resolved</p>
                    <p className='font-semibold text-6xl'>{resolved.length}</p>
                </div>
                <img className='transform rotate-y-180' src={leftImg} alt="" />
            </div>
            
        </div>
    );
};

export default HeroCard;