import { useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router'

export function Dashboard() {
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
    <>
      <span>Bem Vindo ao Dashboard!</span> <br /> <br />
    </>
  )
}
