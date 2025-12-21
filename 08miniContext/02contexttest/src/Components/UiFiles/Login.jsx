import React, { useContext, useState } from 'react'
import Context from '../ForContext/ContextHere'
function Login() {
    const [username,SetUsername] =useState("")
    const [password,SetPassword] =useState("")

    const {setUser} = useContext(Context)

    const HandleSubmit = ()=>{
        setUser({username,password})
    }
  return (
    <div>
      <div className='bg-gray-700 rounded p-2  w-2/4 m-auto'>
        <h1 className='text-black font-bold text-4xl bg-gray-600 rounded w-1/2 m-auto'>Login</h1>
        <label className='font-bold ' htmlFor="username">Name: </label>
        <input className= 'rounded m-2' value={username} onChange={(e)=>{SetUsername(e.target.value)}} placeholder='username' type="text" name="username" id="username" />
        <br />   
        <label className='font-bold ' htmlFor="Password">Password:</label>
        <input className= 'rounded m-2' value={password} onChange={(e)=>{SetPassword(e.target.value)}} placeholder='Password' type="password" name="Password" id="Password" />
        <br />
        <button className='bg-blue-800 rounded px-2 py-1 hover:bg-blue-600 active:bg-blue-400' onClick={HandleSubmit} >Submit</button>
      </div>
    </div>
  )
}

export default Login
