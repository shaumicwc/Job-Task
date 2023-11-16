import { ArrowRightIcon, CalendarIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useLoaderData, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { loadFeaturesXhr } from 'ol/featureloader';



const Booking = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {user} = useContext(AuthContext)
    const location = useLocation()
    const data = useLoaderData();
    const {name, description, id} = data

    const formData = JSON.parse(localStorage.getItem('Booking-Form'))

    console.log(location);
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const destination = form.destination.value;

        const formData = {fullName : fullName, email : email, destination : destination, startDate: startDate, endDate: endDate}
        
        if (!user) {
            localStorage.setItem('Booking-Form', JSON.stringify(formData));
            setRedirect(true)
        } else {
            toast.success('Booked Successfully')
            localStorage.removeItem('Booking-Form')
        }
        form.reset()
    }

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 relative'>
            <div className='md:mx-32 md:my-16'>
                <p className='text-white text-7xl pb-10'>{name}</p>
                <p className='text-white text-xl'>{description.slice(0, 750)}</p>
            </div>
            {
                redirect && <Navigate to="/login" state={{ from: location.pathname }}  replace/>
            }
            <form onSubmit={handleSubmit} className='bg-white rounded-xl w-7/12 p-7 flex flex-col md:mx-32 md:my-16'>
                <label htmlFor="" className='font-bold text-gray-400'>Full Name</label>
                <input name='fullName' value={formData?.fullName} className='bg-gray-300 p-3 my-3 rounded-md placeholder:text-gray-400 font-semibold' type="text" placeholder='Destination' />
                <label htmlFor="" className='font-bold text-gray-400'>Email</label>
                <input name='email' value={formData?.email} className='bg-gray-300 p-3 my-3 rounded-md placeholder:text-gray-400 font-semibold' type="text" placeholder='Email' />
                <label htmlFor="" className='font-bold text-gray-400'>Destination</label>
                <input name='destination' value={name} className='bg-gray-300 p-3 my-3 rounded-md placeholder:text-gray-400 font-semibold' type="text" placeholder='Destination' />
                <div className='flex flex-row justify-between w-full'>
                    <div className='flex flex-col mr-3'>
                        <label htmlFor="" className='font-bold text-gray-400'>From</label>
                        <div className='flex items-center relative'>
                            <DatePicker value={formData?.startDate} className="calendar-container w-full bg-gray-300 rounded-md my-3 p-3 font-semibold placeholderText:text-gray-400" selected={startDate} onChange={(date) => setStartDate(date)} placeholderText='Start Date'/>
                            <span className='absolute right-2'><CalendarIcon className='h-6 w-6' /></span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='font-bold text-gray-400'>To</label>
                        <div className='flex items-center relative'>
                            <DatePicker value={formData?.endDate} className="calendar-container w-full bg-gray-300 rounded-md my-3 p-3 font-semibold placeholderText:text-gray-400" selected={endDate} onChange={(date) => setEndDate(date)} placeholderText='End Date'/>
                            <span className='absolute right-2'><CalendarIcon className='h-6 w-6' /></span>
                        </div>
                    </div>
                </div>
                <button type='submit' className='bg-btn-color flex items-center justify-center py-3 my-3 rounded-md font-semibold w-full'>Complete Booking </button>
            </form>
        </div>
    );
};

export default Booking;