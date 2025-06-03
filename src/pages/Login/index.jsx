import { Checkbox, Form } from 'antd'
import { useNavigate } from 'react-router'
import {
  Card,
  Container,
  Title,
  Subtitle,
  Input,
  StyledButton,
  InputPassword,
} from './styles'
import { useCallback, useMemo, useEffect } from 'react'

export function Login() {
  const navigate = useNavigate()

  const loginData = useMemo(() => {
      return JSON.parse(localStorage.getItem('loginData'))
    }, [])
  
    useEffect(() => {
      
      if(loginData != null) {
        navigate('/dashboard')
      }
    }, [navigate, loginData])

  const onFinish = useCallback(
    (values) => {
      console.log('Success:', values)

      localStorage.setItem('loginData', JSON.stringify(values))

      navigate('/dashboard')
    },
    [navigate]
  )
 
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <Subtitle>to get started.</Subtitle>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <InputPassword placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <StyledButton type="primary" htmlType="submit">
              Submit
            </StyledButton>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  )
}
