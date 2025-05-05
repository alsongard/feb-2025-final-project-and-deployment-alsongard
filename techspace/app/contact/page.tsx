import { IoLogoYoutube } from "react-icons/io";
import { BsDiscord } from "react-icons/bs";
export default function Contact()
{
    return (
        <section className="w-[100vw]">
            <h1 className="text-center text-[30px] mt-[20px] ">Contact</h1>

            
            <form className=' form w-[50%]  mt-[50px]  rounded-md mx-auto py-[25px] px-[25px]'>
                <label className='block w-full'>Email</label>
                <input className="w-full block border-2 border-black rounded-md placeholder:text-black p-[2.5px]" type='email' placeholder="Enter email..."/>
                <label className='block w-full'>Phone Number</label>
                <input className="w-full block border-2 border-black rounded-md placeholder:text-black p-[2.5px]" type='number' placeholder="Enter phone number..."/>
                <label className='block w-full'>Other Information</label>
                <textarea className='block w-full rounded-md border-2 border-black '/>
                <input  className="block w-[150px] rounded-md mx-auto my-[10px] bg-[rgb(163,228,215)] hover:cursor-pointer" type='submit' value='submit'/>
            </form>
            


            <div className='w-[50%] mx-auto my-[50px]'>
                <p className='text-center'>Want to know more about us visit our youtube channel or discord. </p>
                <div className='flex flex-row justify-center gap-x-[20px]'>
                    <a href="#" className='text-center py-[10px] px-[15px]  bg-red-500 inline-block rounded-md'>YoutBube</a>
                    <a href="#" className="text-center py-[10px] px-[15px] text-white bg-blue-950 inline-block rounded-md">Discord</a>
                </div>
             
            </div>
        </section>
    )
}