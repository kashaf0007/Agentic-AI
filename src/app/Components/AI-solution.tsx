
'use client'
import React, { useEffect } from 'react'
import { FiShield } from 'react-icons/fi'
import { HiOutlineGlobe } from 'react-icons/hi'
import { PiSubtitlesLight } from 'react-icons/pi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Solution = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  return (
    <div id='solution'>
      <section className="text-gray-600 body-font">
        <div className="container px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 mx-auto bg-black">
          <div className="flex flex-col text-center w-full mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold title-font mb-4 text-purple-500">
              AI Solutions
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base sm:text-lg md:text-xl text-white">
              Transforming industries with intelligent agents
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mx-auto">
            <div className="p-4 w-full md:w-1/3">
              <div className="flex rounded-lg bg-[#101010] p-6 flex-col items-center text-center" data-aos="zoom-in">
                <div className='text-white bg-blue-500 w-16 h-16 hover:bg-indigo-600 rounded-xl flex items-center justify-center mb-4'>
                  <HiOutlineGlobe className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-gray-300 text-lg md:text-xl title-font font-medium mb-2">Enterprise AI</h2>
                <p className="leading-relaxed text-sm md:text-base text-gray-400">Custom AI agents designed for enterprise-scale operations and decision-making</p>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3">
              <div className="flex rounded-lg bg-[#101010] p-6 flex-col items-center text-center" data-aos="zoom-in">
                <div className='text-white bg-blue-500 w-16 h-16 hover:bg-indigo-600 rounded-xl flex items-center justify-center mb-4'>
                  <PiSubtitlesLight className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-gray-300 text-lg md:text-xl title-font font-medium mb-2">Neural Operations</h2>
                <p className="leading-relaxed text-sm md:text-base text-gray-400">Automated workflow optimization through distributed neural networks</p>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3">
              <div className="flex rounded-lg bg-[#101010] p-6 flex-col items-center text-center" data-aos="zoom-in">
                <div className='text-white bg-blue-500 w-16 h-16 hover:bg-indigo-600 rounded-xl flex items-center justify-center mb-4'>
                  <FiShield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-gray-300 text-lg md:text-xl title-font font-medium mb-2">Secure Intelligence</h2>
                <p className="leading-relaxed text-sm md:text-base text-gray-400">Privacy-first AI solutions with military-grade security protocols</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Solution
