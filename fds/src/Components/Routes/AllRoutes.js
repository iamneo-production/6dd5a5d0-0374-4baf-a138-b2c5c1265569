import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UserDashboard from '../Dashboards/UserDashboard';
import StaffDashboard from '../Dashboards/StaffDashboard';
import ManagerDashboard from '../Dashboards/ManagerDashboard';
import Accounts from '../Pages/Accounts';
import Profile from '../Pages/Profile';
import Transactions from '../Pages/Transactions'
import Help from '../Pages/Help'
import Messages from '../Pages/Messages'
import Cards from '../Pages/Cards'
import Reports from '../Pages/Reports';
import AllCustomers from '../Pages/AllCustomers';
import TapnPay from '../forms/TapnPay'
import CardTransaction from '../forms/CardTransaction'
import AtmWithdrawl from '../forms/AtmWithdrawl'
import Login from '../Dashboards/Login';
import AddUser from '../Dashboards/AddCustomer'
import MakePayments from '../Pages/MakePayments';
const AllRoutes = () => {
  return (
    <div>

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/managerdashboard" element={<ManagerDashboard />} />
            <Route path="/staffdashboard" element={<StaffDashboard />} />
            <Route path='/accounts' element={<Accounts/>}/>
            <Route path = '/profile' element={<Profile/>}/>
            <Route path = '/transactions' element={<Transactions/>}/>
            <Route path = '/help' element={<Help/>}/>
            <Route path = '/messages' element={<Messages/>}/>
            <Route path = '/cards' element={<Cards/>}/>
            <Route path = '/allreports'element={<Reports/>}/>
            <Route path = '/allusers'element={<AllCustomers/>}/>
            <Route path = '/tap'element={<TapnPay/>}/>
            <Route path = '/atm'element={<AtmWithdrawl/>}/>
            <Route path = '/card'element={<CardTransaction/>}/>
            <Route path = '/login'element={<Login/>}/>
            <Route path = '/addUser'element={<AddUser/>}/>
            <Route path = '/makepayments'element={<MakePayments/>}/>

        </Routes>
    </div>
  )
}

export default AllRoutes
