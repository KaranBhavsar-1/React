import { useState } from 'react'
import './App.css'
import Header from './componenet/Header/Header'
import Home from './componenet/Home/Home'
import Footer from './componenet/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
