// Import dependencies
import React from 'react'
import { useSectionContext, useWindowSize } from '../../utils/GlobalState'
import { Card, Row, Col, Timeline } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

export function ExperienceSection (props) {
  const { id } = props

  // utilize useSectionContext to use the general state values for colors
  let [state, dispatch] = useSectionContext()
  const bkColor = state[state.length - 1].backgroundColor
  const headerColor = state[state.length - 1].headerColor

  // Check for the width of the current device
  const [width] = useWindowSize()
  const tabletBreakpoint = 768

  // Section padding based on the device width
  let sectionPadding
  let iconSize

  if (width === 768) {
    sectionPadding = '2vw 2vw 2vw 5vw'
    iconSize = '4vw'
  } else if (width === 1024) {
    sectionPadding = '2vw 2vw 2vw 16vw'
    iconSize = '2vw'
  } else if (width < tabletBreakpoint) {
    sectionPadding = '2vw 2vw 2vw 2vw'
  } else {
    sectionPadding = '2vw 2vw 2vw 15vw'
  }

  // Styling elements in the section
  const styling = {
    section: {
      backgroundColor: bkColor,
      padding: sectionPadding,
      color: 'black'
    },
    mobileCardBody: {
      marginLeft: '0.5rem',
      marginTop: '0.5rem'
    },
    tabletCardBody: {
      marginLeft: '2rem',
      marginTop: '2rem'
    },
    cardBody: {
      marginLeft: '1rem',
      marginTop: '3rem'
    },
    title: {
      color: headerColor,
      fontFamily: 'Poppins',
      textAlign: 'left',
      marginLeft: '1.5rem',
      fontSize: '2.5em'
    },
    underline: {
      border: '0rem',
      height: '0.2rem',
      width: '5rem',
      marginLeft: '1.5rem',
      backgroundColor: headerColor
    },
    tabletCardBody: {
      marginLeft: '2rem',
      marginTop: '2rem'
    },
    cardBody: {
      marginLeft: '1rem',
      marginTop: '1rem'
    },
    tabletExperience: {
      marginLeft: '1.5rem'
    },
    mobileExperience: {
      marginLeft: '0.25rem'
    },
    experience: {
      marginLeft: '3rem'
    },
    tabletSubtitle: {
      fontSize: '2.5vh',
      fontWeight: 600
    },
    mobileSubtitle: {
      fontSize: '3vh',
      fontWeight: 700
    },
    subtitle: {
      fontSize: '1.1vw',
      fontWeight: 700
    },
    tabletContent: {
      fontSize: '2vh'
    },
    mobileContent: {
      fontSize: '2.5vh'
    },
    content: {
      fontSize: '1vw'
    },
    mobileIcons: {
      fontSize: '6vw',
      backgroundColor: '#F0FFFF'
    },
    tabletIcons: {
      fontSize: iconSize,
      backgroundColor: '#F0FFFF'
    },
    icons: {
      fontSize: '3.5vh',
      backgroundColor: '#F0FFFF'
    },
    tabletDate: {
      fontSize: '2vh',
      color: 'grey'
    },
    mobileDate: {
      fontSize: '2.5vh',
      color: 'grey'
    },
    date: {
      fontSize: '1vw',
      color: 'grey'
    }
  }

  const cardBodyStyling =
    width === tabletBreakpoint
      ? styling.tabletCardBody
      : width < tabletBreakpoint
      ? styling.mobileCardBody
      : styling.cardBody

  const iconStyling =
    width === tabletBreakpoint || width === 1024
      ? styling.tabletIcons
      : width < tabletBreakpoint
      ? styling.mobileIcons
      : styling.icons

  const dateStyling =
    width === tabletBreakpoint
      ? styling.tabletDate
      : width < tabletBreakpoint
      ? styling.mobileDate
      : styling.date

  const subtitleStyling =
    width === tabletBreakpoint
      ? styling.tabletSubtitle
      : width < tabletBreakpoint
      ? styling.mobileSubtitle
      : styling.subtitle

  const experienceStyling =
    width === tabletBreakpoint
      ? styling.tabletExperience
      : width < tabletBreakpoint
      ? styling.mobileExperience
      : styling.Experience

  const contentStyling =
    width === tabletBreakpoint
      ? styling.tabletContent
      : width < tabletBreakpoint
      ? styling.mobileContent
      : styling.content

  return (
    <section
      className='site-layout-background mainview'
      id={id}
      style={styling.section}
    >
      <div style={{ paddingLeft: '4.5vw' }}>
        <header>
          <h2 style={styling.title}> Experience </h2>
          <hr style={styling.underline} />
        </header>

        <Row style={cardBodyStyling}>
          <Col xs={24} sm={24} md={24} lg={11} xl={11}>
            <Card
              bodyStyle={{ border: 'none' }}
              style={{
                backgroundColor: '#F0FFFF',
                borderRadius: '10px',
                marginTop: '2rem'
              }}
            >
              <div style={cardBodyStyling}>
                <Timeline>
                  <Timeline.Item
                    dot={
                      <FontAwesomeIcon icon={faBriefcase} style={iconStyling} />
                    }
                    color='red'
                  >
                    <div style={experienceStyling}>
                      <h4 style={dateStyling}>Agile Intelligence Solutions (Sept. 2020 - Jan. 2021)</h4>
                      <h3 style={subtitleStyling}>Full Stack Mobile Developer </h3>
                      <p style={contentStyling}>
                        Designed and Implemented mobile and backend web application 
                        features in TypeScript with react-native, Nest.js, Firebase, 
                        public and private APIs based on GraphQL and RESTful principles. 
                      </p>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item
                    dot={
                      <FontAwesomeIcon icon={faBriefcase} style={iconStyling} />
                    }
                    color='red'
                  >
                    <div style={experienceStyling}>
                      <h4 style={dateStyling}>Vogi (June 2020 - Present)</h4>
                      <h3 style={subtitleStyling}>Full Stack Developer </h3>
                      <p style={contentStyling}>
                        Built highly performant React, Node.js application using
                        agile development methodology and thrive in a fast-paced
                        and collaborative environment. Responsible for ongoing
                        development of product features.
                      </p>
                    </div>
                  </Timeline.Item>
                </Timeline>
              </div>
            </Card>
          </Col>
          <Col lg={1} xl={1} />
          <Col xs={24} sm={24} md={24} lg={11} xl={11}>
            <Card
              bodyStyle={{ border: 'none' }}
              style={{
                backgroundColor: '#F0FFFF',
                borderRadius: '10px',
                marginTop: '2rem'
              }}
            >
              <div style={cardBodyStyling}>
                <Timeline>
                  <Timeline.Item
                    dot={
                      <FontAwesomeIcon icon={faBriefcase} style={iconStyling} />
                    }
                    color='red'
                  >
                    <div style={experienceStyling}>
                      <h4 style={dateStyling}>
                        Shared Services Canada (Sept. 2019 - Dec. 2019)
                      </h4>
                      <h3 style={subtitleStyling}>Data Analyst</h3>
                      <p style={contentStyling}>
                        Lead the phase one implementation of data
                        analytics at the newly created performance management
                        division of Shared Services Canada.
                      </p>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item
                    style={{ paddingBottom: '0rem' }}
                    dot={
                      <FontAwesomeIcon icon={faBriefcase} style={iconStyling} />
                    }
                    color='red'
                  >
                    <div style={experienceStyling}>
                      <h4 style={dateStyling}>Saegis (May 2019 - Aug. 2019)</h4>
                      <h3 style={subtitleStyling}>Business Analyst</h3>
                      <p style={contentStyling}>
                        Conducted market research and analysis and provided strategic
                        recommendations to senior management.
                      </p>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item
                    dot={
                      <FontAwesomeIcon icon={faBriefcase} style={iconStyling} />
                    }
                    color='red'
                  >
                    <div style={experienceStyling}>
                      <h4 style={dateStyling}>
                        Scotiabank (Nov. 2015 - July 2020)
                      </h4>
                      <h3 style={subtitleStyling}>Financial Advisor </h3>
                      <p style={contentStyling}>
                        Helped customers manage their investment portfolios and
                        credit balances to accomplish their financial plans.
                      </p>
                    </div>
                  </Timeline.Item>
                </Timeline>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}
