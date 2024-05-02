import React from 'react'
//icons
import { GoArrowRight } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";

import { Link } from 'react-router-dom';
//motion framer
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Pocetna() {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100

        },
        animate: {
            opacity: 2,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 3
            }
        }
    }
    const telefonBroj = '064 94 95 922';
    return (
        // container
        <div>
            {/* prvi deo */}
            <div className='flex  gap-1'>
                <div className='w-[50%] bg-[#111827] flex text-center flex-col  items-center font-bold font-serif lg:h-[500px] md:h-[350px] h-[200px]'>
                    <h1 className='lg:text-5xl md:text-3xl text-white m-auto shadow-2xl p-5 text-xl'>MI BRINEMO O VASIM FAROVIMA</h1>
                    <p className='text-white text-xl m-5 hidden lg:block md:block'>Servis kojem mozete verovati</p>
                    <hr className='w-[60%] text-white lg:mb-10 md:mb-6 border' />
                    <Link to={'/kontakt'} className='lg:text-3xl md:text-2xl text-white shadow-2xl p-5 text-l flex items-center gap-2'>KONTAKT<GoArrowRight /></Link>
                </div>
                <div className='w-[50%]'>
                    <img src="/Audi1.webp" alt="Audi A6" className='w-full lg:h-[500px] md:h-[350px] h-[200px]' />
                </div>

            </div>
            {/* drugi deo */}
            <div className='flex lg:h-[500px] md:h-[390px] h-full mt-1 gap-1 flex-grow'>
                <div className='w-[50%] lg:h-full md:h-[420px] h-[469px] p-5 flex flex-col justify-center gap-2 bg-[#111827]'>
                    <div className='flex gap-1'>
                        <img className='w-[50%] rounded-l-3xl object-cover transform hover:scale-125 hover:cursor-pointer md:hover:scale-100 md:hover:cursor-auto transition-transform duration-500 ease-in-out' src="/far1.webp" alt="ServisFara" />
                        <img className='w-[50%] rounded-r-3xl object-cover transform hover:scale-125 hover:cursor-pointer md:hover:scale-100 md:hover:cursor-auto transition-transform duration-500 ease-in-out' src="/far2.webp" alt="ProAuto" />
                    </div>



                    <div className='text-center mt-2 p-5'>
                        <hr className='text-white border w-full mx-auto' />
                        <h2 className='text-white font-serif text-2xl mt-5'> Servis fara BMW serije 5</h2>
                        <div className='mt-5'>
                            <p className='text-white font-serif lg:text-2xl text-l'>Pozovite nas i zakazite svoj termin.</p>
                            <a href={`tel:${telefonBroj}`} className='text-white font-serif text-2xl ml-5 mt-5 justify-center flex' target='_blank'><FaPhoneAlt size={25} /></a>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] lg:h-full md:h-[420px] h-[469px] bg-[#111827] flex flex-col items-center justify-center'>
                    <h1 className='lg:text-5xl md:text-3xl text-white shadow-2xl p-5 text-xl font-bold font-serif'>O NAMA</h1>
                    <hr className='text-white w-[70%] border ' />
                    <p className='text-white lg:text-2xl md:text-xl text-l text-center lg:p-10 h-full items-center mt-2 p-1'>
                        Dobrodošli u Pro Auto – vašeg pouzdanog partnera za sve što se tiče održavanja i popravki farova vašeg automobila.
                        U Pro Autu, naša misija je ne samo popraviti vaše farove, već i pružiti vam iskustvo koje nadmašuje vaša očekivanja.
                    </p>
                    <span className='text-blue-400 text-xl mb-20 text-center p-1'>Hvala vam što ste odabrali Pro Auto.</span>
                </div>
            </div>
            {/* Usluge */}
            <div>
                <motion.div
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }} className="bg-cover bg-center w-full lg:h-screen h-96 flex flex-col items-center justify-center" style={{ backgroundImage: 'url("/ksenon.webp")' }}>
                    <h1 className='text-white lg:mb-20 md:mb-1 mb-8 text-4xl font-serif'>KOMENTARI</h1>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper rounded-2xl text-white"
                    >
                        <SwiperSlide>
                            <div className='text-white flex flex-col justify-center items-center h-full gap-5'>
                                <p className='text-xl font-serif'>Svaka čast...pošteno ,precizno,profesionalno...<br />bravo!</p>
                                <hr className='text-white w-[60%]' />
                                <h2 className='text-3xl font-serif'>Goran</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-white flex flex-col justify-center items-center h-full gap-5'>
                                <p className='text-xl font-serif'>Kvalitetan rad <br />(profesionalno odradjeno)</p>
                                <hr className='text-white w-[60%]' />
                                <h2 className='text-3xl font-serif'>Angelo</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-white flex flex-col justify-center items-center h-full gap-5'>
                                <p className='text-xl font-serif'>Korektna saradnja.Termin ispoštovan.Profesionalno odradjen posao.</p>
                                <hr className='text-white w-[60%]' />
                                <h2 className='text-3xl font-serif'>Miodrag</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-white flex flex-col justify-center items-center h-full gap-5'>
                                <p className='text-xl font-serif'>Čovek profesionalac.Sve moguce preporuke.</p>
                                <hr className='text-white w-[60%]' />
                                <h2 className='text-3xl font-serif'>Nikola</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-white flex flex-col justify-center items-center h-full gap-5'>
                                <p className='text-xl font-serif'>Višegodišnja saradnja sa Jocom.Nema zamerki.</p>
                                <hr className='text-white w-[60%]' />
                                <h2 className='text-3xl font-serif'>Đorđe</h2>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </motion.div>
            </div>
        </div >
    )
}

export default Pocetna