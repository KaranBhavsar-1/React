import './App.css'
import Login from './Login/Login'
import Profile from './Profile/Profile'
import UserContextProvider from './Context/UserContextProvider'
function App() {

  return (
    <UserContextProvider>
    <Login />
    <br />
    <hr />
    <br />
    <Profile />
    </UserContextProvider>
  )
}

export default App
