import React from 'react'
import { createBrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Layout from '../layout/Layout';
import LogIn from '../component/LogIn';
import SingUp from '../component/SingUp';

const AppRoutes = () => {

  return (

    <Router>
        <Routes>

            <Route path='/' element={<Layout/>}>
                     
                <Route index element={<Home/>}/>
                <Route path='/LogIn' element={<LogIn/>}/>
                <Route path='/SingIn' element={<SingUp/>}/>

            


            </Route>

        </Routes>
    </Router>


    
  )
}

export default AppRoutes