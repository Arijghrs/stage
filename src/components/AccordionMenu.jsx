import React, { useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
import { BiColor, BiShow } from "react-icons/bi";
import Popup from './Popup';



export default function AccordionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [isDeepNestedOpen, setIsDeepNestedOpen] = useState(false);

  
  const [isMasterPopupOpen, setMasterPopupOpen] = useState(false);
  const [isTeamLeaderPopupOpen, setTeamLeaderPopupOpen] = useState(false);
  const [isAgentPopupOpen, setAgentPopupOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleNestedAccordion = () => {
    setIsNestedOpen(!isNestedOpen);
  };

  const toggleDeepNestedAccordion = () => {
    setIsDeepNestedOpen(!isDeepNestedOpen);
  };

  


  const openMasterPopup = () => {
    setMasterPopupOpen(true);
  };

  const closeMasterPopup = () => {
    setMasterPopupOpen(false);
  };

  const openTeamLeaderPopup = () => {
    setTeamLeaderPopupOpen(true);
  };

  const closeTeamLeaderPopup = () => {
    setTeamLeaderPopupOpen(false);
  };

  const openAgentPopup = () => {
    setAgentPopupOpen(true);
  };

  const closeAgentPopup = () => {
    setAgentPopupOpen(false);
  };






  return (
    <div className='justify-center flex '>
      <div className=' mt-[150px] overflow-hidden  p-6 '>
        <div
          className='relative w-[62.5em] 
        shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15)
          pb-[5px]'>

          <input type='checkbox' className='absolute peer opacity-0' id='input' />

          
          <label htmlFor='input' className=' font-lato   tracking-[1px] mx-[0px] h-[80px] flex items-center cursor-pointer bg-white rounded-t-lg  ' onClick={toggleAccordion}>
           
            <img src="/images/rrr.jpg" alt="profile" className=" w-[50px] h-[50px] rounded-full  ml-[30px]" />
            <span className='ml-[20px] font-bold'>kobe bryant</span>
            <span className='text-blue-400 ml-3'>Master</span>
            <span className='ml-[100px]'>Team size :</span>
            <span className='text-blue-400 ml-2'>06</span>
            <span className='ml-[100px]'>Created on :</span>
            <span className='ml-2 text-blue-400 '>13 Aug 2023</span>
          </label>
          
          <div
            className={`absolute top-[20px] right-[20px] cursor-pointer transform transition-transform text-gray-600 ${isOpen ? 'rotate-180' : ''}`} style={{ fontSize: '40px' }}>
            <FiChevronDown />
          </div>
          {isOpen &&
            <button
              className='absolute top-[25px] right-[65px] w-8 text-gray-600 cursor-pointer'
              style={{ fontSize: '30px' }}
              onClick={() => openMasterPopup()}
            ><BiShow /></button>}
          <Popup isOpen={isMasterPopupOpen}
            onClose={closeMasterPopup}
            popupType="Master" />

          {/* Content */}
          <div className={`max-h-0 overflow-hidden pl-6 bg-white transition-max-height ${isOpen ? 'max-h-full' : ''
            }`}>
            <div className='relative w-[100%] bg-white
             pt-[0px]'>
              {/* accordion label */}
              <label htmlFor='input' className=' font-lato   tracking-[1px] mx-[0px] h-[80px] flex items-center cursor-pointer bg-white rounded-lg pt-2' onClick={toggleNestedAccordion}>
                {/* image*/}
                <img src="/images/60111.jpg" alt="profile" className=" w-[50px] h-[50px] rounded-full  ml-[50px]" />
                <span className='ml-[20px] font-bold'>Foulen lghali</span>
                <span className='text-green-500 ml-3'>Team leader</span>
                <span className='ml-[100px]'>Team size :</span>
                <span className='text-green-500 ml-2'>06</span>
                <span className='ml-[100px]'>Created on :</span>
                <span className='ml-2 text-green-500 '>13 Aug 2023</span>
              </label>
              {/* Icons */}
              <div className={`absolute top-[20px] right-[20px] text-gray-600 cursor-pointer transform transition-transform ${isNestedOpen ? 'rotate-180' : ''}`} style={{ fontSize: '40px' }}>
                <FiChevronDown />
              </div>
              {isOpen &&
                <button
                  className='absolute top-[25px] right-[65px] w-8 text-gray-600 cursor-pointer'
                  style={{ fontSize: '30px' }}
                  onClick={() => openTeamLeaderPopup()}
                ><BiShow /></button>}
              <Popup isOpen={isTeamLeaderPopupOpen}
                onClose={closeTeamLeaderPopup}
                popupType="TeamLeader" />



              {/* Content */}
              <div className={`max-h-0 overflow-hidden pl-6  pt-4 transition-max-height ${isNestedOpen ? 'max-h-full' : ''}`}>
                <div className='relative w-[100%] 
               p-0'>

                  <input type='checkbox' className='absolute peer opacity-0' id='deepNestedInput' />
                  {/* accordion label */}
                  <label htmlFor='input' className=' font-lato   tracking-[1px] mx-[0px] h-[80px] flex items-center cursor-pointer bg-white  ' >
                    {/* image*/}
                    <img src="/images/rrr.jpg" alt="profile" className=" w-[50px] h-[50px] rounded-full  ml-[70px]" />
                    <span className='ml-[20px] font-bold'>Foulen lghali</span>
                    <span className='text-red-400 ml-3'>Agent</span>
                    <span className='ml-[150px]'>created on :</span>
                    <span className='ml-2 text-red-400 '>13 Aug 2023</span>
                  </label>
                  {/* Icons */}

                  {isOpen &&
                    <button
                      className='absolute top-[25px] right-[65px] w-8 text-gray-600 cursor-pointer'
                      style={{ fontSize: '30px' }}
                      onClick={() => openAgentPopup()}
                    ><BiShow /></button>}
                  <Popup isOpen={isAgentPopupOpen}
                    onClose={closeAgentPopup}
                    popupType="Agent" />
                  {/* Content */}
                  <div></div>
                </div>

                <div className='relative w-[100%] bg-white 
               m-[1px]'>

                  <input type='checkbox' className='absolute peer opacity-0' id='deepNestedInput' />
                  {/* accordion label */}
                  <label htmlFor='input' className=' font-lato   tracking-[1px] mx-[0px] h-[80px] flex items-center cursor-pointer bg-white rounded-b-lg ' >
                    {/* image*/}
                    <img src="/images/333.jpg" alt="profile" className=" w-[50px] h-[50px] rounded-full  ml-[70px]" />
                    <span className='ml-[20px] font-bold'>Foulen lghali</span>
                    <span className='text-red-400 ml-3'>Agent</span>
                    <span className='ml-[150px]'>Created on :</span>
                    <span className='ml-2 text-red-400 '>13 Aug 2023</span>
                  </label>
                  {/* Icons */}

                  {isNestedOpen && <div className='absolute top-[25px] right-[65px] w-8 text-gray-600 cursor-pointer' style={{ fontSize: '30px' }}><BiShow /></div>}
                  {/* Content */}
                  <div></div>
                </div>
              </div>




            </div>
          </div>
        </div>















        {/* level 2*/}

        <div className='pt-6'>
          <div
            className='relative w-[62.5em] 
          shadow-[6px_6px_10px_-1px_rgba(0,0,0,0.15)'>

            <input type='checkbox' className='absolute peer opacity-0' id='input' />

            {/* accordion label */}
            <label htmlFor='input' className=' font-lato   tracking-[1px] mx-[0px] h-[80px] flex items-center cursor-pointer bg-white rounded-t-lg ' >
              {/* image*/}
              <img src="/images/rrr.jpg" alt="profile" className=" w-11 h-11 rounded-full -[30px] ml-[20px]" />
              <span className='ml-[20px] font-bold'>kobe bryant</span>
              <span className='text-blue-400 ml-3'>Master</span>
              <span className='ml-[100px]'>Team size :</span>
              <span className='text-blue-400 ml-2'>06</span>
              <span className='ml-[100px]'>created on :</span>
              <span className='ml-2 text-blue-400 '>13 Aug 2023</span>
            </label>
            {/* Icon */}
            <div className={`absolute top-[20px] right-[20px] text-gray-600 cursor-pointer transform transition-transform ${isNestedOpen ? 'rotate-180' : ''}`} style={{ fontSize: '40px' }}>
              <FiChevronDown />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
