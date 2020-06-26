import React from 'react'
import './style.css'

export default function ImageCard(props) {
    const { src, alt } = props

    return (
            <div className='img-block'>
              <img src={src} alt={alt} />
            </div>
    )

}