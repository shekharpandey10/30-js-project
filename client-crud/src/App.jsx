import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import List from './components/List'
import Header from './components/Header'
import SnackbarProvider from './contexts/SnackbarProvider'

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
      <Header />
      <SnackbarProvider>
        <List />
      </SnackbarProvider>
    </div>
  )
}

export default App
