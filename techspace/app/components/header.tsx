'use client'
import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import Link from "next/link";
import {throttle} from 'lodash';
import clsx from "clsx";
import { IoMdMenu } from "react-icons/io";


export default function Header()
{

    //HEADER STICKY
    const [headerMove, setHeaderMove] = React.useState(false);

    React.useEffect(()=>{
        //use throttle for better UI, called 100ms once
        const handleScroll = throttle(()=>{
            setHeaderMove(()=>{
                return window.pageYOffset > 0
            })
        }, 100)
        window.addEventListener('scroll', handleScroll)
        //remove memory leaks
        return ()=>{window.removeEventListener('scroll', handleScroll)}
    }, [])


    //SMALL NAV
    const [smallNavDisplay, setSmallNavDisplay] = React.useState(false);
    function displaySmallMenu()
    {
        setSmallNavDisplay((prevValue)=>{return !prevValue})
    }

    // flex flex-row justify-between  px-[40px] pl-[20px] py-[2.5px]  
    return (
        <header id="header" className={clsx(headerMove ? "h-[70px] sticky top-0 bg-[rgba(235,188,113,0.93)] " : "h-[100px] bg-[rgba(248,196,113,0.671)]", ` relative z-[1001] flex flex-row pl-[30px] pr-[50px] items-center  justify-between `)}>
        <div className="  font-normal uppercase">
            <h1 className='font-[600] text-[40px] max-md:text-[33px] max-sm:text-[25px]'>TechSpace</h1>
        </div>

        <div className="max-sm:hidden flex flex-row justify-between items-center w-[500px]">
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
        <IoMdMenu onClick={displaySmallMenu} className="hidden max-sm:block text-[30px]"/>
        <div className={clsx(smallNavDisplay ? "absolute " : "hidden ", " top-[70px] min-sm:hidden right-[50px] w-[200px] rounded-md bg-[rgb(224,165,70)]")}>
            <ul className="text-center list-none ">
                <li><Link className='text-black  font-[600] uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="/">Home</Link></li>
                <li><Link className='text-black  font-[600] uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="/about">About</Link></li>
                <li><Link className='text-black  font-[600] uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="/latest">Latest</Link></li>
                <li><Link className='text-black  font-[600] uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="/contact">Contact</Link></li>
            </ul>
        </div>
    </header>
    )
}