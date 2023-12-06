import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home';

import Services from './Services';
import Orders from './Orders';
import Contact from './Contact';
import './Navbar.css'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route>
            <Route path='/Home' element={<Home/>}/>
          
            <Route path='/Services' element={<Services/>}/>
            <Route path='/Orders' element={<Orders/>}/>
      <Route path='/Contact' element={<Contact/>}/> 
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
