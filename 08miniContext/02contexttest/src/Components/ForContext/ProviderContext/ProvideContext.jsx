import React, { useState } from 'react'
import Context from '../ContextHere'

function ProvideContext({children}) {
    const [user,setUser] = useState(null)
  return (
    <Context.Provider value={{user,setUser}}>
        {children}
    </Context.Provider>
  )
}

export default ProvideContext
