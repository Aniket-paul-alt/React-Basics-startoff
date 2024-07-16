import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-3 rounded-xl mb-4'>Tailwind Test</h1>
      <div className='flex gap-3'>
        <Card username="Aniket" btnText="follow me" />
        <Card username="Tukai" btnText="read more" />
      </div>
    </>
  )
}

export default App
