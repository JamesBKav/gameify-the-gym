import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main">
        <h1>Gameify the Gym</h1>
        <h2>A group CS353 project</h2>
      </div>
    </>
  )
}

export default App
