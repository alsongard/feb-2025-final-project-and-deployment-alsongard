import { MdOutlineWbSunny } from "react-icons/md";

export default function Header()
{
    // flex flex-row justify-between  px-[40px] pl-[20px] py-[2.5px]  
    return (
        <header id="header" className="flex flex-row pl-[30px] pr-[50px] items-center h-[100px] justify-between bg-[rgba(248,196,113,0.671)]">
        <div className="font-orbitron text-[40px] font-normal uppercase">
            <h1>TechSpace</h1>
        </div>

        <div className="flex flex-row justify-between items-center w-[500px]">
            <ul className="flex flex-row justify-between list-none w-[400px]">
                <li><a className='no-underline text-black font-orbitron font-medium uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="#">Home</a></li>
                <li><a className='no-underline text-black font-orbitron font-medium uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="#">About</a></li>
                <li><a className='no-underline text-black font-orbitron font-medium uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="#">Latest</a></li>
                <li><a className='no-underline text-black font-orbitron font-medium uppercase tracking-[3px] hover:text-white transition-colors duration-200 ease-in' href="#">Contact</a></li>
            </ul>

            {/* <!-- sun icon --> */}
            {/* <i id="sun-icon" class='bx bx-sun'></i> */}
            <MdOutlineWbSunny/>
        </div>
    </header>
    )
}