import React from "react";
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import Contact from "./Components/Contact"
import "../src/index.css"
import data from "./data"


export default function App(){
  const cards = data.map((item) => {
    return(
      <Card 
      title = {item.title}
      rating = {item.stats.rating}
      price = {item.price}
      reviewCount = {item.reviewCount}
      openSpots = {item.openSpots}
      />
    )
  }) 
  return (
    <div className="App">
     <Header />
     <Hero />
     <div className="card-list" >
     {cards }</div>
    </div>
  );
}

//  App;
