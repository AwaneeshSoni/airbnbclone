import React from "react"
import grid from "../img/grid.png"
import "../index.css"
function Hero () {
    return (
        <div className="hero">
            <img src={grid} className="grid-img" alt="grid" />
            <h1 className="hero-header">Online Experiences </h1>
            <p className="hero-text">lorem ipsum not workinglorem ipsum not workinglorem ipsum not workinglorem ipsum not working</p>
        </div>
    )
}
export default Hero