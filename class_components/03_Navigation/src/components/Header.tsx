import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;

export const AppHeader: React.StatelessComponent<{}> = () => {
    return (
        <Header style={{ background: '#fff', padding: 0 }} >
            <Menu
                mode='horizontal'
            >
                <Menu.Item key='about'>
                    <Icon type='mail' />
                    <Link className='nav-link' to='/about' >About</Link>
                </Menu.Item>
                <Menu.Item key='app'>
                    <Icon type='appstore' />
                    <Link className='nav-link' to='/app'>AppStore</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}