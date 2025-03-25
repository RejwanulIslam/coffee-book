import React, { useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Card from '../compoment/Card'

export default function Coffees() {
  const data = useLoaderData()
  const [coffees, setcoffees] = useState(data)
  const handleSort = (sortBy) => {
    if (sortBy == 'popularity') {
      console.log('popularity')
      const sorted = [...data].sort((a, b)=> b.popularity - a.popularity)
      setcoffees(sorted)

}
    else if (sortBy == 'rating') {
  console.log('rating')
  const sorted = [...data].sort((a, b)=> b.rating - a.rating)
      setcoffees(sorted)

}

  }
return (
  <>
    <div className='flex justify-between pb-5'>
      <div><h1 className='text-3xl font-thin'>short coffees popularity and rating </h1></div>
      <div className='flex gap-5'>
        <button className=' btn btn-warning' onClick={() => handleSort('popularity')}>Sort By popularity</button>
        <button className=' btn btn-warning' onClick={() => handleSort('rating')}>Sort By Rating</button>
      </div>
    </div>
    <div className='  grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
      {
        coffees.map(coffee => <Card coffee={coffee}></Card>)
      }
    </div>
  </>
)
}

