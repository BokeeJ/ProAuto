import React from 'react'
import { motion } from 'framer-motion'

function Usluge() {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100

        },
        animate: {
            opacity: 3,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 3
            }
        }
    }
    return (
        <div>
            <div className=''>
                <div className='m-20'>
                    <h1 className='text-4xl font-bold font-serif text-white'>NAŠE USLUGE</h1>
                    <div className='mt-10'>
                        <hr className='w-[20%] border-red-800 border-4' />
                        <hr className='w-[15%] border-red-800 border-4 mt-2' />
                    </div>

                </div>
                <div className='text-white flex justify-center items-center gap-10 lg:flex-row md:flex-row flex-col p-10'>
                    <motion.div
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{
                            once: true,
                        }} className='flex flex-col gap-10 max-w-[400px] '>
                        <h2 className='text-2xl'><span className='bg-red-800 w-5 h-5 rounded-full text-red-800 mr-5'>^</span>Reparacija/Servis farova</h2>
                        <hr className='border border-white' />
                        <p className='text-white lg:text-xl md:text-xl text-l  text-center p-5'>Profesionalni servis farova obično koristi specijalizovanu opremu i tehnike kako bi se postigao visok kvalitet popravke i održavanja. <br />Osim estetskih razloga, redovno održavanje farova može povećati bezbednost vozača i putnika, smanjiti rizik od saobraćajnih nesreća i produžiti životni vek farova.</p>
                        <h2 className='text-2xl'><span className='bg-red-800 rounded-full text-red-800 mr-5'>^</span>Zamena projektora</h2>
                        <hr className='border border-white' />
                        <p className='text-white lg:text-xl md:text-xl text-l text-center p-5'>Zamena projektora je ključna usluga koja se pruža vlasnicima vozila radi održavanja i poboljšanja efikasnosti osvetljenja.<br /> Projektori su važni delovi sistema osvetljenja vozila koji pružaju snažan i fokusiran svetlosni snop kako bi se obezbedila optimalna vidljivost vozaču tokom vožnje, posebno noću ili u uslovima loše vidljivosti.</p>
                    </motion.div>
                    <motion.div
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{
                            once: true,
                        }} className='flex flex-col gap-10 mb-auto max-w-[400px]'>
                        <h2 className='text-2xl'><span className='text-red-800 rounded-full bg-red-800 mr-5'>^</span>Zamena stakala(plastike farova)</h2>
                        <hr className='border border-white ' />
                        <p className='text-white lg:text-xl md:text-xl text-l text-center p-5'>Zamena stakala (plastike) farova je ključna usluga koja se pruža vlasnicima vozila kako bi se očuvala funkcionalnost i estetika farova. Farovi su izloženi spoljašnjim uticajima tokom vožnje, što može dovesti do oštećenja ili zamagljivanja stakala (plastike).</p>

                        <h2 className='text-2xl md:mt-14 lg:mt-14'><span className='bg-red-800 rounded-full text-red-800 mr-5'>^</span>Ugradnja xenon i led sijalica</h2>
                        <hr className='border border-white ' />
                        <p className='text-white lg:text-xl md:text-xl text-l text-center p-5 '>Ugradnja xenon i LED sijalica je popularna usluga koja se pruža vlasnicima vozila kako bi poboljšali osvetljenost, energetsku efikasnost i estetiku njihovih farova. Xenon i LED sijalice su moderni izbori koji nude brojne prednosti u odnosu na tradicionalne halogene sijalice, uključujući veću svetlinu, duži životni vek.

                        </p>

                    </motion.div>
                </div>

            </div>
            <div className='lg:w-full md:w-full w-[80%] mx-auto items-center justify-center flex'>
                <div className='w-full h-[200px] bg-[#111827] justify-center flex '>
                    <div className='bg-red-500 gap-1 w-[400px] justify-center flex flex-col text-white font-mono rounded-xl '>
                        <li className='ml-5'>ZAKAZIVANJE</li>
                        <li className='ml-5'>USPOSTAVA PROBLEMA</li>
                        <li className='ml-5'>PROVERA</li>
                        <li className='ml-5'>ASISTENCIJA</li>
                        <li className='ml-5'>POPRAVKA</li>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Usluge