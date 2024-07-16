import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

    const increaseValue = () =>{
      console.log("increase button clicked  "+ Math.random());
      if(counter>=20) return        //setCounter(counter = 20)
      else setCounter(counter+1)
    }
    
    const decreaseValue = ()=>{
    console.log("decrease button clicked  "+ Math.random());
    if(counter<=0) return           //setCounter(counter = 0)
      else setCounter(counter-1)
  }

  return (
    <>
      <h1>0 to 20 Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
