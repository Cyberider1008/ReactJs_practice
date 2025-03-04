import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
  <div style={{backgroundColor:color}}>hello</div>

  <button style={{backgroundColor:"red"}} onClick={()=>setColor('red')}
        >red</button>
  <button  onClick={()=>setColor("pink")} 
  style={{backgroundColor:"pink"}}>pink</button>
  <button style={{backgroundColor:"yellow"}}>yellow</button>
  <button style={{backgroundColor:"green"}}>green</button>
  
  </>
  )
}

export default App
