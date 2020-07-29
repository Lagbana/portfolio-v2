import React from 'react'
import { useSectionContext, useWindowSize } from '../../utils/GlobalState'
import { Drawer, Divider, Row, Col, Tag, Space, Button } from 'antd'
import './styles.css'

function DetailsDrawer ({
  onClose,
  isVisible,
  projectName,
  projectContent,
  projectImage,
  projectVideo,
  techStack,
  deployed,
  github
}) {
  let [state, dispatch] = useSectionContext()
  const bkColor = state[state.length - 1].backgroundColor
  const textColor = state[state.length - 1].color
  const headerColor = state[state.length - 1].headerColor

  const styling = {
    drawer: {
      backgroundColor: bkColor,
      color: textColor,
      fontSize: '1rem'
    },
    header: {
      display: 'block',
      marginBottom: '24px',
      fontSize: '40px',
      lineHeight: 1.5715,
      color: headerColor
    },
    subHeaders: {
      display: 'block',
      marginBottom: '16px',
      color: textColor,
      fontSize: '20px',
      lineHeight: 1.5715
    },
    content: {
      marginBottom: '1.5rem'
    },
    button: {
      borderRadius: '10px',
      backgroundColor: '#1e90ff',
      margin: '0.5em',
      color: '#ffffff',
      marginTop: '1rem',
      marginBottom: '0',
      border: 'none'
    },
    demo: {}
  }

  // Set drawer width based on the device size
  const [width] = useWindowSize()
  let drawerWidth

  switch (true) {
    case width < 768:
      drawerWidth = '85%'
      break
    case width >= 768 && width < 1024:
      drawerWidth = '75%'
      break
    case width === 1024:
      drawerWidth = '60%'
      break
    default:
      drawerWidth = '52%'
      break
  }

  const demo =
    projectVideo === '' ? (
      <a href={projectVideo}>
        <img
          src={projectImage}
          alt={`demo for project titled: ${projectName}`}
          width='100%'
        />
      </a>
    ) : (
      <a href={projectVideo} target='_blank' rel='noopener noreferrer'>
        <img
          src={projectImage}
          alt={`demo for project titled: ${projectName}`}
          width='100%'
        />
      </a>
    )

  return (
    <Drawer
      width={drawerWidth}
      placement='right'
      closable={false}
      onClose={onClose}
      visible={isVisible}
      bodyStyle={styling.drawer}
    >
      <p style={styling.header}>{projectName}</p>
      <p style={styling.subHeaders}>Description</p>
      <Row>
        <Col span={24} style={styling.content}>
          {projectContent}
        </Col>
        <Col span={24} style={styling.content}>
          <Col span={24}>
            <p style={styling.subHeaders}>Links</p>
          </Col>
          <Space>
            <a
              href={github}
              alt='link to github repository'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button style={styling.button} size='default'>
                GitHub Repo
              </Button>
            </a>
          </Space>
          <Space>
            <a
              href={deployed}
              alt={`link to project for project titled: ${projectName}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button style={styling.button} size='default'>
                View App
              </Button>
            </a>
          </Space>
        </Col>

        <Col span={24}>
          <Col span={24}>
            <p style={styling.subHeaders}>Tech Stack</p>
          </Col>
          {techStack.map((item, key) => {
            return (
              <Space key={key}>
                <Tag color='#f50'>
                  {item}
                </Tag>
              </Space>
            )
          })}
        </Col>
      </Row>

      <Divider />
      <p style={styling.subHeaders}>Demo</p>
      <Row>
        <Col span={24} style={styling.demo}>
          {demo}
        </Col>
      </Row>
    </Drawer>
  )
}

export default DetailsDrawer
