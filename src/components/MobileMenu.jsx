'use client'
import { NavLinks } from '@/local_data'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
const MobileMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex flex-col md:hidden '>
            <p className='text-primary-color cursor-pointer' onClick={() => setOpen(pre => !pre)}>{open ? <IoMdClose size={30} /> : <HiOutlineMenu size={30} />}</p>
            <div className={` ${open ? 'flex' : 'hidden'} left-0 absolute top-11 w-screen h-screen justify-center bg-white bg-opacity-80 transition-all duration-300  items-center  flex-col gap-3 py-3 z-20`} >
                {NavLinks?.map((oneLink) => <Link className=" text-black text-lg font-medium hover:text-red-500" key={oneLink?.title} href={`https://www.lianhin.com/${oneLink?.url}`} target="_blank">{oneLink?.title}</Link>)}
            </div>
        </div>
    )
}

export default MobileMenu