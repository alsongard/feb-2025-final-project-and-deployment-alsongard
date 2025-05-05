import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Footer() {
    return (
        <footer className='bg-[#9c9c5b] px-[50px] py-[100px] flex flex-row justify-between items-center'>
            <div className="foot-name text-[30px]">
                <h1>TECHSPACE</h1>
            </div>

            <div className="foot-container flex flex-row justify-around items-center basis-1/2">
                <ul className="footnav list-none flex flex-col w-[300px]">
                    <li><a className='no-underline text-black font-[Orbitron] font-medium uppercase tracking-[3px] hover:text-white hover:pl-[8px] transition-[padding] ease-out duration-200' href="#">Home</a></li>
                    <li><a className='no-underline text-black font-[Orbitron] font-medium uppercase tracking-[3px] hover:text-white hover:pl-[8px] transition-[padding] ease-out duration-200' href="#">About</a></li>
                    <li><a className='no-underline text-black font-[Orbitron] font-medium uppercase tracking-[3px] hover:text-white hover:pl-[8px] transition-[padding] ease-out duration-200' href="#">Latest</a></li>
                    <li><a className='no-underline text-black font-[Orbitron] font-medium uppercase tracking-[3px] hover:text-white hover:pl-[8px] transition-[padding] ease-out duration-200' href="#">Contact</a></li>
                </ul>


                {/* <!-- social-icons --> */}
                <div className="social-icons flex flex-row justify-between  w-[220px]">
                    <FaXTwitter className='text-[30px] hover:text-white transition-colors ease-out duration-200'/>
                    <FaFacebook className='text-[30px] hover:text-white transition-colors ease-out duration-200' />
                    <BiLogoGmail className='text-[30px] hover:text-white transition-colors ease-out duration-200' />
                    <IoLogoWhatsapp className='text-[30px] hover:text-white transition-colors ease-out duration-200' />
                </div>
            </div>
        </footer>
    )
}