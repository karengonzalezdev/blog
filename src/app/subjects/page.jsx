import SideBar from "@/components/sideBar";
import Image from "next/image";

const SubjectsPage = () => {
 return (
 <div className='h-screen flex'>
   
    {/* SIDEBAR */}
    <div className="absolute md:relative w-full md:w-1/5">
    <SideBar />
    </div>

   <div className="md:w-4/5 flex flex-col">
   <div className="h-[60%] flex flex-row-reverse md:flex-row">

   <div className="bg-green-500 w-[40%] md:w-[30%] content-center">
    {/* IMAGE */}
            <div className="flex h-[5rem] sm:h-[30%] md:h-[8rem] lg:h-[12rem] w-[6rem] pt-2 sm:pt-0 sm:w-[50%] md:w-[80%] m-auto rounded-xl rotate-90 md:rotate-0">
            <Image src="/example.jpg" alt="Arrow" width={600} height={400} priority className="rounded-xl"/>
            </div>
        </div>
    {/* TEXT */}
   <div className="bg-red-500 text-left content-center pl-[5%] w-[60%] md:w-[70%]">
    <h1 className="text-white font-bold text-3xl sm:text-5xl text-center">Start exploring</h1>
    </div>
    </div>

   {/* BANNER */}
   <div className="h-[40%] md:w-[100%] flex bg-yellow-500">
            <Image src="/example.jpg" alt="BackgroundImage" width={1100} height={400} priority className=""/>
        </div>
        </div>
 </div>

)
}

export default SubjectsPage