import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import backgroundImage from '../../All-iamges/Images/Rectangle 1.png'
import 'react-toastify/dist/ReactToastify.css';

const HomeLayout = () => {
    return (
        <div className="relative">
            <img className='absolute bg-cover bg-center max-h-screen w-full' src={backgroundImage} alt="" />
            <div className="absolute inset-0 bg-black opacity-50" style={{height : '100vh'}}>
            </div>
            <Header />
            <Outlet/>
            <ToastContainer/>
        </div>



    );
};

export default HomeLayout;