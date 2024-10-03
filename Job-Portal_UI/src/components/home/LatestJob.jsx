/* eslint-disable no-unused-vars */
import React from 'react';
import JobCard from './JobCard';
const randomNo = [1, 2, 3, 4, 5, 6, 7, 8]
const LatestJob = () => {
  return (
    <div className='max-w-7xl my-20 mx-12' >
      <h1 className='text-4xl font-bold'> <span className='text-purple-900'>Latest & Top</span> Job Opnings</h1>
      <div className='grid grid-cols-3 gap-4 my-5'>
        {
          randomNo.slice(0, 6).map((nuber, index) => (<JobCard key={index} />))
        }
      </div>
    </div>
  );
}

export default LatestJob;
