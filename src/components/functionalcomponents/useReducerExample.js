import { useEffect, useReducer } from 'react';

const initialState = {
  id: 1,
  response: null,
  loading: false
}

const reducer = (state, action) => {
  console.log('action received', action)
  switch (action.type) {
    case 'increment':
      return { ...state, id: action.id} // update the state with new value
    case 'decrement':
      return { ...state, id: action.id}
    case 'addpost':
      return { ...state, response: action.payload}
    case 'setloading':
      return { ...state, loading: action.loading}
  }
}

function UseReducerExample(){

  const [state, dispatch] = useReducer(reducer, initialState);

  // 1. dispatch an action
  // 2. receive that action - type, value/payload
  // 3. receive action in reducer and add a case to handle it based on type

  useEffect(() => {
    getPost()
  }, [state.id])


  const getPost = () => {
    dispatch({type: 'setloading', loading: true})
    fetch(`https://jsonplaceholder.typicode.com/posts/${state.id}`)
    .then(response => response.json())
    .then(responseJson => {
      dispatch({type: 'addpost', payload: responseJson});
      dispatch({type: 'setloading', loading: false})
    }
    )
  }

  const handleIncrement = () => {
    console.log('handleIncrement')
    dispatch({type: 'increment', id: state.id + 1})
  }

  const handleDecrement = () => {
    console.log('handleDecrement')
    dispatch(
      {type: 'decrement', id: state.id - 1}
      )
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      {state.id}
      <button onClick={handleIncrement}>+</button>
      <div>
        Title: {state.loading === true ? 'Please wait...' : state.response?.title}
      </div>
    </div>
  )
}


export default UseReducerExample;