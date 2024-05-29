import Image from "next/image";

const AboutPage = () => {
 return (
 <div className='flex flex-col md:flex-row'>
 
    {/* TEXT */}
    <div className="w-full md:w-1/2 h-1/2 md:h-screen text-center content-center px-[10%] pt-[5%] pb-[2%] md:p-[5%] text-white">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold pb-7">About my blog</h1>
        <p className="text-lg sm:text-xl md:text-2xl">
            This Blog was created by Karen González, a Front End Developer. 
            The main purpose of this Blog is to document the technologies I have acquired, what I have learned about them, writing the concepts with my own words, as I understand them.
        </p>
    </div>

    {/* IMAGE */}
        <div className="h-1/2 md:h-screen md:w-1/2 flex p-5">
            <div className="flex h-[15rem] sm:h-[18rem] md:h-[26rem] lg:h-[30rem] w-[15rem] sm:w-[19rem] md:w-[23rem] lg:w-[30rem] rounded-xl m-auto">
            <Image src="public/about.jpg" alt="BackgroundImage" width={600} height={400} priority className="rounded-xl"/>
            </div>
        </div>
 </div>
)
}

export default AboutPage