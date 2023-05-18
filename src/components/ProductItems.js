import React from 'react'
import StarIcon from '@mui/icons-material/Star';
// import randomImage from '../assets/banner1.jpg'

const ProductItems = ({ image, title, description, price, category }) => {
  return (
    <div className='w-full h-auto border-[1px] -z-[1] bg-white relative border-gray-400 py-6 hover:shadow-2xl'>
      <span className='absolute top-2 right-2 capitalize italic text-gray-400'>{category}</span>
      <div className='flex items-center justify-center mb-4'>
      <img src={image} alt="for-test" className=' w-52 h-64 object-contain'/>
      </div>
      <div className='flex items-center justify-between px-4 mb-2 bg-white'>
        <h2 className='text-lg font-bold text-gray-900 leading-6'>{title.substring(0, 20)}</h2>
        <span className=' text-sm text-gray-700 font-semibold'>${price}</span>
      </div>
      <div className='px-4 bg-white'>
        <p>{description.substring(0, 100)}...</p>
        <div className='flex items-center text-yellow-400'>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
        </div>
        <button className='w-full py-2 mt-4 text-center bg-yellow-400/80 hover:bg-yellow-400/90 active:bg-yellow-500/75 border-[1px] border-orange-600 rounded-lg font-semibold text-gray-900'>Add to cart</button>
      </div>                  
    </div>
  )
}

export default ProductItems
