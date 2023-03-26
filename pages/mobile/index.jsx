import Link from 'next/link';
import { useState } from 'react'
import { Button, Modal } from 'antd';

const history = [
    {
        id: 1,
        namedata: 'Дата платежа',
        data: 'Март 24, 2023',
        count: '250,00 KGS',
    },
    {
        id: 2,
        namedata: 'Дата платежа',
        data: 'Март 24, 2023',
        count: '250,00 KGS',
    },
    {
        id: 3,
        namedata: 'Дата платежа',
        data: 'Март 24, 2023',
        count: '250,00 KGS',
    },
    {
        id: 4,
        namedata: 'Дата платежа',
        data: 'Март 24, 2023',
        count: '250,00 KGS',
    }
]

const indeex = () => {
    const [activeTab, setActiveTab] = useState(1);

    const changeTab = (tab) => {
        setActiveTab(tab);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div>
                <header className="fixed right-0 left-0 m-auto rounded-bl-3xl rounded-br-3xl h-16 max-w-full z-10 top-0 backdrop-blur-2xl shadow-lg max-[425px]:px-2 ">
                    <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                        <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>
                        </Link>
                        <button className='text-sm font-semibold leading-6 text-gray-900 ${activeTab === 1 ? "bg-gray-300" : "bg-white"}'
                            onClick={() => changeTab(1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                        </button>
                        <button className='text-sm font-semibold leading-6 text-gray-900 ${activeTab === 2 ? "bg-gray-300" : "bg-white"}'
                            onClick={() => changeTab(2)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                            </svg>
                        </button>
                        <button className='text-sm font-semibold leading-6 text-gray-900 ${activeTab === 3 ? "bg-gray-300" : "bg-white"}'
                            onClick={() => changeTab(3)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <button className='text-sm font-semibold leading-6 text-gray-900 ${activeTab === 4 ? "bg-gray-300" : "bg-white"}'
                            onClick={() => changeTab(4)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </button>
                    </nav>
                </header>
                <div className="flex flex-col items-center">
                    <div className="w-full sm:w-2/3 lg:w-1/2">
                        <div className="p-4 mt-28">
                            {activeTab === 1 && (
                                <>
                                    <div className='flex flex-col justify-center items-center gap-6'>
                                        <Link href='/profile'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </Link>
                                        <button onClick={showModal} className="bg-blue-600 w-56 h-20 rounded-xl text-white">
                                            <Link href=''>Услуги</Link>
                                        </button>
                                        <Modal title="Услуги" open={isModalOpen} onCancel={handleCancel}>
                                            <p className="border rounded-xl p-4 mb-3">Отопление</p>
                                            <p className="border rounded-xl p-4 mb-3">Газ</p>
                                            <p className="border rounded-xl p-4 mb-3">Охрана</p>
                                            <p className="border rounded-xl p-4 mb-3">Электричество</p>
                                            <p className="border rounded-xl p-4 mb-3">Вода</p>
                                            <p className="border rounded-xl p-4 mb-3">Уборка</p>
                                            <p className="border rounded-xl p-4 mb-3">Лифт</p>
                                            <p className="border rounded-xl p-4 mb-3">ТСЖ</p>
                                        </Modal>
                                        <button className="bg-blue-600 w-56 h-20 rounded-xl text-white">
                                            <Link href=''>Благотворительность</Link>
                                        </button>
                                    </div>
                                </>
                            )}
                            {activeTab === 2 && (
                                <>
                                    <h1 className="text-3xl">Объекты</h1>
                                    <div className='flex flex-col justify-center items-center gap-6 pt-10'>
                                        <button className="bg-blue-600 w-64 h-20 rounded-xl text-white">
                                            <Link href=''>Испагский дом</Link>
                                        </button>
                                        <button className="bg-blue-600 w-64 h-20 rounded-xl text-white">
                                            <Link href=''>Монако</Link>
                                        </button>
                                        <button className="bg-blue-600 w-64 h-20 rounded-xl text-white">
                                            <Link href=''>Елисейские поля</Link>
                                        </button>
                                        <button className="bg-blue-600 w-64 h-20 rounded-xl text-white">
                                            <Link href=''>Французский квартал</Link>
                                        </button>
                                    </div>
                                </>
                            )}
                            {activeTab === 3 && (
                                <>
                                    <div>
                                        <h3 class="text-lg font-medium mb-4">История платежей</h3>
                                        {history.map((his) => (
                                            <div class="bg-white shadow-md rounded-md p-6 mb-9">
                                                <div class="flex flex-col space-y-2">
                                                    <div class="flex justify-between">
                                                        <span class="text-gray-600">{his.namedata}</span>
                                                        <span class="text-gray-600">Amount</span>
                                                    </div>
                                                    <div class="flex justify-between">
                                                        <span class="text-gray-800">{his.data}</span>
                                                        <span class="text-green-600">{his.count}</span>
                                                    </div>
                                                    <div class="flex justify-between">
                                                        <span class="text-gray-800">{his.onedata}</span>
                                                        <span class="text-green-600">{his.onecount}</span>
                                                    </div>
                                                    <div class="flex justify-between">
                                                        <span class="text-gray-800">{his.twodata}</span>
                                                        <span class="text-green-600">{his.twocount}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                            {activeTab === 4 && (
                                <>
                                    <h3 className="text-lg font-bold mb-2">Контент вкладки 4</h3>
                                    <p>Это содержимое вкладки 4.</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default indeex;