import { useState } from "react";
import { Link } from "react-router-dom";
function Login() {

    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [isMatch, setIsMatch] = useState(false);

    function changpwd2(event) {
        setPwd2(event.target.value);
        if (pwd1 === event.target.value) {
            setIsMatch(true);
        }
        else {
            setIsMatch(false);
        }
    }

    return (
        <>
            <form className="my-5" style={{ width: "50%", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(e) => setPwd1(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={changpwd2} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" >Agree to Terms and Conditions</label>
                </div>
                <Link to="/courses" className="btn btn-primary">Create Account</Link>
                <Link to="/counter" className="btn btn-primary" style={{ marginLeft: "10px" }}>Counter</Link>
                <Link to="/posts" className="btn btn-primary" style={{ marginLeft: "10px" }}>Posts</Link>
                {pwd2 != "" && pwd1 != "" && (isMatch ? <p className="text-success"><b>Passwords match</b></p> : <p className="text-danger">Passwords do not match</p>)
                }
            </form>
        </>
    );
}

export default Login;