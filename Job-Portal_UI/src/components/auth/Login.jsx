// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';


const Login = () => {
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center mx-auto mt-10'>
        <form className='w-1/3 py-12 px-8 border rounded-md bg-slate-100 '>
          <h1 className='text-center font-semibold text-slate-500'>LOGIN</h1>
          <div className='my-4 text-center font-semibold'>
            <Label className='text-slate-400'>EMAIL</Label>
            <Input
              className='px-3 w-64 mt-2 mx-auto'
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className='my-4 text-center font-semibold'>
            <Label className='text-slate-400'>PASSWORD</Label>
            <Input
              className='px-3 mt-2 w-64 mx-auto'
              type="password"
              placeholder="Enter password"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
