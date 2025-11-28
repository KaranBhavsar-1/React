import { useState } from 'react'

function App() {

  const [color, setColor] = useState("red")
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl"> 
      {/* Red Color Button */}
          <button onClick={()=> setColor("red")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>RED</button>
      {/* Blue Color Button */}
          <button onClick={()=> setColor("Blue")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}>BLUE</button>
      {/* Cyan Color Button */}
          <button onClick={()=> setColor("Cyan")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "cyan"}}>CYAN</button>
      {/* green Color Button */}
          <button onClick={()=> setColor("green")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}>GREEN</button>
      {/* Orange Color Button */}
          <button onClick={()=> setColor("Orange")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}}>ORANGE</button>
      {/* Pink Color Button */}
          <button onClick={()=> setColor("Pink")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "pink"}}>PINk</button>
      {/* Purple Color Button */}
          <button onClick={()=> setColor("Purple")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "Purple"}}>PURPLE</button>
      {/* Black Color Button */}
          <button onClick={()=> setColor("Black")} className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>
      {/* White Color Button */}
          <button onClick={()=> setColor("White")} className=' bg- black outline-none px-4 rounded-full text-black shadow-lg' style={{backgroundColor: "white"}}>WHITE</button>

        </div>
      </div>
      
    </div>
    </>
  )
}

export default App
