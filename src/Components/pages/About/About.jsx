import React from 'react';

const About = () => {
    return (
        <div className='relative bg-transparent flex justify-center items-start w-10/12 flex-col m-auto h-[600px] p-5'>
            <div className='text-white overflow-y-auto space-y-2'>
            <h1 className='font-bold text-4xl'>About Travel Guru</h1>
            <p className='text-xl font-semibold'>Welcome to Travel Guru, your ultimate destination for memorable travel experiences!</p>
            <p className='text-xl font-semibold'>At Travel Guru, we are passionate about creating unforgettable journeys for our customers.</p>
            <p className='text-2xl font-bold'>Our Mission:</p>
            <p className='text-xl font-semibold'>To provide exceptional travel services, personalized itineraries, and expert guidance to ensure our clients have amazing travel experiences.</p>
            <p className='text-2xl font-bold'>Services We Offer:</p>
            <ul className='text-xl font-semibold'>
                <li>1. Customized travel packages</li>
                <li>2. Expert travel advice</li>
                <li>3. Accommodation booking</li>
                <li>4. Transportation arrangements</li>
                <li>5. And much more!</li>
            </ul>
            <p className='text-xl font-semibold'>Whether you're looking for a relaxing getaway, an adventurous trip, or a cultural exploration, Travel Guru is here to turn your dreams into reality.</p>
            <p className='text-xl font-semibold'>Contact us today to start planning your next adventure!</p>

            {/* Additional Sections */}
            <div className='border-t-2 border-white pt-8'>
                <h2 className='text-3xl font-bold mb-4'>Our History</h2>
                <p className='text-xl'>Travel Guru was founded in [year] with a vision to revolutionize the travel industry...</p>
            </div>

            <div className='border-t-2 border-white pt-8'>
                <h2 className='text-3xl font-bold mb-4'>Our Values</h2>
                <ul className='list-disc list-inside text-xl'>
                    <li>Customer satisfaction is our priority.</li>
                    <li>Transparency and honesty in all dealings.</li>
                    <li>Continuous improvement and innovation.</li>
                    <li>Respect for diverse cultures and environments.</li>
                </ul>
            </div>

            <div className='border-t-2 border-white pt-8'>
                <h2 className='text-3xl font-bold mb-4'>Meet Our Team</h2>
                {/* Include team members' photos and descriptions */}
            </div>

            <div className='border-t-2 border-white pt-8'>
                <h2 className='text-3xl font-bold mb-4'>Client Testimonials</h2>
                {/* Include testimonials from satisfied clients */}
            </div>

            <div className='border-t-2 border-white pt-8'>
                <h2 className='text-3xl font-bold mb-4'>Our Achievements</h2>
                <p className='text-xl'>Travel Guru has been recognized for excellence in the travel industry...</p>
            </div>
            </div>
        </div>
    );
};

export default About;
