import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            HomePage
            <br />
            <Link to='/posts'>Go to Posts</Link>
            <Link to='/login' style={{float: 'right', marginRight: 70}}>Login</Link>
        </div>
    )
}


export default HomePage;