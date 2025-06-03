import { useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router'

export function Dashboard() {
  const navigate = useNavigate()
  const loginData = useMemo(() => {
    return JSON.parse(localStorage.getItem('loginData'))
  }, [])

  useEffect(() => {
    
    if(loginData == null) {
      navigate('/')
    }
    
  }, [navigate, loginData])

  return (
    <>
      <span>Bem Vindo ao Dashboard!</span> <br /> <br />
    </>
  )
}
