
import LatestTechComponent from "./latestTechComponent";

type techType = {
    id: number,
    img:string,
    alt: string,
    latestNews: string
}

type Categoryprops = {
    techTitle: string,
    techData: techType[]
}
export default function LatestCategoryComponent(props:Categoryprops)
{
    const {techTitle, techData}  = props;
    const content = techData.map((dataItem)=>{
        return <LatestTechComponent key={dataItem.id} item={dataItem}/>
    });

    return (
        <div className='w-[100%] mx-auto mt-[25px] mb-[25px]  '>
            <p className="text-center">The latest on {techTitle}</p>

            <div className="overflow-x-auto gap-x-[50px] flex flex-row  h-[350px] w-[100%] py-[25px] px-[25px] mx-auto border-black border-2">
                {content }
            </div>
        </div>
    )
}