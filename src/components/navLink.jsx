"use client"

import { usePathname } from "next/navigation"

const { default: Link } = require("next/link")

const NavLink = ({link}) => {

const pathName = usePathname();

 return (
 <Link className={`rounded p-1 ${pathName === link.url && "bg-borgonia text-neonYellow"}`} href={link.url}>
 {link.title}
 </Link>
)
}

export default NavLink