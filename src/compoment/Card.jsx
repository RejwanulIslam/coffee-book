import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

export default function Card({ coffee ,handleremove }) {

  const { pathname } = useLocation()
  const { id, image, rating, popularity, category, type, ingredients, nutrition_info, calories, fat, carbohydrates, protein, name } = coffee
  return (
    <>
      <div>

        <div className="card w-96 bg-base-100 shadow-xl ">
          <Link to={`/coffee/${id}`}>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Coffee Name:{name}</h2>
              <p>Category:{category}</p>
              <p>type:{type} </p>
              <p>rating:{rating} </p>
              <p>popularity:{popularity} </p>

            </div>
          </Link>
          {
            pathname === '/dashbord' &&  <div onClick={()=>handleremove(id)} className='absolute -top-5 -right-5'><MdDelete ></MdDelete> </div> 
          }
        </div>




      </div>
    </>
  )
}
