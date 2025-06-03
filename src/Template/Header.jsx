import { useMemo, useCallback, useState, useEffect } from 'react'

import { Layout, Button, Select, theme, Avatar, Popover, Typography, Input, Form, message } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons'
import { useRecoilState } from 'recoil'
import { profilesState } from '../atoms/profilesState'
import { collapsedState } from '../atoms/collapsedState'
import { useNavigate } from 'react-router'

const { Header: AHeader } = Layout

export function Header() {
    const [ form ] = Form.useForm()
    const [isPopoverVisible, setIsPopoverVisible] = useState(false)
    const [{ profiles, selectedProfile }, setProfileState] = useRecoilState(profilesState)
    const { token: { colorBgContainer } } = theme.useToken()
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage()

    const [collapsed, setCollapsed] = useRecoilState(collapsedState)

    const loggedUser = useMemo(() => {
        return JSON.parse(localStorage.getItem('loginData'))
    }, [])

    const icon = useMemo(() => {
        return collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
    }, [collapsed])

    const handleCollapseSider = useCallback((event) => {
        event.preventDefault()

        setCollapsed(prev => !prev)
    }, [setCollapsed])

    const handleAddProfile = useCallback(({ name }) => {
        const names = profiles?.map(({ name }) => name)

        if (names?.includes(name)) {
            messageApi.error("Profile name already exists!")
            return 
        }
        
        setProfileState({
            selectedProfile: profiles.length,
            profiles: [
                ...profiles, {
                    name, 
                    url: undefined, 
                    primaryColor: undefined, 
                    secondaryColor: undefined
                }
            ]
        })

        setIsPopoverVisible(false)
        form.resetFields()

        messageApi.success('Profile added successfully!')
    }, [setProfileState, profiles, form, messageApi])

    const profileOptions = useMemo(() => {
        return profiles?.map(({ name }, index) => ({ label: name, value: index }))
    }, [profiles])

    const handleProfileChange = useCallback((index) => {
        setProfileState(prev => ({ ...prev, selectedProfile: index }))
    }, [setProfileState])

    const togglePopoverVisible = useCallback(() => {
        setIsPopoverVisible(!isPopoverVisible)
    }, [isPopoverVisible])

    const profile = useMemo(() => profiles[selectedProfile], [profiles, selectedProfile])

    useEffect(() => console.log({ profile }), [profile])

    return (
        <>
            {contextHolder}
            <AHeader
                style={{
                    padding: 0, 
                    background: colorBgContainer,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingRight: 32
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button 
                        htmlType='button'
                        type='text' 
                        icon={icon}
                        onClick={handleCollapseSider}
                        style={{
                            fontSize: '16px', 
                            width: 64, 
                            height: 64
                        }}
                    />

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Select
                            style={{ width: 150 }}
                            labelInValue={false}
                            placeholder='Select profile'
                            value={!profiles?.length ? undefined : selectedProfile}
                            options={profileOptions}
                            onChange={handleProfileChange}
                        />

                        <Popover
                            open={isPopoverVisible}
                            onOpenChange={togglePopoverVisible}
                            trigger='click'
                            content={(
                                <Form
                                    form={form}
                                    onFinish={handleAddProfile}
                                    style={{
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        gap: 10
                                    }}
                                >
                                    <Form.Item name='name' style={{ margin: 0 }}>
                                        <Input placeholder='Profile name' />
                                    </Form.Item>

                                    <Button htmlType='submit'>Add profile</Button>
                                </Form>
                            )}
                        >
                            <Button icon={<PlusOutlined />} />
                        </Popover>
                    </div>
                </div>
                

                <Popover 
                    arrow={false}
                    placement='bottomLeft'
                    content={(
                        <div 
                            style={{
                                width: 100,
                                display: 'flex', 
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}
                        >
                            <Typography.Text>
                                {loggedUser?.username ?? ''}
                            </Typography.Text>

                            <Button
                                type='link' 
                                onClick={() => {
                                    setProfileState({
                                        collapsed: false,
                                        profiles: [],
                                        selectedProfile: undefined,
                                        customValues: {
                                            url: '',
                                            corPrimaria: '',
                                            corSecundaria: ''
                                        }
                                    })
                                    localStorage.removeItem('loginData')
                                    navigate('/')
                                }}
                            >
                                Sign out
                            </Button>
                        </div>
                    )}
                >
                    <Avatar 
                        size='large'
                        style={{
                            cursor: 'pointer', 
                            '--avatar-icon':  profile?.secondaryColor ?? '#1677ff'
                        }} 
                        icon={<UserOutlined />} 
                    />
                </Popover>
            </AHeader>
        </>
    )
}