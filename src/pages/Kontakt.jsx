
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// icons
import { FaPhoneAlt } from "react-icons/fa";
//componnent
import Lokacija from '../components/Lokacija';
//motion framer
import { motion } from 'framer-motion'


function Kontakt() {
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
    const telefonBroj = '064 94 95 922';
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8ch76ag', 'template_i9sofyc', form.current, {
                publicKey: 'V-19CuRw6fsHeW7fW',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <div className='flex lg:flex-row flex-col md:flex-row items-center gap-10 lg:p-10 md:p-10'>
                {/* Kontaktiraj nas */}
                <motion.div
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                    className='flex flex-col w-[80%] justify-center gap-4 lg:p-10 p-2 lg:ml-5'>
                    <h1 className='text-4xl text-white font-extrabold'>KONTAKTIRAJ NAS</h1>
                    <div>
                        <hr className='w-[40%] border-red-800 border-4' />
                        <hr className='w-[35%] border-red-800 border-4 
                    mt-2' />
                    </div>
                    <a href={`tel:${telefonBroj}`} className='text-white text-4xl flex' target='_blank'><FaPhoneAlt size={35} className='mr-4' />064 94 95 922</a>
                    <div className='mt-10'>
                        <h2 className='text-white text-3xl font-serif font-bold'>Adresa:</h2>
                        <p className='text-white text-xl'>Svetozara Markovica 1 <br />Lazarevac</p>
                        <h2 className='text-white text-3xl font-serif font-bold mt-10'>Radno vreme:</h2>
                        <p className='text-white text-xl'>Pon-Pet:8h-18h <br />Subota: Ne radimo <br />Nedelja: Ne radimo</p>
                    </div>
                </motion.div>
                {/* Email */}
                <motion.div
                    variants={fadeInAnimationVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{
                        once: true,
                    }}
                    className='lg:w-[50%] h-full w-[80%] bg-black rounded-2xl opacity-80'>
                    <h1 className='text-white font-bold text-4xl text-center p-10'>POŠALJI NAM EMAIL</h1>
                    <form className='flex flex-col gap-5  p-10' ref={form} onSubmit={sendEmail}>
                        <label className='text-red-800 text-2xl'>Name</label>
                        <input className='text-xl h-10 p-1' type="text" name="user_name" />
                        <label className='text-red-800 text-2xl'>Email</label>
                        <input className='text-xl h-10 p-1' type="email" name="user_email" />
                        <label className='text-red-800 text-2xl'>Message</label>
                        <textarea className='w-full h-[120px] p-1' name="message" />
                        <button className='text-2xl text-red-800 border-white border-2 rounded-3xl p-3 font-bold font-mono' type="submit" value="Send">Send</button>
                    </form>
                </motion.div>

            </div>
            {/* navigacija  map */}
            <div className='lg:w-[50%] w-[80%] mx-auto p-5' >
                <Lokacija />
            </div>
        </div>
    )
}

export default Kontakt