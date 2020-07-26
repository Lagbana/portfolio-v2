import React, { useState, useEffect } from 'react'
import { useSectionContext } from '../../utils/GlobalState'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { Space, Layout } from 'antd'

import Button from '../../components/Button'
const { Content } = Layout

export function AboutSection (props) {
  const { id } = props
  let [state, dispatch] = useSectionContext()
  const bkColor = state[state.length - 1].backgroundColor
  const textColor = state[state.length - 1].color
  const buttonColor = state[state.length - 1].buttonColor
  const headerColor = state[state.length - 1].headerColor
  const iconColor = state[state.length - 1].iconColor

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    // Clean up: remove event listener
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])


  let sectionPadding
  let sectionHeight

  if (width === 768) {
    sectionPadding = '2vw 2vw 2vw 15vw'
    sectionHeight = '90vh'
  } else if (width === 1024) {
    sectionPadding = '2vw 2vw 2vw 7vw'
    sectionHeight = '72.5vh'
  } else if (width < 768) {
    sectionPadding = '2vw 2vw 2vw 15vw'
    sectionHeight = '100vh'
  } else {
    sectionPadding = '2vw 2vw 2vw 10vw'
    sectionHeight ='80vh'
  }
    


  const contentMargin =
    width === 768
      ? '0rem'
      : width < 768
      ? '0rem'
      : '8rem'

  return (
    <section
      id={id}
      style={{
        color: textColor,
        backgroundColor: bkColor,
        padding: sectionPadding,
        minHeight: sectionHeight
      }}
    >
      <Content>
        <div className='aboutContainer'>
          <div style={{ marginLeft: contentMargin }}>
            <header>
              <h1 style={{ color: headerColor }}>Larry Agbana</h1>
            </header>
            <h3 style={{ color: headerColor }}>Full Stack Web Developer</h3>
            <address>
              <h5 style={{ color: headerColor }}>
                Ottawa, ON &middot; (416) 274-9499 &middot;
                larryagbana@gmail.com
              </h5>
            </address>

            <p>
              A full stack web developer that strives to balance technical
              excellence with flawless user experience in order to create
              products people love and use. I believe in writing clean modular
              code and have embraced test driven and agile development to
              collaborate effectively while building reliable, scalable, and
              maintainable applications.
              <br />
              <br />
              When I am not working or learning something new you might find me
              running down a soccer pitch somewhere in Ottawa or doing some
              amateur farming (ask me about my kale &#x1F609;). <br /> <br />
              Explore my projects and feel free to reach out for collaboration
              or recruiting. Thanks for visiting!
            </p>

            <div className='iconsDiv'>
              <Space direction='vertical' align='center'>
                <Space size={40} align='start'>
                  <a
                    href='https://github.com/Lagbana'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className='icon'
                      color={iconColor}
                    />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/larryagbana/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className='icon'
                      color={iconColor}
                    />
                  </a>
                  <a
                    href='https://calendar.google.com/calendar?cid=bGFycnlhZ2JhbmFAZ21haWwuY29t'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className='icon'
                      color={iconColor}
                    />
                  </a>
                  <a
                    href='mailto:larryagbana@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className='icon'
                      color={iconColor}
                    />
                  </a>
                </Space>
                {/* <> */}
                <a
                  href='https://www.larryagbana.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button
                    name='Zoom me!'
                    size='large'
                    ml='auto'
                    mr='auto'
                    mt='1.5rem'
                    px='1.5rem'
                    backgroundColor={buttonColor}
                    handleClick={() => {
                      window.open(
                        'https://zoom.us/j/4731778118?pwd=dVJYSGRaVjl1WHVPeUdjMW1OZE0zdz09',
                        '_blank',
                        'noopener',
                        'noreferrer'
                      )
                    }}
                  >
                    Zoom me!
                  </Button>
                </a>
              </Space>
            </div>
          </div>
        </div>
      </Content>
    </section>
  )
}
