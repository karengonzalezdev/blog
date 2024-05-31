"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {

  return (

    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className="h-screen flex flex-col lg:flex-row">

        {/* IMAGE CONTAINER */}
    <div className="h-2/3 lg:h-full lg:w-1/2 relative">
      <Image src="./principal.jpg" alt="BackgroundImage" fill priority className="border-5 border-black border-opacity-10 rounded-sm"/>
    </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 px-4 flex flex-col gap-5 items-center justify-center text-white text-justify sm:px-6 md:px-8 lg:px-12 xl:px-18 pt-5 sm:pt-5 md:pt-0 lg:pt-0 xl:pt-0 mt-6 sm:mt-6 md:mt-0 lg:mt-0 xl:mt-0">
          {/* TITLE */}
          <div className="flex text-center text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
           <h1 className="text-neonPink">T</h1>
           <h1 className="text-neonGreen">e</h1>
           <h1 className="text-orange-500">c</h1>
           <h1 className="text-neonBlue">h</h1>
           <h1 className="text-neonPink">n</h1>
           <h1 className="text-neonGreen">o</h1>
           <h1 className="text-orange-500">l</h1>
           <h1 className="text-neonBlue">o</h1>
           <h1 className="text-neonYellow">g</h1>
           <h1 className="text-neonPink">y</h1>
          </div>
          <div className="flex text-center text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
          <h1 className="text-neonGreen">B</h1>
          <h1 className="text-neonPink">l</h1>
          <h1 className="text-neonYellow">o</h1>
          <h1 className="text-neonBlue">g</h1>
          </div>
          {/* DESC */}
          <p className="text-xl lg:text-2xl xl:text-2xl">
            By Karen Gonzalez
          </p>
          
        </div>
              
  </div>

  <h1 className="text-3xl font-bold text-white pl-10 pt-10 pb-10 md:pb-5">Recent:</h1>
          {/* SECTIONS */}
      <div className="flex flex-wrap xl:justify-between items-center justify-center gap-7 md:gap-5 h-full pt-2 md:pt-10 pb-[5%] pl-[5%] pr-[5%]">
              {/* CONTAINER 1 */}
              <div className="h-[15rem] w-[16rem] sm:h-[18rem] sm:w-[19rem]  bg-neonGreen hover:scale-105 transition-all rounded-xl shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#0f0,0_0_15px_#0f0,0_0_30px_#0f0]">
                {/* TEXT */}
                <div className="h-[100%] pt-6 pl-6 pr-6 pb-6 text-center content-center">
                  <div className="text-3xl font-bold pb-3">
                  <Link href="/javascript">Javascript</Link>
                  </div>
                  <p className="text-xl">Programming language</p>
                  <p className="text-8xl font-bold">&lt; &gt;</p>
                </div>
              </div>
              {/* CONTAINER 2*/}
              <div className="h-[15rem] w-[16rem] sm:h-[18rem] sm:w-[19rem] bg-neonPink hover:scale-105 transition-all rounded-xl shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f0f,0_0_15px_#f0f,0_0_30px_#f0f]">
                {/* TEXT */}
                <div className="h-[100%] pt-6 pl-6 pr-6 pb-6 text-center content-center">
                  <div className="text-3xl font-bold pb-3">
                  <Link href="/react">React</Link>
                  </div>
                  <p className="text-xl">Programming language</p>
                  <p className="text-8xl font-bold">;</p>
                </div>
              </div>
              {/* CONTAINER 3 */}
              <div className="h-[15rem] w-[16rem] sm:h-[18rem] sm:w-[19rem] bg-neonBlue hover:scale-105 transition-all rounded-xl shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                {/* TEXT */}
                <div className="h-[100%] pt-6 pl-6 pr-6 pb-6 text-center content-center">
                  <div className="text-3xl font-bold pb-3">
                  <Link href="/html">HTML</Link>
                  </div>
                  <p className="text-xl">Programming language</p>
                  <p className="text-8xl font-bold">&#123; &#125;</p>
                </div>
              </div>
              {/* CONTAINER 4 */}
              <div className="h-[6rem] w-[16rem] sm:h-[8rem] sm:w-[19rem] lg:h-[8rem] lg:w-[8rem] bg-neonYellow hover:scale-105 transition-all rounded-xl shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff0,0_0_15px_#ff0,0_0_30px_#ff0]">
                {/* TEXT */}
                  <div className="h-[100%] text-5xl font-bold text-center content-center">
                  <Link href="/subjects">+</Link>
                  </div>
                </div>

              </div>
          
      </motion.div>
      
  )
};

export default Homepage;