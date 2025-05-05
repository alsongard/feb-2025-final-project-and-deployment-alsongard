import Image from "next/image";
import Link from "next/link";
import {techInfoData} from "./lib/data";
import TechInfoComponent from "./components/home_component";
export default function Home() {


  const content = techInfoData.map((dataItem)=>{
    return <TechInfoComponent key={dataItem.id} item={dataItem}/>
  })
  return (
    <main className="">
      <section className="w-full h-[90vh] ">
        <div className="mySlide w-full h-full relative">
            <Image fill src="/image/James-Webb-Space-Telescope-Mirror-Deployed-scaled.jpg" alt="james-web"/>
            <div className="imgText bg-black p-[20px] w-[260px] absolute top-[60%] right-[10%] font-[Orbitron] animate-[imageText_2.3s_ease-in_forwards]">
                <p className="text-center">James Web Telescope</p>
            </div>
        </div>
      </section>

      {/* <!-- tech info --> */}
      <section className="my-[20px] w-screen" id="techInfo">
        <h1 className="text-center text-[30px] my-[10px]">TECHSPACE</h1>
        <p className="text-center">Get the latest news from various tech companies, research and exploration </p>
        <div className="tech-container w-full h-[420px] max-sm:h-[350px] border-[2px] border-black my-[20px] flex flex-row gap-[50px] overflow-x-auto px-[50px] py-[20px] ">
          {content}
        </div>
      </section>

      {/* <!-- get notification --> */}
      <section id="notification-company my-[50px] w-screen">
        <h1 className="text-center text-[30px] my-[10px]">Get In Touch</h1>
        <div className="notification-container w-[90%] flex flex-row max-sm:flex-col max-sm:items-center max-sm:gap-y-[20px] mx-auto justify-between px-[10px] py-[30px]">
          <form className='grow-[0.5] p-[20px] shadow-[0_0_1px_black]' action="">
            <label className='block w-full my-[5px]'>Enter your email to get notification</label>
            <input className='block w-full my-[10px] mb-[15px] shadow-[0_0_1px_black] p-[2.5px] rounded-sm' type="email" placeholder="Enter email" required />
            <input className="w-[30%] bg-green-300 rounded" type="submit" value="submit"/>
          </form>
    
          <div className="organization w-[330px] overflow-x-auto h-[100px] border-[2px] border-black rounded-[13px] flex flex-row items-center px-[18px] py-[2.5px] gap-[35px]">
            <div className="org-container relative flex-[0_0_70px] h-[70px] w-[70px] rounded-full ">
              <Image className="rounded-full" alt='tech_stack' fill src="/image/SpaceX-Simbolo.jpg"/>
            </div>
            <div className="org-container relative flex-[0_0_70px] h-[70px] w-[70px] rounded-full">
                <Image className="rounded-full" alt='tech_stack' fill src="/image/nasa-rocket-logo-vector-24516260.jpg"/>
            </div>
            <div className="org-container relative flex-[0_0_70px] h-[70px] w-[70px] rounded-full">
                <Image className="rounded-full" alt='tech_stack' fill src="/image/china_national_space_agency.jpeg"/>
            </div>
            <div className="org-container relative flex-[0_0_70px] h-[70px] w-[70px] rounded-full">
                <Image className="rounded-full" alt='tech_stack' fill src="/image/ESA-logo-updated-1024x1024.png"/>
            </div>
            <div className="org-container relative flex-[0_0_70px] h-[70px] w-[70px] rounded-full">
                <Image className="rounded-full" alt='tech_stack' fill src="/image/SpaceX-Simbolo.jpg"/>
            </div>
          </div>
        </div>
      </section>

    </main>
      
  )
};
