import Link from "next/link"

const Footer = () => {
 return (
 <div className="h-[11rem] bg-second relative">
{/* SOCIAL */}
<div className="flex w-full gap-5 pt-5 justify-center">
<Link href="https://www.linkedin.com/in/karenfggutierrez/" target="_blank" className="pt-1.5 pr-1">
<img src="./linkedin.png" alt="LinkedIn" width={35} height={35}/>
</Link>
<Link href="https://karenfggutierrez.github.io/portfolio" target="_blank" className="pt-1.5">
<img src="./website" alt="Website" width={35} height={35}/>
</Link>
<Link href="mailto:karenfggutierrez@gmail.com" target="_blank" className="pt-1">
<img src="./email.png" alt="Email" width={35} height={55}/>
</Link>
<Link href="https://github.com/karenfggutierrez" target="_blank" className="pt-1">
<img src="./github.png" alt="GitHub" width={35} height={55}/>
</Link>
</div>
{/* LINE */}
<div className="flex w-full justify-between">
<div className="w-[35rem] h-1 bg-pink-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f0f,0_0_15px_#f0f,0_0_30px_#f0f]"></div>
<div className="w-[35rem] h-1 bg-pink-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#f0f,0_0_15px_#f0f,0_0_30px_#f0f]"></div>
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