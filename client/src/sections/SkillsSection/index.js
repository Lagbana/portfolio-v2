// Import dependencies
import React from 'react'
import { useSectionContext, useWindowSize } from '../../utils/GlobalState'
import { Card, Space, Row, Col, Tag, List } from 'antd'
import skills from '../../data/skills'

export function SkillsSection (props) {
  const { id } = props

  // Skills data
  const frontend = skills.frontend
  const backend = skills.backend
  const concepts = skills.concepts

  // utilize useSectionContext to use the general state values for colors
  let [state, dispatch] = useSectionContext()
  const bkColor = state[state.length - 1].backgroundColor
  const headerColor = state[state.length - 1].headerColor

  // Check for the width of the current device
  const [width] = useWindowSize()
  const tabletBreakpoint = 768

  // Section padding based on the device width
  let sectionPadding

  if (width === 768) {
    sectionPadding = '2vw 2vw 2vw 5vw'
  } else if (width === 1024) {
    sectionPadding = '2vw 2vw 2vw 16vw'
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
    }
  }

  const cardBodyStyling =
    width === tabletBreakpoint
      ? styling.tabletCardBody
      : width < tabletBreakpoint
      ? styling.mobileCardBody
      : styling.cardBody

  return (
    <section
      className='site-layout-background mainview'
      id={id}
      style={styling.section}
    >
      <div style={{ paddingLeft: '4.5vw' }}>
        <header>
          <h2 style={styling.title}> Skills </h2>
          <hr style={styling.underline} />
        </header>

        <Row style={cardBodyStyling}>
          <Col xs={24} sm={24} md={24} lg={11} xl={11}>
            <Card
              title='Frontend'
              bodyStyle={{ border: 'none' }}
              style={{
                backgroundColor: '#F0FFFF',
                borderRadius: '10px'
              }}
              headStyle={{ border: 'none', fontSize: 22 }}
            >
              <Row>
                {frontend.map(item => (
                  <Col xs={12} sm={12} md={8} lg={12} xl={6}>
                    <Card
                      bordered={false}
                      style={{ backgroundColor: '#F0FFFF' }}
                    >
                      <i
                        style={{ color: item.color, fontSize: '30px' }}
                        class={item.icon}
                      ></i>
                      <br />
                      <span style={{ fontSize: '16px' }}>{item.skill}</span>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
          <Col lg={1} xl={1} />
          <Col xs={24} sm={24} md={24} lg={11} xl={11}>
            <Card
              title='Backend'
              bodyStyle={{ border: 'none' }}
              style={{
                borderRadius: '10px',
                marginTop: width > 991 ? 0 : 10,
                backgroundColor: '#F0FFFF'
              }}
              headStyle={{ border: 'none', fontSize: 22 }}
            >
              <Row>
                {backend.map(item => (
                  <Col xs={12} sm={12} md={8} lg={12} xl={6}>
                    <Card bordered={false} style={{backgroundColor: '#F0FFFF'}}>
                      <i
                        style={{ color: item.color, fontSize: '30px' }}
                        class={item.icon}
                      ></i>
                      <br />
                      <span style={{ fontSize: '16px' }}>{item.skill}</span>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={23} xl={23}>
            <Card
              title='Concepts'
              bodyStyle={{ border: 'none' }}
              style={{
                backgroundColor: '#F0FFFF',
                marginTop: 20,
                borderRadius: '10px'
              }}
              headStyle={{ border: 'none', fontSize: 22 }}
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <List>
                    {concepts.map((item, key) => {
                      return (
                        <Space key={key}>
                          <Tag
                            color='#f50'
                            style={{
                              fontSize: '1rem',
                              marginBottom: '0.5rem',
                              color: 'white'
                            }}
                          >
                            {item}
                          </Tag>
                        </Space>
                      )
                    })}
                  </List>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}