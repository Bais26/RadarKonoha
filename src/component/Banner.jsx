import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className='px-6 mx-auto py-40 bg-black'>
            <div className='text-white text-center'>
                <h1 className='text-5xl font-semibold font-popins mb-5'>Temukan Berita dan Cerita Konoha di Sini!</h1>
                <p className='text-gray-200 text- w-3/5 mx-auto mb-5 font-popins'>Nikmati berita dan cerita terbaru dari Konoha. Bergabunglah dengan komunitas kami untuk menulis, membaca, dan berbagi ide. Kami siap membantu Anda dengan semua yang Anda butuhkan untuk memulai!
                </p>
                <div className='pt-2'>
                    <Link to="/register" className='font-medium hover:text-second'>Bergabung <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
