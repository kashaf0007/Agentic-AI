'use client'
import React, { useEffect } from 'react'
import { AiFillCode } from 'react-icons/ai'
import { FiMessageSquare, FiShield } from 'react-icons/fi'
import { LuBrain } from 'react-icons/lu'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Neutral = () => {
  useEffect(()=>{
    Aos.init({ duration: 1000 });
  },[])

  return (
    <div id='neutral'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto bg-black">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold title-font mb-4 text-purple-500">
              Neural Capabilities
            </h1>
            <p className="lg:w-2/3 sm:text-2xl mx-auto leading-relaxed text-base text-white">
              Powered by next-generation artificial intelligence
            </p>
          </div>
          <div className="flex flex-wrap m-4 text-center justify-center gap-4">
            <div className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4" data-aos="flip-left">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className='text-white bg-blue-500 border-0 w-20 mx-auto hover:bg-indigo-600 rounded-xl'>
                  <LuBrain className="w-16 h-16 mx-auto mb-6 text-white" />
                </div>
                <h2 className="title-font text-2xl font-semibold text-white">Autonomous Learning</h2>
                <p className="text-gray-400">Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning</p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4" data-aos="flip-left">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className='text-white bg-blue-500 border-0 w-20 mx-auto hover:bg-indigo-600 rounded-xl'>
                  <FiMessageSquare className="w-16 h-16 mx-auto mb-6 text-white" />
                </div>
                <h2 className="title-font text-2xl font-semibold text-white">Multi-Modal Intelligence</h2>
                <p className="text-gray-400">Advanced agents capable of processing text, voice, and visual data for comprehensive understanding</p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4" data-aos="flip-left">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className='text-white bg-blue-500 border-0 w-20 mx-auto hover:bg-indigo-600 rounded-xl'>
                  <AiFillCode className="w-16 h-16 mx-auto mb-6 text-white" />
                </div>
                <h2 className="title-font text-2xl font-semibold text-white">Cognitive Integration</h2>
                <p className="text-gray-400">Seamless integration with existing systems through advanced cognitive APIs and neural bridges</p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4" data-aos="flip-left">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className='text-white bg-blue-500 border-0 w-20 mx-auto hover:bg-indigo-600 rounded-xl'>
                  <FiShield className="w-16 h-16 mx-auto mb-6 text-white" />
                </div>
                <h2 className="title-font text-2xl font-semibold text-white">Ethical AI Framework</h2>
                <p className="text-gray-400">Built-in ethical guidelines and safety protocols ensuring responsible AI deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Neutral
