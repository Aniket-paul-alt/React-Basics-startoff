import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  
  // let counter = 5;

  const increaseValue = () =>{
    // console.log("value increase "+ counter);
    // counter++;
    setCounter(counter+1)
  }

  const decreaseValue = ()=>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseValue}>Increase {counter}</button>
      <button onClick={decreaseValue}>Decrease {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
