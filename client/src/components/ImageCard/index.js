// Import react
import React from 'react'
// Import styling
import './style.css'

export default function ImageCard (props) {
  const { src, alt, onClick } = props

  return (
    <div className='img-block'>
      <img src={src} alt={alt} onClick={onClick} />
    </div>
  )
}
