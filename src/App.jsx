import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <Navbar/>
        
         href="https://react.dev" target="_blank"
          
        </a>
      </div>
      <h1>TTEST TESt </h1>
      <Navbar/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      


























        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
