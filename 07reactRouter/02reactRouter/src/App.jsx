import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1 className='bg-gray-600 text-white rounded px-2 py-2 italic font-bold text-4xl w-1/4 m-auto'>Hello</h1> */}
    <Header />
    <Home />
    <Footer />
    </>
  )
}

export default App
