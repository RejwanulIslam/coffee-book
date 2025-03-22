import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Card from './Card'

export default function CoffeeCard() {
  const {catagore} = useParams()
  const data = useLoaderData()

  
  //console.log(catagore)
  console.log(data)
  return (
  <div className='  grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {
      data.map(coffee=><Card coffee={coffee}></Card>)
    }
  </div>
  )
}
