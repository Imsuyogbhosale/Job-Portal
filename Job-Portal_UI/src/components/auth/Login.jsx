// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { RadioGroup } from '@radix-ui/react-radio-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { USER_REG_API_END_POINT } from '@/utils/constant';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: ""
  })

  const SetDatahandler = (e) => {
    // eslint-disable-next-line no-undef
    setInput({ ...input, [e.target.name]: e.target.value });
  }
    
   const Navigate = useNavigate()
  const Submithandler = async (e) => {
    e.preventDefault() 
    try {
      const res = await axios.post(`${USER_REG_API_END_POINT}/login`, input , {
        Headers : {
      "content-Type" : "application/json"
        },
        withCredentials : true
      } );
      if(res.status.sucess){
        Navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  } 
  
  return (
    <div className="h-screen flex flex-col " style={{backgroundImage: "url('/jobpic.jpg')"}}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <form onSubmit={Submithandler} className="w-1/2 py-12 px-8 border rounded-md bg-slate-100 my-4">
          <h1 className="text-center font-semibold text-slate-500">LOGIN</h1>
          <div className="my-4 font-semibold">
            <Label className="text-slate-400">EMAIL</Label>
            <Input
              className="px-3 mt-2 mx-auto"
              type="email"
              name = "email"
              value = {input.email}
              onChange = {SetDatahandler}
              placeholder="Enter email"
            />
          </div>
          <div className="my-4 font-semibold">
            <Label className="text-slate-400">PASSWORD</Label>
            <Input
              className="px-3 mt-2 mx-auto"
              type="password"
              name = "password"
              value = {input.password}
              onChange = {SetDatahandler}
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked = {input.role === "Student"}
                  onChange = {SetDatahandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked = {input.role === "recruiter"}
                  onChange = {SetDatahandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit" className="w-full my-4 mt-2 bg-gray-500 hover:bg-[#6A38C2]">Sign Up</Button>
          <span className="text-sm">Already Have an Account? <Link to='/Login' className="text-blue-700">Login</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Login;
