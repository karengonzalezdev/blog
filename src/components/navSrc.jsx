"use client"

import { usePathname } from "next/navigation"

const { default: Link } = require("next/link")

const NavSrc = ({link}) => {

const pathName = usePathname();

 return (
 <Link className={`flex content-center items-center text-center ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
 {link.icon} &nbsp;&nbsp; {link.title}
 </Link>
)
}

export default NavSrc