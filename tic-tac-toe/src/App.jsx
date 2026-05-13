import { useState } from 'react'
import Board from './components/Board'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex justify-center items-center'>
      <Board />
    </div>
  )
}

export default App
