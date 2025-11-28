import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 13
  let [counter, setCounter] = useState(2)

  const addValue = ()=>{
    counter++
    setCounter(counter)
    console.log(counter);  
  }

  const removeValue = ()=>{
    if (counter>0) {
    counter--
    }
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
