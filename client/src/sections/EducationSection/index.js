// Import dependencies
import React from 'react'
import { useSectionContext, useWindowSize } from '../../utils/GlobalState'
import { Card, Timeline } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export function EducationSection (props) {
  const { id } = props

  // utilize useSectionContext to use the general state values for colors
  let [state, dispatch] = useSectionContext()
  const bkColor = state[state.length - 1].backgroundColor
  const headerColor = state[state.length - 1].headerColor

  // Check for the width of the current device
   const [width, height] = useWindowSize()
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
    tabletCard: {
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '2rem',
      marginBottom: '2rem',
      borderRadius: '1rem'
    },
    mobileCard: {
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '2rem',
      marginBottom: '2rem',
      borderRadius: '1rem'
    },
    card: {
      width: '95%',
      marginTop: '3rem',
      borderRadius: '1rem',
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
    mobileIcons: {
      fontSize: '6vw'
    },
    tabletIcons: {
      fontSize: iconSize
    },
    icons: {
      fontSize: '3.5vh'
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
      // marginLeft: 'auto',
      // marginRight: 'auto',
      backgroundColor: headerColor
    }
  }

  const cardStyling =
    width === tabletBreakpoint
      ? styling.tabletCard
      : width < tabletBreakpoint
      ? styling.mobileCard
      : styling.card

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
                    Full Stack Web Development Bootcamp - Carleton University (A+ average)
                  </h3>
                  <p style={contentStyling}>
                    An intensive program focused on gaining technical
                    programming skills in HTML5, CSS3, JavaScript, React,
                    jQuery, Heroku, Node.js, Express, MySQL, MongoDB,
                    Handlebars.js, ejs, REST, Agile, and other web development
                    concepts.
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
                    MBA (Data Science Specialization) - Carleton University (A- average)
                  </h3>
                  <p style={contentStyling}>
                    Business degree with a specialization in applied data
                    science as it relates to the creation of business value.
                    Learned to conduct visual analysis with Tableau, and
                    PowerBI, and machine learning with Python, R, and SAS.
                  </p>
                </div>
              </Timeline.Item>
              <Timeline.Item
                style={{ paddingBottom: '0rem' }}
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
                    Closely studied an array of economics and mathematical
                    topics spanning macro economics, micro economics, labor
                    economics, linear algebra, calculus, and discrete
                    structures.
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
