import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useLayoutEffect
} from 'react'

// create section context with default values
const SectionContext = createContext({
  color: '',
  menuColor: '',
  backgroundColor: '',
  headerColor: '',
  buttonColor: '',
  iconColor: ''
})

// Device dimensions checker
// Returns an array with index 0 === width and index 1 === height
function useWindowSize () {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize () {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

function reducer (state, action) {
  switch (action.type) {
    case 'dark':
      return [
        ...state,
        {
          color: '#ffffff',
          menuColor: 'orange',
          backgroundColor: '#353452',
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
          backgroundColor: '#F9F9FF',
          headerColor: '#121212',
          buttonColor: '#FD4F64',
          iconColor: '#2593FC'
        }
      ]
    default:
      return state
  }
}


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
  return <SectionContext.Provider value={[state, dispatch]} {...props} />
}

const useSectionContext = () => useContext(SectionContext)

export { SectionProvider, useSectionContext, useWindowSize }
