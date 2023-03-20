﻿import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLast from '../AnimatedText/AnimatedLast';

const Footer = () => {
    return (
        <>
            <div className=" bg-gray-900 rounded-tl-2xl rounded-tr-2xl">
                <div className="max-w-2xl mx-auto text-white py-10">
                    <div className="text-center">
                        <h3 className="text-3xl mb-3">
                            <AnimatedLast text={"Download our app "} />
                        </h3>
                        <h4>
                            <AnimatedLast text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."} />
                        </h4>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.7 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, x: 0 },
                                hidden: { opacity: 0, scale: 0 },
                            }}
                            className="flex justify-center my-10">
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                        <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Fucking Slave, 2025 </p>
                        <div className="order-1 md:order-2">
                            <a href="#" className='px-2'>Home</a>
                            <a href="#app" className='px-2 border-l'>The App</a>
                            <a href="#features" className='px-2 border-l'>Features</a>
                            <a href="#contact" className='px-2 border-l'>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;