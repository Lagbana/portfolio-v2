import React, { useState, useEffect } from 'react'
import { useSectionContext } from '../utils/GlobalState'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { List, Space } from 'antd'
import resume from '../resources/LarryAgbana.pdf'

function ContactLinks () {
  let [state, dispatch] = useSectionContext()
  const iconColor = state[state.length - 1].menuColor
  const textColor = state[state.length - 1].buttonColor

  const [width, setWidth] = useState(window.innerWidth)
  const tabletBreakpoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    // Clean up: remove event listener
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const listHeight =
  width === tabletBreakpoint
    ? '3.5rem'
    : width < tabletBreakpoint
    ? '2.5rem'
        : '3.5rem'
  
  const subtitleMargin =
  width === tabletBreakpoint
    ? -65
    : width < tabletBreakpoint
    ? -40
    : -100


  const styling = {
    color: { color: iconColor },
    icon: {
      marginRight: '1.5rem',
      fontSize: '3vh'
    }
  }

  const data = [
    {
      source: (
        <a
          href='mailto:larryagbana@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          style={styling.color}
        >
          <FontAwesomeIcon icon={faEnvelopeOpenText} style={styling.icon} />
          larryagbana@gmail.com
        </a>
      )
    },
    {
      source: (
        <a
          href='https://www.linkedin.com/in/larryagbana/'
          target='_blank'
          rel='noopener noreferrer'
          style={styling.color}
        >
          <FontAwesomeIcon icon={faLinkedin} style={styling.icon} />
          larryagbana.com/linkedin
        </a>
      )
    },
    {
      source: (
        <a
          href='https://github.com/Lagbana'
          target='_blank'
          rel='noopener noreferrer'
          style={styling.color}
        >
          <FontAwesomeIcon icon={faGithub} style={styling.icon} />
          larryagbana.com/github
        </a>
      )
    },
    {
      source: (
        <a
          href='https://zoom.us/j/4731778118?pwd=dVJYSGRaVjl1WHVPeUdjMW1OZE0zdz09'
          target='_blank'
          rel='noopener noreferrer'
          style={styling.color}
        >
          <FontAwesomeIcon icon={faVideo} style={styling.icon} />
          larryagbana.com/zoom
        </a>
      )
    },
    {
      source: (
        <a
          href={resume}
          target='_blank'
          rel='noopener noreferrer'
          style={styling.color}
        >
          <FontAwesomeIcon icon={faFilePdf} style={styling.icon} />
          larryagbana.com/resume
        </a>
      )
    },
    {
      source: (
        <a
          href='https://calendar.google.com/calendar?cid=bGFycnlhZ2JhbmFAZ21haWwuY29t'
          target='_blank'
          rel='noopener noreferrer'
          style={styling.color}
        >
          <FontAwesomeIcon icon={faCalendarAlt} style={styling.icon} />
          larryagbana.com/calendar
        </a>
      )
    }
  ]

  return (
    <Space direction='vertical'>
      <div>
        <h2
          style={{
            color: textColor,
            fontWeight: 650,
            fontSize: '1.60rem',
            marginTop: subtitleMargin
          }}
        >
          Let's connect!
        </h2>
      </div>
      <List
        itemLayout='horizontal'
        split={false}
        dataSource={data}
        renderItem={item => (
          <List.Item style={{ height: listHeight }}>{item.source}</List.Item>
        )}
      />
    </Space>
  )
}

export default ContactLinks
