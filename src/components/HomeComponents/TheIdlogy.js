import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
const TheIdlogy = () => {
    return (
        <section>
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cold-2 gap-10 w-full lg:w-8/12 mx-auto aos-init aos-animate'>
                    <div className='flex items-center text-gray-600'>

                        <div className='flex justify-center  order-first md:items-end border-b-4 border-text-gray-900 md:border-b-0 lg:mt-28'>
                            <img src="https://anjirliton.com/frontend/images/gallery/row-image-Mujib100.png" className='w-10/12 mt-10' alt="" />
                        </div>
                        <div className='py-4 md:py-24 relative'>
                            <h1 className='text-2xl lg:text-3xl work-sans font-semibold uppercase tracking-tighter'>THE IDEOLOGY</h1>

                            <p className='py-4 leading-tight work-sans'>My greatest strength is the love for my people, My greatest weakness is that I love them too much.</p>
                            <h2 className='sm:text-xl xl:text-2xl font-semibold work-sans'>-Bangabandhu Sheikh Mujibur Rahman</h2>
                            <div className='flex items-center'>
                                <a href="" className='inline- transition-all mt-4 py-4 hover:bg-gray-500 hover:text-white px-6 border border-gray-500 font-medium cursor-pointer rounded flx '>Learn More </a>
                                <span className='font-bold text-3xl'><BsArrowRightShort /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className='bg-[#0080d7] leadership-bg'>
                <div className='w-11/12 mx-auto '>
                    <div className='text-white work-sans grid grid-cols-1 items-center md:grid-cols-2 gap-4 w-full lg:w-8/12 mx-auto'>
                        <div className='py-6'>
                            <h4 className='text-2xl lg:text-3xl font-semibold tracking-tighter uppercase'>MY LEADER AND INSPIRATION</h4>
                            <p className='font-medium text-lg lg:text-2xl mt-4'>- Hon'ble Prime Minister Sheikh Hasina</p>
                            <a href="#" target="_blank" class="inline-block transition-all mt-4 py-2 hover:bg-white hover:text-[#115c8f] px-6 border border-white font-medium cursor-pointer rounded">Learn More <span><i class="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                        <div class="order-first md:order-last">
                            <img class="w-full py-4" src="https://anjirliton.com/uploads/home/1675939078.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>




            <section class="bg-white leadership-bg">
                <div class=" w-11/12 mx-auto py-10">
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-offset="200" class="xl:pr-20 aos-init aos-animate">
                        <p class="text-3xl text-[#115c8f] font-bold tracking-[.4em] uppercase">
                            Upcoming Event
                        </p>
                    </div>
                    <div data-aos-duration="2000" data-aos="fade-up" data-aos-offset="100" class="w-full lg:w-8/12 items-start mx-auto mt-10 aos-init aos-animate">
                        <div class="flex flex-col items-center md:flex-row gap-x-10 mx-auto w-full">
                            <div class="w-full text-center">
                                No event Found
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="bg-[#0080d7] leadership-bg">
                <div data-aos-duration="2000" data-aos="fade-left" data-aos-offset="100" class="w-11/12 mx-auto aos-init aos-animate">
                    <div class="text-white work-sans grid grid-cols-1 items-center md:grid-cols-2 gap-4 w-full lg:w-8/12 mx-auto">
                        <div class="py-6">
                            <h4 class="text-2xl lg:text-3xl font-semibold tracking-tighter uppercase">MY JOURNEY WITH SHISHU ACADEMY</h4>
                            <p class="mt-4">One of the strengths to build a golden Bengal in the ideology of Father of the Nation Bangabandhu Sheikh Mujibur Rahman is our future generation, who are today's children. Bangladesh Shishu Academy is for children. Bangladesh Shishu Academy is working to develop latent talents including creative and gentle scholarship for the purpose of creating the spirit of great liberation war, love of country, moral education, discipline and sense of responsibility among the children.

                                Under the leadership of Hon'ble Prime Minister Sheikh Hasina, a child friendly environment has been created in the country today. At present children's academy activities are being carried out in 64 districts and 6 upazilas (Keshabpur, Parshuram, Mithapukur, Kulaura, Srinagar and Babuganj upazilas) for the creative development and protection of children's rights. Under this program, various programs are being implemented in collaboration with the local administration for the participation of children across the country.</p>
                            <a href="#" target="_blank" class="inline-block transition-all mt-4 py-2 hover:bg-white hover:text-[#115c8f] px-6 border border-white font-medium cursor-pointer rounded">Learn More <span><i class="fa-solid fa-arrow-right"></i></span></a>
                        </div>
                        <div class="order-first md:order-last">
                            <img class="w-full py-4" src="https://anjirliton.com/uploads/home/1675939333.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>



        </section>

    );
};

export default TheIdlogy;