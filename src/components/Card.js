import React from "react";
import star from "../images/star.png"


export default function Card({ src, rating, text, price }) {
    return (
        <div className="card">
            <img className="card--image" src={src} alt="" />
            <div className="card--stats">
                <img className="card--star" src={star} alt="" />
                <span>5.0</span>
                <span className="gray">({rating}) · </span>
                <span className="gray"> USA</span>
            </div>
            <p>{text}</p>
            <p><span className="bold" >From ${price} </span>/ person</p>
        </div>
    )
}