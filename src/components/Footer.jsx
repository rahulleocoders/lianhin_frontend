import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoYoutube } from 'react-icons/io'
import { FootLinks } from '@/local_data'

let FooteNavigation = () => {
    return (
        <div className="flex gap-3 md:gap-7 flex-wrap justify-center">
            {FootLinks?.map((oneLink, i) =>
                <>
                    <Link className="font-medium hover:text-red-500" key={oneLink?.title} href={`https://www.lianhin.com/${oneLink?.url}`} target="_blank">{oneLink?.title}</Link>
                    {(FootLinks.length - 1) === i ? null : <p>|</p>}
                </>
            )}
        </div>
    )
}

let SocialMedia = () => {
    return (
        <div className="flex gap-3 items-center">
            <p>Follow us on :</p>
            <Link href='https://www.facebook.com/lianhinpteltd/' target='_blank'><FaFacebookF size={19} className='hover:text-blue-600 ' /></Link>
            <Link href='https://www.instagram.com/lianhinpl/' target='_blank'><BsInstagram size={20} className=' hover:text-pink-400' /></Link>
            <Link href='https://www.youtube.com/@lianhinpteltd' target='_blank'><IoLogoYoutube size={20} className='hover:text-red-500' /></Link>
        </div>
    )
}


const Footer = () => {
    return (
        <div className=' bg-secondary text-white items-center flex flex-col gap-7 py-6 px-3 md:px-12'>
            <FooteNavigation />
            <SocialMedia />
            {/* <div className=" pt-4 border-t-2 w-full text-center border-gray-500">
                <p>© Copyright Lian Hin 2021 All Rights Reserved.</p>
            </div> */}
        </div >
    )
}

export default Footer