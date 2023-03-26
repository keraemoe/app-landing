import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <>
            <header className="fixed right-0 left-0 m-auto rounded-bl-3xl rounded-br-3xl h-16 max-w-full z-10 top-0 backdrop-blur-2xl shadow-lg max-[425px]:px-6 ">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <Link href="/profile" className="text-sm font-semibold leading-6 text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </Link>
                </nav>
            </header>
            <div class="bg-white min-h-screen flex justify-center items-center">
                <div class="space-y-16">
                    <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
                        <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />
                        <div class="w-full px-8 absolute top-8">
                            <div class="flex justify-between">
                                <div class="">
                                    <p class="font-light">
                                        Name
                                    </p>
                                    <p class="font-medium tracking-widest">
                                        Karthik P
                                    </p>
                                </div>
                                <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                            </div>
                            <div class="pt-1">
                                <p class="font-light">
                                    Card Number
                                </p>
                                <p class="font-medium tracking-more-wider">
                                    4642  3489  9867  7632
                                </p>
                            </div>
                            <div class="pt-6 pr-6">
                                <div class="flex justify-between">
                                    <div class="">
                                        <p class="font-light text-xs">
                                            Valid
                                        </p>
                                        <p class="font-medium tracking-wider text-sm">
                                            11/15
                                        </p>
                                    </div>
                                    <div class="">
                                        <p class="font-light text-xs ">
                                            Expiry
                                        </p>
                                        <p class="font-medium tracking-wider text-sm">
                                            03/25
                                        </p>
                                    </div>
                                    <div class="">
                                        <p class="font-light text-xs">
                                            CVV
                                        </p>
                                        <p class="font-bold tracking-more-wider text-sm">
                                            ···
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">

                        <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/Zi6v09P.png" />

                        <div class="w-full px-8 absolute top-8">
                            <div class="flex justify-between">
                                <div class="">
                                    <p class="font-light">
                                        Name
                                    </p>
                                    <p class="font-medium tracking-widest">
                                        Karthik P
                                    </p>
                                </div>
                                <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                            </div>
                            <div class="pt-1">
                                <p class="font-light">
                                    Card Number
                                </p>
                                <p class="font-medium tracking-more-wider">
                                    4642  3489  9867  7632
                                </p>
                            </div>
                            <div class="pt-6 pr-6">
                                <div class="flex justify-between">
                                    <div class="">
                                        <p class="font-light text-xs">
                                            Valid
                                        </p>
                                        <p class="font-medium tracking-wider text-sm">
                                            11/15
                                        </p>
                                    </div>
                                    <div class="">
                                        <p class="font-light text-xs ">
                                            Expiry
                                        </p>
                                        <p class="font-medium tracking-wider text-sm">
                                            03/25
                                        </p>
                                    </div>

                                    <div class="">
                                        <p class="font-light text-xs">
                                            CVV
                                        </p>
                                        <p class="font-bold tracking-more-wider text-sm">
                                            ···
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;