import React,{useEffect,useState} from 'react'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";

function Header({ heading }) {
 

  
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
  return (
    <>
    
    <div className='overflow-x-hidden'>
    <div className='md:w-full w-[100%] bg-gray-900 pb-44'>
     <nav className={` dark:bg-gray-900 ${fix ? 'fixed top-0 md:w-full md:ms-0 duration-100 ease-in  w-full bg-white ' : 'relative bg-transparent   md:w-full'} z-20  dark:border-gray-600 `} data-aos="zoom-out">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="dark-logo.png  " className="h-14" alt="Flowbite Logo"/>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <Link to='/contact'> <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 lg:block hidden md:block">Inquire Now</button></Link>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to='/' className={`block py-2 px-3 ${fix ? 'text-black':'text-white'} hover:text-blue-700 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent`} aria-current="page">Home</Link>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className={`flex items-center justify-between w-full py-2 px-3 ${fix ? 'text-black':'text-white'}  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}>Services <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to="/webdesign" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Web Designing</Link>
                  </li>
                 
                  <li>
                    <Link to='/digitalMarketing' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to='/development' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Development</Link>
                  </li>
                  <li>
                    <Link to='/creative' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Creative</Link>
                  </li>
                </ul>
                
            </div>
        </li>
        <li>
          <Link to='/about' className={`block py-2 px-3 ${fix ? 'text-black':'text-white'} hover:text-blue-700 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent`}>About Us</Link>
        </li>
        <li>
          <Link to='/contact' className={`block py-2 px-3 ${fix ? 'text-black':'text-white'} hover:text-blue-700 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent`}>Contact</Link>
        </li>
      </ul>

  </div>
  </div>
</nav>

    
      <img src='breadcrumb-2.svg' className='absolute right-20  top-0 hidden md:block md:w-[500px] lg:w-fit '></img>
      <img src='breadcrumb-1.svg' className={`absolute top-32 left-0 hidden md:block ${fix ? 'lg:hidden': 'lg:block'}`}></img>
      <img src='shape-6.svg' className='absolute top-44 left-32 hidden md:block'></img>
      <img src='shape-4.svg' className='absolute top-24 left-72 brightness-50  spring hidden lg:block' ></img>
      <img src='shape-5.svg' className={`absolute right-10 brightness-50 top-72 ${fix ? 'lg:hidden': 'lg:block'} spring hidden `}></img>
      <img src='shape-51.svg ' className={`absolute right-80 brightness-75 top-[350px] hidden ${fix ? 'lg:hidden': 'lg:block'}`}></img>
    <div className='mt-32 md:ms-20 ms-0'>
      <h1 className='text-white md:text-7xl text-3xl mb-8 z-50 relative ms-5 md:ms-0'>{heading}</h1>
      <div className='flex ms-6 md:ms-2 text-white justify-start items-center relative'><Link to='/' className='me-2 text-xl hover:text-blue-800 cursor-pointer '>Home</Link><FaAngleRight className='me-4 mt-1' /><h3 className='text-xl'>{heading}</h3></div>
    </div>
    </div>
    </div>

      
    </>
  )
}

export default Header
