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

   <div className="w-[40%] md:w-[30%] p-[10%] sm:p-[11%] md:p-[10%] content-center">
    {/* IMAGE */}
            <Image src="./down.jpg" alt="Arrow" width={400} height={600} priority className="md:rotate-90 rounded-xl shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff]"/>
        </div>
    {/* TEXT */}
   <div className="flex text-left items-center content-center p-[5%] w-[60%] md:w-[70%]">
    <h1 className="text-neonPink font-bold text-3xl sm:text-5xl text-center">S</h1>
    <h1 className="text-neonYellow font-bold text-3xl sm:text-5xl text-center">t</h1>
    <h1 className="text-neonBlue font-bold text-3xl sm:text-5xl text-center">a</h1>
    <h1 className="text-neonGreen font-bold text-3xl sm:text-5xl text-center">r</h1>
    <h1 className="text-neonPink font-bold text-3xl sm:text-5xl text-center">t E</h1>
    <h1 className="text-neonBlue font-bold text-3xl sm:text-5xl text-center">x</h1>
    <h1 className="text-neonYellow font-bold text-3xl sm:text-5xl text-center">p</h1>
    <h1 className="text-neonGreen font-bold text-3xl sm:text-5xl text-center">l</h1>
    <h1 className="text-neonPink font-bold text-3xl sm:text-5xl text-center">o</h1>
    <h1 className="text-neonYellow font-bold text-3xl sm:text-5xl text-center">r</h1>
    <h1 className="text-neonGreen font-bold text-3xl sm:text-5xl text-center">i</h1>
    <h1 className="text-neonBlue font-bold text-3xl sm:text-5xl text-center">n</h1>
    <h1 className="text-neonPink font-bold text-3xl sm:text-5xl text-center">g</h1>
    </div>
    </div>

   {/* BANNER */}
   <div className="h-[40%] md:w-[100%] flex">
            <Image src="./banner.jpg" alt="Banner" width={1100} height={400} priority className=""/>
        </div>
        </div>
 </div>

)
}

export default SubjectsPage