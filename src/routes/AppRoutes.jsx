import React from 'react'
import { createBrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Layout from '../layout/Layout';

const AppRoutes = () => {

  return (

    <Router>
        <Routes>

            <Route path='/' element={<Layout/>}>
                     
                <Route index element={<Home/>}/>

            


            </Route>

        </Routes>
    </Router>


    
  )
}

export default AppRoutes