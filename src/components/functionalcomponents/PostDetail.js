import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function PostDetail() {

    const [postData, setPostData] = useState({});
    const params = useParams()

    useEffect(() => {
        console.log('calling useEffect')
        getPost()
    }, []);

    const getPost = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        console.log('response' ,response)
        setPostData(response.data)
    }

    return (
        <div>
            <ul>
                <li>
                    Id: {postData.id}
                </li>
                <li>
                    Title: {postData.title}
                </li>
                <li>
                    Description: {postData.body}
                </li>
                <li>
                    UserID: {postData.userId}
                </li>
            </ul>
        </div>
    )
}

export default PostDetail;