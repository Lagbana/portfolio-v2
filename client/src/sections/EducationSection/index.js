// Import dependencies
import React, { useState, useEffect } from 'react'
import { useSectionContext } from '../../utils/GlobalState'
import { Card, Timeline } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export function EducationSection (props) {
  const { id } = props
  let [state, dispatch] = useSectionContext()
  const bkColor = state[state.length - 1].backgroundColor
  const textColor = state[state.length - 1].color
  const buttonColor = state[state.length - 1].buttonColor
  const headerColor = state[state.length - 1].headerColor
  const iconColor = state[state.length - 1].iconColor

  const [width, setWidth] = useState(window.innerWidth)
  // const mobileBreakpoint = 700
  // const tabletBreakpoint = 700
  const tabletBreakpoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    // Clean up: remove event listener
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const sectionPadding = width === tabletBreakpoint ? '2vw 2vw 2vw 5vw' : width < tabletBreakpoint ? '2vw 2vw 2vw 2vw' : '2vw 2vw 2vw 15vw'

  // const sectionPadding =
  //   width > tabletBreakpoint ? '2vw 2vw 2vw 15vw' : '2vw 2vw 2vw 2vw'

  const styling = {
    section: {
      backgroundColor: bkColor,
      // color: textColor,
      padding: sectionPadding,
      minHeight: '100vh'
    },
    mobileCard: {
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '2rem',
      marginBottom: '2rem'
    },
    card: {
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '3rem'
    },
    mobileCardBody: {
      marginLeft: '1rem',
      marginTop: '1rem'
    },
    cardBody: {
      marginLeft: '3rem',
      marginTop: '3rem'
    },
    mobileExperience: {
      marginLeft: '0.25rem'
    },
    experience: {
      marginLeft: '3rem'
    },
    mobileSubtitle: {
      fontSize: '3vh',
      fontWeight: 700
    },
    subtitle: {
      fontSize: '1.1vw',
      fontWeight: 700
    },
    mobileIcons: {
      fontSize: '6vw'
    },
    icons: {
      fontSize: '3.5vh'
    },
    mobileDate: {
      fontSize: '2.5vh',
      color: 'grey'
    },
    date: {
      fontSize: '1vw',
      color: 'grey'
    },
    mobileContent: {
      fontSize: '2.5vh'
    },
    content: {
      fontSize: '1vw'
    },
    title: {
      color: headerColor,
      fontFamily: 'Poppins',
      textAlign: 'center',
      fontSize: '3em'
    },
    underline: {
      border: '0rem',
      height: '0.2rem',
      width: '5rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: headerColor
    }
  }
// const sectionPadding = width === tabletBreakpoint ? '2vw 2vw 2vw 5vw' : width < tabletBreakpoint ? '2vw 2vw 2vw 2vw' : '2vw 2vw 2vw 15vw'
  
  const cardStyling = width > tabletBreakpoint ? styling.card : styling.mobileCard
  const cardBodyStyling = width > tabletBreakpoint ? styling.cardBody : styling.mobileCardBody
  const iconStyling = width > tabletBreakpoint ? styling.icons : styling.mobileIcons
  const dateStyling = width > tabletBreakpoint ? styling.date : styling.mobileDate
  const subtitleStyling = width > tabletBreakpoint ? styling.subtitle : styling.mobileSubtitle
  const experienceStyling = width > tabletBreakpoint ? styling.experience : styling.mobileExperience
  const contentStyling = width > tabletBreakpoint ? styling.content : styling.mobileContent
  

  return (
    <section
      className='site-layout-background mainview'
      id={id}
      style={styling.section}
    >
      <div>
        <header>
          <h2 style={styling.title}> Education </h2>
          <hr style={styling.underline} />
        </header>
        <Card style={cardStyling}>
          <div style={cardBodyStyling}>
            <Timeline>
              <Timeline.Item
                dot={
                  <FontAwesomeIcon icon={faGraduationCap} style={iconStyling} />
                }
                color='red'
              >
                <div style={experienceStyling}>
                  <h4 style={dateStyling}>July 2020</h4>
                  <h3 style={subtitleStyling}>
                    Full Stack Web Development Certificate - Carleton University
                  </h3>
                  <p style={contentStyling}>
                    Closely studied an array of mathematical topics spanning
                    linear algebra, analysis, calculus, and machine learning
                    primarily using python and R.
                  </p>
                </div>
              </Timeline.Item>
              <Timeline.Item
                dot={
                  <FontAwesomeIcon icon={faGraduationCap} style={iconStyling} />
                }
                color='red'
              >
                <div style={experienceStyling}>
                  <h4 style={dateStyling}>December 2019</h4>
                  <h3 style={subtitleStyling}>
                    MBA (Data Science Specialization) - Carleton University
                  </h3>
                  <p style={contentStyling}>
                    Closely studied an array of mathematical topics spanning
                    linear algebra, analysis, calculus, and machine learning
                    primarily using python and R.
                  </p>
                </div>
              </Timeline.Item>
              <Timeline.Item
                dot={
                  <FontAwesomeIcon icon={faGraduationCap} style={iconStyling} />
                }
                color='red'
              >
                <div style={experienceStyling}>
                  <h4 style={dateStyling}>April 2014</h4>
                  <h3 style={subtitleStyling}>
                    B.A. Economics (Mathematics Minor) - Carleton University
                  </h3>
                  <p style={contentStyling}>
                    Closely studied an array of mathematical topics spanning
                    linear algebra, analysis, calculus, and machine learning
                    primarily using python and R.
                  </p>
                </div>
              </Timeline.Item>
            </Timeline>
          </div>
        </Card>
      </div>
    </section>
  )
}
