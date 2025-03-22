import React from 'react'

export default function Hading({title,subtitle}) {
  return (
    <div className='flex flex-col justify-center w-full items-center my-12'>
        
        <h1 className='text-4xl font-thin '>{title}</h1>
        <p className='text-sm font'>
        {subtitle}
        </p>
    </div>
  )
}
