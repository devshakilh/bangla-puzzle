// import React from 'react';
// // Import Swiper React components

// import './Home.css'
// // Import Swiper styles
// import { Swiper, SwiperSlide, } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { FreeMode, Pagination, Navigation } from "swiper";



// const MediaCovargeMobile = () => {
//     return (
//         <div className='bg-[#0080d7] lg:px-16 block md:hidden'>

//             <div className="lg:w-11/12 mx-auto py-10">
//                 <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="200" className="xl:pr-20 ">
//                     <p className="text-3xl pb-24 text-white font-bold tracking-[.4em] uppercase">
//                         MEDIA COVERAGEs
//                     </p>
//                 </div>
//                 <>
//                     <Swiper

//                         slidesPerView={"auto"}

//                         centeredSlides={true}
//                         spaceBetween={10}
//                         pagination={{
//                             clickable: true,
//                         }}
//                         modules={[Pagination]}
//                         className="mySwiper"

//                     >

//                         <div className='lg:w-8/12   pb-8 '>
//                             <SwiperSlide>
//                                 <div className="card rounded-md mx-2 p-2 " style={{ height: '466px' }} >
//                                     <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676724393.jpg" alt="..." />
//                                     </div>
//                                     <div className="card-body">
//                                         <div className="mt-4 text-gray-400">Jan 15, 2023</div>
//                                         <a href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." className="card-title py-1" tabindex="-1">Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement to enable the services of mobile Banking.</a>
//                                         <p className="card-text">Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018, Bangladesh Shishu Academy will accept the admission fee for various types... </p>

//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="rounded-md card mx-2 p-2 " style={{ height: '466px' }}  >
//                                     <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1675928329.webp" className="card-img-top" alt="..." /></div>
//                                     <div className="card-body">
//                                         <div className="mt-4 text-gray-400">Jan 15, 2023</div>
//                                         <a href="https://anjirliton.com/news-details/5/Shishu%20Academy%20new%20Director%20General%20Anjir%20Liton" className="card-title py-1" >Shishu Academy new Director General Anjir Liton</a>
//                                         <p className="card-text">Children's author and rhymester Anjir Liton has been appointed the new director general of Bangladesh Shishu Academy for the next three years.&nbsp;The Ministry of Public Administration issued a notification in this ....</p>

//                                     </div>
//                                 </div></SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="card mx-2 p-2 slick-slide" style={{ height: '466px' }} >
//                                     <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722156.jpg" className="card-img-top" alt="..." /></div>
//                                     <div className="card-body">
//                                         <div className="mt-4 text-gray-400">Jan 15, 2023</div>
//                                         <a href="https://anjirliton.com/news-details/4/10%20get%20Bangla%20Academy%20Literary%20Award%202020" className="card-title py-1" >10 get Bangla Academy Literary Award 2020</a>
//                                         <p className="card-text">Ten poets and writers have been adorned with the Bangla Academy Literary Award 2020.&nbsp;Bangla Academy Director General Habibullah Siraji came up with the declaration at a press conference at Shaheed Munir  4... </p>

//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="card mx-2 p-2 slick-slide" style={{ height: '466px' }} >
//                                     <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722175.jpg" className="card-img-top" alt="..." /></div>
//                                     <div className="card-body">
//                                         <div className="mt-4 text-gray-400">Jan 15, 2023</div>
//                                         <a href="https://anjirliton.com/news-details/3/Anjir%20Liton%20received%20Shishu%20Sahitya%20Award" className="card-title py-1" >Anjir Liton received Shishu Sahitya Award</a>
//                                         <p className="card-text">Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held at the premises of the Bangladesh Shishu  se... </p>

//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>

//                                 <div className="card mx-2 p-2 slick-slide" style={{ height: '466px' }} >
//                                     <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676724393.jpg" className="card-img-top" alt="..." /></div>
//                                     <div className="card-body">
//                                         <div className="mt-4 text-gray-400">Jan 15, 2023</div>
//                                         <a href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." className="card-title py-1" tabindex="-1">Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement to enable the services of mobile Banking.</a>
//                                         <p className="card-text">Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018, Bangladesh Shishu Academy will accept the admission fee for various typesl... </p>

//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="card mx-2 p-2 slick-slide slick-cloned" style={{ height: '466px' }} >
//                                     <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1675928329.webp" className="card-img-top" alt="..." /></div>
//                                     <div className="card-body">
//                                         <div className="mt-4 text-gray-400">Jan 15, 2023</div>
//                                         <a href="https://anjirliton.com/news-details/5/Shishu%20Academy%20new%20Director%20General%20Anjir%20Liton" className="card-title py-1" >Shishu Academy new Director General Anjir Liton</a>
//                                         <p className="card-text">Children's author and rhymester Anjir Liton has been appointed the new director general of Bangladesh Shishu Academy for the next three years.&nbsp;The Ministry of Public Administration issued a notification in this regard on Tuesday. on ... </p>

//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="card mx-2 p-2 slick-slide slick-cloned" style={{ height: '466px' }} data-slick-index="5" aria-hidden="true" >
//                                     <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722156.jpg" className="card-img-top" alt="..." /></div>
//                                     <div className="card-body">
//                                         <div className="mt-4 text-gray-400">Jan 15, 2023</div>
//                                         <a href="https://anjirliton.com/news-details/4/10%20get%20Bangla%20Academy%20Literary%20Award%202020" className="card-title py-1" >10 get Bangla Academy Literary Award 2020</a>
//                                         <p className="card-text">Ten poets and writers have been adorned with the Bangla Academy Literary Award 2020.&nbsp;Bangla Academy Director General Habibullah Siraji came up with the declaration at a press conference at  4... </p>

//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="card mx-2 p-2 " style={{ height: '466px' }} data-slick-index="6" aria-hidden="true" tabindex="-1">
//                                     <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722175.jpg" alt="..." /></div>
//                                     <div className="card-body">
//                                         <div className="mt-4 text-gray-400">Jan 15, 2023</div>
//                                         <a href="https://anjirliton.com/news-details/3/Anjir%20Liton%20received%20Shishu%20Sahitya%20Award" >Anjir Liton received Shishu Sahitya Award</a>
//                                         <p className="card-text">Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held ....</p>

//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                             <SwiperSlide>
//                                 <div className="card mx-2 px-2 mb-12 py-1" style={{ height: '466px' }}>
//                                     <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676724393.jpg" className="" alt="..." /></div>
//                                     <div className="card-body">
//                                         <div className="mt-4 text-gray-400">Jan 15, 2023</div>
//                                         <a href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." className="card-title py-1" >Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement to enable the services of mobile Banking.</a>
//                                         <p className="card-text">Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018,  </p>

//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         </div>

//                     </Swiper>
//                 </>
//             </div>


//         </div>
//     );
// };

// export default MediaCovargeMobile;


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './Home.css'

// import required modules
import { Pagination, Mousewheel, Keyboard } from "swiper";

export default function MediaConvargeMobile() {
    return (
        <div className='bg-[#0080d7] px-8 block md:hidden'>

            <div className="lg:w-11/12 mx-auto py-10">
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="200" className="xl:pr-20 ">
                    <p className="text-3xl pb-24 text-white font-bold tracking-[.4em] uppercase">
                        MEDIA COVERAGEs
                    </p>
                </div>
                <>
                    <Swiper
                        cssMode={true}

                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <div className='lg:w-8/12   pb-8 '>
                            <SwiperSlide>
                                <div className="card rounded-md mx-2 p-2 " style={{ height: '466px' }} >
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676724393.jpg" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." className="card-title py-1" tabindex="-1">Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement to enable the services of mobile Banking.</a>
                                        <p className="card-text">Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018, Bangladesh Shishu Academy will accept the admission fee for various types... </p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rounded-md card mx-2 p-2 " style={{ height: '466px' }}  >
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1675928329.webp" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/5/Shishu%20Academy%20new%20Director%20General%20Anjir%20Liton" className="card-title py-1" >Shishu Academy new Director General Anjir Liton</a>
                                        <p className="card-text">Children's author and rhymester Anjir Liton has been appointed the new director general of Bangladesh Shishu Academy for the next three years.&nbsp;The Ministry of Public Administration issued a notification in this ....</p>

                                    </div>
                                </div></SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 p-2 slick-slide" style={{ height: '466px' }} >
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722156.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/4/10%20get%20Bangla%20Academy%20Literary%20Award%202020" className="card-title py-1" >10 get Bangla Academy Literary Award 2020</a>
                                        <p className="card-text">Ten poets and writers have been adorned with the Bangla Academy Literary Award 2020.&nbsp;Bangla Academy Director General Habibullah Siraji came up with the declaration at a press conference at Shaheed Munir  4... </p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 p-2 slick-slide" style={{ height: '466px' }} >
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722175.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/3/Anjir%20Liton%20received%20Shishu%20Sahitya%20Award" className="card-title py-1" >Anjir Liton received Shishu Sahitya Award</a>
                                        <p className="card-text">Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held at the premises of the Bangladesh Shishu  se... </p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>

                                <div className="card mx-2 p-2 slick-slide" style={{ height: '466px' }} >
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676724393.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." className="card-title py-1" tabindex="-1">Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement to enable the services of mobile Banking.</a>
                                        <p className="card-text">Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018, Bangladesh Shishu Academy will accept the admission fee for various typesl... </p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 p-2 slick-slide slick-cloned" style={{ height: '466px' }} >
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1675928329.webp" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/5/Shishu%20Academy%20new%20Director%20General%20Anjir%20Liton" className="card-title py-1" >Shishu Academy new Director General Anjir Liton</a>
                                        <p className="card-text">Children's author and rhymester Anjir Liton has been appointed the new director general of Bangladesh Shishu Academy for the next three years.&nbsp;The Ministry of Public Administration issued a notification in this regard on Tuesday. on ... </p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 p-2 slick-slide slick-cloned" style={{ height: '466px' }} data-slick-index="5" aria-hidden="true" >
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722156.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/4/10%20get%20Bangla%20Academy%20Literary%20Award%202020" className="card-title py-1" >10 get Bangla Academy Literary Award 2020</a>
                                        <p className="card-text">Ten poets and writers have been adorned with the Bangla Academy Literary Award 2020.&nbsp;Bangla Academy Director General Habibullah Siraji came up with the declaration at a press conference at  4... </p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 p-2 " style={{ height: '466px' }} data-slick-index="6" aria-hidden="true" tabindex="-1">
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722175.jpg" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/3/Anjir%20Liton%20received%20Shishu%20Sahitya%20Award" >Anjir Liton received Shishu Sahitya Award</a>
                                        <p className="card-text">Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held ....</p>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 px-2 mb-12 py-1" style={{ height: '466px' }}>
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676724393.jpg" className="" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." className="card-title py-1" >Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement to enable the services of mobile Banking.</a>
                                        <p className="card-text">Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018,  </p>

                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>

                    </Swiper>
                </>
            </div>


        </div>
    );
}
