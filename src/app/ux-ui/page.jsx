import SideBar from "@/components/sideBar";

const UxUiPage = () => {
    return (
        <div className='md:h-screen md:overflow-auto flex'>
            
        {/* FILL */}
        <div className="md:relative md:w-1/5">
        </div>
    
        {/* SIDEBAR */}
        <div className="absolute w-full md:w-1/5">
            <SideBar />
        </div>
    
        {/* TEXT */}
        <div className="text-white py-8 px-20 md:w-4/5 flex flex-col">
            <h1 className="text-neonPink text-3xl md:text-7xl text-center pb-5">UX/UI</h1>
            <p className="text-justify text-xl md:text-2xl py-2"></p>
            <p className="text-justify text-xl md:text-2xl py-2"></p>
            <p className="text-justify text-xl md:text-2xl py-2"></p>
        </div>
    
        </div>
       )
   }
   
   export default UxUiPage