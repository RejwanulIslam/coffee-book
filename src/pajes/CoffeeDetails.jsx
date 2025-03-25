import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addFavorite, getAllFavorite } from '../utlis'

export default function CoffeeDetails() {
  const { id } = useParams()
  const data = useLoaderData()
  console.log(data)
  const [coffee, setcoffee] = useState({})
  const { image, rating, popularity, category, type, ingredients, nutrition_info, calories, fat, carbohydrates, protein, name } = coffee

  const handleAddCoffee = (coffee) => {
    addFavorite(coffee)
    setisFavorite(true)


  }
  const [isFavorite, setisFavorite] = useState(false)

  useEffect(
    () => {
      const singleData = data.find(coffee => (coffee.id == id))
      setcoffee(singleData)
      const favorits = getAllFavorite()

      const isExist = favorits.find(item => item.id == singleData.id)
      console.log(isExist)
      if (isExist) {
        setisFavorite(true)
      }
    }, [id, data]

  )

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl ">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className='flex'>
          <div className="card-body">
            <h2 className="card-title">Coffee Name:{name}</h2>
            <p>Category:{category}</p>
            <p>type:{type} </p>
            <p>rating:{rating} </p>
            <p>popularity:{popularity} </p>

          </div>
          <div>
            <button disabled={isFavorite} onClick={() => handleAddCoffee(coffee)} className='btn btn-success w-32'>Add Favaraute</button>
          </div>
        </div>
      </div>

    </div>
  )
}
