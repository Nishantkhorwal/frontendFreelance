import React, { useEffect, useState,useRef } from 'react'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Quote from '../components/Quote';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
function About() {
    const sliderRef = useRef(null);
    const [activeDotIndex, setActiveDotIndex] = useState(0);
    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    useEffect(() => {
        initFlowbite();
    })
    const [fix, setFix] = useState(false)
    function setFixed() {
        if (window.scrollY >= 150) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
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
        <div style={{ position: 'absolute', bottom: '-70px', left: '-50px', width: '100%' }}>
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
    return (
        <>
            <div className='w-full overflow-x-hidden'>
                <Header heading={'About Us'} />
                <div className='flex flex-col w-full lg:flex-row py-20   lg:ps-24'>
                    <div className='lg:w-[45%] w-[90%] me-8 mb-10 md:mb-10 lg:mb-0 lg:flex lg:flex-col  hidden' >
                        <div className='w-full flex '>
                            <div className=' lg:w-[40%]'>
                                <div className='border lg:w-[80%] pt-8 pb-5 relative  left-20 rounded-full px-8  border-cyan-600  lg:ms-0 '>
                                    <div className='w-[100%] mb-3   rounded-full overflow-hidden' data-aos="fade-up">
                                        <img src='about-2.png' className='lg:w-[300px] w-[300px] rounded-full'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-[60%]'>
                                <div className='border lg:w-[80%] pt-8 pb-5 rounded-full px-8 lg:mt-32  border-cyan-600 ms-10 lg:ms-0 self-end '>
                                    <div className='w-[100%] mb-3   rounded-full overflow-hidden' data-aos="fade-up">
                                        <img src='about-1.png' className='lg:w-[400px] w-[500px] rounded-full'></img>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='w-full flex '>
                            <div className=' lg:w-[40%] -mt-20 relative -top-10 left-10'>
                                <div className='border lg:w-[80%] pt-8 pb-5  rounded-full px-8  border-cyan-600 ms-10 lg:ms-0 '>
                                    <div className='w-[100%] mb-3   rounded-full overflow-hidden' data-aos="fade-up">
                                        <img src='about-4.png' className='lg:w-[300px] w-[300px] rounded-full'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-[60%] relative left-36'>
                                <div className='border lg:w-[50%] pt-8 pb-5 rounded-full px-8  border-cyan-600 ms-10 lg:ms-0 self-end '>
                                    <div className='w-[100%] mb-3   rounded-full overflow-hidden' data-aos="fade-up">
                                        <img src='about-3.png' className='lg:w-[400px] w-[500px] rounded-full'></img>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='py-6 px-8 w-[100%] lg:w-[50%] bg-slate-100 shadow-md'>
                        <h3 className='md:text-3xl text-lg font-signika text-blue-700 mb-6 font-bold text-center'>About Us</h3>
                        <h1 className='text-center lg:text-6xl text-xl font-bold font-signika mb-10 md:text-3xl '>Make Your Business More Unique</h1>
                        <p className='text-start ms-5 text-sm  md:text-lg font-cabin'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br />
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,by injected humour, or randomised words which don't look even slightly believable.
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>

                </div>
                <div className='lg:flex lg:flex-row flex-col pt-10  bg-slate-50'>
                    <div className='lg:w-[50%] w-full lg:ms-20 -ms-10 '>
                        <div className='ms-20 mb-10'>
                            <h1 className='text-5xl font-bold mb-5 font-dancing bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block' data-aos="fade-down">Testimonials</h1>
                            <h1 className='lg:text-5xl text-3xl font-bold font-signika' data-aos="fade-down">What Our Customer<br /> <strong className='lg:text-5xl text-3xl  bg-gradient-to-l  from-blue-700 to-green-400 text-transparent bg-clip-text inline-block font-bold' data-aos="fade-up">says about us</strong></h1>
                        </div>
                        <div className=' lg:ms-24 ms-3 '>
                            <div className='border lg:w-[60%] w-[80%] pt-8 pb-5 rounded-full px-8  border-cyan-600 ms-10 lg:ms-0 '>
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
                                        <div className='shadow-md flex rounded-lg p-2'> <FaStar className='me-2 text-yellow-300' />  <FaStar className='me-2 text-yellow-300' />  <FaStar className='me-2 text-yellow-300' />  <FaStar className='me-2 text-yellow-300' />  <FaStar className='me-2 text-yellow-300' /></div>

                                    </div>
                                    <p className='text-slate-400 text-xl font-semibold mt-6 w-[80%]'>
                                        {d.Desc} </p>

                                </div>
                            ))}
                        </Slider>






                    </div>
                </div>
                <Quote />
            </div>
        </>
    )
}

export default About
