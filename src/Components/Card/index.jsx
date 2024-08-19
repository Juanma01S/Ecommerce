import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

function Card(data) {

  const context = useContext(ShoppingCartContext)
  return (
    <div className=' cursor-pointer w-56 h-60 rounded-lg'>
      <figure className=' relative mb-2 w-full h-4/5'>
      <span className=' absolute bottom-0 left-0  bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
      <img className=' w-full h-full object-cover rounded-lg' src={data.data.category.image} alt="" />
      <div 
      onClick={() => context.setCount(context.count + 1)  }
      className=' absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full'>
        +
      </div>
      </figure>
      <p className=' flex justify-between'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card
