import React, { createContext, useReducer, useContext } from 'react'

const SectionContext = createContext({
  color: '',
  menuColor: '',
  backgroundColor: '',
  headerColor: '',
  buttonColor: '',
  iconColor: ''
})

// const useViewportContext = createContext({
//   width: ''
// })

function reducer (state, action) {
  switch (action.type) {
    case 'dark':
      return [
        ...state,
        {
          color: '#ffffff',
          menuColor: 'orange',
          backgroundColor: '#353452',
          // backgroundColor: '#2f303a',
          headerColor: 'orange',
          buttonColor: '#FD4F64',
          iconColor: '#ffffff'
        }
      ]
    case 'light':
      return [
        ...state,
        {
          color: '#000000',
          menuColor: '#000000',
          backgroundColor: '#ffffff',
          headerColor: '#121212',
          // headerColor: 'blue',
          buttonColor: '#FD4F64',
          // buttonColor: '#0080ff',
          iconColor: '#2593FC'
        }
      ]
    default:
      return state
  }
}

// const SectionProvider = ({ value = {color,}, ...props }) => {
const SectionProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, [
    {
      color: '#ffffff',
      menuColor: 'orange',
      backgroundColor: '#353452',
      headerColor: 'orange',
      buttonColor: '#FD4F64',
      iconColor: '#ffffff'
    }
  ])
  // return <SectionContext.Provider value={[state, dispatch]}  />
  return <SectionContext.Provider value={[state, dispatch]} {...props} />
}

const useSectionContext = () => useContext(SectionContext)

export { SectionProvider, useSectionContext }
