import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    // const Username = "lol"
    // const Password = "pass"
    const {user} = useContext(UserContext)
    if(!user) return (
    <div>
        <div className='bg-blue-600 rounded p-2 w-1/4 m-auto'>
            <h1 className='text-black font-bold italic'>Your data is not stored yet. </h1>
            <h1 className='text-black font-bold italic '>Thus, Please Login. </h1>
        </div>
    </div>
    )
  return (
    <div>

        <div className='bg-blue-600 rounded p-2 w-1/4 m-auto'>
            <h1 className='text-black font-bold italic '>Username: {user.username}</h1>
            <h1 className='text-black font-bold italic'>Password: {user.password}</h1>
        </div>
    </div>
  )
}

export default Profile
