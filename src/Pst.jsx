import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
function Pst() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/post/" + id)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch((error) => console.log(error));
    }, []);
    // if (!post) {
    //     return (
    //         <>
    //             {!error && <img src="Data\assets\loading-loading-gif.gif" alt="Loading..." />}
    //             {error && <p>{error}</p>}
    //         </>
    //     )
    // }
    return (
        <>
            <div>
                {post && <div className="my-5" style={{ width: "50%", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", textAlign: "center" }}>
                    <h1>{post.title}</h1>
                    <p><b>Marks:</b>{post.marks}</p>
                    <p><b>Out Of:</b>{post.outOff}</p>
                </div>}
                <Link to="/posts" className="btn btn-primary" style={{ textAlign: "center", marginLeft: "45%" }}>Go to Posts</Link>
            </div>
        </>
    )
}

export default Pst