import React,{useEffect,useState} from 'react'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {Link} from  'react-router-dom'
import Header from '../components/Header';
import Quote from '../components/Quote';


function Development() {
  useEffect(()=>{
    AOS.init({duration:"1000"}) 
  },[])
useEffect(() => {
        initFlowbite();
      })
  const [fix, setFix] =  useState(false)
  function setFixed() {
    if (window.scrollY >= 150) {
    setFix(true)
    } else {
    setFix(false)
    }
  }
    window.addEventListener("scroll", setFixed)
    const data = [
      {  
        id : 1,
        title : 'Website Development',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
      },
      {  
        id : 2,
        title : 'Web Application Development',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
      },
      { 
        id : 3,
        title : 'Desktop Application Development',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
      },
      { 
        id : 4,
        title : 'Mobile Application Development',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
      },
      { 
        id : 5,
        title : 'IOT Application Development',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'
      },
      
    ]
  return (
    <>
     <div className='w-full overflow-x-hidden'>
     < Header heading={'Development'} />
     <div className='flex flex-col w-full lg:flex-row py-20 md:ps-16  lg:ps-32'>
     <div className='lg:w-[55%] w-[90%] me-8 mb-10 md:mb-10 lg:mb-0 ' ><img src='service-5.jpg' className='w-full ms-1 md:ms-0 rounded-xl'></img></div>
      <div className='py-6 px-8 w-[90%] lg:w-[30%] bg-slate-100 shadow-md'>
        <h1 className='text-3xl font-signika text-blue-700 mb-3 font-bold'>All Services</h1>
        <hr className='h-1 w-[20%] bg-blue-700 mb-8'></hr>
        <div className='flex justify-between w-full mb-6 '><Link to='/webdesign' className='text-xl text-gray-400 font-semibold hover:text-blue-600' >Web Designing</Link><Link to='/webdesign'><IoIosArrowDroprightCircle className='text-xl text-gray-600' /></Link></div>
        <div className='flex justify-between w-full mb-6'><Link to='/digitalMarketing' className='text-xl text-gray-400 font-semibold hover:text-blue-600' >Digital Marketing</Link><Link to='digitalMarketing'><IoIosArrowDroprightCircle className='text-xl text-gray-600' /></Link></div>
        <div className='flex justify-between w-full mb-6'><Link to='/development' className='text-xl text-gray-400 font-semibold hover:text-blue-600' >Development</Link><Link to='/development'><IoIosArrowDroprightCircle className='text-xl text-gray-600' /></Link></div>
        <div className='flex justify-between w-full '><Link to='/creative' className='text-xl text-gray-400 font-semibold hover:text-blue-600' >Creative</Link><Link to='/creative'><IoIosArrowDroprightCircle className='text-xl text-gray-600' /></Link></div>

      </div>
     </div>
     <div className=' py-20 px-32 bg-slate-50'>
      <h1 className='text-7xl font-signika mb-10'>Services</h1>
      <div className='flex flex-wrap flex-col lg:flex-row '>
        {data.map((d)=>( 
        <div className='w-[30%] shadow-sm p-10 rounded-xl me-5 mb-5 bg-slate-100 hover:bg-blue-300 cursor-pointer hover:shadow-2xl' key={d.id}>
          <h1 className='text-3xl font-bold font-signika mb-2'>{d.title}</h1>
          <p>{d.desc}</p>

        </div>
        ))}

      </div>

     </div>
     < Quote/>
     
     </div>
    </>
  )
}

export default Development