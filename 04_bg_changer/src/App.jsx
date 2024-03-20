import { useState } from 'react'

import './App.css'

function App() {
  const [bgcolor, setBg] = useState("")

  return (
    <>
      <div className='App h-screen w-full flex items-center justify-center' style={{backgroundColor:bgcolor}}>

         
      <div className='  w-auto h-auto px-4 py-8 flex items-center justify-center bg-pink-400 bottom-12 rounded-xl'>
          <div className=' gap-12 flex flex-col lg:flex-row items-center justify-center'>
            <button onClick={() => setBg("red")} className=' w-20 h-9 text-xl text-white rounded-3xl '  style={{backgroundColor:"red"}}> Red</button>
            <button onClick={() => setBg("green")} className='w-20 h-9 text-xl text-white rounded-3xl '  style={{backgroundColor:"green"}} > Green</button>
            <button onClick={() => setBg("blue")} className='w-20 h-9 text-xl text-white rounded-3xl '  style={{backgroundColor:"blue"}} > Blue</button>
            
          </div>
        </div>
      </div>
       
    </>
  )
}

export default App
