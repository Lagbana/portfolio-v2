import React from 'react'

export function ExperienceSection (props) {
  const { id } = props
  return (
    <section
      className='site-layout-background mainview'
      id={id}
      style={{
        backgroundColor: 'yellow',
        color: 'white',
        padding: '2vw 2vw 2vw 15vw',
        minHeight: '100vh'
      }}
    >
      <p>Work In Progress</p>
    </section>
  )
}
