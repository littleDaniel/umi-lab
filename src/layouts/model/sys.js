import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import styles from "./sys.css";
import Link from "umi/link";
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
import React from 'react'

export default function (props) {
  return (
    <div>
      <Layout>
        <Sider width={200} style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 65,
          background: '#fff'
        }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  subnav 1
              </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
              </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  subnav 3
              </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px', marginLeft: '200px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className={styles.content}>
            <div className={styles.box}>{props.children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
