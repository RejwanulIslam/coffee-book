import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CoffeeDetails() {
  const { id } = useParams()
  const data = useLoaderData()
  console.log(data)
  const [coffee, setcoffee] = useState({})
  const {  image,rating,popularity, category,type, ingredients, nutrition_info, calories, fat, carbohydrates, protein ,name} = coffee

  useEffect(
    () => {
      const singleData = data.find(coffee => (coffee.id == id))
      setcoffee(singleData)
    }, [id, data]

  )

  return (
    <div className="card w-full bg-base-100 shadow-xl ">
    <figure><img src={image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Coffee Name:{name}</h2>
      <p>Category:{category}</p>
      <p>type:{type} </p>
      <p>rating:{rating} </p>
      <p>popularity:{popularity} </p>
      
    </div>
  </div>
  )
}
