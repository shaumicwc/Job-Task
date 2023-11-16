import React from 'react';

const Home = () => {
    const absolute = localStorage.getItem('absolute');
    return (
        <div className='w-full absolute flex justify-center items-center flex-col space-y-8 bg-cover h-[500px]'>
            <p className='text-white text-5xl font-bold'>Welcome in Travel Guru!!</p>
            <p className='text-white text-2xl'>Search for visit your desired place..........</p>
        </div>
    );
};

export default Home;