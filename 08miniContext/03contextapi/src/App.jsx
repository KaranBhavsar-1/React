import FirstLayer from "./Components/FirstLayer/FirstLayer"
import saveColor from "./Components/Context/SaveContext"
import { useState } from "react"
function App() {
  const[color, setColor] = useState("")
  return (
    <saveColor.Provider value={color}>
    <div className="bg-black">
      <h1 className=" text-white">Give color</h1>
      <select name="" id="" onChange={(e)=>{setColor(e.target.value)}}>
        <option value="">Selec Color</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
        <option value="orange">orange</option>
        <option value="red">red</option>
      </select>
      <FirstLayer />
    </div>
    </saveColor.Provider>
  )
}

export default App
