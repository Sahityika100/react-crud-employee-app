import { useState } from 'react'
import Add from './components/Add'
import Subtract from './components/Subtract'
import './App.css'
function App() {

  let [a , setA] = useState(0)
  let [b , setB] = useState(0)
  return (
    <>
      <h1>Calculation App</h1>
      Enter first number: <input type="text" value={a} onChange={(e) => setA(Number(e.target.value))} /><br/><br/>
      Enter second number: <input type="text" value={b} onChange={(e) => setB(Number(e.target.value))} /><br/><br/>
      <Add n1={a} n2={b} />
      <Subtract n1={a} n2={b} />
    </>
  )
}

export default App
