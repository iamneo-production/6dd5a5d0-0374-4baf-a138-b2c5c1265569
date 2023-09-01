import React, { useEffect } from 'react'
import Trans from '../Icons/trans.png'
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { transactionsByAccountSelector } from '../../Recoil/RecoilState'
import PieChart from '../Support/PieChart';
import 'chart.js/auto';

const Transactions = () => {

  const transData = useRecoilValue(transactionsByAccountSelector)


    useEffect(() => {
      console.log(transData);
    }, [transData]);  
  
    const getFormattedDate = (date) => {
        const today = new Date();
        const transactionDate = new Date(date);
      
        if (
          transactionDate.getDate() === today.getDate() &&
          transactionDate.getMonth() === today.getMonth() &&
          transactionDate.getFullYear() === today.getFullYear()
        ) {
          return 'Today';
        } else if (
          transactionDate.getDate() === today.getDate() - 1 &&
          transactionDate.getMonth() === today.getMonth() &&
          transactionDate.getFullYear() === today.getFullYear()
        ) {
          return 'Yesterday';
        } else {
          return transactionDate.toDateString();
        }
      };
      const groupTransactionsByDate = (transactions) => {
        const groupedTransactions = {};
      
        transactions.forEach((transaction) => {
          const formattedDate = getFormattedDate(transaction.date);
      
          if (groupedTransactions[formattedDate]) {
            groupedTransactions[formattedDate].push(transaction);
          } else {
            groupedTransactions[formattedDate] = [transaction];
          }
        });
      
        return groupedTransactions;
      };
      const groupedTransactions = groupTransactionsByDate(transData);

      
  return (
    <div className='h-screen overflow-y-scroll no-scrollbar'>
        <div className='flex justify-between p-8 bg-gray-900 '>
                <div className='flex items-center' >
                    <div className='shadow-lg rounded-full p-2 w-12'>
                        <img src={Trans } alt="" />
                    </div>
                    <div className='ml-4 text-2xl font-semibold text-white'>
                        Transactions
                    </div>
                </div>
                <div>
                    <Link to="/userdashboard">
                        <button className='bg-blue-600 h-10 w-20 rounded-lg text-white'>Back</button>
                    </Link>
                </div>
        </div>
        <div className='flex'>

            <div className=' basis-2/5  h-[512px] w-2/5 mt-14 '>
                  <PieChart data={transData}/>
            </div>

            <div className=' basis-3/5'>
            <div className='bg-neutral-200'>
                <ul className='overflow-y-scroll h-[500px]'> 
                {Object.keys(groupedTransactions).map((date, index) => (
                    <li key={index}>
                    <div className='flex text-neutral-900 text-sm font-semibold p-4 mx-4'>{date}</div>
                    <ul className='flex flex-col justify-center items-center rounded-2xl'>
                        {groupedTransactions[date].map((transaction, index) => (
                        <li key={index} className='transaction w-full flex justify-between items-center bg-neutral-50  px-5 border-b-[1px]'>
                            <div className='p-4 flex flex-col justify-start items-start'>
                                <div className='font-semibold font-sans'>{transaction.to}</div>
                                <div className='text-xs'>{transaction.time}</div>
                            </div>
                            {
                                transaction.amount.toString().slice(0,1) === '-'?
                                <div className='text-red-500 font-semibold'>₹{transaction.amount.toString().slice(1)}</div>:
                                <div className='text-green-600 font-semibold'> +₹{transaction.amount}</div>
                            }
                        </li>
                        ))}
                    </ul>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Transactions
