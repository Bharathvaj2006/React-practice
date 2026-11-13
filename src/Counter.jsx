import { useState, useRef } from "react";
import { Link } from "react-router-dom";
function Counter() {
    let [cnt, setCnt] = useState(0);
    let [cnt1, setCnt1] = useState(0);
    let ref = useRef(0);
    function update() {
        ref.current++;
    }
    return (
        <>
            <div className="my-5" style={{ width: "50%", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
                <button className="btn btn-primary" style={{ marginRight: "10px" }} onClick={() => setCnt(cnt + 1)}>{cnt}</button>
                <button className="btn btn-secondary" style={{ marginRight: "10px" }} onClick={update}>{cnt1}</button>
                <button className="btn btn-secondary" style={{ marginRight: "10px" }} onClick={() => setCnt1(ref.current)}> update</button>
                <Link to="/" className="btn btn-primary" style={{ marginRight: "10px" }}>Go to Home</Link>
            </div>
        </>
    )
}
export default Counter;