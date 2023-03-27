import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import AnimatedTextCharacterParagraph from '../AnimatedText/AnimatedParagraph'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'


export default function Features() {
    const [activeTab, setActiveTab] = useState(1);

    const changeTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div id='features' className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-wrap mx-auto justify-between gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 max-[801px]:justify-center  lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.7 }}
                                variants={{
                                    visible: { opacity: 1, scale: 1, x: 0 },
                                    hidden: { opacity: 0, scale: 0 },
                                }}
                                className="text-base font-semibold leading-7 text-indigo-600">Проверьте функционал</motion.h2>
                            <h1
                                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Функционал приложения
                            </h1>
                            {/* <h4 className="mt-6 text-lg leading-8 text-gray-600">
                                <AnimatedTextCharacterParagraph text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,iste dolor cupiditate blanditiis ratione."} />
                            </h4> */}
                            <dl className="mt-10 space-y-8 text-base leading-7 text-gray-600 ">
                                <div className="flex flex-col pl-9 gap-6">
                                    <motion.button
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            visible: { opacity: 1, scale: 1, x: 0 },
                                            hidden: { opacity: 0, scale: 1 },
                                        }}
                                        onClick={() => changeTab(1)}
                                        className='inline font-semibold text-gray-900 ${activeTab === 1 ? "bg-gray-300" : "bg-white"}'>
                                        <AnimatedTextCharacterParagraph text={'Главная страница'} />
                                    </motion.button>{' '}
                                    <motion.button
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            visible: { opacity: 1, scale: 1, x: 0 },
                                            hidden: { opacity: 0, scale: 1 },
                                        }}
                                        onClick={() => changeTab(2)}
                                        className='inline font-semibold text-gray-900 ${activeTab === 2 ? "bg-gray-300" : "bg-white"}'>
                                        <AnimatedTextCharacterParagraph text={'Объекты'} />
                                    </motion.button>{' '}
                                    <motion.button
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            visible: { opacity: 1, scale: 1, x: 0 },
                                            hidden: { opacity: 0, scale: 1 },
                                        }}
                                        onClick={() => changeTab(3)}
                                        className='inline font-semibold text-gray-900 ${activeTab === 3 ? "bg-gray-300" : "bg-white"}'>
                                        <AnimatedTextCharacterParagraph text={'История платежей'} />
                                    </motion.button>{' '}
                                    <motion.button
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            visible: { opacity: 1, scale: 1, x: 0 },
                                            hidden: { opacity: 0, scale: 1 },
                                        }}
                                        onClick={() => changeTab(4)}
                                        className='inline font-semibold text-gray-900 ${activeTab === 3 ? "bg-gray-300" : "bg-white"}'>
                                        <AnimatedTextCharacterParagraph text={'Заявки'} />
                                    </motion.button>{' '}
                                    <motion.button
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            visible: { opacity: 1, scale: 1, x: 0 },
                                            hidden: { opacity: 0, scale: 1 },
                                        }}
                                        onClick={() => changeTab(5)}
                                        className='inline font-semibold text-gray-900 ${activeTab === 3 ? "bg-gray-300" : "bg-white"}'>
                                        <AnimatedTextCharacterParagraph text={'Услуги'} />
                                    </motion.button>{' '}
                                    <motion.button
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            visible: { opacity: 1, scale: 1, x: 0 },
                                            hidden: { opacity: 0, scale: 1 },
                                        }}
                                        onClick={() => changeTab(6)}
                                        className='inline font-semibold text-gray-900 ${activeTab === 3 ? "bg-gray-300" : "bg-white"}'>
                                        <AnimatedTextCharacterParagraph text={'Оплата за услуги'} />
                                    </motion.button>{' '}
                                    <motion.button
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            visible: { opacity: 1, scale: 1, x: 0 },
                                            hidden: { opacity: 0, scale: 1 },
                                        }}
                                        onClick={() => changeTab(7)}
                                        className='inline font-semibold text-gray-900 ${activeTab === 3 ? "bg-gray-300" : "bg-white"}'>
                                        <AnimatedTextCharacterParagraph text={'Профиль'} />
                                    </motion.button>{' '}
                                    <motion.button
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.5 }}
                                        variants={{
                                            visible: { opacity: 1, scale: 1, x: 0 },
                                            hidden: { opacity: 0, scale: 1 },
                                        }}
                                        onClick={() => changeTab(8)}
                                        className='inline font-semibold text-gray-900 ${activeTab === 3 ? "bg-gray-300" : "bg-white"}'>
                                        <AnimatedTextCharacterParagraph text={'Привязка карты'} />
                                    </motion.button>{' '}
                                </div>
                            </dl>
                        </div>
                    </div>
                    {activeTab === 1 && (
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.7 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, x: 0 },
                                hidden: { opacity: 0, scale: 0 },
                            }}
                            src="/1"
                            alt="Product screenshot"
                            className=" rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0"
                        />
                    )}
                    {activeTab === 2 && (
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.7 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, x: 0 },
                                hidden: { opacity: 0, scale: 0 },
                            }}
                            src="/2"
                            alt="Product screenshot"
                            className=" rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0"
                        />
                    )}
                    {activeTab === 3 && (
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.7 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, x: 0 },
                                hidden: { opacity: 0, scale: 0 },
                            }}
                            src="/3"
                            alt="Product screenshot"
                            className=" rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0"
                        />
                    )}
                    {activeTab === 4 && (
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.7 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, x: 0 },
                                hidden: { opacity: 0, scale: 0 },
                            }}
                            src="/4"
                            alt="Product screenshot"
                            className=" rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0"
                        />
                    )}
                    {activeTab === 5 && (
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.7 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, x: 0 },
                                hidden: { opacity: 0, scale: 0 },
                            }}
                            src="/5"
                            alt="Product screenshot"
                            className=" rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0"
                        />
                    )}
                    {activeTab === 6 && (
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.7 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, x: 0 },
                                hidden: { opacity: 0, scale: 0 },
                            }}
                            src="/6"
                            alt="Product screenshot"
                            className=" rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0"
                        />
                    )}
                    {activeTab === 7 && (
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.7 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, x: 0 },
                                hidden: { opacity: 0, scale: 0 },
                            }}
                            src="/7"
                            alt="Product screenshot"
                            className=" rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0"
                        />
                    )}
                    {activeTab === 8 && (
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.7 }}
                            variants={{
                                visible: { opacity: 1, scale: 1, x: 0 },
                                hidden: { opacity: 0, scale: 0 },
                            }}
                            src="/8"
                            alt="Product screenshot"
                            className=" rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0"
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
