import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate(`/posts?username=${username}`)
    }

    return (
        <div>
            <input type="text" placeholder="Enter Username" onChange={(event) => setUserName(event.target.value)}/>
            <input type="password" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)}/>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;
