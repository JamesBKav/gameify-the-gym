import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main">
        <h1>Gameify the Gym</h1>
        <h2>A group CS353 project</h2>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 1rem', backgroundColor: 'lightgrey', borderRadius: '10px',color:'black' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et lorem dui. Ut id est lorem. Aliquam nec ullamcorper lacus. Morbi vel neque lacus. Aliquam et urna viverra, dictum erat id, vestibulum diam. Nullam porta mi metus, sed viverra lectus interdum ac. Nulla nulla urna, egestas ac justo pretium, mattis convallis turpis. Praesent vulputate venenatis lacinia. Suspendisse gravida rhoncus rutrum.
          </p>

          <p>
            Curabitur vitae ullamcorper massa. Donec id pulvinar diam. Vestibulum felis lectus, interdum vitae tellus sed, tempor cursus nulla. Nam vitae faucibus eros, vel lobortis libero. Morbi ligula erat, vulputate et arcu in, malesuada euismod nunc. In elementum magna sed est suscipit, ut ultrices ante dapibus. Vivamus a nulla eleifend, aliquam ante ac, finibus ante. Duis vestibulum, urna eget luctus pellentesque, velit turpis faucibus massa, ut porta tortor sapien quis erat. Pellentesque commodo, urna ut porttitor porta, ante nibh posuere mauris, quis ullamcorper sapien neque nec massa. Aliquam erat volutpat. Sed dapibus elit euismod eleifend cursus. Suspendisse vitae porttitor mi, quis ultrices neque.
          </p>  
      </div>
      </div>
    </>
  )
}

export default App
