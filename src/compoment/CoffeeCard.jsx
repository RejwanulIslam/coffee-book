import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Card from './Card'

export default function CoffeeCard() {
  const navigate = useNavigate()
  const {category} = useParams()
  const data = useLoaderData()
  const [coffes, setcoffes]=useState([])
  useEffect (()=>{
    if(category){
      const filterByCatagory = [...data].filter(coffee=>(coffee.category==category))
    setcoffes(filterByCatagory)
    }
    else{
      setcoffes(data.slice(0, 6))
    }
  },[category,data])

  
  console.log(category)
  console.log(data)
  return (
    <>
  <div className='  grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
    {
      coffes.map(coffee=><Card coffee={coffee}></Card>)
    }
  </div>
  <button className='btn btn-warning' onClick={()=>navigate('/coffee')}>vuw all</button>
  </>
  )
}
