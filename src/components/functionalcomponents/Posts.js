import { useCallback, useEffect, useState } from 'react';
import PostsList from './PostsList';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// useMemo
// function Posts(){

//   const [id, setId] = useState(1);
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     getPost()
//   }, [id])

//   const getPost = async () => {
//     setLoading(true) // set loading to true
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id) // do api call and save the response
//     const responseJson = await response.json() // convert the response to json
//     setResponse(responseJson) // update the state value response
//     setLoading(false); // set loading to false
//   }

//   const handleIncrement = () => {
//     setId(id + 1)
//   }

//   const handleDecrement = () => {
//     setId(id - 1)
//   }

//   return (
//     <div>
//       <button onClick={handleDecrement}>-</button>
//       {id}
//       <button onClick={handleIncrement}>+</button>

//       <div>Title: {loading === true ? 'Please wait...' : response?.title}</div>
//     </div>
//   )
// }

function Posts() {

  const [value, setValue] = useState(0)
  const [bgColor, setBgColor] = useState('white');
  const [ searchText, setSearchText ] = useState('')
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  console.log('location', location, searchParams.get('username'))

  // useEffect(() => {
  //   getAllPosts()
  // }, [])

  const getAllPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
  }

  return (
    <>
    <h1>{searchParams.get('username')}</h1>
    <button onClick={() => setValue(value + 1)}>Increment Value: {value}</button>
      <div>
        <input type='radio' name='theme' onChange={() => setBgColor('black')}/>
        <label>Dark</label>
        <input type='radio' name='theme' onChange={() => setBgColor('white')}/>
        <label>Light</label>
      </div>
      <input type='text' onChange={(event) => setSearchText(event.target.value)} />
      <PostsList 
        bgColor={bgColor}
        searchText={searchText}
        getAllPosts={getAllPosts}
      />
    </>
  )
}


export default Posts;