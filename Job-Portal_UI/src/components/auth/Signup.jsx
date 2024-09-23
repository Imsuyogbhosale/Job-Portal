// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { RadioGroup } from '@radix-ui/react-radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNo: "",
    role: "",
    file: ""
  });
  
  const Navigate = useNavigate();

  const SetDatahandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const ChangeFileHandler = (e) => {
    const selectedFile = e.target.files?.[0];
    setInput({ ...input, file: selectedFile });
  };

  const Submithandler = async (e) => {
    const formData = new FormData();
    formData.append('fullname', input.fullname);
    formData.append('email', input.email);
    formData.append('password', input.password);
    formData.append('phoneNo', input.phoneNo);
    formData.append('role', input.role);
    
    if (input.file) {
      formData.append('file', input.file);
    }

    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      });

      if (res.data.success) {
        Navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-slate-100 min-h-screen'>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mt-5 mx-auto py-2'>
        <form onSubmit={Submithandler} className='w-4/5 md:w-1/2 border border-gray-200 rounded-md py-5 px-6 bg-slate-50 mb-10'>
          <h1 className='font-bold text-xl text-center mb-5'>SignUp</h1>

          {/* Full Name Field */}
          <div className='my-2 mx-4 text-center font-semibold'>
            <Label className='text-slate-400'>Full Name</Label>
            <Input
              className='px-3 mt-2'
              type="text"
              name='fullname'
              value={input.fullname}
              onChange={SetDatahandler}
              placeholder="Enter Name"
            />
          </div>

          {/* Email Field */}
          <div className='my-2 mx-4 text-center font-semibold'>
            <Label className='text-slate-400'>EMAIL</Label>
            <Input
              className='px-3 mt-1'
              type="email"
              value={input.email}
              name="email"
              onChange={SetDatahandler}
              placeholder="Enter Email"
            />
          </div>

          {/* Password Field */}
          <div className='my-2 mx-4 text-center font-semibold'>
            <Label className='text-slate-400'>PASSWORD</Label>
            <Input
              className='px-3 mt-1'
              type="password"
              value={input.password}
              name="password"
              onChange={SetDatahandler}
              placeholder="Enter Password"
            />
          </div>

          {/* Phone Number Field */}
          <div className='my-2 mx-4 text-center font-semibold'>
            <Label className='text-slate-400'>PHONE NO</Label>
            <Input
              className='px-3 mt-1'
              type="text"
              name="phoneNo"
              value={input.phoneNo}
              onChange={SetDatahandler}
              placeholder="Enter Phone No."
            />
          </div>

          {/* Radio Group */}
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  id="r1"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={SetDatahandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  id="r2"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={SetDatahandler}
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
                onChange={ChangeFileHandler}
              />
            </div>
          </div>

          <Button type="submit" className="w-full my-4 mt-2 bg-gray-500 hover:bg-[#6A38C2]">SignUp</Button>
          <span className='text-sm'>Already have an account? <Link to='/Login' className='text-blue-700'>Login</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
