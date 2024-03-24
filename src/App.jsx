import { useState } from 'react'
import './App.css'
import Nave from '../src/components/Nave'
import Banner from './components/Banner'
import Products from './components/Products'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nave/>
      <Banner/>
      <Products/>
      <About/>
    </>
  )
}

export default App
