import React from 'react'
import FooterMiddleList from './FooterMiddleList'

const FooterMiddle = () => {
  const arr = [
    {
    _id:400,
    title: 'Get to Know Us',
    listItems: [{
    _id:'001',
    listData:[
    {  
    items: 'Careers',
    items: 'Blog',
    items: 'About Amazon',
    items: 'Investor Relations',
    items: 'Amazon Devices',
    items: 'Amazon Science'
    },
  ],
  },
  ],
  },
  {
  _id:401,  
  title: 'Make Money with Us',
  listItems:[
  {
  _id:'002',
  listData: [{
  items: 'Sell products on Amazon',
  items: 'Sell on Amazon Business',
  items: 'Sell apps on Amazon',
  items: 'Become an Affiliate',
  items: 'Advertise Your Products',
  items: 'Self-Publish with Us',
  items: 'Host an Amazon Hub',
  items: '›See More Make Money with Us',
  },
],
  },
],
},
{
_id:402,  
title: 'Amazon Payment Products',
listItems:[{
_id:'003',
listData:[{
items: 'Amazon Business Card',
items: 'Shop with Points',
items: 'Reload Your Balance',
items: 'Amazon Currency Converter'
},
],
},
],
},
{
_id:403,  
title: 'Let Us Help You',
listItems:[{
_id:'004',
listData:[{
items: 'Amazon and COVID-19',
items: 'Your Account',
items: 'Your Orders',
items: 'Shipping Rates & Policies',
items: 'Returns & Replacements',
items: 'Manage Your Content and Devices',
items: 'Amazon Assistant',
items: 'Help',
},
],
},
],
}
  ]
  return (
    <div className=' w-full bg-[#1e2f3e] text-white'>
      <div className=' w-full py-10 border-b-[1px] border-slate-300'>
      <div className=' max-w-5xl mx-auto'>
        <div className='w-full grid grid-cols-4 place-items-center items-start'>
         {
          arr.map((node)=>(
           <FooterMiddleList key={node._id} title={node.title} listItems={node.listItems}/>
          ))
         }
        </div>
      </div>
      </div>
    </div>
  )
}

export default FooterMiddle
