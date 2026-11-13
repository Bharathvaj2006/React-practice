
import Course from './Course'
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
function CourseList() {
    const [cList, setCList, error] = useFetch("http://localhost:3000/Course");

    function deleteById(id) {
        const newList = cList.filter((item) => item.id !== id);
        setCList(newList);
    }

    if (!cList) {
        return (
            <>
                {!error && <img src="Data\assets\loading-loading-gif.gif" alt="Loading..." />}
                {error && <p>{error}</p>}
            </>
        )
    }

    // cList.sort((a,b) => b.rating-a.rating);
    // const filt=cList.filter((a)=>a.rating>=4.5);
    const Cources = cList.map((cList, idx) =>
        <Course key={idx} id={cList.id} name={cList.name} price={cList.price} image={cList.image} rating={cList.rating} login={cList.login} delete={deleteById} />
    );
    return (
        <>
            {Cources}
            <br />
            <Link to="/" className="btn btn-primary" style={{ width: "30%", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>Go Home</Link>
        </>
    )
}

export default CourseList;