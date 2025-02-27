import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/Logo/Logo1.png"
import toast from 'react-hot-toast'

const Navbar = (props) => {
  let isLoggedin = props.isLoggedIn
  let setIsLoggedIn = props.setIsLoggedIn
  return (
    <div className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 transition-all duration-200`}>
        <Link to='/'>
         <img src={logo}  alt='logo' width={160} height={32} />
        </Link>

        <nav>
            <ul className="flex gap-x-6 text-richblack-25">
                <li className='text-green-50'> <Link to='/'>Home</Link> </li>

                <li> <Link to='/'>About</Link> </li>

                <li> <Link to='/'>Contact</Link> </li>
            </ul>
        </nav>
        <div className='flex items-center gap-x-4'>
          { !isLoggedin &&
              <Link to="/login">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100"
                 > Login</button>
              </Link>
          }
          {!isLoggedin &&
              <Link to="/signup">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100"
                >Sign Up</button>
              </Link>
          }
          { isLoggedin &&
              <Link to="/dashboard">
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100"
                >Dashboard</button>
              </Link>
          }
          { isLoggedin &&
              <Link to='/'>
                <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100"
                onClick={()=>{
                  setIsLoggedIn(false)
                   toast.success("logged out")
                }}>Logout</button>
              </Link>
          }
        </div>
    </div>
  )
}

export default Navbar
