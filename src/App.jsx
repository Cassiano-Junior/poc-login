import { useEffect, useMemo } from 'react'
import { Providers } from './Providers'
import { Routes } from './Routes'
import { useNavigate } from 'react-router'

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  )
}

export default App
