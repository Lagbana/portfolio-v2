import React from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd'

// Button component
// Takes props used for styling and naming
function ButtonComponent (props) {
  const { icon, size, name, color, backgroundColor, ml, mr, mt, px } = props
  return (
    <Button
      shape='round'
      size={size}
      style={{
        textAlign: 'center',
        marginTop: mt,
        paddingLeft: px,
        paddingRight: px,
        marginLeft: ml,
        marginRight: mr,
        display: 'block',
        color: color,
        backgroundColor: backgroundColor
      }}
    >
      {icon} &nbsp; <span>{name}</span>
    </Button>
  )
}

export default ButtonComponent
