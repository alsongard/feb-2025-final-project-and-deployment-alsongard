import { MdOutlineWbSunny } from "react-icons/md";
import Link from "next/link";

import {Orbitron} from 'next/font/google'

export default function Header()
{
    // flex flex-row justify-between  px-[40px] pl-[20px] py-[2.5px]  
    return (
        <header id="header" className={` flex flex-row pl-[30px] pr-[50px] items-center h-[100px] justify-between bg-[rgba(248,196,113,0.671)]`}>
        <div className=" text-[40px] font-normal uppercase">
            <h1 className='font-[600]'>TechSpace</h1>
        </div>

        <div className=" flex flex-row justify-between items-center w-[500px]">
            <ul className="flex flex-row justify-between list-none w-[400px]">
                <li><Link className='text-black  font-[600] uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="/">Home</Link></li>
                <li><Link className='text-black  font-[600] uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="/about">About</Link></li>
                <li><Link className='text-black  font-[600] uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="/latest">Latest</Link></li>
                <li><Link className='text-black  font-[600] uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="/contact">Contact</Link></li>
            </ul>

            {/* <!-- sun icon --> */}
            {/* <i id="sun-icon" class='bx bx-sun'></i> */}
            <MdOutlineWbSunny/>
        </div>
    </header>
    )
}