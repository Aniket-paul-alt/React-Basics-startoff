import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("red")} style={{backgroundColor: "red"}}>Red</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("blue")} style={{backgroundColor: "blue"}}>Blue</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("yellow")} style={{backgroundColor: "yellow"}}>Yellow</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("pink")} style={{backgroundColor: "pink"}}>Pink</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("purple")} style={{backgroundColor: "purple"}}>Purple</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("coral")} style={{backgroundColor: "coral"}}>Coral</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("turquoise")} style={{backgroundColor: "turquoise"}}>Turquoise</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("indigo")} style={{backgroundColor: "indigo"}}>Indigo</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("khaki")} style={{backgroundColor: "khaki"}}>Khaki</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("darksalmon")} style={{backgroundColor: "darksalmon"}}>Dark Salmon</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("darkcyan")} style={{backgroundColor: "darkcyan"}}>Dark Cyan</button>
        </div>
      </div>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl'>
      <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("green")} style={{backgroundColor: "green"}}>Green</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("maroon")} style={{backgroundColor: "maroon"}}>Maroon</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("teal")} style={{backgroundColor: "teal"}}>Teal</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("orange")} style={{backgroundColor: "orange"}}>Orange</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("Magenta")} style={{backgroundColor: "Magenta"}}>Magenta</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("lavender")} style={{backgroundColor: "lavender"}}>Lavender</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("peachpuff")} style={{backgroundColor: "peachpuff"}}>Peach Puff</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("darkorchid")} style={{backgroundColor: "darkorchid"}}>Dark Orchid</button>
        <button className='outline-none px-4 py-2 rounded-full text-black shadow-lg' onClick={()=>setColor("rosybrown")} style={{backgroundColor: "rosybrown"}}>Rosy Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
