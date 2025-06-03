import { useCallback, useEffect, useMemo } from 'react'
import { Typography, Form, Button, ColorPicker, message } from 'antd'
import { useNavigate } from 'react-router'

import { Template } from '../../Template'
import { ButtonContainer, Label, Input } from './styles'
import { useRecoilState } from 'recoil'
import { profilesState } from '../../atoms/profilesState'

export function Dashboard() {
  const [form] = Form.useForm()
  const [{ profiles, selectedProfile }, setProfileState] =
    useRecoilState(profilesState)
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()

  const loginData = useMemo(() => {
    return JSON.parse(localStorage.getItem('loginData'))
  }, [])

  useEffect(() => {
    if (loginData == null) {
      navigate('/')
    }
  }, [navigate, loginData])

  const handleFinish = useCallback(
    (values) => {
      const { url, primaryColor, secondaryColor } = values

      const updatedProfiles = profiles?.map((profile, index) => {
        if (selectedProfile !== index) return profile
        else
          return {
            ...profile,
            url,
            primaryColor:
              typeof primaryColor === 'string'
                ? primaryColor
                : primaryColor?.toHexString(),
            secondaryColor:
              typeof secondaryColor === 'string'
                ? secondaryColor
                : secondaryColor?.toHexString(),
          }
      })

      setProfileState((prev) => ({ ...prev, profiles: updatedProfiles }))

      messageApi.success('Profile customized successfully!')
    },
    [profiles, selectedProfile, setProfileState, messageApi]
  )

  const profile = useMemo(
    () => profiles[selectedProfile],
    [profiles, selectedProfile]
  )

  useEffect(() => {
    form.setFieldsValue({
      url: profile?.url,
      primaryColor: profile?.primaryColor,
      secondaryColor: profile?.secondaryColor,
    })
  }, [profile, form])

  if (profile == null)
    return (
      <Template>
        <Typography.Title>
          Add a profile to enable customization...
        </Typography.Title>
      </Template>
    )

  return (
    <>
      {contextHolder}
      <Template>
        <Typography.Title>Customize Profile</Typography.Title>
        <Form form={form} onFinish={handleFinish}>
          <div>
            <Label>URL</Label>

            <Form.Item
              name="url"
              rules={[{ required: true, message: 'Please input your URL!' }]}
            >
              <Input placeholder="https://example.com" />
            </Form.Item>

            <Label>Primary Color</Label>

            <Form.Item
              name="primaryColor"
              rules={[
                { required: true, message: 'Please input your primary color!' },
              ]}
            >
              <ColorPicker size="large" showText />
            </Form.Item>

            <Label>Secondary Color</Label>

            <Form.Item
              name="secondaryColor"
              rules={[
                {
                  required: true,
                  message: 'Please input your secondary color!',
                },
              ]}
            >
              <ColorPicker size="large" showText />
            </Form.Item>
          </div>

          <ButtonContainer>
            <Button htmlType="submit">Save</Button>
          </ButtonContainer>
        </Form>
      </Template>
    </>
  )
}
