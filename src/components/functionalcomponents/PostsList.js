import { useState, useMemo } from "react";
import UserInfo from "./UserInfo";

function PostsList({ data, bgColor, searchText }){

    // const getFilteredData = () => {
    //     console.log('filtering data', searchText)
    //     return data.filter((item) => item.title.includes(searchText))
    // }

    const getFilteredData = useMemo(() => {
        console.log('filtering data', searchText)
        return data.filter((item) => item.title.includes(searchText))
    }, [data, searchText])


    return (
        <div style={{backgroundColor: bgColor}}>
            <UserInfo />
            <ul>
                {
                   getFilteredData.map((item, index) => <li>{item.title}</li>) 
                }
            </ul>
        </div>
    )
}

export default PostsList;