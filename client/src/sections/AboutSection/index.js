import React from 'react'

export function AboutSection (props) {
  const { id } = props
  return (
    <section
      className='site-layout-background mainview'
      id={id}
      style={{
        backgroundColor: 'purple',
        color: 'white',
        padding: '2vw 2vw 2vw 15vw',
        minHeight: '100vh'
      }}
    >
      <p>
        With Reach Router, any component that's a direct child of the router
        receives a location prop that describes the user's current location
        within the app. In my case, the header navigation is a child of a page
        layout component. Rather than passing location through as a prop, I've
        used the Location component. This provides a child render prop that has
        access to the user's location.
      </p>
    </section>
  )
}
