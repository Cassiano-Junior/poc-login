import { useEffect, useMemo } from 'react'
import { Providers } from './Providers'
import { Routes } from './Routes'
import { useNavigate } from 'react-router'

function App() {
  // const navigate = useNavigate()
  // const loginData = useMemo(() => {
  //   return JSON.parse(localStorage.getItem('loginData'))
  // }, [])

  // useEffect(() => {
    
  //   if(loginData == null) {
  //     navigate('/')
  //   }
  //   else {
  //     navigate('/dashboard')
  //   }
  // }, [navigate])

  return (
    <Providers>
      <Routes />
    </Providers>
  )
}

export default App
