import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from '../layout/Layout';
import LogIn from '../component/LogIn';
import SingUp from '../component/SingUp';
import Home from '../component/Home';
import Page404 from '../component/Page404';
import { Counter } from '../features/counter/counter';


const AppRoutes = () => {

  return (

    <Router>
        <Routes>

            <Route path='/' element={<Layout/>}>
                     
                <Route index element={<Home/>}/>
                <Route path='/LogIn' element={<LogIn/>}/>
                <Route path='/SingUp' element={<SingUp/>}/>
                <Route path='/Counter' element={<Counter/>}/>

            </Route>
            <Route path='*' element={<Page404/>}/>

           
        </Routes>
    </Router>


    
  )
}

export default AppRoutes