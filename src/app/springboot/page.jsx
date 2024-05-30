import SideBar from "@/components/sideBar";

const SpringbootPage = () => {
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
            <h1 className="text-3xl md:text-7xl text-center bg-red-500 pb-5">SpringBoot</h1>
            <p className="text-justify text-xl md:text-2xl py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium, distinctio iste, temporibus sit ipsa autem harum assumenda non quo eum tempora doloribus voluptas fugiat. Et corporis amet quidem nam.</p>
            <p className="text-justify text-xl md:text-2xl py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis est quia sit! Debitis nesciunt suscipit qui. Eaque omnis vitae neque magni est nostrum, optio itaque libero sint necessitatibus ab recusandae?</p>
            <p className="text-justify text-xl md:text-2xl py-2"></p>
        </div>
    
        </div>
       )
   }
   
   export default SpringbootPage