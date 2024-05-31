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
            <h1 className="text-3xl md:text-7xl text-center pb-5">Spring Boot</h1>
            <p className="text-justify text-xl md:text-2xl py-2">Spring Boot is a Java Framework, to run applications. It is an extension of Spring framework</p>
            <p className="text-justify text-xl md:text-2xl py-2">For the security, we need to define the spring-boot-starter-security dependency, and this will add automatically all the relevant dependencies to the classpath. And it also needs to add a class that creates a SecurityFilterChain bean, and make use of the annotation @EnableWebSecurity.</p>
            <p className="text-justify text-xl md:text-2xl py-2">To include testing libraries  within our project, we only need to add the starter dependency for testing, and this automatically includes in our project all the necessary libraries, such as Spring Test, JUnit, Hamcrest, and Mockito.</p>
        </div>
    
        </div>
       )
   }
   
   export default SpringbootPage