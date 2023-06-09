import React from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaNewspaper, FaPassport } from 'react-icons/fa';
import './Home.css'

const Constituen = () => {
    return (
        <div className='bg-[#115c8f] py-6'>
            <div class="border-t border-t-[#0080d7] mb-10"></div>
            <h1 className='text-3xl md:text-5xl font-semibold text-white text-center work-sans tracking-tight'>CONSTITUENT SERVICES</h1>
            <div class="flex gap-6 flex-wrap justify-center mt-10">
                <div className='h-44 w-44 flex justify-center items-center bg-[#0080d7] rounded-full'>
                    <div className='text-center text-white'>
                        <div className='text-5xl '>
                            <i className='fa-soli fa-at'><MdOutlineAlternateEmail />  </i>

                        </div>
                        <a href="mailto:banglarpuzzle@gmail.com" className='hover:underline block text-lg pt-3 work-sans tracking-tighter font-medium px- leading-tight'>Email Me</a>
                    </div>
                </div>
                <div className='h-44 w-44 flex justify-center items-center bg-[#0080d7] rounded-full'>
                    <div className='text-center text-white'>
                        <div className='text-5xl '>
                            <i className='fa-solid fa-at'><BsFillTelephoneFill />  </i>

                        </div>
                        <a href="mailto:banglarpuzzle@gmail.com" className='hover:underline block text-lg pt-3 work-sans tracking-tighter font-medium px-4 leading-tight'>Call Me</a>
                    </div>
                </div>
                <div className='h-44 w-44 flex justify-center items-center bg-[#0080d7] rounded-full'>
                    <div className='text-center text-white justify-center items-center'>
                        <div className='text-5xl '>
                            <i className='fa-solid fa-at'><FaNewspaper />  </i>

                        </div>
                        <a href="mailto:banglarpuzzle@gmail.com" className='hover:underline block text-lg pt-3 work-sans tracking-tighter font-medium px- leading-tight'>News</a>
                    </div>
                </div>
                <div className='h-44 w-44 flex justify-center items-center bg-[#0080d7] rounded-full'>
                    <div className='text-center text-white'>
                        <div className='text-5xl '>
                            <i className='fa-solid fa-at'><FaPassport />  </i>

                        </div>
                        <a href="mailto:banglarpuzzle@gmail.com" className='hover:underline block text-lg pt-3 work-sans tracking-tighter font-medium px- leading-tight'>Visit Us</a>
                    </div>
                </div>
            </div>
            <div class="border-t border-t-[#0080d7] mt-10"></div>
        </div>
    );
};

export default Constituen;