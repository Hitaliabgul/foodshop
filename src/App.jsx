import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Purchase from './Components/Purchase'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import { useAuth } from '../Content/Authprovider'


function App() {
  const [authUser, setauthUser] = useAuth();
  console.log(authUser)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path='purchase' element={authUser ? <Purchase />:<Navigate to="/signup" />}/>
      <Route path='contact' element={<Contact />} />
      <Route path='signup' element={<Signup />} />
  
      </Routes>
    </div>
  )
}

export default App