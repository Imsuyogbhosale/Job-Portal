// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { RadioGroup } from '@radix-ui/react-radio-group';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <form className="w-1/2 py-12 px-8 border rounded-md bg-slate-100 my-4">
          <h1 className="text-center font-semibold text-slate-500">LOGIN</h1>
          <div className="my-4 font-semibold">
            <Label className="text-slate-400">EMAIL</Label>
            <Input
              className="px-3 mt-2 mx-auto"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="my-4 font-semibold">
            <Label className="text-slate-400">PASSWORD</Label>
            <Input
              className="px-3 mt-2 mx-auto"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
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
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4 mt-2 bg-gray-500 hover:bg-[#6A38C2]">Sign Up</Button>
          <span className="text-sm">Already Have an Account? <Link to='/Login' className="text-blue-700">Login</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Login;
