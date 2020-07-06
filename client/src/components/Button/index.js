import React from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd'

// Button component
// Takes props used for styling and naming
function ButtonComponent (props) {
  const { icon, size, name, backgroundColor, ml, mr, mt, px, handleClick } = props
  const styling = {
    textAlign: 'center',
    marginTop: mt,
    paddingLeft: px,
    paddingRight: px,
    marginLeft: ml,
    marginRight: mr,
    display: 'block',
    color: '#ffffff',
    backgroundColor: backgroundColor,
    fontWeight: 600
  }
  return (
    <Button shape='round' size={size} style={styling} onClick={handleClick}>
      {icon} &nbsp; <span>{name}</span>
    </Button>
  )
}

export default ButtonComponent
