import { useContext } from "react";
import UserContext from "./userContext";

function UserInfo(){

    const userData = useContext(UserContext);
    console.log('userData inside userdata', userData)

    return (
        <div>
            <ul>
                <li>Username: {userData.userName}</li>
                <li>Email: {userData.email}</li>
            </ul>
        </div>
    )
}


export default UserInfo;