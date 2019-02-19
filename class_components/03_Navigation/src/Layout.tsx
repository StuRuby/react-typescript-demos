import * as React from 'react';
import { Layout } from 'antd';
import { AppHeader } from './components';
import { AppRouter } from './router';

const { Footer, Sider, Content } = Layout;

export const AppLayout: React.StatelessComponent<{}> = (props) => {
    return (
        <Layout>
            <Sider width={256} style={{ minHeight: '100vh', color: 'white' }} >Sider</Sider>
            <Layout>
                <AppHeader />
                <Content style={{ margin: '24px 16px 0' }} >
                    <AppRouter />
                </Content>
                <Footer style={{ textAlign: 'center' }} >Footer</Footer>
            </Layout>
        </Layout>
    );
}