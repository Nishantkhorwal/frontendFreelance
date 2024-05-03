import React from 'react'
import Header from './Header'

function Services({ title, desc }) {
  return (
    <>
      <div className='overflow-x-hidden'>
        <Header heading={title} />
        <div className='pb-44 pt-20 md:px-20 px-4 bg-cover bg-center bg-no-repeat' style={{
                backgroundImage: `url(ServiceMainBg2.svg)`,
            }} >
        <h1 className='font-bold text-5xl mb-8 font-signika'>
            {title}
        </h1>
        <h3 className='font-semibold font-cabin text-2xl mb-10'>All you need to know</h3>
        <p className='mb-20 '>
             {desc}
        </p>
        <button className='bg-red-500 p-4 cursor-pointer rounded-lg text-white font-semibold text-xl hover:bg-red-800'>Get Service Now</button>
        </div>

      </div>
    </>
  )
}

export default Services
