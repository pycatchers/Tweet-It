import { useEffect, useState } from 'react';


function Posts(){

  const [id, setId] = useState(1);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getPost()
  }, [id])

  const getPost = async () => {
    setLoading(true) // set loading to true
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id) // do api call and save the response
    const responseJson = await response.json() // convert the response to json
    setResponse(responseJson) // update the state value response
    setLoading(false); // set loading to false
  }

  const handleIncrement = () => {
    setId(id + 1)
  }

  const handleDecrement = () => {
    setId(id - 1)
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      {id}
      <button onClick={handleIncrement}>+</button>

      <div>Title: {loading === true ? 'Please wait...' : response?.title}</div>
    </div>
  )
}


export default Posts;