import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);
  
  const addValue = () =>{
    console.log("clicked",Math.random());
    if(counter<20){
      counter= counter+1;
    }
    else{
      counter =20;
    }

    
   setCounter(counter);
  }

  const removeValue = () =>{
    console.log("clicked",Math.random());
    if(counter >0){
      counter = counter -1;
    }
    else{
      counter =0;
    }
   
   setCounter(counter);
  }

  return (
    <>
     <h1>chai or code with shivam {counter}</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
