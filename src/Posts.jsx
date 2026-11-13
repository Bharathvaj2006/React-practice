import { Link, useNavigate } from "react-router-dom"
import useFetch from "./useFetch";
import "./index.css"
function Posts() {
    const [posts, setPosts, error] = useFetch("http://localhost:3000/post");
    const navigate = useNavigate();
    if (!posts) {
        return (
            <>
                {!error && <img src="Data\assets\loading-loading-gif.gif" alt="Loading..." />}
                {error && <p>{error}</p>}
            </>
        )
    }
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Subjects</h1>

            <div className="my-5"
                style={{ width: "80%", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
                {posts.map((post) => (
                    <div className="Postcard" key={post.id} onClick={() => navigate(post.id)}>
                        <h2>{post.title}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Posts;