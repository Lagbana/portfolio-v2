// Install react, react-dom, and react-scroll methods
import React, { useState } from 'react'
import { BrowserRouter as Router, Link as ResumeLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'

// Import ant design components and styling
import 'antd/dist/antd.css'
import { FilePdfOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'

// Import components
import ButtonComponent from '../../components/Button'
import ImageCard from '../../components/ImageCard'

// Import image and resume docs
import imageSrc from '../../resources/larry.png'
import resume from '../../resources/LarryAgbana.pdf'

// Destructure Layout to access the Sider component
const { Sider } = Layout

export function SideBar() {
  
  // Function to scroll to the top of the page when called
  // calling react-scroll method
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  // Set state to updated the sidebar menu key
  const [selected, setSelected] = useState('1')

  return (
    <Sider
      breakpoint='md'
      theme='light'
      collapsedWidth='0'
      // onBreakpoint={broken => {
      //   console.log(broken)
      // }}
      // onCollapse={(collapsed, type) => {
      //   console.log(collapsed, type)
      // }}
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        textAlign: 'center'
      }}
    >
      <ImageCard
        src={imageSrc}
        alt='Larry Agbana Profile Image'
        onClick={scrollToTop}
      />
      <Router>
        <Menu theme='dark' mode='inline' selectedKeys={[selected]}>
          <Menu.Item key='1'>
            <Link
              activeClass='active'
              to='/about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('1')}
            >
              About
            </Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link
              activeClass='active'
              to='/experience'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('2')}
            >
              Experience
            </Link>
          </Menu.Item>
          <Menu.Item key='3'>
            <Link
              activeClass='active'
              to='/education'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('3')}
            >
              Education
            </Link>
          </Menu.Item>
          <Menu.Item key='4'>
            <Link
              activeClass='active'
              to='/projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('4')}
            >
              Projects
            </Link>
          </Menu.Item>
          <Menu.Item key='5'>
            <Link
              activeClass='active'
              to='/blog'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('5')}
            >
              Blog
            </Link>
          </Menu.Item>
          <Menu.Item key='6'>
            <Link
              activeClass='active'
              to='/contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('6')}
            >
              Contact
            </Link>
          </Menu.Item>
        </Menu>
      </Router>
      <Router>
        <ResumeLink to={resume} target='_blank'>
          <ButtonComponent
            name='Resume'
            size='large'
            ml='auto'
            mr='auto'
            mt='4rem'
            px='2rem'
            icon={<FilePdfOutlined />}
          />
        </ResumeLink>
      </Router>
    </Sider>
  )
}

export default SideBar
