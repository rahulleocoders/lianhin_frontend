import React from 'react'
import CommonBtn from '../CommonBtn'
import Savedemo from './Savedemo'
import Image from 'next/image'
import logo from "../../../public/images/linhanlogo.png"
import ShareDemo from './ShareDemo'
import Link from 'next/link'
import ChangeRoom from './ChangeRoom'
// import SmDroupdown from '../SmDroupdown'

const Header = () => {
  return (
    <section className=' flex justify-between py-[10px] px-5 items-center border shadow-lg'>
      <Link href="/" className="flex items-center md:ml-5"> <Image src={logo} width={170} height={40} alt="Lihanin" className=' ' /></Link>
      <div className="flex md:gap-7 items-center">
        <div className=" mr-2">
          <ChangeRoom />
        </div>
        <CommonBtn label='abc' />
        <div className="flex gap-5">
          <Savedemo />
          <ShareDemo />
        </div>
      </div>
    </section>
  )
}

export default Header