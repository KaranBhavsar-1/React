import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter ,Route, RouterProvider,createRoutesFromElements} from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'




function App() {
//   const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>
//   },
//   {
//     path:'',
//     element: <Home/>
//   },
//   {
//     path:'about',
//     element: <About/>
//   },
//   {
//     path:'contact',
//     element: <Contact/>
//   }
// ])


  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
