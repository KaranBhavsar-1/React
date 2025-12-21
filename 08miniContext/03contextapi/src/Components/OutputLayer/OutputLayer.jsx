import React from 'react'
import saveColor from '../Context/SaveContext'
import { useContext } from 'react'

function OutputLayer() {
    const color = useContext(saveColor)

  return (
    <div>
          <div className= 'bg-gray-400 rounded px-2 py-2 w-3/6 m-auto'
          style={{backgroundColor: color}}
          >
        <h1 className='text-center text-4xl text-bold italic px-2 py-2 '>Color is: {color}</h1>
    </div>
    </div>
  )
}

export default OutputLayer
