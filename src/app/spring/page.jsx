import SideBar from "@/components/sideBar";

const SpringPage = () => {
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
            <h1 className="text-neonGreen text-3xl md:text-7xl text-center pb-5">Spring</h1>
            <p className="text-justify text-xl md:text-2xl py-2">Spring is a framework for the development of Java applications.</p>
            <p className="text-justify text-xl md:text-2xl py-2">For the security, Spring needs to add both the standard spring-security-web and spring-security-config dependencies. And it also needs to add a class that creates a SecurityFilterChain bean, and make use of the annotation @EnableWebSecurity.</p>
            <p className="text-justify text-xl md:text-2xl py-2">To add all the test libraries to our project, we need to add all of these as independent dependencies.</p>
        </div>
    
        </div>
       )
   }
   
   export default SpringPage