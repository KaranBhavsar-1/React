import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
    <div>
      <div className="bg-gray-600 text-white text-3xl p-4 my-2 rounded w-fit mx-auto text-center">
  User: {userId}
</div>

    </div>
  )
}

export default User
