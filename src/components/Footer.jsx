import React from 'react'
import FooterImage from '../assets/footer.png'

import { AiFillLinkedin, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoTiktok } from 'react-icons/bi'

function Footer() {
    return (
        <footer className='px-16 pt-48 -mt-48' style={{
            background: `url('${FooterImage}')`,
            backgroundSize: 'cover'
        }}>
            <div className="flex gap-4 text-white">
                <AiOutlineInstagram className='w-9 h-9' />
                <AiFillLinkedin className='w-9 h-9' />
                <BiLogoTiktok className='w-9 h-9' />
                <AiFillYoutube className='w-9 h-9' />
            </div>
            <div className="flex gap-3 text-white mt-14">
                <div className="w-4/12">
                    <h2 className='font-semibold text-lg mb-6'>PT BUILD MINDSET TOGETHER</h2>
                    <p>Jl. Empu Tantular No.2, Bandarharjo, Kec. Semarang Utara, Kota Semarang, Jawa Tengah 50175</p>
                </div>
                <div className="w-3/12">
                    <h2 className='font-semibold text-lg mb-6'>Contact Us</h2>
                    <p className='my-3'>+62 815-6840-7076 ( WA Only )</p>
                    <p className='my-3'>support@itmind.co.id</p>
                </div>
                <div className="w-3/12">
                    <h2 className='font-semibold text-lg mb-6'>Company</h2>
                    <p className='my-3'>Privacy & Policy</p>
                    <p className='my-3'>Terms & Condition</p>
                </div>
                <div className="w-2/12">
                    <h2 className='font-semibold text-lg mb-6'>iTmind</h2>
                    <p className='my-3'>Copyright &copy; 2023 All rights reserved</p>
                </div>
            </div>
            <p className='pb-10 mt-24 text-xl text-[#B7B7B7]'>
                Any results stated in the webinar & online course are our personal results. Please understand our results are not typical, we are not implying you will achieve a similar outcome, or even create any result for yourself. We are using these references for example purposes only. Your results will vary and depend on many deciding factors, such as (but not limited to), your background, experience, and commitment. Huge effort and action is required. If you’re not willing to accept that, please DO NOT JOIN THIS PROGRAM.
            </p>
        </footer>
    )
}

export default Footer