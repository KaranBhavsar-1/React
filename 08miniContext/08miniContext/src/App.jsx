import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Login/Login'
import Profile from './Profile/Profile'

function App() {

  return (
    <UserContextProvider>
    <h1>Chai Aur React</h1>
    <Login/>
    <div></div>
    <br />
    <Profile/>
    </UserContextProvider>
  )
}

export default App
