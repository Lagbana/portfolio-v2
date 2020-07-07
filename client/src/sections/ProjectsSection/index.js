import React, { useState, useEffect } from 'react'
import { useSectionContext } from '../../utils/GlobalState'
import { List, Card } from 'antd'
import './style.css'
import projectData from '../../data'


export function ProjectsSection (props) {
  const { id } = props

  let [state, dispatch] = useSectionContext()
  const bkColor = state[state.length - 1].backgroundColor
  const textColor = state[state.length - 1].color
  const headerColor = state[state.length - 1].headerColor

  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 700

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)

    // Clean up: remove event listener
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const sectionPadding =
    width > breakpoint ? '2vw 2vw 2vw 15vw' : '2vw 2vw 2vw 2vw'

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
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: headerColor
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
               fontFamily: "Poppins",
              color: headerColor,
              textAlign: 'center',
              fontSize: '3em'
            }}
          >
            Projects
          </h2>
          <hr style={titleUnderline} />
        </div>

        <List
          // itemLayout='vertical'
          size='small'
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
            pageSize: 6,
            pageSizeOptions: ['3', '6', '9']
            // position: 'both'
          }}
          dataSource={projectData}
          renderItem={item => (
            <List.Item>
              <Card
                // style={{ display: "none" }}
                bordered={false}
                hoverable={true}
                key={item.title}
                title={item.title}
                style={{backgroundColor: "#f5f5f5", height: "25rem"}}
                cover={
                  <img
                    alt={item.description}
                    src={item.source}
                    style={{width: "99%", marginLeft: "auto", marginRight: "auto"}}
                  />
                }
              >
                {item.content}
              </Card>
            </List.Item>
          )}
        />
      </div>
    </section>
  )
}
