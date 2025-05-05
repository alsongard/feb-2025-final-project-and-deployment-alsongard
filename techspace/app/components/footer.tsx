import {Orbitron} from 'next/font/google';
import Link from 'next/link';
const orbitron = Orbitron(
    { 
        subsets: ['latin'],
        weight: ['400', '500','600', '700']
    }
)
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Footer() {
    return (
        <footer className='bg-[#9c9c5b] px-[50px] py-[100px] flex flex-row max-ssm:flex-col max-ssm:gap-y-[20px] justify-between items-center'>
            <div className="foot-name text-[30px]">
                <h1 className={`${orbitron.className} text-[50px] font-[600] max-md:text-[40px] max-sm:text-[28px]`}>TECHSPACE</h1>
            </div>

            <div className="foot-container flex flex-row max-ssm:flex-col max-ssm:gap-y-[20px] max-ssm:items-center  justify-between  items-center w-[55%] max-ssm:w-[90%] ">
                <ul className="footnav list-none flex flex-col max-sm:text-[14px] max-sm:w-[200px] max-ssm:items-center  w-[300px]">
                    <li><Link href="/" className=' text-center  text-black  font-medium uppercase tracking-[3px] hover:text-white hover:pl-[8px] transition-[padding] ease-out duration-200'>Home</Link></li>
                    <li><Link href="/about" className=' text-center  text-black  font-medium uppercase tracking-[3px] hover:text-white hover:pl-[8px] transition-[padding] ease-out duration-200' >About</Link></li>
                    <li><Link href="/latest" className=' text-center  text-black  font-medium uppercase tracking-[3px] hover:text-white hover:pl-[8px] transition-[padding] ease-out duration-200' >Latest</Link></li>
                    <li><Link href="/contact" className=' text-center  text-black  font-medium uppercase tracking-[3px] hover:text-white hover:pl-[8px] transition-[padding] ease-out duration-200' >Contact</Link></li>
                </ul>


                {/* <!-- social-icons --> */}
                <div className="social-icons flex flex-row justify-between   w-[220px]">
                    <FaXTwitter className='text-[30px]  max-md:text-[25px]  hover:text-white transition-colors ease-out duration-200'/>
                    <FaFacebook className='text-[30px]  max-md:text-[25px] hover:text-white transition-colors ease-out duration-200' />
                    <BiLogoGmail className='text-[30px]  max-md:text-[25px] hover:text-white transition-colors ease-out duration-200' />
                    <IoLogoWhatsapp className='text-[30px]  max-md:text-[25px] hover:text-white transition-colors ease-out duration-200' />
                </div>
            </div>
        </footer>
    )
}