import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route , RouterProvider ,createBrowserRouter ,createRoutesFromElements ,useParams} from 'react-router-dom'
// import Layout from './Components/Layout/Layout.jsx'
import Layout from './Components/Layout/Layout.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Github ,{GitInfoLoader}from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route loader={GitInfoLoader} path="/github" element={<Github/>}/>
      <Route path="/user/:userId" element={<User/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
