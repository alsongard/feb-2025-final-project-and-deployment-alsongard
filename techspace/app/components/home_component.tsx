import Image from "next/image"

export default function TechInfoComponent(props: any)
{
    return (
        <div>
            <div className="tech-info-container relative h-full w-[400px] max-sm:w-[300px] flex-shrink-0 flex-grow-0 p-[1px] shadow-[0_0_5px_3px_#5d6d7e] flex flex-col justify-center rounded-[10px]">
                <div className='relative h-[98%]'>
                    <Image className="rounded-t-[10px]"  alt="tech_images" fill src={props.item.img}/>
                </div>
                <p className="text-center">{props.item.imgTxt}</p> 
            </div>
        </div>
    )
}