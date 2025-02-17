"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FiGithub } from "react-icons/fi"
import { FaLinkedin, FaTwitter } from "react-icons/fa"
import { HiOutlineGlobe } from "react-icons/hi"
import { GoMail } from "react-icons/go"

export function Contact() {
    return (
        <section id="contact" >
            <div className="container mx-auto px-4 bg-black">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold title-font mb-4 text-purple-500">
                        Get in Touch
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base sm:text-lg md:text-xl text-white">
                    Ready to transform your business with AI?
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 px-4 sm:px-8"
                    >
                        <div className="flex items-start gap-4 text-lg md:text-2xl">
                            <GoMail className="w-6 h-6 text-purple-500 mt-1" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Email Us</h3>
                                <a className="text-purple-500 hover:text-cyan-400 transition-colors">
                                contact@agentiaworld.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 text-lg md:text-2xl">
                            <HiOutlineGlobe className="w-6 h-6 text-purple-500 mt-1" />
                            <div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">For Details</h3>
                                <p className="text-gray-400">www.agentiaworld.com</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mt-5">
                            <FiGithub className="text-2xl md:text-3xl text-gray-400" />
                            <FaLinkedin className="text-2xl md:text-3xl text-gray-400" />
                            <FaTwitter className="text-2xl md:text-3xl text-gray-400" />
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-xl p-4 sm:p-8 mb-14"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-medium mb-2 text-white text-sm">First Name</label>
                                    <Input className="w-full bg-black/50 border-cyan-500/50 focus:border-cyan-500 text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-white">Last Name</label>
                                    <Input className="w-full bg-black/50 border-cyan-500/50 focus:border-cyan-500 text-white" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white">Email</label>
                                <Input type="email" className="w-full bg-black/50 border-cyan-500/50 focus:border-cyan-500 text-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white">Message</label>
                                <Textarea className="w-full bg-black/50 border-cyan-500/50 focus:border-cyan-500 text-white min-h-[120px]" />
                            </div>
                            <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
