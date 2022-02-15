import React from "react";
import star from "../images/star.png"


export default function Card({ src, rating, text, price, reviewCount, country }) {
    return (
        <div className="card">
            <img className="card--image" src={src} alt="" />
            <div className="card--stats">
                <img className="card--star" src={star} alt="" />
                <span>{reviewCount}</span>
                <span className="gray">({rating}) · </span>
                <span className="gray"> {country}</span>
            </div>
            <p>{text}</p>
            <p><span className="bold" >From ${price} </span>/ person</p>
        </div>
    )
}