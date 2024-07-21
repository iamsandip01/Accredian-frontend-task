import React, { useState } from 'react';
import hero from "./assets/images/Hero.png"
import Modal from './Modal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="relative h-screen bg-gray-100 flex items-center justify-center">
            <div
                className="w-11/12 h-5/6 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${hero})` }}
            >
                <div className="absolute inset-0  rounded-lg"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <button onClick={openModal} className="mt-8 px-6 py-3 bg-blue-500 rounded hover:bg-blue-700 ">Refer Now</button>
                    <div >
                        <Modal isOpen={isModalOpen} onClose={closeModal} className="pt-16" />
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Hero;
