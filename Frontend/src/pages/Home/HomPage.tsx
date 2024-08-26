import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, [])
    return (
      <div className='h-screen bg-gray-200 p-4'>

        <div className='  '>
            <div className='flex flex-row py-3 px-2 bg-white justify-between items-center gap-2'>
                <div className='px-3'>
                    <img src="https://udhyog4.co.in/Images/logo.png" className='w-[130px]' alt="logo" />
                </div>
                <div className='px-3 text-3xl font-semibold text-green-700'>Vision</div>
                <div className='px-3 text-xl text-green-700'>
                    Transformation of Existing Manufacturing Enterprises into SMART Manufacturing Enterprises Using Indigenously Developed Innovative Hardware and Software.
                </div>
            </div>
        </div >
            <div className="text-center bg-white p-10 mt-5 rounded-lg shadow-lg">
                <h2 className="text-teal-700 mb-5 text-2xl font-semibold">Dashboard</h2>
                <button
                    className="px-6 py-3 text-lg bg-teal-700 text-white rounded-md hover:bg-teal-800 focus:outline-none w-48 mx-2"
                    onClick={() => navigate('/newdata/part1')}
                    >
                    New Data
                </button>
                <button
                    className="px-6 py-3 text-lg bg-teal-700 text-white rounded-md hover:bg-teal-800 focus:outline-none w-48 mx-2"
                    onClick={() => navigate('/existingdata')}
                    >
                    Existing Data
                </button>
            </div>
                  </div>
    );
}

export default HomePage;
