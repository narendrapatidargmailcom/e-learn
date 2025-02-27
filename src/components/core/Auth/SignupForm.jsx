import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import Tab from '../../common/Tab'
import { ACCOUNT_TYPE } from "../../../utils/constants"

const SignupForm = ({setIsLoggedIn}) => {
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)
     const[formData,setFormData]=useState({
         firstName:"",
         lastName:"",
         email:"",
         password:"",
         confirmPassword:""
        })
    const[showPassword,setShowPassword]=useState(false)
    const[showConfirmPassword,setshowConfirmPassword]=useState(false)
     const navigate = useNavigate();

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
            if(formData.password != formData.confirmPassword){
                toast.error("password do not match with confirm password")
                return;
            }

            setIsLoggedIn(true)
            toast.success("Account created successfully")
            const accountdata = {
                ...formData
            }
            const finalData={
              ...accountdata,
              accountType
    
             }
            console.log("final account data",finalData)
            navigate("/dashboard")
         }
         const tabData = [
          {
            id: 1,
            tabName: "Student",
            type: ACCOUNT_TYPE.STUDENT,
          },
          {
            id: 2,
            tabName: "Instructor",
            type: ACCOUNT_TYPE.INSTRUCTOR,
          },
        ]
  return (
    <div>
      {/* student-instructor tab*/}
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />

      <form onSubmit={submitHandler} className="flex w-full flex-col gap-y-4">
        {/* {first name and last name} */}
        <div className="flex gap-x-4">
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">First Name<sup className="text-pink-200">*</sup> </p>
          <input
             required
             type='text'
             placeholder='Enter First Name'
             name='firstName'
             onChange={changeHandler}
             value={formData.firstName}
             style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Last Name<sup className="text-pink-200">*</sup> </p>
          <input
             required
             type='text'
             placeholder='Enter Last Name'
             name='lastName'
             onChange={changeHandler}
             value={formData.lastName}
             style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email<sup className="text-pink-200">*</sup> </p>
          <input
             required
             type='text'
             placeholder='Enter Email'
             name='email'
             onChange={changeHandler}
             value={formData.email}
             style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
         {/* {password and confirm Password} */}
         <div className="flex gap-x-4">
         <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Create Password<sup className="text-pink-200">*</sup> </p>
          <input
             required
             type={showPassword?("text"):("password")}
             placeholder='Enter Password'
             name='password'
             onChange={changeHandler}
             value={formData.password}
             style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
           <span onClick={()=> setShowPassword((prev)=> !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer">
            {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
        </span>
        </label>
        <label className='relative'>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">confirm Password<sup className="text-pink-200">*</sup> </p>
          <input
             required
             type={showConfirmPassword?("text"):("password")}
             placeholder='confirm Password'
             name='confirmPassword'
             onChange={changeHandler}
             value={formData.confirmPassword}
             style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
           <span onClick={()=> setshowConfirmPassword((prev)=> !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer">
            {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
        </span>
        </label>
         </div>
       <button  className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm
