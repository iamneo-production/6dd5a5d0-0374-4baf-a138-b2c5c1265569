import React from 'react'
import AccountsPic from '../Icons/accounts.png'
import Hdfc from '../Icons/hdfc.png'
import Sbi from '../Icons/sbi.png'
import Add from '../Icons/add.png'
import { Link } from 'react-router-dom';

const Accounts = () => {
  return (
    <div className='mt-8 flex justify-center'>

        <div className='w-11/12 shadow-2xl rounded-2xl'>

            <div className='flex justify-between p-8 bg-gray-800 rounded-t-xl'>
                <div className='flex items-center' >
                    <div className='shadow-lg rounded-full w-12'>
                        <img src={AccountsPic} alt="" />
                    </div>
                    <div className='ml-4 text-2xl font-semibold text-neutral-200'>
                        Accounts
                    </div>
                </div>
                <div>
                    <Link to="/userdashboard">
                        <button className='bg-blue-600 h-10 w-20 rounded-lg text-white'>Back</button>
                    </Link>
                </div>
            </div>

            <div className='bg-yellow-400'>
                <div >
                    <div className='text-3xl text-white font-bold ml-10 p-4 '>All Account Balances</div>
                    <div className='text-4xl text-black font-semibold ml-10 mt-4'>₹ 36,010.43</div>
                    <div className='text-xs font-serif font-semibold ml-10 mt-1'>Total Consolidated Balances</div>
                    <Link to="/transactions">
                        <div className='text-lg underline text-black font-semibold ml-10 mt-4 p-2 cursor-pointer hover:text-gray-500'>Check all transactions &gt; </div>
                    </Link>
                </div>
            </div>
            <div>
            <div className='flex flex-col justify-center items-center mt-2 p-2'>

                <div className='w-[400px] h-20 flex rounded-xl bg-neutral-100 shadow-md p-2 m-4 justify-around items-center cursor-pointer hover:bg-neutral-300'>
                    <div  className='flex items-center '>
                        <div className='w-10 '>
                            <img src={Hdfc} alt="" />
                        </div>
                        <div className='mx-4 text-lg font-bold'>HDFC BANK</div>
                    </div>
                    <div className='text-xl font-semibold text-gray-900'>₹ 34,010.43</div>
                </div>

                <div className='w-[400px] h-20 flex rounded-xl bg-neutral-100 shadow-md p-2 m-2 justify-around items-center cursor-pointer hover:bg-neutral-300'>
                    <div  className='flex items-center '>
                        <div className='w-10'>
                            <img src={Sbi} alt="" />
                        </div>
                        <div className='mx-4 text-lg font-bold'>SBI BANK</div>
                    </div>
                    <div className='text-xl font-semibold text-gray-900'>₹ 2,000.00</div>
                </div>

                <div className='w-[400px] h-20 flex rounded-xl bg-neutral-100 shadow-md p-2 m-2 justify-center items-center cursor-pointer hover:bg-neutral-300'>
                    <div  className='flex items-center '>
                        <div className='w-12'>
                            <img className='bg-neutral-200 rounded-full ' src={Add} alt="" />
                        </div>
                        <div className='mx-4 text-lg font-semibold'>Add Bank </div>
                    </div>
                </div>
            </div>


            </div>
        
        </div>

    </div>
  )
}

export default Accounts
