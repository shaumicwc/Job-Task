import React from 'react';
import { Link } from 'react-router-dom';

const SearchCard = ({searchData}) => {
    const {name, images, id} = searchData
    return (
     <div className='w-full p-1 flex justify-between items-center border-2 rounded-md my-2 border-btn-color cursor-pointer'>
    <img className='w-1/4' src={images[0]} alt="" />
    <p className='font-semibold text-xl'>{name}</p>
    <Link to={`/destination/${id}`}><button className='py-1 px-2 bg-btn-color rounded-md font-semibold'>See Details</button></Link>
</div>
    );
};

export default SearchCard;