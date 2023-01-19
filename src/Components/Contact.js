import React from "react"
import img from  "../img/logo.png"
import star from "../img/star-icon.png"
import "../index.css"
function Contact (props) {
    return(
        <div className="card-div">
        <div className="contact-card">
            <img src={img}className="contact-img"/>
            <h1>{props.name}</h1>
            <div className="info-group">
                <img src={star} className="star-img2" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={star} className="star-img2" />
                <p>{props.email}</p>
            </div>
            
        </div></div>
    )
}
export default Contact