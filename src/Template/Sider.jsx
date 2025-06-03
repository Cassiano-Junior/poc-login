import { Layout, Menu as AMenu } from 'antd'
import { FormatPainterOutlined } from '@ant-design/icons'
import { useRecoilValue } from 'recoil'
import { collapsedState } from '../atoms/collapsedState'
import { profilesState } from '../atoms/profilesState'
import { useMemo } from 'react'

const { Sider: ASider } = Layout

export function Sider() {
    const { profiles, selectedProfile } = useRecoilValue(profilesState)
    const collapsed = useRecoilValue(collapsedState)

    const profile = useMemo(() => profiles[selectedProfile], [profiles, selectedProfile])
    
    return (
        <ASider
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            style={{
                '--layout-sider-children': profile?.primaryColor ?? '#333',
            }}
        >
            <div 
                style={{
                    padding: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}
            >
                <div 
                    style={{
                        width: 32, 
                        height: 32, 
                        background: 'url("./vite.svg")', 
                        borderRadius: 8
                    }} 
                />
            </div>

            <AMenu 
                theme='dark'
                mode='inline'
                defaultSelectedKeys={['1']} 
                style={{
                    '--menu-item-selected': profile?.secondaryColor ?? '#1677ff',
                }}
                items={[
                    {
                        key: '1',
                        icon: <FormatPainterOutlined />,
                        label: 'Customize'
                    }
                ]}
            />
        </ASider>
    )
}