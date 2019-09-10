import { Layout, Menu } from 'antd';
import styles from "./index.css";
import Link from "umi/link";
const { Header, Content, Sider, Footer } = Layout;
import React from 'react'

export default function (props) {
    const { pathname } = props.location;
    const menus = [
        {path:'/',name:'首页'},
        {path:'/sys',name:'系统管理'}
    ]
    const selectedKeys = menus.filter(menu => {
        if (menu.path === '/') {
            return pathname === '/';          
        }
        return pathname.startsWith(menu.path);
    }).map(menu => menu.path);

    return (
        <div>
            <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="/">
        <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="/sys">
            <Link to="/sys">基础数据</Link>
        </Menu.Item>
       
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
        </div>
    )
}
