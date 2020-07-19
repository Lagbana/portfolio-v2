import React from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd'
// import { useSectionContext } from '../../utils/GlobalState'

// Button component
// Takes props used for styling and naming
function ButtonComponent (props) {
  // let [state, dispatch] = useSectionContext()
  // const buttonColor = state[state.length - 1].buttonColor

  const { icon, size, name, ml, backgroundColor, mr, mt, px, htmlType, handleClick } = props
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
    fontWeight: 600,
    border: 'none'
  }
  return (
    <Button shape='round' size={size} htmlType={htmlType} style={styling} onClick={handleClick}>
      {icon} &nbsp; <span>{name}</span>
    </Button>
  )
}

export default ButtonComponent
