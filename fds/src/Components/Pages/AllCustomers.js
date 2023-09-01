import React, { useState } from 'react'
import Audience from '../Icons/audience.png'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { getUserAtom } from '../../Recoil/RecoilState'

const AllCustomers = () => {
    const userData = useRecoilValue(getUserAtom);
    const [searchInput, setSearchInput] = useState('');

    const filteredUsers = userData.filter(user =>
      user.accountNo.includes(searchInput)
    );


  return (
    <div className='h-screen overflow-y-scroll no-scrollbar'>
        <div className='flex justify-between p-8 bg-gray-900 '>
                <div className='flex items-center' >
                    <div className='shadow-lg rounded-full p-2 w-12'>
                        <img src={Audience } alt="" />
                    </div>
                    <div className='ml-4 text-2xl font-semibold text-white'>
                        LIST OF CUSTOMERS
                    </div>
                </div>
                <div>
                    <Link to="/staffdashboard">
                        <button className='bg-blue-600 h-10 w-20 rounded-lg text-white'>Back</button>
                    </Link>
                </div>
        </div>
        <div className='bg-gray-400 flex justify-center p-4'>
            <div className='w-10 p-1 mx-4'>
                <img src={Audience } alt="" />
            </div>
            <div>
            <input
            type='text'
            placeholder='Search by Account Number'
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            className='border border-gray-300 rounded-lg p-2 w-[700px]'
            />
            </div>
        </div>

        {
            filteredUsers.map(user=>(
                <div>{user.name}</div>
            ))
        }
      
    </div>
  )
}

export default AllCustomers
