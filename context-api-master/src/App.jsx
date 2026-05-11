import { useContext, useState } from 'react'
import AuthProvider from './context/AuthProvider'
import Login from './components/Login'
import ThemeProvider, { ThemeContext } from './context/ThemeProvider'
function App() {
  const [count, setCount] = useState(0)
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className={`h-screen w-full flex-col flex items-center justify-evenly ${theme?.toLowerCase() === 'dark' ? 'bg-purple-950' : null}`}>
      <button className='text-[2rem] bg-black rounded-2xl h-8 flex items-center justify-center w-8 text-white' onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}>*</button>
      <Login />
    </div>
  )
}

export default App
