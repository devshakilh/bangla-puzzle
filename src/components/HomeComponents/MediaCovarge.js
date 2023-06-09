import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Home.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";



const MediaCovarge = () => {
    return (
        <div className='bg-[#0080d7] lg:px-16'>
            <div className="lg:w-11/12 mx-auto py-10">
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="200" className="xl:pr-20 ">
                    <p className="text-3xl pb-24 text-white font-bold tracking-[.4em] uppercase">
                        MEDIA COVERAGEs
                    </p>
                </div>
                <>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper px-16 mb-12"
                    >

                        <div className='lg:w-8/12  hidden md:inline pb-8 '>
                            <SwiperSlide>
                                <div className="card rounded-md mx-2 p-2 slick-slide slick-cloned" style={{ height: '466px' }} data-slick-index="-1" aria-hidden="true" tabindex="-1">
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676724393.jpg" className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." className="card-title py-1" tabindex="-1">Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement to enable the services of mobile Banking.</a>
                                        <p className="card-text">Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018, Bangladesh Shishu Academy will accept the admission fee for various types of cultural training through Rupal... </p>
                                        <span><a className="underline" href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." tabindex="-1">Learn more</a></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rounded-md card mx-2 p-2 slick-slide slick-current slick-active" style={{ height: '466px' }} data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1675928329.webp" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/5/Shishu%20Academy%20new%20Director%20General%20Anjir%20Liton" className="card-title py-1" tabindex="0">Shishu Academy new Director General Anjir Liton</a>
                                        <p className="card-text">Children's author and rhymester Anjir Liton has been appointed the new director general of Bangladesh Shishu Academy for the next three years.&nbsp;The Ministry of Public Administration issued a notification in this regard on Tuesday.Earlier on Monda... </p>
                                        <span><a className="underline" href="https://anjirliton.com/news-details/5/Shishu%20Academy%20new%20Director%20General%20Anjir%20Liton" tabindex="0">Learn more</a></span>
                                    </div>
                                </div></SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 p-2 slick-slide" style={{ height: '466px' }} data-slick-index="1" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722156.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/4/10%20get%20Bangla%20Academy%20Literary%20Award%202020" className="card-title py-1" tabindex="-1">10 get Bangla Academy Literary Award 2020</a>
                                        <p className="card-text">Ten poets and writers have been adorned with the Bangla Academy Literary Award 2020.&nbsp;Bangla Academy Director General Habibullah Siraji came up with the declaration at a press conference at Shaheed Munir Chowdhury conference room of the academy 4... </p>
                                        <span><a className="underline" href="https://anjirliton.com/news-details/4/10%20get%20Bangla%20Academy%20Literary%20Award%202020" tabindex="-1">Learn more</a></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 p-2 slick-slide" style={{ height: '466px' }} data-slick-index="2" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722175.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/3/Anjir%20Liton%20received%20Shishu%20Sahitya%20Award" className="card-title py-1" tabindex="-1">Anjir Liton received Shishu Sahitya Award</a>
                                        <p className="card-text">Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held at the premises of the Bangladesh Shishu Academy in the city on October 4. Tariq-ul Islam, se... </p>
                                        <span><a className="underline" href="https://anjirliton.com/news-details/3/Anjir%20Liton%20received%20Shishu%20Sahitya%20Award" tabindex="-1">Learn more</a></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>

                                <div className="card mx-2 p-2 slick-slide" style={{ height: '466px' }} data-slick-index="3" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide03" aria-describedby="slick-slide-control03">
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676724393.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." className="card-title py-1" tabindex="-1">Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement to enable the services of mobile Banking.</a>
                                        <p className="card-text">Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018, Bangladesh Shishu Academy will accept the admission fee for various types of cultural training through Rupal... </p>
                                        <span><a className="underline" href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." tabindex="-1">Learn more</a></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 p-2 slick-slide slick-cloned" style={{ height: '466px' }} data-slick-index="4" aria-hidden="true" tabindex="-1">
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1675928329.webp" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/5/Shishu%20Academy%20new%20Director%20General%20Anjir%20Liton" className="card-title py-1" tabindex="-1">Shishu Academy new Director General Anjir Liton</a>
                                        <p className="card-text">Children's author and rhymester Anjir Liton has been appointed the new director general of Bangladesh Shishu Academy for the next three years.&nbsp;The Ministry of Public Administration issued a notification in this regard on Tuesday.Earlier on Monda... </p>
                                        <span><a className="underline" href="https://anjirliton.com/news-details/5/Shishu%20Academy%20new%20Director%20General%20Anjir%20Liton" tabindex="-1">Learn more</a></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 p-2 slick-slide slick-cloned" style={{ height: '466px' }} data-slick-index="5" aria-hidden="true" tabindex="-1">
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722156.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/4/10%20get%20Bangla%20Academy%20Literary%20Award%202020" className="card-title py-1" tabindex="-1">10 get Bangla Academy Literary Award 2020</a>
                                        <p className="card-text">Ten poets and writers have been adorned with the Bangla Academy Literary Award 2020.&nbsp;Bangla Academy Director General Habibullah Siraji came up with the declaration at a press conference at Shaheed Munir Chowdhury conference room of the academy 4... </p>
                                        <span><a className="underline" href="https://anjirliton.com/news-details/4/10%20get%20Bangla%20Academy%20Literary%20Award%202020" tabindex="-1">Learn more</a></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 p-2 slick-slide slick-cloned" style={{ height: '466px' }} data-slick-index="6" aria-hidden="true" tabindex="-1">
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676722175.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/3/Anjir%20Liton%20received%20Shishu%20Sahitya%20Award" className="card-title py-1" tabindex="-1">Anjir Liton received Shishu Sahitya Award</a>
                                        <p className="card-text">Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held at the premises of the Bangladesh Shishu Academy in the city on October 4. Tariq-ul Islam, se... </p>
                                        <span><a className="underline" href="https://anjirliton.com/news-details/3/Anjir%20Liton%20received%20Shishu%20Sahitya%20Award" tabindex="-1">Learn more</a></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card mx-2 p-2 slick-slide slick-cloned" style={{ height: '466px' }} data-slick-index="7" aria-hidden="true" tabindex="-1">
                                    <div className="p-1 border border-gray-300 rounded-md"><img src="https://anjirliton.com/uploads/news/1676724393.jpg" className="card-img-top" alt="..." /></div>
                                    <div className="card-body">
                                        <div className="mt-4 text-gray-400">Jan 15, 2023</div>
                                        <a href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." className="card-title py-1" tabindex="-1">Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement to enable the services of mobile Banking.</a>
                                        <p className="card-text">Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018, Bangladesh Shishu Academy will accept the admission fee for various types of cultural training through Rupal... </p>
                                        <span><a className="underline" href="https://anjirliton.com/news-details/2/Rupali%20Bank%20SureCash%20and%20Bangladesh%20Shishu%20Academy%20made%20an%20agreement%20to%20enable%20the%20services%20of%20mobile%20Banking." tabindex="-1">Learn more</a></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>

                    </Swiper>
                </>
            </div>

            {/* <section className="award-bg " id="award">
               
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="200" className="py-5 mx-auto w-full  relative featured aos-init">
                        <div className="featured__slider slick-slider mt-5 slick-initialized slick-dotted">
                            <div className="slick-list draggable">
                                <div className="slick-track" style={{ opacity: 1, width: '20000px', transform: 'translate3d("-408px, 0px, 0px")' }}>








                                </div>
                            </div>

                            <ul className="slick-dots" role="tablist"><li className="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 4" tabindex="0" aria-selected="true">1</button></li><li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 4" tabindex="-1">2</button></li><li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 4" tabindex="-1">3</button></li><li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 4" tabindex="-1">4</button></li></ul></div>
                        <div className="hidden sm:block">
                            <button className="pp2 shadow flex items-center justify-center w-10 h-10 bg-white rounded-full absolute -left-12 top-1/2 -translate-y-12 slick-arrow" ><i className="fa-solid fa-chevron-left"></i></button>
                            <button className="nn2 shadow flex items-center justify-center w-10 h-10 bg-white rounded-full absolute -right-12 top-1/2 -translate-y-12 slick-arrow" ><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                        <div className="flex justify-end w-full  lg:w-8/12 mx-auto  sm:hidden">
                            <div className="flex gap-2">
                                <button className="pp2 shadow flex items-center justify-center w-10 h-10 bg-white rounded-full slick-arrow" ><i className="fa-solid fa-chevron-left"></i></button>
                                <button className="nn2 shadow flex items-center justify-center w-10 h-10 bg-white rounded-full slick-arrow" ><i className="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default MediaCovarge;