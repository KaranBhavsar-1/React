import React from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {
    const data = useLoaderData()
  return (
    <div>
      
    </div>
  )
}

export default Github

export const GitInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/KaranBhavsar-1")
    return response.json()
}