import React from 'react'

function Lokacija() {
    return (
        <div>
            <iframe className='w-full h-[450px] rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d91250.42407460047!2d20.19745054631958!3d44.38030158053374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x475a01d94d0752e7%3A0x4c41a02f529df390!2ssvetozara%20markovic%201%2C%20Lazarevac!3m2!1d44.3803312!2d20.2798512!5e0!3m2!1ssr!2srs!4v1714597186332!5m2!1ssr!2srs"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Lokacija