import Image from "next/image"
import { teamData } from "../lib/team_data";
import TeamComponent from "./components/team_components";
import Link from "next/link";
import {Montserrat } from "next/font/google";
const montserrat = Montserrat({
    weight: ['400', '500', '600', '700']
})


export default function About()
{

    const team_content = teamData.map((dataItem)=>{
        return <TeamComponent key={dataItem.id} item={dataItem}/>
    })
    return (
        <section className={`w-[100vw] `}>
            <h1 className="text-center text-[30px] my-[10px]">About Us</h1>

            <div className={`${montserrat.className}`}>
                <div className="w-[90%] mx-auto mb-[20px]">
                    <p className={`text-center  text-[20px]`}>Welcome to TechSpace, your gateway to the cutting edge of science and innovation. We are passionate explorers of the ever-evolving world of technology, where curiosity meets creation and imagination drives discovery. Our mission is simple: to bring you closer to the marvels shaping our future—from the far reaches of space to the smallest breakthroughs in atomic research.</p>
                </div>

                <div className='w-[80%]  mx-auto'>
                    <p className="text-left text-[19px]">At TechSpace, we dive deep into the realms of:</p>
                    <ul className="list-disc w-[80%] text-[18px] mx-auto my-[20px]">
                        <li className=''>
                        Space Exploration: <p> Discover missions beyond Earth, the engineering behind rockets, and the science driving humanity's pursuit of the stars.</p>
                        </li>
                        <li>
                        Robotics: <p>Follow the rise of intelligent machines—from agile robots in factories to autonomous explorers on Mars.</p>
                        </li>
                        <li>
                        Artificial Intelligence: <p>Understand how AI is transforming industries, redefining human interaction, and shaping ethical debates.</p>
                        </li>
                        <li>
                        Astronomy: <p>Learn about cosmic phenomena, telescopic breakthroughs, and the mysteries of the universe yet to be uncovered.</p>
                        </li>
                        <li>
                        Nuclear Physics: <p>Explore the frontier of atomic research, particle collisions, and the quest for clean, sustainable energy.</p>
                        </li>
                        <li>
                        Aviation and Aeronautics:<p>Track advancements in aerospace engineering, supersonic travel, and drone technology.</p>
                        </li>
                        <li>
                        Scientific Research & Innovation: <p>Stay informed about breakthroughs across biology, chemistry, physics, and interdisciplinary fields that are changing the way we live and think.</p>
                        </li>
                    </ul>
                    <div className="my-[20px] text-[18px]">
                        <p>Whether you're a researcher, a student, a tech enthusiast, or just endlessly curious—this platform is built for you. Our goal is to break down complex topics into compelling, accessible stories without losing the depth that makes science truly fascinating.</p>
                        <p>At the heart of TechSpace is a love for knowledge, discovery, and the belief that science is for everyone—not just labs and lecture halls. Whether you're a researcher, student, engineer, dreamer, or just someone who loves a good rabbit hole, you're in the right place.Thanks for stopping by. Explore, question, and enjoy the journey with us.</p>
                    </div>

                    <div className="w-[50%]  mx-auto">
                        <p className="text-center text-[18px]">Click the link below to view the latest on TechSpace</p>
                        <button className="latestNewsBtn mt-[5px] block mx-auto w-[150px]  py-[5px] bg-[#617bb4b7]"><Link href='/latest'> Latest</Link></button>
                    </div>
                </div>
            </div>

            {/* THE TEAM */}
            <div className="w-[90%] mx-auto mb-[20px]">
                <h1 className='text-center text-[30px] my-[10px]'>The Team</h1>
                <p className='text-center'> Meet the team responsible for the awesome and fantastic news</p>
                <div className='flex flex-row gap-x-[52px] overflow-x-auto py-[30px] px-[40px] rounded-md border-blue-300 border-2'>
                    {team_content}
                </div>
            </div>

            {/* make contribution */}
            <div className='makeContrib w-[60%] mx-auto py-[50px] mb-[20px]  my-[50px] rounded-md'>
                <p className='text-center w-[65%] mx-auto'>To make contributions, enter your email our team will get in touch with you</p>
                <form className=' relative w-[65%]  mx-auto '>
                    <input className='block rounded-md w-full py-[2.5px] px-[5px] border-[1.1px] border-white' placeholder='Enter email....'/>
                    <input className='block rounded-md mt-[15px] bg-[#617bb4b7] hover:bg-[#617bb4]  py-[5px] mx-auto w-[300px]' type='submit' value='submit'/>
                </form>
            </div>
        </section>
    )
}