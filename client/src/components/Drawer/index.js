import React from 'react'
import { useSectionContext } from '../../utils/GlobalState'
import { Drawer, Divider, Row, Col, DescriptionItem } from 'antd'
import './styles.css'

function DetailsDrawer ({ onClose, isVisible, projectName }) {
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
      <p className='site-description-item-profile-p'>Personal</p>
      <Row>
        <Col span={24}>Full Name: 'Lily'</Col>
      </Row>
      <Row>
        <Col span={24}>
          title='Message' content='Make things as simple as possible but no
          simpler.'
        </Col>
      </Row>
      <Divider />
      <p className='site-description-item-profile-p'>Company</p>
      <Row>
        <Col span={24}>
          title='Skills' content='C / C + +, data structures, software
          engineering, operating systems, computer networks, databases, compiler
          theory, computer architecture, Microcomputer Principle and Interface
          Technology, Computer English, Java, ASP, etc.'
        </Col>
      </Row>
      <Divider />
      <p className='site-description-item-profile-p'>Contacts</p>
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
