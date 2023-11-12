import React from 'react';
import '../index.css';

const InfoComponent = () => {
  return (
    <div className="mx-auto  border rounded-lg border-transparent bg-white" style={{ width: '610px', height: '313px' }}>
     <div className='flex items-center'>
      <div className='rounded-l-lg overflow-hidden flex-shrink-0'>
       <img src="/images/44.png" alt="dfdbf" className="h-[300px] w-[300px] object-cover " />
      </div>
      <div className="font-lato  text-base leading-6 m-4 mt-0">
        <h1 className="font-bold mb-4 text-3xl">NIKE</h1>
        <p className="mb-7 text-sm">
            "Nike, Inc. is an American multinational corporation that is engaged in the design,
             development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment."
        </p>
        <p className="text-blue-500 text-xl">
            communication rate : <span className='font-bold text-2xl'>10%</span>
          </p>
      </div>
      </div>
    </div>
  );
};

export default InfoComponent;
