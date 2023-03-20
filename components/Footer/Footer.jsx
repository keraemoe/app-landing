import React from 'react';

const Footer = () => {
    return (
        <>
            <div class=" bg-gray-900 rounded-tl-2xl rounded-tr-2xl">
                <div class="max-w-2xl mx-auto text-white py-10">
                    <div class="text-center">
                        <h3 class="text-3xl mb-3"> Download our app </h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <div class="flex justify-center my-10">
                            <div class="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8" />
                                <div class="text-left ml-3">
                                    <p class='text-xs text-gray-200'>Download on </p>
                                    <p class="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                            <div class="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8" />
                                <div class="text-left ml-3">
                                    <p class='text-xs text-gray-200'>Download on </p>
                                    <p class="text-sm md:text-base"> Apple Store </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                        <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Fucking Slave, 2025 </p>
                        <div class="order-1 md:order-2">
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