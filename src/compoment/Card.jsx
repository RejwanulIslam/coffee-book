import React from 'react'
import { Link } from 'react-router-dom'


export default function Card({ coffee }) {
  const { id, image,rating,popularity, category,type, ingredients, nutrition_info, calories, fat, carbohydrates, protein ,name} = coffee
  return (
    <>
    <Link to={`/coffee/${id}`}>
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure><img src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Coffee Name:{name}</h2>
        <p>Category:{category}</p>
        <p>type:{type} </p>
        <p>rating:{rating} </p>
        <p>popularity:{popularity} </p>
        
      </div>
    </div>
    </Link>
    </>
  )
}
