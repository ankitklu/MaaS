import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Start'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import { UserDataContext } from './context/UserContext'
import Start from './pages/Start'

const App = () => {

  // const ans = useContext(UserDataContext)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path='/login'  element={<UserLogin/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App