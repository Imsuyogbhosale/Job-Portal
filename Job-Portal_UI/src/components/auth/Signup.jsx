// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { RadioGroup } from '@radix-ui/react-radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='bg-slate-100 min-h-screen'>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mt-5 mx-auto py-2'> 
        <form className='w-4/5 md:w-1/2 border border-gray-200 rounded-md py-5 px-6 bg-slate-50 mb-10'>
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
              className='px-3 mt-1'
              type="email"
              placeholder="Enter Email"
            />
          </div>

          {/* Password Field */}
          <div className='my-2 mx-4 text-center font-semibold'>
            <Label className='text-slate-400'>PASSWORD</Label>
            <Input
              className='px-3 mt-1'
              type="password"
              placeholder="Enter Password"
            />
          </div>

          {/* Phone Number Field */}
          <div className='my-2 mx-4 text-center font-semibold'>
            <Label className='text-slate-400'>PHONE NO</Label>
            <Input
              className='px-3 mt-1'
              type="number"
              placeholder="ENTER PHONENO"
            />
          </div>

          {/* Radio Group */}
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className='flex items-center gap-2'>
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4 mt-2 bg-gray-500 hover:bg-[#6A38C2]">SignUp</Button>
          <span className='text-sm'>allredy Have Account ? <Link to='/Login' className='text-blue-700'>Login</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
