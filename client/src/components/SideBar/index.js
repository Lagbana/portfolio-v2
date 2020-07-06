// Install react, react-dom, and react-scroll methods
import { useSectionContext } from '../../utils/GlobalState'
import React, { useState } from 'react'
import { BrowserRouter as Router, Link as ResumeLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'

// Import ant design components and font-awesome styling
import { Layout, Menu, Switch } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

// Import components
import ButtonComponent from '../../components/Button'
import ImageCard from '../../components/ImageCard'

// Import image and resume docs
import imageSrc from '../../resources/larry.png'
import resume from '../../resources/LarryAgbana.pdf'

// Destructure Layout to access the Sider component
const { Sider } = Layout

function SideBar () {
  let [state, dispatch] = useSectionContext()

  // Function to scroll to the top of the page when called
  // calling react-scroll method
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  // Set state to updated the sidebar menu key
  const [selected, setSelected] = useState('1')
  const [isChecked, setIsChecked] = useState(true)


  async function handleToggle (event) {
    setIsChecked(event)
    isChecked === false ? await dispatch({ type: 'dark' }) : await dispatch({ type: 'light' })
  }


  const bkColor = state[state.length - 1].backgroundColor
  // const textColor = state[state.length - 1 ].color
  const buttonColor = state[state.length - 1].buttonColor
  const menuColor = state[state.length - 1].menuColor

 

  return (
    <Sider
      breakpoint='md'
      collapsedWidth='0'
      style={{
        height: '100vh',
        position: 'fixed',
        zIndex: 99,
        flex: '0 0 200px',
        maxWidth: '200px',
        minWidth: '200px',
        width: '200px',
        left: 0,
        textAlign: 'center',
        fontDisplay: 'swap',
        backgroundColor: bkColor, 
        // color: textColor

      }}
    >
      <ImageCard
        src={imageSrc}
        alt='Larry Agbana Profile Image'
        onClick={scrollToTop}
      />
      <div style={{marginBottom: '1vw'}}>
        <Switch
          checkedChildren='dark'
          unCheckedChildren='light'
          defaultChecked
          size='default'
          onClick={handleToggle}
        />
      </div >
      <Router>
        <Menu style={{backgroundColor: bkColor}} mode='inline' selectedKeys={[selected]}>
          <Menu.Item key='1'>
            <Link
              activeClass='active'
              to='/about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('1')}
              style={{color: menuColor, fontWeight: 600, fontSize: '1rem'}}
            >
              About
            </Link>
          </Menu.Item>
          <Menu.Item key='2' >
            <Link
              activeClass='active'
              to='/experience'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('2')}
              style={{color: menuColor, fontWeight: 600, fontSize: '1rem'}}
            >
              Experience
            </Link>
          </Menu.Item>
          <Menu.Item key='3' >
            <Link
              activeClass='active'
              to='/education'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('3')}
              style={{color: menuColor, fontWeight: 600, fontSize: '1rem'}}
            >
              Education
            </Link>
          </Menu.Item>
          <Menu.Item key='4' >
            <Link
              activeClass='active'
              to='/projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('4')}
              style={{color: menuColor, fontWeight: 600, fontSize: '1rem'}}
            >
              Projects & Skills
            </Link>
          </Menu.Item>
          {/* <Menu.Item key='5' >
            <Link
              activeClass='active'
              to='/blog'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('5')}
              style={{color: menuColor, fontWeight: 600, fontSize: '1rem'}}
            >
              Blog
            </Link>
          </Menu.Item> */}
          <Menu.Item key='6' >
            <Link
              activeClass='active'
              to='/contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSelected('6')}
              style={{color: menuColor, fontWeight: 600, fontSize: '1rem'}}
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
            mt='3vw'
            px='2rem'
            backgroundColor={buttonColor}
            icon={<FontAwesomeIcon icon={faFilePdf} />}
          />
        </ResumeLink>
      </Router>
    </Sider>
  )
}

export default SideBar
