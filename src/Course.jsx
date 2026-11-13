import './index.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Course({
    name = "Nakku",
    price = 0,
    rating = 0,
    id = 0,
    image = "",
    login = false,
    delete: deleteCourse = () => { }
}) {
    const props = { name, price, rating, id, image, login, delete: deleteCourse };
    const [isEnrolled, setEnroll] = useState(false);
    const [isDiscounted, setDiscount] = useState(false);
    const enrolled = (eve) => {
        if (!isEnrolled) alert(`You have enrolled the ${props.name} course`);
        setEnroll(true);
    }
    const [Price, setPrice] = useState(props.price);
    const discount = () => {
        setPrice(Price - Math.floor(Price * 0.1));
        alert(`You have got a discount of 10%`);
        setDiscount(true);
    }

    return (
        <>
            <div className="card">
                <img src={props.image} alt="Nothing" />
                <p><b>{props.name}</b> course for beginners</p>
                <p className="pr">Price:${Price}        Rating:{props.rating}⭐</p>
                {!isEnrolled ? <button className="btn btn-primary" style={{ margin: "10px" }} onClick={(eve) => enrolled(eve)}>Enroll Now</button> : <button className="btn btn-primary">Go to Course</button>}
                <button className="btn btn-danger" onClick={() => props.delete(props.id)}>Delete</button>
                {!isDiscounted && !isEnrolled ? <button className="btn btn-primary" onClick={() => discount()}>Discount</button> : null}
                {isEnrolled && <p className="enrolled">You are enrolled in this course!</p>}
            </div>
        </>
    );

}

Course.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    id: PropTypes.number,
    image: PropTypes.string,
    login: PropTypes.bool,
    delete: PropTypes.func,
    disc: PropTypes.func
}




export default Course;