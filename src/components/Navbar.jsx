import { NavLinks } from "@/local_data"
import Image from "next/image"
import Link from "next/link"
import logo from "../../public/images/linhanlogo.png"
import MobileMenu from "./MobileMenu"


const Navbar = () => {
    return (
        <nav className="py-2 px-6 md:py-5 md:px-16 shadow-lg flex justify-between items-center relative ">
            <Image src={logo}  alt="lianhin" height={100} width={100} className="w-32 h-7  md:h-10 md:w-44" />
            <div className="hidden md:flex gap-12 items-center">{NavLinks?.map((oneLink) => <Link className=" text-black font-medium hover:text-red-500" key={oneLink?.title} href={`https://www.lianhin.com/${oneLink?.url}`} >{oneLink?.title}</Link>)}</div>
            <MobileMenu />
        </nav>
    )
}

export default Navbar