import { Layout, Menu } from 'antd';
import styles from "./index.css";
import Link from "umi/link";
const { Header, Content } = Layout;
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
                <Header className={styles.header}>
                    <div className={styles.logo} />
                   
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={selectedKeys}
                        style={{ lineHeight: '64px', float: 'left' }}
                    >
                        <Menu.Item key="/">
                            <Link to="/">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="/sys">
                            <Link to="/sys">基础数据</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content className={styles.content}>
                    <div className={styles.box}>{props.children}</div>
                </Content>
            </Layout>
        </div>
    )
}
