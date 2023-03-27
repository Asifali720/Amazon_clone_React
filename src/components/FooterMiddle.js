import React from 'react'
import FooterMiddleList from './FooterMiddleList'

const FooterMiddle = () => {
  return (
    <div className=' w-full bg-[#1e2f3e] text-white'>
      <div className=' w-full py-10 border-b-[1px] border-slate-300'>
      <div className=' max-w-5xl mx-auto'>
        <div className='w-full grid grid-cols-4 place-items-center items-start'>
         <FooterMiddleList />
         <FooterMiddleList />
         <FooterMiddleList />
         <FooterMiddleList />
        </div>
      </div>
      </div>
    </div>
  )
}

export default FooterMiddle
