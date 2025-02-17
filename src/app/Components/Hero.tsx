
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Button } from '@/components/ui/button'

const Hero = () => {
    return (
        <section className="bg-black text-white py-16 px-5">
            <div className="flex items-center justify-center mb-3 bg-black">
                <div className="flex items-center bg-black px-4 py-1 rounded-full">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span className="text-purple-400 text-sm font-medium">POWERED BY PANAVERSITY</span>
                </div>
            </div>
            <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold title-font mb-4 text-purple-500">
                    Enterprise AI Agents
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold title-font mb-4 text-white">
                    for the Future
                </h1>
            </div>
            <div className="flex justify-center bg-black">
                <button className="inline-flex h-12 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg">Deplay Your AI Agent <MdOutlineKeyboardArrowRight className='mt-1 gap-2' /></button>
                <div>
                    <Button className="w-full ml-6  h-12 bg-[#262425] border-purple-500/50 text-white" >
                        <div className='ml-6 h-12  py-2 px-6 mt-2 mr-2 font-semibold text-lg '>
                            Watch Demo
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
