/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../shared/Navbar';
import Job from './Job';
import FilterCard from './FilterCard';

const JobsAerrey = [1,2,3,4,5,6,7,8,9]

const Jobs = () => {
  return (
    <div> 
    <Navbar/>
    <FilterCard/>
    {
       JobsAerrey.map((item, index)=><Job key={item}/>)
    }
    </div>
  );
}

export default Jobs;
