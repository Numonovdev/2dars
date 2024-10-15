import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='box-border flex flex-col '>
      <header className='w-full [box-shadow:0px_1px_20px_0px_#0000001A] '>
      <Navbar/>
      </header>
      <main className=''>
      <Main/>
      </main>
    </div>
  )
}

export default App
