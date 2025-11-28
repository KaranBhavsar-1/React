import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 13
  let [counter, setCounter] = useState(15)

  const addValue = ()=>{
    counter++
    setCounter(counter)
    console.log(counter);  
  }

  const removeValue = ()=>{
    counter--
    setCounter(counter)
    console.log(counter);
  }

  return (
    <>
    <div>
      <h1>Change the Counter value with Buttons {counter}</h1>
      <h2>counter value = {counter}</h2>
    </div>
    <div>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </div>
    </>
  )
}

export default App
