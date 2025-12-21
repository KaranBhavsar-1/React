import { useState } from 'react'
import './App.css'
import Login from './Components/UiFiles/Login'
import Profile from './Components/UiFiles/Profile'
import ProvideContext from './Components/ForContext/ProviderContext/ProvideContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ProvideContext>
      <Login />
      <br />
      <hr />
      <br />
      <Profile />
    </ProvideContext>
  )
}

export default App
