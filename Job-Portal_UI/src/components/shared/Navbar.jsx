// eslint-disable-next-line no-unused-vars
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Button } from '../ui/button';
import { Avatar, } from '@radix-ui/react-avatar';
import { LogOut, User2 } from 'lucide-react';
// import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = false;
     // Authontication purpuse 
    return (
        <div className='bg-white '>
            <div className='  flex  justify-between h-16 mx-auto max-w-screen-lg'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#f83002]'>Portal</span></h1>
                </div>
                <div className='flex items-center '>
                    <ul className='flex font-medium gap-5 items-center'>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2 mx-5'>
                                <Button variant='outline' className='hover:bg-neutral-600'>LogIN</Button>
                                <Button variant='outline'className='bg-gray-500 hover:bg-[#6A38C2]'>SignUp</Button>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild className='rounded-lg'>
                                    <Avatar className='bg-red-500 mx-12 cursor-pointer '>
                                        <Button> Profile </Button>
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-80 h-32 bg-slate-700 bg-transparent mt-5 rounded-lg'>
                                    <div className=' text-center pt-2'>
                                        <h4 className='font-medium text-white '>Job Portal </h4>
                                    </div>
                                    <div className='flex justify-center gap-12'>
                                        <div className='flex items-center gap-2'>
                                            <User2 className='w-6 h-6 mt-4 text-white' />
                                            <Button variant='link' className='bg-blue-500 text-xs px-3 py-1 text-white hover:bg-blue-600  mt-5'>
                                                View Profile
                                            </Button>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <LogOut className='w-6 h-6 mt-4 text-white' />
                                            <Button variant='link' className='bg-blue-500 text-xs px-3 py-1 text-white hover:bg-blue-600  mt-5'>
                                                LogOut
                                            </Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>
        </div>
    );
}

export default Navbar; 
