import './App.css'
import { useReducer } from 'react'
import { FaExchangeAlt } from 'react-icons/fa'

//1. initialState
const initialState = {
  fromLanguage : 'auto',
  toLanguage : 'es',
  fromText: '',
  toText: '',
  loading: false,
  result: '',
}
//2. Create a reducer
function reducer(state, action) {
  const {type, payload} = action

  if(type === 'INTERCHANGE_LANGUAGE') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload,
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: payload,
      result: '',
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: payload,
    }
  }


  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: false,
      toText: payload,
    }
  }

  return state
}

function App() {
  const [{
      fromLanguage,
    }, dispatch] = useReducer(reducer, initialState)

    console.log({fromLanguage})
  return (
    <div className='App'>
    <h1 className='text-red-500 font-inter'>Hello World</h1>
    <button onClick={() => {
      dispatch({type: 'SET_FROM_LANGUAGE', payload: 'es'})
    }}><FaExchangeAlt /></button>
    </div>
  )
}

export default App
