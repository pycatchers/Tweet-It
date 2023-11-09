import { useState } from 'react';
import { FaRegComment } from 'react-icons/fa';

function Comments() {

  const [comments, setComments] = useState(0);

  function addComment() {
    console.log('add comment');
    setComments(comments + 1)
  }

    return(
      <div style={{display: 'flex', alignItems: 'center'}}>
        <FaRegComment onClick={addComment}/>
        <span style={{marginLeft: 10}}>{comments}</span>
      </div>
    )
  }
  
  
export default Comments;