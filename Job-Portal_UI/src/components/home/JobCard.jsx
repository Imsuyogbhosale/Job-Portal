/* eslint-disable no-unused-vars */
import React from 'react';
import { Badge } from '../ui/badge';

const JobCard = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border-gray-300 cursor-pointer'>
      <div>
        <h1 className='font-semibold'>Company Name</h1>
        <p>india</p>
      </div>
      <div>
        <h1 className='font-bold'>Job title</h1>
        <p> A developer designs and builds software applications</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-purple-900 font-bold'} variant={'ghost'}>12 postion</Badge>
        <Badge className={'text-black'} variant={'ghost'}>part Time</Badge>
        <Badge className={'text-red-800 font-semibold'} variant={'ghost'}>24LPA</Badge>
      </div>
    </div>
  );
}

export default JobCard;
