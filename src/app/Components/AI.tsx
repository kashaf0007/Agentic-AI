


import React from 'react'
import { BiCodeAlt } from 'react-icons/bi'
import { FiCpu } from 'react-icons/fi'
import { HiOutlineGlobe } from 'react-icons/hi'
import { LuBrain } from 'react-icons/lu'

const AI = () => {
  return (
    <div id='ai'>
      <section className="bg-black text-white py-16 px-5">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold title-font mb-4 text-purple-500">
            Powered by Advanced AI
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Built on cutting-edge neural architectures
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <LuBrain />, title: 'Neural Networks', desc: 'Advanced neural architectures for complex decision making' },
            { icon: <FiCpu />, title: 'Deep Learning', desc: 'Sophisticated deep learning models for pattern recognition' },
            { icon: <BiCodeAlt />, title: 'Advanced ML', desc: 'Cutting-edge machine learning algorithms' },
            { icon: <HiOutlineGlobe />, title: 'Global Scale', desc: 'Distributed AI processing across global networks' }
          ].map((item, index) => (
            <div key={index} className="bg-[#131314] p-6 rounded-2xl shadow-lg text-center flex flex-col items-center hover:scale-105 transition-transform">
              <div className="text-5xl text-purple-400 mb-4">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AI