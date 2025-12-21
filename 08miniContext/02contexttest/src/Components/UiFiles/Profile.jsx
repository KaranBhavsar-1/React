import React, { useContext } from 'react'
import Context from '../ForContext/ContextHere'

function Profile() {
    const {user} = useContext(Context)
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
