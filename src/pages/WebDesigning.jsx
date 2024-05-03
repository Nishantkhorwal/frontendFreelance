import React,{useEffect,useState} from 'react'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {Link} from  'react-router-dom'
import Header from '../components/Header';
import Quote from '../components/Quote';


function WebDesigning() {
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
        title : 'Web Design Service',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        link : `/webdesigningservice`,
      },
      {  
        id : 2,
        title : 'Responsive Website Designing',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        link : `/responsiveWebsiteDesign`,
      },
      { 
        id : 3,
        title : 'Ecommerce Website Designing',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        link : `/ecommerceWebsiteDesign`,
      },
      { 
        id : 4,
        title : 'Ecommerce Web Development',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        link : `/ecommerceWebDevelopment`,
      },
      { 
        id : 5,
        title : 'Website Redesigning',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        link : `/websiteRedesigning`,
      },
      { 
        id : 6,
        title : 'PSD To HTML',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        link : `/psdtohtml`,
      },
      { 
        id : 7,
        title : 'Web Development',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        link : `/webdevelopment`,
      },
      { 
        id : 8,
        title : 'Graphic Design',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        link : `/graphicDesign`,
      },
      { 
        id : 9,
        title : 'UI/UX Designing',
        desc : 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
        link : `/uiuxDesigning`,
      },
    ]
  return (
    <>
     <div className='w-full overflow-x-hidden'>
     < Header heading={'Web Designing'} />
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
          <Link to={d.link}><h1 className='text-3xl font-bold font-signika mb-2 hover:text-blue-800'>{d.title}</h1></Link>
          <Link to={d.link}><p className='hover:text-blue-800 hover:font-semibold'>{d.desc}</p></Link>
          </div>
        ))}

      </div>

     </div>
     < Quote/>
     
     </div>
    </>
  )
}

export default WebDesigning
