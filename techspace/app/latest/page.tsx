import { latestData } from "../lib/latestNews";
import LatestCategoryComponent from "./components/latestCategoryComponent";
export default function Latest()
{

    const keys = Object.keys(latestData);
    console.log(keys); // keys is returns as an array of all the keys
    const content = Object.keys(latestData).map((dataItem)=>{
        <LatestCategoryComponent key={dataItem} techTitle={dataItem} techData={latestData[dataItem]}/>
    })
    console.log(`this is content: ${content}`);
    return (
        <section className="mb-[50px]">
            <h1 className="text-center text-[30px] mt-[20px] ">Latest</h1>
            <div className='w-[80%] mx-auto'>
                <p  className="">Get the scoop on the latest and greatest in tech — fresh stories, wild discoveries, and breakthrough innovations all in one place. Whether it's space rockets, AI marvels, or jaw-dropping scientific breakthroughs, we’ve got you covered. Dive in and stay ahead of the curve!</p>
            </div>
            
            {
                Object.keys(latestData).map((dataItem)=>
                    <LatestCategoryComponent key={dataItem} techTitle={dataItem} techData={latestData[dataItem]} />
            )
            }
        </section>
    )
}