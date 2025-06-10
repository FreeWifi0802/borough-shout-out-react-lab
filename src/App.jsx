import { useState } from 'react'
import BoroughCard from './components/BoroughCard';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
          <BoroughCard borough = "brooklyn" bgColor = "blue"></BoroughCard>
      </div>
    </>
  )
}

export default App
