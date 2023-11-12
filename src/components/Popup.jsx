import '../index.css';
import { BiDownvote } from "react-icons/bi";
import React, { useEffect, useState } from 'react';

const Popup = ({ isOpen, children, onClose, popupType }) => {

  const popupColorClass = popupType === "Master" ? " bg-Colorblue" : popupType === "TeamLeader" ? "bg-Colorgreen" : " bg-Coloryellow";
  const bgtextColorClass = popupType === "Master" ? " bg-blue-100" : popupType === "TeamLeader" ? "bg-green-100" : " bg-yellow-100";
  const textColorClass = popupType === "Master" ? " text-Colorblue" : popupType === "TeamLeader" ? "text-Colorgreen" : " text-Coloryellow";








  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (isOpen && event.target.classList.contains('overlay')) {
        onClose();
      }
    };

    document.addEventListener('click', closeOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeOnOutsideClick);
    };
  }, [isOpen, onClose]);



  if (!isOpen) return null;

  return (
    <div>
      <div >
        <div className=" fixed inset-0 flex items-center justify-center z-50 ">
          <div className="overlay absolute inset-0 bg-gray-700 opacity-50 cursor-pointer"></div>
          <div className="bg-gray-100 h-[550px] w-[750px] rounded-lg shadow-md z-10 relative flex">

            {children}

            <div className={`${popupColorClass} h-[550px] w-[300px] rounded-lg p-3`}>
              <img src="/images/Vector.png" alt="icon" className=" w-[30px] h-[30px]  ml-[220px]   p-1 " />
              <div className='flex flex-col items-center'>
                <img src="/images/rrr.jpg" alt="profile" className=" w-[150px] h-[150px] rounded-full    p-4 " />
                <h1 className='text-white font-lato   text-2xl p-2'>Jhon Doe</h1>

                <div className={` rounded-full h-9 w-[150px] justify-center items-center flex ${bgtextColorClass}`}>
                  <h1 className={`${textColorClass}`}> {popupType === "Master" ? "Master" : popupType === "TeamLeader" ? "Team Leader" : "Agent"}</h1>
                </div>
                <div className='pt-10 '>
                  <h1 className='text-blue-100 text-xs pb-4'>Address: <span className='text-white'>Los Angeles lakes</span></h1>
                  <h1 className='text-blue-100 text-xs pb-4'>Phone: <span className='text-white'>25616987</span></h1>
                  <h1 className='text-blue-100 text-xs pb-4'>Email: <span className='text-white'>Jhondoe@gmail.com</span></h1>
                  <h1 className='text-blue-100 text-xs pb-4'>Team size: <span className='text-black'>03</span></h1>
                  <h1 className='text-blue-100 text-xs pb-4'>Supervisor: <span className='text-white'>Owner</span></h1>
                  <h1 className='text-blue-100 text-xs pb-4'>IBAN: <span className='text-white'>XXX145XX14552</span></h1>
                </div>
              </div>
            </div>
            <div className='bg-white h-[550px] w-[500px]  rounded-lg ml-5'>
              <div className='ml-6'>
                <h1 className='text-black font-arial font-smbold text-xl mt-3'>Overview</h1>
                <div>
                  <p className='text-xs text-orange-300  pt-6 pb-2'>40% until the next point</p>
                  <div className=' rounded-full bg-orange-100 w-[400px] h-3 flex'>
                    <div className='h-3 rounded-full bg-Coloryellow w-[150px]  items-center'>
                    </div>
                  </div>
                  <div className='mt-8 pb-6 '>
                    <h1 className='font-lato font-smbold pb-1'>Revenue<span className='text-xxs text-gray-400 '> (Monthly)</span></h1>
                    <h1 className='font-smbold text-2xl pb-1'>512.50 TND</h1>
                    <div className='flex items-center '>
                      <h1 className=' text-2xs text-gray-500'>Since last month <span className='text-red-600 pl-2 font-smbold text-xs'>2.27%</span> </h1>
                      <img src="/images/Vector2.png" alt="icon" className=" w-[10px] h-[10px]  ml-3 " />
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <h1 className='font-smbold text-2xl border-b border-gray-200 pb-5 w-[400px] '>Latest orders</h1>
                    <h1 className='border-b border-gray-200 pb-5 text-sm   w-[400px] '>
                      <span className='ml-4'>Dec 7.2022 </span>
                      <span className='m-2'>Kobe Bryant </span>
                      <span className='font-bold m-2'>120 DT </span>
                      <span>Spallding Company </span>
                    </h1>
                    <h1 className='border-b border-gray-200 pb-5 text-sm  w-[400px] '>
                      <span className='ml-4'>Dec 7.2022 </span>
                      <span className='m-2'>Kobe Bryant </span>
                      <span className='font-bold m-2'>120 DT </span>
                      <span>Spallding Company </span>
                    </h1>
                    <h1 className='border-b border-gray-200 pb-5 text-sm  w-[400px] '>
                      <span className='ml-4'>Dec 7.2022 </span>
                      <span className='m-2'>Kobe Bryant </span>
                      <span className='font-bold m-2'>120 DT </span>
                      <span>Spallding Company </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>










  );
};

export default Popup;


