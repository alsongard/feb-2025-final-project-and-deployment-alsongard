import Image from "next/image"
export default function LatestTechComponent(props:any)
{
    return (
        <div className='hoverBox grow-0 shrink-0 overflow-hidden w-[350px] h-full relative '>
            <div className="imgContainer relative h-full w-full rounded-md ">
                <Image src={props.item.img} className="rounded-md" fill  alt={props.item.altText}/>
            </div>
            <p className="hoverText text-center absolute text-[23px] text-black font-extrabold">{props.item.latestNews}</p>
        </div>
    )
}