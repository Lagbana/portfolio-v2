import React from 'react'
import { useSectionContext } from '../../utils/GlobalState'
import { Drawer, Divider, Row, Col, DescriptionItem } from 'antd'
import './styles.css'


const styling = {
  header: {
    display: 'block',
    marginBottom: '16px',
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: '40px',
    lineHeight: 1.5715
  },

  subHeaders: {
    display: 'block',
    marginBottom: '16px',
    color: 'rgba(0, 0, 0, 0.85)',
    fontSize: '20px',
    lineHeight: 1.5715
  }
}

function DetailsDrawer ({
  onClose,
  isVisible,
  projectName,
  projectDescription
}) {
  return (
    <Drawer
      width={640}
      placement='right'
      closable={false}
      onClose={onClose}
      visible={isVisible}
    >
      <p
        className='site-description-item-profile-p'
        style={{ marginBottom: 24 }}
      >
        {projectName}
      </p>
      <p style={styling.subHeaders}>Description</p>
      <Row>
        <Col span={24}>Full Name: 'Lily'</Col>
      </Row>
      <Row>
        <Col span={24}>{projectDescription}</Col>
      </Row>
      <Divider />
      <p style={styling.subHeaders}>Demo</p>
      <Row>
        <Col span={24}>
          title='Skills' content='C / C + +, data structures, software
          engineering, operating systems, computer networks, databases, compiler
          theory, computer architecture, Microcomputer Principle and Interface
          Technology, Computer English, Java, ASP, etc.'
        </Col>
      </Row>
      <Divider />
      <p style={styling.subHeaders}>Links</p>
      <Row>
        <Col span={24}>
          content=
          {
            <a href='http://github.com/ant-design/ant-design/'>
              github.com/ant-design/ant-design/
            </a>
          }
        </Col>
      </Row>
    </Drawer>
  )
}

export default DetailsDrawer
