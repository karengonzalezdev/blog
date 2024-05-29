import Link from "next/link"

import { FaLinkedin,
         FaGithub,
 } from "react-icons/fa";

 import { MdEmail } from "react-icons/md";
 import { TbWorld } from "react-icons/tb";

const Footer = () => {
 return (
 <div className="h-[11rem] bg-second relative">
{/* SOCIAL */}
<div className="flex w-full gap-5 pt-5 justify-center">
<Link href="https://www.linkedin.com/in/karenfggutierrez/" target="_blank" className="">
<FaLinkedin size={35} className="text-neonBlue shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]" />
</Link>
<Link href="https://karenfggutierrez.github.io/portfolio" target="_blank" className="">
<TbWorld size={35} className="text-neonGreen shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#0f0,0_0_15px_#0f0,0_0_30px_#0f0]" />
</Link>
<Link href="mailto:karenfggutierrez@gmail.com" target="_blank" className="">
<MdEmail size={35} className="text-neonPink shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f0f,0_0_15px_#f0f,0_0_30px_#f0f]"/>
</Link>
<Link href="https://github.com/karenfggutierrez" target="_blank" className="">
<FaGithub size={35} className="text-neonYellow shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#ff0,0_0_15px_#ff0,0_0_30px_#ff0]"/>
</Link>
</div>
{/* LINE */}
<div className="flex w-full justify-between">
<div className="w-[17%] sm:w-[33%] md:w-[37%] xl:w-[41%] h-1 bg-pink-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f0f,0_0_15px_#f0f,0_0_30px_#f0f]"></div>
<div className="w-[17%] sm:w-[33%] md:w-[37%] xl:w-[41%] h-1 bg-pink-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f0f,0_0_15px_#f0f,0_0_30px_#f0f]"></div>
</div>
{/* TEXT */}
<div className="pt-5 text-white text-center">
<h1 className="font-bold text-2xl text-glitch text-glitch-duration-slow">Technology Blog</h1>
<p>By Karen Gonzalez</p>
</div>

 </div>

)
}

export default Footer