import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-600 rounded px-4 py-2 text-4xl italic'>
      User: {userId}
    </div>
  )
}

export default User
