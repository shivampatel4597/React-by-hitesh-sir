import { useState } from 'react'
import Card from './components/Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   

     <Card userName="shivam Patel" type="software engi"/>
     <Card userName="golu son of SMt Ramkali Patel" type="Hardware engi"/>
     <Card userName="tolu singh" type="Cloud engi"/>
       
    </>
  )
}

export default App
