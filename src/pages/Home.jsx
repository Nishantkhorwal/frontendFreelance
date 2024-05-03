import React,{useRef,useState} from 'react'
import { useEffect } from "react";
import '../App.css'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import {Link} from 'react-router-dom'
import Starter from '../components/Starter'
import Navbar from '../components/Navbar'
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiCoinmarketcap } from "react-icons/si";
import { MdLocalFireDepartment } from "react-icons/md";
import { SiVorondesign } from "react-icons/si";
import { TbBrandDribbble } from "react-icons/tb";
import { FaBullhorn } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoPricetags } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { initFlowbite } from "flowbite";
import { FaStar } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { FaGlobe } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa6";
import AOS from 'aos'
import 'aos/dist/aos.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'
import Quote from '../components/Quote';
function Home() {
  const [counteron, setCounterOn] = useState(false);
  const sliderRef = useRef(null);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  useEffect(()=>{
    AOS.init({duration:"1000"}) 
  },[])
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
        setActiveDotIndex(currentSlide);
      }
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust as needed
    cssEase: 'linear',
    pauseOnHover: true,
    lazyLoad: true,
    appendDots: (dots) => (
      <CustomDots dots={dots} onClick={(index) => handleDotClick(index)} activeIndex={activeDotIndex} />
    ),
  };

  const handleDotClick = (index) => {
    setActiveDotIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  // Custom appendDots function to customize dot appearance
  const CustomDots = ({ dots, onClick, activeIndex }) => (
    <div style={{ position: 'absolute', bottom: '-70px',left : '-50px', width: '100%' }}>
      <ul style={{ margin: '0', padding: '0', textAlign: 'center' }}>
        {dots.map((dot, index) => (
          <li
            key={index}
            style={{
              display: 'inline-block',
              margin: '0 5px',
              cursor: 'pointer',
              listStyle: 'none',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: activeIndex === index ? 'cyan' : 'gray',
            }}
            onClick={() => onClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
  var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile devices
        },
      },
    ],
    
  };
 
  useEffect(() => {
    initFlowbite();
  })
  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const data = [
    { 

      name: `Erika`,
      img : `work7.png`,
      title : `Chief lil UX Designer`,
      Desc : `
      Many desktop publishing web page editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the
      years,sometimes by accident, (injected humour and the like).`
    },
    {
      name: `Stephen`,
      img : `work7.png`,
      title : `Chief Manager`,
      Desc : `
      Many desktop publishing web page editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the
      years,sometimes by accident, (injected humour and the like).`
    },
    {
      name: `John`,
      img : `work7.png`,
      title : `Chief Executive`,
      Desc : `
      Many desktop publishing web page editors now use Lorem Ipsum as their default model text, and a search for
      'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the
      years,sometimes by accident, (injected humour and the like).`
    },

  ]
  const data2 = [
    {
      img : `portfolio-5.jpg`
    },
    {
      img : `portfolio-6.jpg`
    },
    {
      img : `portfolio-7.jpg`
    },
  ]
  const data3 = [
    {
      date : "Dec 02,2023",
      img : "work10.jpg",
      title : "Facebook Design is dedicated to what's new in design",
      desc : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for."
    },
    {
      date : "Dec 02,2023",
      img : "work8.jpg",
      title : "Do you really need? This will help you decide",
      desc : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for."
    },
    {
      date : "Dec 02,2023",
      img : "work9.jpg",
      title : "In depth industry and ecosystem design",
      desc : "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for."
    },
  ]
  return (
    <>
    <div className='overflow-x-hidden'>
    <div className='lg:w-full w-fit h-screen relative bg-gradient-to-tr  from-gray-700 overflow-hidden'>
    <Starter></Starter>
     <img src='bgHome.jpg' className='w-[98%] lg:w-full h-full object-cover absolute lg:top-14 top-10 mix-blend-darken overflow-x-hidden' ></img>  
   
    <Navbar></Navbar>
    <div className='flex flex-col relative w-[55%] top-10 lg:left-28 left-10 lg:pe-10 ' data-aos="fade-up">
    <h3 className=' text-5xl mb-4 lg:text-5xl text-white font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-extrabold' data-aos="fade-down">
      Collaboration With Chat
    </h3>
    <h1 className='mb-10 lg:text-7xl text-2xl font-extrabold text-white font-signika'>
      Better Design For Your Digital Products
    </h1>
    <p className='mb-8 lg:pe-44 text-sm lg:text-lg font-semibold text-white'>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at
    its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of</p>
                                 
    <a href='#' onClick={scrollToQuote}><button type="button" className="text-white w-44  font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 bg-gradient-to-l  from-blue-700 to-green-400 ">Free Quote</button></a>
    </div>
    </div>
    <div className='flex lg:flex-row flex-col justify-center items-center lg:px-20 py-20'>
        <div className='w-1/2 lg:flex lg:flex-row hidden '>
            <div className='lg:w-[350px] w-[350px] rounded-t-full  overflow-hidden bg-green-200 lg:me-10 me-10' data-aos="fade-right">
           <div className='mx-8 shadow-2xl relative left-[-20px] lg:left-4 rounded-t-full w-[100px] lg:w-[300px] overflow-hidden'>
             <img src='work1.jpg' ></img>
           </div> 
           </div>
           <div className='w-[350px]  rounded-b-full   overflow-hidden bg-green-200' data-aos="fade-left">
           <div>
             <img src='work2.jpg' className='mx-8 shadow-2xl relative lg:left-[-50px] left-[-40px] rounded-b-full w-[300px] overflow-hidden'></img>
           </div>
           </div>
        </div>
        <div className='lg:w-1/2 w-full  relative px-4 lg:ps-0 overflow-hidden'>
            <div className='lg:ms-20 '>
            <h3 className='text-xl mb-4 lg:text-3xl text-white font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-extrabold ' data-aos="fade-down">
                About Us
            </h3>
            <h1 className='lg:text-5xl text-3xl font-bold lg:pe-36 mb-10 font-cabin' data-aos="fade-down">
               Creating Problem Solving <strong className='lg:text-5xl text-3xl  bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-bold'>Innovations </strong>
            </h1>
            <p className='lg:text-lg text-sm' data-aos="fade-up" >
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <div className='flex  flex-col lg:flex-row mt-10' data-aos="fade-down">
                <div className='flex shadow-lg hover:shadow-xl py-4 px-3 lg:me-10 justify-center items-center mb-3'>
                 <SiCoinmarketcap className='text-7xl me-4  text-purple-800' />
                 <h1 className='font-semibold text-xl font-cabin'> Brand Strategy And Art Direction</h1>
                </div>
                <div className='flex shadow-lg hover:shadow-xl py-4 px-3 lg:me-10 mb-3 justify-center items-center' data-aos="fade-up">
                <MdLocalFireDepartment className='text-7xl lg:me-4 me-2 text-purple-800 ' />
                <h1  className='font-semibold text-xl font-cabin'> UX/UI Design & App Design</h1>

                </div>

            </div>
             <div className='lg:flex flex-col lg:flex-row mt-10 mb-8 '>
                <div className='flex shadow-lg hover:shadow-xl py-4 lg:px-3 lg:me-10 justify-center items-center mb-3'>
                 <SiCoinmarketcap className='text-7xl me-4 text-purple-800' />
                 <h1 className='font-semibold text-xl font-cabin'> Brand Strategy And Art Direction</h1>
                </div>
                <div className='flex shadow-lg hover:shadow-xl py-4 px-3 lg:me-10 mb-3 justify-center items-center' >
                <MdLocalFireDepartment className='text-7xl me-4  text-purple-800' />
                <h1  className='font-semibold text-xl font-cabin'> UX/UI Design & App Design</h1> 

                </div>

            </div>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-gray-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" data-aos="fade-down">Read More</button>
            </div>
        </div>

    </div>
     <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
    <div className='flex justify-between items-center lg:py-16  lg:px-44 bg-gradient-to-l overflow-hidden from-blue-700 to-green-400 mb-10'>
      <div className='flex flex-col lg:justify-center justify-start  items-start'>
        <h1 className='text-white text-lg  lg:text-5xl font-semibold lg:font-bold'>
           { counteron && <CountUp start={0} end={251} duration={2} delay={0}/> }+
        </h1>
        <h3 className='lg:text-xl  text-sm font-semibold text-white font-cabin'>
        Project Complete
        </h3>
        

      </div>
      <div className='flex flex-col lg:justify-center justify-start  items-start '>
        <h1 className='text-white text-lg  lg:text-5xl font-semibold lg:font-bold'>
        { counteron && <CountUp start={0} end={164} duration={2} delay={0}/> }+
        </h1>
        <h3 className='lg:text-xl text-sm font-semibold text-white font-cabin'>
          Quality Members
        </h3>
        

      </div>
      <div className='flex flex-col lg:justify-center justify-start  items-start'>
        <h1 className='text-white text-lg  lg:text-5xl font-semibold lg:font-bold'>
        { counteron && <CountUp start={0} end={455} duration={2} delay={0}/> }+
        </h1>
        <h3 className='lg:text-xl text-sm font-semibold text-white font-cabin'>
          Award Winnings
        </h3>
        

      </div>
      <div className='flex flex-col lg:justify-center justify-start  items-start '>
        <h1 className='text-white text-lg  lg:text-5xl font-semibold lg:font-bold'>
        { counteron && <CountUp start={0} end={30} duration={2} delay={0}/> }+
        </h1>
        <h3 className='lg:text-xl text-sm font-semibold text-white font-cabin'>
          Years of Experience
        </h3>
        

      </div>

    </div>
    </ScrollTrigger>
    <div className='w-[95%] lg:w-full overflow-hidden '>
      <div className='lg:ms-20'>
      <h3 className='text-xl mb-4 lg:text-3xl text-white font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-extrabold' data-aos="fade-down">Our Services</h3>
      <h1 className='lg:text-5xl text-xl font-bold font-signika' data-aos="fade-down">We Empower Clients<br/> <strong className='lg:text-5xl text-3xl  bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-bold' data-aos="fade-down">Be Loved </strong></h1>
      </div>
      <div className='flex flex-col lg:py-10 lg:mt-10 mt-6' >
        <div className='flex lg:ps-24 mb-16' data-aos="fade-up">
           <FaBullhorn className='text-7xl text-cyan-400 lg:me-10 hidden lg:block' />
          <div className='flex flex-col'>
            <h1 className='lg:text-4xl text-lg font-bold mb-6 font-signika'>
              Digital Marketing
            </h1>
            <h1 className='lg:text-5xl text-lg  text-slate-300 font-bold font-signika'>
              01
            </h1>
          </div>
          <div className='flex flex-col w-[40%] ms-5 lg:ms-48' data-aos="fade-up">
            <p className='mb-6'>It is a long established fact that a the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
            <div className='flex '>
            <button type="button" className="text-white lg:w-32 w-28 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 lg:me-6 me-3 dark:focus:ring-green-800 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center  mb-2">Creative</button>
            <button type="button" className="text-white lg:w-36 w-28 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center me-2 mb-2">Accessibility</button>
            </div>
          </div>
          < FaArrowRightLong className=' cursor-pointer ms-6 lg:ms-10 text-3xl lg:text-7xl -rotate-45 hover:rotate-0 transition-all duration-500 hover:text-cyan-400' />

        </div>
        <hr className='bg-gradient-to-br from-green-400 to-blue-600 w-full lg:w-[80%] lg:mx-36  h-[2px] mb-16'></hr>
        <div className='flex lg:ps-24 mb-16 overflow-hidden' data-aos="fade-down">
           <FaBullhorn className='text-7xl text-cyan-400 lg:me-10 hidden lg:block' />
          <div className='flex flex-col ms-6'>
            <h1 className='lg:text-4xl text-lg md:text-xl font-bold mb-6 font-signika'>
              Web Development
            </h1>
            <h1 className='lg:text-5xl text-lg md:text-xl  text-slate-300 font-bold font-signika'>
              02
            </h1>
          </div>
          <div className='flex flex-col w-[40%] ms-2 lg:ms-44 md:ms-10' data-aos="fade-down">
            <p className='mb-6'>It is a long established fact that a the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
            <div className='flex '>
            <button type="button" className="text-white lg:w-32 w-28 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 lg:me-6 me-3 dark:focus:ring-green-800 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center  mb-2">Creative</button>
            <button type="button" className="text-white lg:w-36 w-28 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 lg:me-6 me-3 dark:focus:ring-green-800 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center  mb-2">Accessibility</button>
            </div>
          </div>
          < FaArrowRightLong className=' cursor-pointer ms-6 lg:ms-10 text-3xl lg:text-7xl -rotate-45 hover:rotate-0 transition-all duration-500 hover:text-cyan-400' />

        </div>
        <hr className='bg-gradient-to-br from-green-400 to-blue-600 w-full lg:w-[80%] lg:mx-36  h-[2px] mb-16'></hr>
        <div className='flex lg:ps-24 mb-16' data-aos="fade-up">
           <FaBullhorn className='text-7xl text-cyan-400 lg:me-10 hidden lg:block' />
          <div className='flex flex-col'>
            <h1 className='lg:text-4xl text-lg font-bold mb-6 font-signika'>
              Branding & SEO
            </h1>
            <h1 className='lg:text-5xl text-lg  text-slate-300 font-bold font-signika'>
              03
            </h1>
          </div>
          <div className='flex flex-col w-[40%] ms-5 lg:ms-56'>
            <p className='mb-6'>It is a long established fact that a the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
            <div className='flex '>
            <button type="button" className="text-white lg:w-32 w-28 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 lg:me-6 me-3 dark:focus:ring-green-800 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center  mb-2">Creative</button>
            <button type="button" className="text-white lg:w-36 w-28 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 lg:me-6 me-3 dark:focus:ring-green-800 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center  mb-2">Accessibility</button>
            </div>
          </div>
          < FaArrowRightLong className=' cursor-pointer ms-6 lg:ms-10 text-3xl lg:text-7xl -rotate-45 hover:rotate-0 transition-all duration-500 hover:text-cyan-400' />

        </div>
        <hr className='bg-gradient-to-br from-green-400 to-blue-600 w-full lg:w-[80%] lg:mx-36  h-[2px] mb-16'></hr>
        <div className='flex lg:ps-24 mb-16'  data-aos="fade-down">
           <FaBullhorn className='text-7xl text-cyan-400 lg:me-10 hidden lg:block' />
          <div className='flex flex-col'>
            <h1 className='lg:text-4xl text-lg font-bold mb-6 font-signika'>
              UI/UX Design
            </h1>
            <h1 className='lg:text-5xl text-lg  text-slate-300 font-bold font-signika'>
              04
            </h1>
          </div>
          <div className='flex flex-col w-[40%] ms-5 lg:ms-64'>
            <p className='mb-6'>It is a long established fact that a the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
            <div className='flex '>
            <button type="button" className="text-white lg:w-32 w-28 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 lg:me-6 me-3 dark:focus:ring-green-800 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center  mb-2">Creative</button>
            <button type="button" className="text-white lg:w-36 w-28 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 lg:me-6 me-3 dark:focus:ring-green-800 font-medium rounded-lg text-sm lg:text-lg px-5 py-2.5 text-center  mb-2">Accessibility</button>
            </div>
          </div>
          < FaArrowRightLong className=' cursor-pointer ms-6 lg:ms-10 text-3xl lg:text-7xl -rotate-45 hover:rotate-0 transition-all duration-500 hover:text-cyan-400' />

        </div>
        <hr className='bg-gradient-to-br from-green-400 to-blue-600 w-full lg:w-[80%] lg:mx-36  h-[2px] mb-16'></hr>

      </div>
    </div>
    <div className='flex flex-col py-16   justify-center items-center bg-gradient-to-br from-green-400 to-blue-600 w-full  '>
      <h3 className='lg:text-3xl text-sm font-semibold text-white mb-10 font-dancing' data-aos="fade-down"> More than 200+ Companies Trusted Us Worldwide</h3>
      <h1 className= ' text-xl lg:text-5xl font-bold text-white mb-5 lg:ms-24 font-signika' data-aos="fade-up">
      Innovated On - Side Search Engine Experts 
      </h1>
      <h1 className='lg:text-5xl text-xl font-bold text-white mb-8 lg:mb-14 lg:ms-24 font-signika' data-aos="fade-up">
      Social Marketing Since 2023
      </h1>
      <button type="button" className="py-2.5 px-5 me-2 mb-2 lg:text-xl text-sm font-medium text-gray-900 focus:outline-none bg-gray-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" data-aos="fade-up">Read More</button>

    </div>
    <div className='flex flex-col justify-center items-center py-20 overflow-hidden'>
      <h3 className='text-xl mb-4 lg:text-4xl text-white font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-extrabold' data-aos="fade-down">Pricing Plan</h3>
      <h1 className='lg:text-6xl text-3xl font-bold lg:mb-3 mb-10  ms-5 lg:ms-0 font-signika'>A collection of leads and <strong className='font-bold ms-20 block lg:hidden font-signika' data-aos="fade-down">sales tools</strong></h1>
      <h1 className=' mb-20 hidden lg:block'><strong className='lg:text-5xl text-3xl  bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-bold' data-aos="fade-up">sales tools </strong></h1>
      <div className='flex lg:flex-row flex-col w-full  lg:ps-20'>
        <div className=' w-[90%] lg:w-[26.5%] border border-cyan-700 ms-5 mb-5 lg:mb-0 lg:ms-10 flex flex-col justify-center items-center py-6 rounded-lg'>
          <div className='w-[90%] shadow-xl ' data-aos="fade-right">
            <div className='flex justify-center items-center bg-gradient-to-r from-blue-600 to-green-400 py-3 rounded-xl rounded-br-none'>
            <IoPricetags className='text-6xl w-[30%] text-slate-400' />
            <div className='flex flex-col w-[70%] py-5'>
            <h2 className='font-bold text-3xl mb-4 text-white font-cabin'>Basic Plan</h2>
            <h1 className='font-bold text-5xl text-white font-cabin'>$60</h1>
            </div>
                
            </div>
            <ul className='mx-8 my-6'>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Great Customer Support</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Market Growth Solution</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Mobile Phone Optimized</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Free custom domain</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Annual Purchase</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Hosting Day
</div></li>
            </ul>
            <button type="button" className="py-2.5 ms-6  px-5 me-2 mb-5 mt-3 lg:text-xl text-sm font-medium text-gray-900 focus:outline-none bg-gray-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button>



          </div>
        </div>
        <div className=' w-[90%] lg:w-[26.5%] border border-cyan-700 ms-5 mb-5 lg:mb-0 lg:ms-10 flex flex-col justify-center items-center py-6 rounded-lg' data-aos="fade-left">
          <div className='w-[90%] shadow-xl '>
            <div className='flex justify-center items-center bg-gradient-to-r from-blue-600 to-green-400 py-3 rounded-xl rounded-br-none'>
            <IoPricetags className='text-6xl w-[30%] text-slate-400' />
            <div className='flex flex-col w-[70%] py-5'>
            <h2 className='font-bold text-3xl mb-4 text-white font-cabin'>Premium Plan</h2>
            <h1 className='font-bold text-5xl text-white font-cabin'>$660</h1>
            </div>
                
            </div>
            <ul className='mx-8 my-6'>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Great Customer Support</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Market Growth Solution</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Mobile Phone Optimized</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Free custom domain</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Annual Purchase</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4 '/> Hosting Day
</div></li>
            </ul>
            <button type="button" className="py-2.5 ms-6  px-5 me-2 mb-5 mt-3 lg:text-xl text-sm font-medium text-gray-900 focus:outline-none bg-gray-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button>



          </div>
        </div>
        <div className=' w-[90%] lg:w-[26.5%] border border-cyan-700 ms-5 mb-5 lg:mb-0 lg:ms-10 flex flex-col justify-center items-center py-6 rounded-lg' data-aos="fade-left">
          <div className='w-[90%] shadow-xl '>
            <div className='flex justify-center items-center bg-gradient-to-r from-blue-600 to-green-400 py-3 rounded-xl rounded-br-none'>
            <IoPricetags className='text-6xl w-[30%] text-slate-400' />
            <div className='flex flex-col w-[70%] py-5'>
            <h2 className='font-bold text-3xl mb-4 text-white font-cabin'>Standard Plan</h2>
            <h1 className='font-bold text-5xl text-white font-cabin'>$360</h1>
            </div>
                
            </div>
            <ul className='mx-8 my-6'>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Great Customer Support</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Market Growth Solution</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Mobile Phone Optimized</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Free custom domain</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Annual Purchase</div></li>
              <li className='my-6'><div className='flex  justify-start items-center font-signika'><GoArrowRight className=' me-4'/> Hosting Day
</div></li>
            </ul>
            <button type="button" className="py-2.5 ms-6  px-5 me-2 mb-5 mt-3 lg:text-xl text-sm font-medium text-gray-900 focus:outline-none bg-gray-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button>



          </div>
        </div>

      </div>

    </div>
    <div className='lg:flex lg:flex-row flex-col py-20 '>
      <div className='lg:w-[50%] w-full lg:ms-20 -ms-10 '>
      <div className='ms-20 mb-10'>
        <h1 className='text-5xl font-bold mb-5 font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block' data-aos="fade-down">Testimonials</h1>
        <h1 className='lg:text-5xl text-3xl font-bold font-signika' data-aos="fade-down">What Our Customer<br/> <strong className='lg:text-5xl text-3xl  bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-bold' data-aos="fade-up">says about us</strong></h1>
      </div>
      <div className=' lg:ms-24 ms-3 '>
        <div className='border lg:w-[60%] pt-8 pb-5 rounded-full px-8  border-cyan-600 ms-10 lg:ms-0 '>
          <div className='w-[100%] mb-3   rounded-full overflow-hidden' data-aos="fade-up">
            <img src='work7.png' className='lg:w-[500px] w-[600px] rounded-full'></img>


          </div>
         

        </div>
        <img src='shape-43.svg ' className=' relative top-[-240px] left-72 lg:block hidden'></img>

      </div>
      </div>
      <div className='lg:w-[50%] w-full py-24 ' data-aos="fade-down">
      <Slider {...settings} ref={sliderRef}>
        {data.map((d) => (
        <div className='flex flex-col ms-5 lg:ms-0' key={d.name}>
        <div className='flex'>
      <div className='border lg:w-[10%] w-[30%] pt-3 pb-1 rounded-full px-3  border-cyan-600 me-5'>
          <div className='w-[100%] mb-2  rounded-full overflow-hidden'>
            <img src={d.img} className='w-[200px] rounded-full'></img>


          </div>
          </div>
          <div className='flex flex-col '>
            <h2 className='font-bold text-xl mt-3'>{d.name}</h2>
            <h2 className='font-semibold text-xl'>{d.title}</h2>

          </div>
          </div>
          <div className='flex mt-6'>
            <h1 className='font-bold text-xl me-6'>{d.name}r</h1>
            <div className='shadow-md flex rounded-lg p-2'> <FaStar className='me-2 text-yellow-300'/>  <FaStar className='me-2 text-yellow-300'/>  <FaStar className='me-2 text-yellow-300'/>  <FaStar className='me-2 text-yellow-300'/>  <FaStar className='me-2 text-yellow-300'/></div>

          </div>
          <p className='text-slate-400 text-xl font-semibold mt-6 w-[80%]'>
           {d.Desc} </p>
                                   
          </div>
        ))}
        </Slider>


         

        

      </div>
    </div>
    <div className='lg:flex bg-slate-100  lg:flex-col w-screen     lg:ms-0  py-10  '>
      <h3 className='font-semibold text-5xl mb-5 ms-4 lg:ms-20 font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block' data-aos="fade-down">Portfolio</h3>
      <h1 className='font-bold lg:text-7xl text-3xl mb-6 ms-4 lg:ms-20 font-signika' data-aos="fade-up">Featured <strong className='lg:text-7xl text-3xl  bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-bold'>Projects </strong></h1>
      <p className='lg:text-lg text-sm  text-slate-400 lg:w-[50%] w mb-14 ms-4 lg:ms-20' data-aos="fade-down">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,</p> 
      <div className=' w-full ms-2 lg:ms-20' data-aos="zoom-in">
      <Slider {...settings1}>
      {data2.map((d2) => (
        <div className='flex  flex-col ' key={d2.img}>
          <div className="image-container ">
          <img src={d2.img} className='w-[500px] rounded-lg rounded-bl-none' alt=''></img>
          <div className="hover-text">
            <h1 className='font-extrabold text-white font-signika '>Business Consulting</h1>
            <h1 className='font-extrabold text-white font-signika'>On How To Grow Your Platform</h1>
            </div>
          </div>
        </div>
      ))}
      </Slider>

      </div>

    </div>
    <div>
      <h1>

      </h1>
    </div>
    <div className=' lg:w-full w-[95%] py-32 '>
      <div className='flex flex-col items-center justify-center'>
       <h1 className='font-bold text-5xl text-center mb-6 font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block' data-aos="fade-down">News And Blogs</h1>
       <h1 className='font-bold text-5xl text-center mb-20 font-signika' data-aos="fade-up">News And <strong className='lg:text-5xl text-3xl  bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-bold'>Articals </strong></h1>
       <div className='flex lg:flex-row flex-col lg:px-20 ' data-aos="zoom-out">
       {data3.map((data3) => (
        <div className='flex mb-6 lg:mb-0 ms-1 lg:ms-0 flex-col px-5 justify-start items-start  border border-cyan-500 lg:me-6 rounded-xl cursor-pointer font-signika' key={data3.title}>
          <div className='px-4 rounded-lg relative -rotate-90 top-52 text-white font-bold left-[-20px]  py-2 bg-gradient-to-b from-blue-600 to-green-400'>{data3.date}</div>
          <img src={data3.img} className='w-[100%] h-[40%] rounded-t-xl mb-4 shadow-md'></img>
          
          <div className='flex mb-4 justify-start items-center'> <CgProfile className='me-1' /><h3 className='me-6'>Admin</h3> <FaRegComments className='me-1'/><h3>Comments</h3> </div>
          <h1 className='font-bold text-3xl mb-4'>{data3.title}</h1>
          <p className='text-sm mb-6 pe-10'>{data3.desc}</p>
          <button type="button" className="py-2.5   px-5 me-2 mb-5 mt-3 lg:text-xl text-sm font-medium text-gray-900 focus:outline-none bg-gray-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button>


        </div>
       ))}


       </div>

      </div>

    </div>
    <div id='quote'>
    <Quote/>
    </div>
    <div className='w-screen lg:px-20 py-10 overflow-x-hidden'>
      <img src='footer-shape.svg' className='w-[94%] h-[70%] object-cover bg-cover  mt-[-90px] absolute overflow-x-hidden' alt=''></img>
      <div className='flex lg:flex-row flex-col px-10 mt-20 relative' data-aos="fade-right">
          <div className='flex-col lg:w-[30%] w-full mb-6 lg:mb-0'>
            <img src='dark-logo.png' className="lg:h-14  mb-6 " alt=" "></img>
            <p className='text-sm mb-8 lg:pe-20'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
            <div className='flex '>
          <div className='rounded-full mx-1  lg:mx-2 lg:p-2 p-1 bg-gray-600 hover:bg-green-400 text-white cursor-pointer'><Link className='cursor-pointer' to='/'><FaInstagram className='cursor-pointer' /></Link></div>
          <div className='rounded-full mx-1 lg:mx-2 lg:p-2 p-1 bg-gray-600 hover:bg-green-400 text-white cursor-pointer'><Link to='/'><FaTwitter /></Link></div>
          <div className='rounded-full mx-1 lg:mx-2 lg:p-2 p-1 bg-gray-600 hover:bg-green-400 text-white cursor-pointer'><Link to='/'><IoLogoWhatsapp /></Link></div>
          <div className='rounded-full mx-1 lg:mx-2 lg:p-2 p-1 bg-gray-600 hover:bg-green-400 text-white cursor-pointer'><Link to='/'><FaFacebookF /></Link></div>
           </div>

          </div>
          <div className='flex flex-col lg:w-[15%] w-full mx-4 mb-8 lg:mb-0' data-aos="fade-right">
            <h2 className='font-bold text-xl mb-8 font-signika'>Department</h2>
            <ul>
              <li className='text-lg font-semibold mb-4 font-signika'>Family Medicine</li>
              <li className='text-lg font-semibold mb-4 font-signika'>Radiology</li>
              <li className='text-lg font-semibold mb-4 font-signika'>Women’s Health</li>
              <li className='text-lg font-semibold mb-4 font-signika'>Optician</li>
              <li className='text-lg font-semibold mb-4 font-signika'>Pediatrics</li>
            </ul>

          </div>
          <div className='flex flex-col lg:w-[15%] w-full mx-4 mb-8 lg:mb-0' data-aos="fade-right">
            <h2 className='font-bold text-xl mb-8 font-signika'>Quick Links</h2>
            <ul>
              <li className='text-lg font-semibold mb-4 font-signika'>Department</li>
              <li className='text-lg font-semibold mb-4 font-signika'>Our Doctors</li>
              <li className='text-lg font-semibold mb-4 font-signika'>News</li>
              <li className='text-lg font-semibold mb-4 font-signika'>Shops</li>
              <li className='text-lg font-semibold mb-4 font-signika'>Appointment</li>
            </ul>

          </div>
          <div className='flex flex-col lg:w-[10%] w-full ms-4 me-20 mb-8 lg:mb-0' data-aos="fade-left">
            <h2 className='font-bold mb-8 text-xl font-signika'>Support</h2>
            <ul>
              <li className='text-lg font-semibold mb-4 font-signika'>About Us</li>
              <li className='text-lg font-semibold mb-4 font-signika'>Services</li>
              <li className='text-lg font-semibold mb-4 font-signika'>Contact Us</li>
              <li className='text-lg font-semibold mb-4 font-signika'>Pricing</li>
              <li className='text-lg font-semibold mb-4 font-signika'>Our Team</li>
            </ul>

          </div>
          <div className='flex flex-col lg:w-[30%] w-full' data-aos="fade-left">
            <h2 className='font-bold text-xl mb-8 font-signika' >Contact</h2>
              <div className='text-sm font-semibold flex mb-4 font-signika'><div className='rounded-full px-3 py-3 me-4 border-cyan-400 border text-cyan-300'><CiMail/></div><h1 className='text-lg'>Info@gmail.com</h1></div>
              <div className='text-sm font-semibold flex mb-4 font-signika'><div className='rounded-full px-3 py-3 me-4 border-cyan-400 border text-cyan-300'><FaGlobe/></div><h1 className='text-lg'>www.Website.com</h1></div>
              <div className='text-sm font-semibold flex mb-4 font-signika'><div className='rounded-full px-3 py-3 me-4 border-cyan-400 border text-cyan-300'><FaLocationDot/></div><h1 className='text-lg'>14 London Street</h1></div>
              <div className='text-sm font-semibold flex mb-4 font-signika'><div className='rounded-full px-3 py-3 me-4 border-cyan-400 border text-cyan-300'><BsFillTelephoneFill/></div><h1 className='text-lg'>+ 000 123 456 789</h1></div>
          

          </div>
      </div>

    </div>
    </div>
    
      
    </>
  )
}

export default Home
