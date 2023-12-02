import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            HomePage
            <br />
            <Link to='/posts'>Go to Posts</Link>
        </div>
    )
}


export default HomePage;