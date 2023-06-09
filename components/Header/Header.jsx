﻿import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import AnimatedTextCharacterParagraph from '../AnimatedText/AnimatedParagraph'
import { motion } from "framer-motion";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="fixed right-0 left-0 m-auto rounded-bl-3xl rounded-br-3xl h-16 max-w-full z-10 top-0 backdrop-blur-2xl shadow-lg hidden max-[425px]:block px-6 ">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </a>
                    <a href="#app" className="text-sm font-semibold leading-6 text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>

                    </a>
                    <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                    </a>
                    <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </a>
                </nav>
            </header>
            <header className="fixed right-0 left-0 m-auto rounded-bl-3xl rounded-br-3xl max-w-full z-10 top-0 backdrop-blur-2xl shadow-lg max-[425px]:hidden ">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.4 }}
                        variants={{
                            visible: { opacity: 1, scale: 1, x: 0 },
                            hidden: { opacity: 1, scale: 0 },
                        }}
                        className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img className="h-8 w-auto" style={{
                                width: '200px',
                                height: '45px'
                            }} src="/logo.png" alt="" />
                            <span className="sr-only">Your Company</span>
                        </a>
                    </motion.div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            <AnimatedTextCharacterParagraph text={"Главная"} />
                        </a>
                        <a href="#app" className="text-sm font-semibold leading-6 text-gray-900">
                            <AnimatedTextCharacterParagraph text={"Приложение"} />
                        </a>
                        <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                            <AnimatedTextCharacterParagraph text={"Функционал"} />
                        </a>
                        <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
                            <AnimatedTextCharacterParagraph text={"Связаться"} />
                        </a>
                    </Popover.Group>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed bg-[#00000081] inset-0 z-10" />
                    <Dialog.Panel className="fixed round inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="#" onClick={() => setMobileMenuOpen(false)} className="flex py-3 text-sm font-semibold leading-6 text-gray-900">
                                        Главная
                                    </a>
                                    <a href="#app" onClick={() => setMobileMenuOpen(false)} className="flex py-3 text-sm font-semibold leading-6 text-gray-900">
                                        Приложение
                                    </a>
                                    <a href="#features" onClick={() => setMobileMenuOpen(false)} className="flex py-3 text-sm font-semibold leading-6 text-gray-900">
                                        Функционал
                                    </a>
                                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex py-3 text-sm font-semibold leading-6 text-gray-900">
                                        Связаться
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </>
    )
}