﻿import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';


export default function ContactSection() {
    const [agreed, setAgreed] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9ys83qp', 'template_wely1qh', form.current, 'AUXeSuCF3nQTklOtE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact' className="isolate bg-white py-24 px-6 sm:py-32 lg:px-8">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg
                    className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                >
                    <path
                        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient
                            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#9089FC" />
                            <stop offset={1} stopColor="#FF80B5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Связаться с нами</h2>
            </div>
            <form ref={form} onSubmit={sendEmail} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.9 }}
                        variants={{
                            visible: { opacity: 1, scale: 1, x: 0 },
                            hidden: { opacity: 0, scale: 0 },
                        }}
                    >
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Имя
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-2 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.7 }}
                        variants={{
                            visible: { opacity: 1, scale: 1, x: 0 },
                            hidden: { opacity: 0, scale: 0 },
                        }}
                    >
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Фамилия
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-2 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8 }}
                        variants={{
                            visible: { opacity: 1, scale: 1, x: 0 },
                            hidden: { opacity: 0, scale: 0 },
                        }}
                        className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Почта
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-2 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8 }}
                        variants={{
                            visible: { opacity: 1, scale: 1, x: 0 },
                            hidden: { opacity: 0, scale: 0 },
                        }}
                        className="sm:col-span-2">
                        <label htmlFor="number" className="block text-sm font-semibold leading-6 text-gray-900">
                            Телефон
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="number"
                                name="number"
                                id="number"
                                placeholder='+996'
                                autoComplete="number"
                                className="block w-full rounded-md border-2 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.9 }}
                        variants={{
                            visible: { opacity: 1, scale: 1, x: 0 },
                            hidden: { opacity: 0, scale: 0 },
                        }}
                        className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Сообщение
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                className="block w-full rounded-md border-2 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1, scale: 1, x: 0 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                    className="mt-10">
                    <button
                        type="submit"
                        value="Send"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Отправить
                    </button>
                </motion.div>
            </form>
        </div>
    )
}
