import React, { useEffect, useState } from 'react'
import Hading from '../compoment/Hading'
import { getAllFavorite, removeFavorite } from '../utlis'
import Card from '../compoment/Card'
import { useLocation } from 'react-router-dom'

export default function Dashbord() {
  
 
  const [coffee,setcoffees]= useState([])
  useEffect(()=>{
    const favorite = getAllFavorite()
    setcoffees(favorite)
  },[])

    const handleremove =(id)=>{
      removeFavorite(id)
      const favorite = getAllFavorite()
    setcoffees(favorite)
  
    }

  return (
    <>
    <div>
      <Hading title={'Wellcome to Dashbord'} subtitle={'this dashbord you can coffee add or remove here'}></Hading>
    </div>
    <div>
        <div className='  grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6'>
            {
              coffee.map(coffee => <Card handleremove={handleremove} coffee={coffee}></Card>)
            }
          </div>
    </div>
    </>
  )
}
