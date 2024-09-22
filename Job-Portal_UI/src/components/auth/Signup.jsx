// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';

const Signup = () => {
  return (
    <div className='bg-slate-100 min-h-screen' >
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mt-12 mx-auto'>
        <form className='w-1/3 border border-gray-200 rounded-md py-5 px-6 bg-slate-50' >
          <h1 className='font-bold text-xl text-center mb-5'>SignUp</h1>

          {/* Full Name Field */}
          <div className='my-2 mx-4 text-center font-semibold'>
            <Label className='text-slate-400'>Full Name</Label>
            <Input
              className='px-3 mt-2'  
              type="text"
              placeholder="Enter Name"
            />
          </div>

          {/* Email Field */}
          <div className='my-2 mx-4 text-center font-semibold'>
            <Label className='text-slate-400'>EMAIL</Label>
            <Input
              className='px-3 mt-2 '  
              type="email"
              placeholder="Enter Email"
            />
          </div>

          {/* Password Field */}
          <div className='my-2 mx-4 text-center font-semibold'>
            <Label className='text-slate-400'>PASSWORD</Label>
            <Input
              className='px-3 mt-2'  
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className='my-2 mx-4 text-center font-semibold'>
            <Label className='text-slate-400'>PHONE NO </Label>
            <Input
              className='px-3 mt-2'  
              type="number"
              placeholder="Enter PhoneNO"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
