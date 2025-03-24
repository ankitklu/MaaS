import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import { UserDataContext } from './context/UserContext'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'

const App = () => {

  // const ans = useContext(UserDataContext)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>} />
        <Route path='/login'  element={<UserLogin/>} />
        <Route path="/riding" element={<Riding/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        }></Route>

        <Route path="/user/logout" element={
          <UserProtectWrapper>
            {<UserLogout/>}
          </UserProtectWrapper> 
        }></Route>

        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>  
        }></Route>

      </Routes>
    </div>
  )
}

export default App