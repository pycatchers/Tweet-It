import { useState, useEffect, memo } from "react";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";

function PostsList({ bgColor, searchText, getAllPosts }){

    const [data, setData] = useState([]);

    useEffect(async () => {
        const response = await getAllPosts()
        setData(response)
    }, [])

    console.log('rendering PostsList component')

    const getFilteredData = () => {
        console.log('calling getFilteredData function')
        console.log('filtering data', searchText, data)
        return data.filter((item) => item.title.includes(searchText))
    }


    return (
        <div style={{backgroundColor: bgColor}}>
            {/* <UserInfo /> */}
            <ul>
                {
                   getFilteredData().map((item, index) => <li><Link to={`/posts/${item.id}`}>{item.title}</Link></li>) 
                }
            </ul>
        </div>
    )
}

export default memo(PostsList);