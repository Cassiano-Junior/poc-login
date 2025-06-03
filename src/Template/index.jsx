import { Layout } from 'antd'
import { Header } from './Header'
import { Sider } from './Sider'
import { Content } from './Content'

export function Template({ children }) {
    return (
        <Layout style={{ height: '100%' }}>
            <Sider />

            <Layout>
                <Header />

                <Content>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}