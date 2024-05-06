import Image from "next/image";

const AboutPage = () => {
 return (
 <div className='flex'>
 
    {/* TEXT */}
    <div className="w-1/2 h-screen text-center content-center p-[5%] text-white">
        <h1 className="text-5xl font-bold pb-7">About my blog</h1>
        <p className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quam quos asperiores itaque dolorem laudantium accusantium ducimus totam omnis expedita illum repellat magnam commodi fugiat debitis, rem deleniti nisi error?</p>
    </div>

    {/* IMAGE */}
        <div className="h-full w-full md:w-1/2 flex">
            <div className="flex h-[12rem] sm:h-[18rem] md:h-[26rem] lg:h-[28rem] w-[13rem] sm:w-[19rem] md:w-[28rem] lg:w-[30rem] rounded-xl m-auto">
            <Image src="/example.jpg" alt="BackgroundImage" width={600} height={400} priority className="rounded-xl"/>
            </div>
        </div>
 </div>
)
}

export default AboutPage