import React from 'react'

const FooterMiddleList = ({title, listItems}) => {
  return (
    <div>
       <h3 className=' text-lg font-semibold'>{title}</h3>
        <ul>
          {
            listItems.map((item)=>item.listData.map((data)=>{
              <li className='footerLink'>{data}</li>
            }))
          }
        </ul>
    </div>
  )
}

export default FooterMiddleList
