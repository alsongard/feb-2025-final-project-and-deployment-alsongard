import Image from "next/image"

export default function TeamComponent(props: any)
{
    return (
        <div className='team-member h-[80px] grow-0 shrink-0 basis-[350px] rounded-md items-center   py-0 flex flex-row border-black border-2'>
            <div className="relative overflow-auto  left-[-20px] h-[90px] w-[80px] ">
                <Image className="rounded-[50%]  absolute" src={props.item.img} alt={props.item.alt} fill/>
            </div>
            <div>
                <p>{props.item.name}</p>
                <p>{props.item.topics}</p>
            </div>
        </div>
    )
}