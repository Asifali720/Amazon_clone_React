import React from 'react'
import FooterMiddleList from './FooterMiddleList'

const FooterMiddle = () => {
  const arr = [
    {
      _id: 400,
      title: 'Get to Know Us',
      listItems: [{
        _id: '001',
        listData: [
          'Careers',
          'Blog',
          'About Amazon',
          'Investor Relations',
          'Amazon Devices',
          'Amazon Science'
        ],
      },
      ],
    },
    {
      _id: 401,
      title: 'Make Money with Us',
      listItems: [
        {
          _id: '002',
          listData: [
            'Sell products on Amazon',
            'Sell on Amazon Business',
            'Sell apps on Amazon',
            'Become an Affiliate',
            'Advertise Your Products',
            'Self-Publish with Us',
            'Host an Amazon Hub',
            '›See More Make Money with Us',
          ],
        },
      ],
    },
    {
      _id: 402,
      title: 'Amazon Payment Products',
      listItems: [{
        _id: '003',
        listData: [
          'Amazon Business Card',
          'Shop with Points',
          'Reload Your Balance',
          'Amazon Currency Converter'
        ],
      },
      ],
    },
    {
      _id: 403,
      title: 'Let Us Help You',
      listItems: [{
        _id: '004',
        listData: [
          'Amazon and COVID-19',
          'Your Account',
          'Your Orders',
          'Shipping Rates & Policies',
          'Returns & Replacements',
          'Manage Your Content and Devices',
          'Amazon Assistant',
          'Help',
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
              arr.map((node) => (
                <FooterMiddleList key={node._id} title={node.title} listItems={node.listItems} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMiddle
