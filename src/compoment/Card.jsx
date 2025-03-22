import React from 'react'


export default function Card({coffee}) {
    const {id,image,category,ingredients,nutrition_info,calories,fat,carbohydrates,protein}=coffee
  return (
    <div>{category}</div>
  )
}
