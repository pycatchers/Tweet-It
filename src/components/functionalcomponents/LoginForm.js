import { useContext } from "react";
import UserContext from "./userContext";

function LoginForm() {
    const userData = useContext(UserContext)
    console.log('userdata inside loginform', userData)
    return(
        <div>LoginForm</div>
    )
}

export default LoginForm;