import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Admin from './pages/admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Admin />
    </>
  )
}

export default App
