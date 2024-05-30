import SideBar from "@/components/sideBar";

const RazorPage = () => {
    return (
        <div className='md:h-screen md:overflow-auto flex'>
            
        {/* FILL */}
        <div className="md:relative md:w-1/5">
        </div>
    
        {/* SIDEBAR */}
        <div className="relative md:absolute w-full md:w-1/5">
            <SideBar />
        </div>
    
        {/* TEXT */}
        <div className="text-white py-8 px-20 md:w-4/5 flex flex-col">
            <h1 className="text-3xl md:text-7xl text-center pb-5">Razor</h1>
            <p className="text-justify text-xl md:text-2xl py-2"></p>
            <p className="text-justify text-xl md:text-2xl py-2"></p>
            <p className="text-justify text-xl md:text-2xl py-2"></p>
        </div>
    
        </div>
       )
   }
   
   export default RazorPage