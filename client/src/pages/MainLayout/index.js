import React from 'react'
import 'antd/dist/antd.css'
import './style.css'
import { Layout, Menu } from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'

const { Content, Sider } = Layout
// const { Header, Content, Footer, Sider } = Layout

function MainLayout () {
  return (
    <Layout>
      <Sider
        breakpoint='md'
        collapsedWidth='0'
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        style={{
          // overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0
        }}
      >
        <div className='logo' />

        <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            About
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            Experience
          </Menu.Item>
          <Menu.Item key='4' icon={<UserOutlined />}>
            Education
          </Menu.Item>
          <Menu.Item key='5' icon={<UserOutlined />}>
            Projects
          </Menu.Item>
          <Menu.Item key='6' icon={<UserOutlined />}>
            Blog
          </Menu.Item>
          <Menu.Item key='7' icon={<UserOutlined />}>
            Contact
          </Menu.Item>
        </Menu>
        <div className='logo' style={{ marginTop: '3rem' }} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ overflow: 'initial' }}>
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              minHeight: '100vh',
              backgroundColor: 'purple',
              color: 'white',
              // textAlign: 'center'
            }}
          >
            <p>Home Content</p>
          </div>
        </Content>
        <Content>
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              minHeight: '100vh',
              backgroundColor: 'yellow',
              color: 'white'
            }}
          >
            About Content
          </div>
        </Content>
        <Content>
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              minHeight: '100vh',
              backgroundColor: 'purple',
              color: 'white'
            }}
          >
            Experience Content
          </div>
        </Content>
        <Content>
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              minHeight: '100vh',
              backgroundColor: 'yellow',
              color: 'white'
            }}
          >
            Education Content
          </div>
        </Content>
        <Content>
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              minHeight: '100vh',
              backgroundColor: 'purple',
              color: 'white'
            }}
          >
            Projects Content
          </div>
        </Content>
        <Content>
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              minHeight: '100vh',
              backgroundColor: 'yellow',
              color: 'white'
            }}
          >
            Blog Content
          </div>
        </Content>
        <Content>
          <div
            className='site-layout-background'
            style={{
              padding: 24,
              minHeight: '100vh',
              backgroundColor: 'purple',
              color: 'white'
            }}
          >
            Contact Content
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
