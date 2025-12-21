import React from 'react'
import SecondLayer from '../SecondLayer/SecondLayer'
function FirstLayer() {
  return (
    <div className='bg-gray-800 rounded px-2 py-2'>
        <h1 className='text-center text-4xl text-bold italic px-2 py-2 '>1st Layer</h1>
        <SecondLayer/>
    </div>
  )
}
export default FirstLayer
