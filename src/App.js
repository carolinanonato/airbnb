import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katie from "./images/katie.png"
import wedding from "./images/wedding.png"
import bike from "./images/bike.png"


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="test">
        <Card src={katie} rating={5.0} reviewCount={6} country={"USA"} text={"Life lessons with Katie Zaferes"} price={136} />
        <Card src={wedding} rating={5.0} reviewCount={30} country={"USA"} text={"Learn wedding photography"} price={136} />
        <Card src={bike} rating={4.8} reviewCount={2} country={"USA"} text={"Group Mountain Biking"} price={136} />
      </div>
    </div >
  )
}