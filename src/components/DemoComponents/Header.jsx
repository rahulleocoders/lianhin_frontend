import Savedemo from './Savedemo'
import ShareDemo from './ShareDemo'
import ChangeRoom from './ChangeRoom'
import ChangeCameraAngle from '../ChangeCameraAngle'
import CommonBtn from '../CommonBtn'
// import Image from 'next/image'
// import logo from "../../../public/images/linhanlogo.png"
// import Link from 'next/link'
// import SmDroupdown from '../SmDroupdown'

const Header = () => {
  return (
    <section className=' flex justify-between py-[10px] px-5 items-center border shadow-lg'>
      {/* <Link href="/" className="flex items-center md:ml-5"> <Image src={logo} width={170} height={40} alt="Lihanin" className=' ' /></Link> */}
      <div className="flex md:gap-7 items-center">
        <div className=" mr-2">
          <ChangeRoom />
        </div>
        <CommonBtn label='abc' />
        {/* <ChangeCameraAngle /> */}
        <div className="flex gap-5">
          <Savedemo />
          <ShareDemo />
        </div>
      </div>
    </section>
  )
}

export default Header