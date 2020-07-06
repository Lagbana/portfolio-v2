import React, { useState, useEffect } from 'react'
import { List, Card } from 'antd'
import './style.css'

export function ProjectsSection (props) {
  const { id, color, headerColor, backgroundColor } = props

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
    backgroundColor: backgroundColor,
    color: color,
    padding: sectionPadding,
    minHeight: '100vh'
  }

  const listData = []
  for (let i = 0; i < 18; i++) {
    listData.push({
      href: 'http://ant.design',
      title: `ant design part ${i}`,
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    })
  }

  return (
    <section id={id} style={projectStyle}>
      <div className='projectsContainer'>
        <h1 style={{ color: headerColor }}> Projects</h1>

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
          dataSource={listData}
          renderItem={item => (
            <List.Item>
              <Card
                bordered={false}
                key={item.title}
                title={item.title}
                cover={
                  <img
                    alt={item.description}
                    src={
                      'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                    }
                  />
                }
                // cover={<img alt={'ALT'} src={url} />}
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
