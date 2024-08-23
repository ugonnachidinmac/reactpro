import { useState } from 'react'
import Card1 from './CardsTemplate/Card1'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Card1 />
    </>
  )
}

export default App
