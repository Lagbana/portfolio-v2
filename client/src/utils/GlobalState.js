import React, { createContext, useReducer, useContext } from 'react'

const SectionContext = createContext({
  color: '',
  backgroundColor: '',
  headerColor: '',
  buttonColor: ''
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
          color: '#c4c4c4',
          backgroundColor: '#2f303a',
          headerColor: 'orange',
          buttonColor: '#ff0080'
        }
      ]
    case 'light':
      return [
        ...state,
        {
          color: 'black',
          backgroundColor: 'white',
          headerColor: 'blue',
         buttonColor: '#0080ff'
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
      color: 'black',
      backgroundColor: 'white',
      headerColor: 'blue',
      buttonColor: '#0080ff'
    }
  ])
  // return <SectionContext.Provider value={[state, dispatch]}  />
  return <SectionContext.Provider value={[state, dispatch]} {...props} />
}

const useSectionContext = () => useContext(SectionContext)

export { SectionProvider, useSectionContext }
