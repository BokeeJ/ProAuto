import React from 'react'
//react icons
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
function Footer() {
    const telefonBroj = '064 94 95 922';
    return (
        <div className='flex flex-col items-center justify-center lg:flex-row lg:justify-evenly bg-[#111827]'>
            <div className='flex flex-col text-white p-10 items-center font-serif'>
                <h1 className='text-3xl'>Radno vreme:</h1>
                <p className='text-xl'>Ponedeljak - Petak: <br /> 08:00h - 18:00h</p>
                <p className='text-xl'>Vikendom ne radimo</p>
            </div>
            <hr className='text-white w-[50%] lg:hidden' />
            <div className='flex flex-col text-white p-10 gap-2 items-center font-serif'>
                <h1 className='text-3xl'>Zaprati Nas:</h1>
                <a href='https://www.facebook.com/ProAutoLAZAREVAC/?locale=sr_RS' target='_blank' className='flex gap-2'><FaFacebook size={25} /><span className='text-xl mr-2'>Facebook</span></a>
                <a href="https://www.instagram.com/servis_farova_proauto/" target='_blank' className='flex'><GrInstagram size={25} className='mr-2' /><span className='text-xl'>Instagram</span></a>

            </div>
            <hr className='text-white w-[50%] lg:hidden' />
            <div className='flex flex-col text-white p-10 gap-2 items-center font-serif lg:mt-10'>
                <h1 className='text-3xl'>Kontaktiraj Nas:</h1>
                <p className='text-xl'>Lazarevac, Svetozara markovic 1 </p>
                <a href='https://www.google.com/maps/dir//svetozara+markovic+1,+Lazarevac/@44.3803016,20.1974505,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x475a01d94d0752e7:0x4c41a02f529df390!2m2!1d20.2798512!2d44.3803312?hl=sr&entry=ttu' className='flex' target='_blank'><span className='text-xl'>Lokacija</span><FaLocationDot size={25} color='white' className='ml-2' /></a>
                <a href={`tel:${telefonBroj}`} className='text-white text-xl flex' target='_blank'><span className=''>Pozovite nas</span><FaPhoneAlt size={25} className='ml-2' /></a>
            </div>
        </div>
    )
}

export default Footer