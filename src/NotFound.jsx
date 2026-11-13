import { Link } from "react-router-dom";
function NotFound() {
    return (
        <>
            <div className="my-5" style={{ width: "50%", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
                <h2>404 Not Found</h2>
                <p>The page you are looking for does not exist</p>
                <Link className="btn btn-danger" to="/">Go to Home</Link>
            </div>
        </>
    );
}

export default NotFound;