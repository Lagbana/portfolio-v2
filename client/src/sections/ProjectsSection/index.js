import React, { useState } from 'react'
import { useSectionContext, useWindowSize } from '../../utils/GlobalState'
import { List, Card, Button, Row, Col } from 'antd'
import DetailsDrawer from '../../components/Drawer'
import './style.css'
import projectData from '../../data/projects'

export function ProjectsSection (props) {
  const { id } = props

  let [state, dispatch] = useSectionContext()
  const bkColor = state[state.length - 1].backgroundColor
  const textColor = state[state.length - 1].color
  const headerColor = state[state.length - 1].headerColor
  const buttonColor = state[state.length - 1].buttonColor

  const breakpoint = 700
  const [width, height] = useWindowSize()


  const [visible, setVisible] = useState(false)

  // Drawer - state handling of drawer contents
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [video, setVideo] = useState('')

  const showDrawer = (item) => {
    setTitle(item.title)
    setContent(item.content)
    setImage(item.demoImage) 
    setVideo(item.demoVideo) 
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  let sectionPadding
  let cardSize
  let cardHeight
  let buttonSize
  let buttonWidth

  if (width === 768) {
    sectionPadding = '2vw 2vw 2vw 2vw'
    cardSize = 'default'
    cardHeight = '30rem'
    buttonSize = 'default'
    buttonWidth = 24
  } else if (width === 1024) {
    sectionPadding = '2vw 2vw 2vw 16vw'
    cardSize = 'default'
    cardHeight = '30rem'
    buttonSize = 'small'
    buttonWidth = 12
  } else if (width <= breakpoint) {
    sectionPadding = '2vw 2vw 2vw 2vw'
    cardSize = 'small'
    cardHeight = '26.5rem'
    buttonSize = 'default'
    buttonWidth = 12
  } else {
    sectionPadding = '2vw 2vw 2vw 15vw'
    cardSize = 'small'
    cardHeight = '26.5rem'
    buttonSize = 'default'
    buttonWidth = 12
  }

  const projectStyle = {
    backgroundColor: bkColor,
    color: textColor,
    padding: sectionPadding,
    minHeight: '100vh'
  }

  const titleUnderline = {
    border: '0rem',
    height: '0.2rem',
    width: '5rem',
    marginLeft: '1.5rem',
    backgroundColor: headerColor
  }

  const styling = {
    button: {
      borderRadius: '10px',
      backgroundColor: buttonColor,
      color: '#ffffff',
      marginTop: '1rem',
      marginBottom: '0'
    }
  }

  return (
    <section id={id} style={projectStyle}>
      <div className='projectsContainer'>
        <div
          style={{
            marginBottom: '2rem',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <h2
            style={{
              fontFamily: 'Poppins',
              color: headerColor,
              textAlign: 'left',
              marginLeft: '1.5rem',
              fontSize: '2.5em'
            }}
          >
            Projects
          </h2>
          <hr style={titleUnderline} />
        </div>

        <List
          size={cardSize}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3
          }}
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: ['3', '6']
          }}
          dataSource={projectData}
          renderItem={item => (
            <List.Item>
              <Card
                bordered={false}
                hoverable={true}
                key={item.title}
                title={item.title}
                style={{
                  backgroundColor: '#ffffff',
                  height: { cardHeight },
                  borderRadius: '1rem'
                }}
                cover={
                  <img
                    alt={item.description}
                    src={item.source}
                    style={{
                      width: '99%',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                  />
                }
              >
                <Row>
                  <Col span={24}>{item.content}</Col>
                </Row>
                <Row>
                  <Col span={buttonWidth}>
                    <a href={item.deployed} alt={item.description} target='_blank'>
                    <Button
                      // onClick={showDrawer}
                      style={styling.button}
                      size={buttonSize}
                      >
                      View App
                    </Button>
                    </a>
                  </Col>
                  <Col span={buttonWidth}>
                    <Button
                      onClick={()=>showDrawer(item)}
                      style={styling.button}
                      size={buttonSize}
                    >
                      View Details
                    </Button>
                  </Col>
                </Row>
              </Card>
            </List.Item>
          )}
        />
        <DetailsDrawer
          onClose={onClose}
          isVisible={visible}
          projectName={title}
          projectContent={content}
          projectImage={image}
          projectVideo={video}
        />
      </div>
    </section>
  )
}
