
import './Home.css'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, } from "swiper";
import Constituen from './Constituen';
import TheIdlogy from './TheIdlogy';
import Che from './Che';
import Video from './Video';
import Contact from './Contact';
import MediaCovarge from './MediaCovarge';


const Home = () => {
    return (
        <div>

            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay,]}
                    className="mySwiper"
                >
                    <SwiperSlide className='absolute inset-0 h-auto z-10 w-full  object-fit-cover'> <div >
                        <img src="https://anjirliton.com/uploads/banner/1676722944.jpg" style={{ minHeight: '500px' }} className='h-full w-full object-coer' alt="" />
                        <div className='readMore  w-1/2 p-4 text-white absolute hidden lg:flex  -mt-96 ml-8'>
                            <a href='#' className='text-2xl  font-semibold text-white px-5 hover:underline'>DG Sir visit Tungi Para</a>

                            <button className='text-white py-2 px-6 mt-8 relative bg-[#115c8f]'>Read More</button>
                        </div>

                    </div>
                    </SwiperSlide>
                    <SwiperSlide className='absolute inset-0 h-auto z-10 w-full  object-fit-cover'> <div >
                        <img src="https://anjirliton.com/uploads/banner/1676722944.jpg" style={{ minHeight: '500px' }} className='h-full w-full object-coer' alt="" />
                        <div className='readMore  w-1/2 p-4 text-white absolute hidden lg:flex  -mt-96 ml-8'>
                            <a href='#' className='text-2xl  font-semibold text-white px-5 hover:underline'>DG Sir visit Tungi Para</a>

                            <button className='text-white py-2 px-6 mt-8 relative bg-[#115c8f]'>Read More</button>
                        </div>

                    </div>
                    </SwiperSlide>
                    <SwiperSlide className='absolute inset-0 h-auto z-10 w-full  object-fit-cover'> <div >
                        <img src="https://anjirliton.com/uploads/banner/1676722944.jpg" style={{ minHeight: '500px' }} className='h-full w-full object-coer' alt="" />
                        <div className='readMore  w-1/2 p-4 text-white absolute hidden lg:flex  -mt-96 ml-8'>
                            <a href='#' className='text-2xl  font-semibold text-white px-5 hover:underline'>DG Sir visit Tungi Para</a>

                            <button className='text-white py-2 px-6 mt-8 relative bg-[#115c8f]'>Read More</button>
                        </div>

                    </div>
                    </SwiperSlide>


                </Swiper>
            </>
            <Constituen />
            <TheIdlogy />
            <Che />
            <Video />


        </div>
    );
};

export default Home;