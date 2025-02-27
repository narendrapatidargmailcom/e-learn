import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom'
const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate()
    const[formData,setFormData]=useState({
     email:"",
     password:""
    })
    const[showPassword,setShowPassword]=useState(false)
    function changeHandler(event){
       setFormData((prevData)=>(  
        {  
        ...prevData,
        [event.target.name]:event.target.value
        }
       ))
    }
   function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true)
    navigate("/dashboard")
    }
  return (
    <form  className="mt-6 flex w-full flex-col gap-y-4"
     onSubmit={submitHandler}>
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"> Email Address <sup className="text-pink-200">*</sup></p>
        <input
         required
         type='text'
         value={formData.email}
         onChange={changeHandler}
         placeholder='Enter your Email'
         name='email'
         style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        /> 
      </label>
      <label className='relative'>
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Password <sup className="text-pink-200">*</sup></p>
        <input
         required
         type={showPassword?("text"):("password")}
         value={formData.password}
         onChange={changeHandler}
         placeholder='Enter your Password'
         name='password'
         style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
        /> 
        <span onClick={()=> setShowPassword((prev)=> !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer">
            {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
        </span>
        </label>
        <Link to="/">
        <p>
            Forget Password
        </p>
        </Link>
      
      <button className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900">
        Sign in
      </button>
    </form>
  )
}

export default LoginForm
