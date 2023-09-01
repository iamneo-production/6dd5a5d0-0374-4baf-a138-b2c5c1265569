import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

import userIcon from '../Icons/userIcon.png'
import Home from '../Icons/home.png'
import Accounts from '../Icons/accounts.png'
import Trans from '../Icons/trans.png'
import Help from '../Icons/help.png'
import Profile from '../Icons/profile.png'
import Messages from '../Icons/messages.png'
import Card from '../Icons/card.png'
import LineActivity from '../Support/LineActivity';
import { useRecoilValue } from 'recoil';
import { userByAccountSelector } from '../../Recoil/RecoilState'
import Login from './Login';

const transactionSuspicious = [

    {type: "Tap n Pay", done: 4 ,suspicious: 1} ,
  
    {type: "Atm Withdrawl", done: 1 ,suspicious: 1} ,
  
    {type: "Online", done: 9 ,suspicious: 3} ,
  
    {type: "POS", done: 12 ,suspicious: 5} ,
  
    // more types
  
  ]

const UserDashboard = () => {
    const navigate = useNavigate();

    const transData = useRecoilValue(userByAccountSelector);
    console.log(transData)
    const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
    console.log(setauthenticated())
    function handleLogout() {
        localStorage.clear()
        navigate("/login"); 
      }


  return (
   <div>
        {
            authenticated ? (<div className=' h-full w-full flex justify-center mt-10 flex-col items-center '>
            <div className='h-[300px] w-11/12 bg-white shadow-2xl rounded-2xl'>
    
                <div className='flex justify-between p-8 bg-gray-300'>
                    <div className='flex items-center' >
                        <div className='shadow-lg rounded-full w-12'>
                            <img src={userIcon} alt="" />
                        </div>
                        <div className='ml-4 text-2xl font-semibold text-neutral-700'>
                           Welcome Rajsekhar
                        </div>
                    </div>
                    <div>
                        <button className='bg-blue-600 h-10 w-20 rounded-lg text-white' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
    
                <div className='flex justify-evenly p-10'> 
                    <Link to="/makepayments">
                    <div className='flex flex-col justify-center cursor-pointer '>
                            <div className='hover:bg-slate-100 rounded-xl'>
                                <img className='w-20 rounded-xl' src={Home} alt="" />
                            </div>
                            <div className='w-20 mt-2 text-xs font-bold '>
                                PAY
                            </div>
                    </div>
                    </Link>
                    <Link to="/accounts">
                    <div className='flex flex-col justify-center'>
                        <div className='hover:bg-slate-100 rounded-xl'>
                                <img className='w-20  rounded-xl' src={Accounts} alt="" />
                            </div>
                            <div className='w-20 mt-2 text-xs font-bold '>
                                ACCOUNTS
                            </div>
                    </div>
                    </Link>
                    <Link to="/transactions">
                    <div className='flex flex-col justify-center'>
                        <div className='hover:bg-slate-100 rounded-xl'>
                                <img className='w-20  rounded-xl' src={Trans} alt="" />
                            </div>
                            <div className='w-20 mt-2 text-xs font-bold '>
                                TRANSACTION
                            </div>
                    </div>
                    </Link>
                    <Link to="/cards">
                    <div className='flex flex-col justify-center'>
                        <div className='hover:bg-slate-100 rounded-xl'>
                                <img className='w-20  rounded-xl' src={Card} alt="" />
                            </div>
                            <div className='w-20 mt-2 text-xs font-bold '>
                                CARDS
                            </div>
                    </div>
                    </Link>
                    <Link to="/messages">
                    <div className='flex flex-col justify-center'>
                        <div className='hover:bg-slate-100 rounded-xl'>
                                <img className='w-20  rounded-xl' src={Messages} alt="" />
                            </div>
                            <div className='w-20 mt-2 text-xs font-bold '>
                                ALERTS
                            </div>
                    </div>
                    </Link>
                    <Link to="/profile">
                    <div className='flex flex-col justify-center'>
                        <div className='hover:bg-slate-100 rounded-xl'>
                                <img className='w-20  rounded-xl' src={Profile} alt="" />
                            </div>
                            <div className='w-20 mt-2 text-xs font-bold '>
                                PROFILE
                            </div>
                    </div>
                    </Link>
                    <Link to="/help">
                    <div className='flex flex-col justify-center'>
                        <div className='hover:bg-slate-100 rounded-xl'>
                                <img className='w-20  rounded-xl' src={Help} alt="" />
                            </div>
                            <div className='w-20 mt-2 text-xs font-bold '>
                                REPORT
                            </div>
                    </div>
                    </Link>
                </div>
            </div>
    
            <div className='w-11/12 mt-10 mb-10 p-4 bg-white shadow-2xl rounded-xl'>
                <LineActivity data={transactionSuspicious}/>
            </div>
        </div>):
        (
        <Login/>
        )
        }
   </div>
  )
}

export default UserDashboard
