import React from 'react'
import ThirdLayer from '../ThirdLayer/ThirdLayer'
function SecondLayer() {
  return (
    <div className='bg-gray-700 rounded px-2 py-2 w-5/6 m-auto'>
        <h1 className='text-center text-4xl text-bold italic px-2 py-2 '>2st Layer</h1>
        <ThirdLayer />
    </div>
  )
}
export default SecondLayer
