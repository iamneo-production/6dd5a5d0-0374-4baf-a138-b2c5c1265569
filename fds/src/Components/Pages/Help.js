import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HelpPic from '../Icons/help.png'
import { putReport } from '../../Assets/services/BankService';


const Help = () => {


  const [formData, setFormData] = useState({
    accountNumber: '',
    transactionId: '',
    date: '',
    additionalInfo: '',
    status:'inprogress'
  });

  console.log(formData);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await putReport(formData);
      console.log('Report updated:', response.data);
      if(response.data){
        alert('Your report submitted ')
      }
    } catch (error) {
      console.error('Error updating report:', error);
      if(error){
        alert('Report submitted failed - Server slow/crashed')
      }
    }
    setFormData(
      {
        accountNumber: '',
        transactionId: '',
        date: '',
        additionalInfo: '',
        status:'inprogress'
      }
    )

  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  return (
<div className='mt-8 flex justify-center'>

<div className='w-11/12 shadow-2xl rounded-2xl'>

    <div className='flex justify-between p-8 bg-gray-800 rounded-t-xl'>
        <div className='flex items-center' >
            <div className='shadow-lg rounded-full w-12'>
                <img src={HelpPic} alt="" />
            </div>
            <div className='ml-8 text-2xl font-semibold text-neutral-200'>
                FRAUD REPORTING
            </div>
        </div>
        <div>
            <Link to="/userdashboard">
                <button className='bg-blue-600 h-10 w-20 rounded-lg text-white'>Back</button>
            </Link>
        </div>
    </div>
    <div className='flex flex-col items-start m-4 text-neutral-500 font-semibold p-2'>
        <div className='text-xl'>Need Help!</div>
        <div className='my-10 text-black'>If you found any suspicious or fraud transactions report here. We'll initiate investigation.</div>
    </div>

    <div className='flex justify-center '>
    {/* form */}
    <div className='h-[400px] w-[500px]'>

      <form onSubmit={handleSubmit}>

          <div className="my-6 flex justify-between items-center">
            <div className="text-sm font-medium text-neutral-500 ">ACCOUNT NUMBER</div>
            <div>
              <input   type="text"
                        id="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange} 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="7013*****833" required/>
            </div>
          </div>

          <div className="my-6 flex justify-between items-center">
            <div className="text-sm font-medium text-neutral-500 ">TRANSACTION ID</div>
              <div>
                <input type="text"
                      id="transactionId"
                      value={formData.transactionId}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tnx2832**jjs9" required/>
              </div>
          </div>

          <div className="my-6 flex justify-between items-center">
            <div className="text-sm font-medium text-neutral-500 ">DATE OF TRANSACTION</div>
            <div className='w-44'>
            <input 
                type="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="yyyy-mm-dd"
                pattern="\d{4}-\d{2}-\d{2}"
                title="Please enter a date in yyyy-mm-dd format"
                required
              />
            </div>
          </div>
          
          <div className="my-6 flex justify-between items-center">
            <div className="text-sm font-medium text-neutral-500 ">ADDITIONAL INFORMATION</div>
            <div className='w-44 '>
              <textarea
                type="text"
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="4" cols="50" name="comment" form="usrform" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>
            </div>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

      </div>
    </div>
</div>

</div>
  )
}

export default Help
