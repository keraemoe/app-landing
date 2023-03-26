import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <>
            <header className="fixed right-0 left-0 m-auto rounded-bl-3xl rounded-br-3xl h-16 max-w-full z-10 top-0 backdrop-blur-2xl shadow-lg max-[425px]:px-6 ">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <Link href="/mobile" className="text-sm font-semibold leading-6 text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </Link>
                    <Link href="/card" className="flex flex-row gap-3 text-sm font-semibold leading-6 text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                        Привязать карту
                    </Link>
                </nav>
            </header>
            <div class="flex items-center h-screen w-full justify-center">
                <div class="max-w-xs">
                    <div class="bg-white shadow-xl rounded-lg py-10 w-80">
                        <div class="photo-wrapper p-2">
                            <img class="w-32 h-32 rounded-full mx-auto" src="https://thumbs.dreamstime.com/b/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg" alt="Name Surname" />
                        </div>
                        <div class="p-2">
                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Name Surname</h3>
                            <div class="text-center text-gray-400 text-xs font-semibold">
                                <p>Web Developer</p>
                            </div>
                            <table class="text-xs my-3">
                                <tbody><tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                    <td class="px-2 py-2">Kyrgyzstan, Bishkek</td>
                                </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                        <td class="px-2 py-2">+966999999999</td>
                                    </tr>
                                    <tr>
                                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td class="px-2 py-2">email@example.com</td>
                                    </tr>
                                </tbody></table>
                            <div class="text-center my-3">
                                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default index;