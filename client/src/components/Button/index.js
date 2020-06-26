import React from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd'

// Button component
// Takes props used for styling and naming
function ButtonComponent (props) {
  const { icon, size, name, color, ml, mr, mt, px } = props
  return (
    <Button
      type='primary'
      shape='round'
      icon={icon}
      size={size}
      color={color}
      style={{
        textAlign: 'center',
        marginTop: mt,
        paddingLeft: px,
        paddingRight: px,
        marginLeft: ml,
        marginRight: mr,
        display: 'block'
      }}
    >
      {name}
    </Button>
  )
}

export default ButtonComponent
