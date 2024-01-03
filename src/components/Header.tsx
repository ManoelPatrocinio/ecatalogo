import { Kaushan_Script } from 'next/font/google'
import { useState } from 'react';
import ModalDetails from './ModalDetails';

const kaushan_script = Kaushan_Script({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-kaushan-script'
})


export default function Header() {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <header className={`w-full flex justify-between items-center px-4 py-2 ${kaushan_script.variable}`}>

            {/* heaper icon */}
            <button type='button' onClick={() => setToggleModal(prev => !prev)}>

                <svg className="w-5 h-5" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 19.5V16.25C13 14.0833 14.0833 14.0833 16.25 13C18.4167 11.9166 19.5 9.92114 19.5 7.58331C19.5 5.85941 18.8152 4.2061 17.5962 2.98712C16.3772 1.76813 14.7239 1.08331 13 1.08331C11.2761 1.08331 9.62279 1.76813 8.40381 2.98712C7.18482 4.2061 6.5 5.85941 6.5 7.58331M13 24.9166C13.2873 24.9166 13.5629 24.8025 13.766 24.5993C13.9692 24.3962 14.0833 24.1206 14.0833 23.8333C14.0833 23.546 13.9692 23.2704 13.766 23.0673C13.5629 22.8641 13.2873 22.75 13 22.75C12.7127 22.75 12.4371 22.8641 12.234 23.0673C12.0308 23.2704 11.9167 23.546 11.9167 23.8333C11.9167 24.1206 12.0308 24.3962 12.234 24.5993C12.4371 24.8025 12.7127 24.9166 13 24.9166Z" stroke="#FF7C34" strokeWidth="2" />
                </svg>
            </button>

            <div className='flex flex-col justify-center items-center'>
                <h1 className=' font-sans text-2xl text-orange-800'>Catálogo da Jú</h1>
                <p className=" text-sm text-gray-700">Revendedora Avon / Natura</p>
            </div>


            {/* search icon */}
            <svg className="w-5 h-5" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.625 31.5L24.0829 24.759L30.625 31.5ZM27.7084 15.75C27.7084 19.1315 26.4024 22.3745 24.0777 24.7656C21.753 27.1567 18.6001 28.5 15.3125 28.5C12.0249 28.5 8.87201 27.1567 6.54734 24.7656C4.22267 22.3745 2.91669 19.1315 2.91669 15.75C2.91669 12.3685 4.22267 9.12548 6.54734 6.73439C8.87201 4.3433 12.0249 3 15.3125 3C18.6001 3 21.753 4.3433 24.0777 6.73439C26.4024 9.12548 27.7084 12.3685 27.7084 15.75V15.75Z" stroke="#FF7C34" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {toggleModal && <ModalDetails toggleModal={setToggleModal} />}

        </header>
    )
}