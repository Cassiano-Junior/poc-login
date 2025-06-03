import { Layout, theme } from 'antd'

const { Content: AContent } = Layout

export function Content({ children }) {
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken()
    
    return (
        <AContent
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG
            }}
        >
            {children}
        </AContent>
    )
}
