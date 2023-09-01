import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import userIcon from '../Icons/userIcon.png'
import Home from '../Icons/home.png'
import Audience from '../Icons/audience.png'
import Alert from '../Icons/alert.png'
import Login from './Login';


const StaffDashboard = () => {
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
    const navigate = useNavigate();

    console.log(setauthenticated);
    function handleLogout() {
        localStorage.setItem("authenticated", false);
        navigate("/login"); 
      }

  return (
    <div>
        {
            authenticated ? (
                <div className=' h-full w-full flex justify-center mt-10 flex-col items-center '>

        <div className='h-[300px] w-11/12 bg-white shadow-2xl rounded-2xl'>

            <div className='flex justify-between p-8 bg-gray-300'>
                <div className='flex items-center' >
                    <div className='shadow-lg rounded-full w-12'>
                        <img src={userIcon} alt="" />
                    </div>
                    <div className='ml-4 text-2xl font-semibold text-neutral-700'>
                       Welcome Staff
                    </div>
                </div>
                <div>
                    <button className='bg-blue-600 h-10 w-20 rounded-lg text-white' onClick={handleLogout}>Logout</button>
                </div>
            </div>

            <div className='flex justify-evenly p-10'> 
                <Link to="/">
                <div className='flex flex-col justify-center cursor-pointer '>
                        <div className='hover:bg-slate-100 rounded-xl'>
                            <img className='w-20 rounded-xl' src={Home} alt="" />
                        </div>
                        <div className='w-20 mt-2 text-xs font-bold '>
                            HOME
                        </div>
                </div>
                </Link>

                <Link to="/allusers">
                    <div className='flex flex-col justify-center'>
                        <div className='hover:bg-slate-100 rounded-xl'>
                                <img className='w-20  rounded-xl' src={Audience} alt="" />
                            </div>
                            <div className='w-20 mt-2 text-xs font-bold '>
                                CUSTOMERS
                            </div>
                    </div>
                </Link>
                <Link to="/addUser">
                    <div className='flex flex-col justify-center'>
                        <div className='hover:bg-slate-100 rounded-xl'>
                                <img className='w-20  rounded-xl' src={Audience} alt="" />
                            </div>
                            <div className='w-20 mt-2 text-xs font-bold '>
                                ADD NEW CUSTOMER
                            </div>
                    </div>
                </Link>

                <Link to="/allreports">
                <div className='flex flex-col justify-center'>
                    <div className='hover:bg-slate-100 rounded-xl'>
                            <img className='w-20  rounded-xl' src={Alert} alt="" />
                        </div>
                        <div className='w-20 mt-2 text-xs font-bold '>
                            REPORTS
                        </div>
                </div>
                </Link>
            </div>
        </div>
      
    </div>
            ):(<Login/>)
        }
    </div>

  )
}

export default StaffDashboard
