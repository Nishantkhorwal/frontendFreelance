import React, {useState} from 'react'
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'

function Navbar() {
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
    

    <nav className={`bg-white dark:bg-gray-900 ${fix ? 'fixed top-0 lg:w-full lg:ms-0 duration-100 ease-in  w-full  ' : 'relative  lg:ms-28 rounded-xl lg:w-4/5 '}       z-20  border-b border-gray-200 dark:border-gray-600`} data-aos="zoom-out">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to=" " className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src= 'dark-logo.png' className="md:w-full w-[50%]" alt=" "/>
  </Link>
  <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
     <Link to='/contact'> <button type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 lg:block hidden md:block">Inquire Now</button></Link>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
  <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="#" className="block py-2 px-3 text-white bg-blue-700 rounded lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500 dark:bg-blue-600 lg:dark:bg-transparent" aria-current="page">Home</Link>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:w-auto dark:text-white lg:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 lg:dark:hover:bg-transparent">Services <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to='/webdesign' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Web Designing</Link>
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
          <Link to='/about' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">About Us</Link>
        </li>
        <li>
          <Link to='/contact' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contact</Link>
        </li>
      </ul>

  </div>
  </div>
</nav>

      
    </>
  )
}

export default Navbar
