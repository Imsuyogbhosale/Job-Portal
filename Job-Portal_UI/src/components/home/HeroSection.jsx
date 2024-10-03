// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className='text-center mt-8'> 
            <div className='flex flex-col gap-5 my-10'>
                <span className='w-60 mx-auto bg-gray-100 text-[#412923] border rounded-full py-4'>
                    No 1 Job hunt Website
                </span>
                <h1 className='font-semibold text-5xl mt-2'>
                    Serach, apply and <br />
                    Get yours <span className='text-[#6A38C2] font-bold'>Dream Job</span>
                </h1>
                <p className='font-mono'>Unlock your career potential with top opportunities waiting for you!</p>
                <div className=' flex w-[40%] shadow-lg rounded-full border-gray-200 pl-3 items-center mx-auto '>
                    <input
                        type='text'
                        placeholder='Find Your Job'
                        className='flex-grow outline-none rounded-full w-full text-center  '
                    />
                    <Button className='ml-2 rounded-sm bg-slate-400'>
                        <Search />
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
