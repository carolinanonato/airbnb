import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katie from "./images/katie.png"
import wedding from "./images/wedding.png"
import bike from "./images/bike.png"
import data from "./data"
console.log(data)


export default function App() {

  const cards = data.map(item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />

      {cards}

    </div >
  )
}