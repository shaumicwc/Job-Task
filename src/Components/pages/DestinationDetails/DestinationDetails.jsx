import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import ImageCarousel from './ImageCarousel';

const DestinationDetails = () => {
    const data = useLoaderData()
    console.log(data);
    const { name, images, id, description } = data
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-4xl font-bold text-black'>{name.toUpperCase()}</p>
            <div className='w-2/3 mt-5'>
                <ImageCarousel images={images} />
            </div>
            <p className='font-semibold text-xl w-2/3 my-5'>Place Description : <span className='font-normal'>{description}</span></p>
            <Link to={`/booking/${id}`}><button className='px-4 py-2 font-semibold text-black bg-btn-color text-xl flex items-center rounded-md mb-10'>Let's travel to {name.toUpperCase()}<ArrowRightIcon className='w-5 h-5 ml-3'/></button></Link>
        </div>
    );
};

export default DestinationDetails;