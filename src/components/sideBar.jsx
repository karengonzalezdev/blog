"use client"

import { useState } from "react"
import { Link } from "next/link"

import { 
  HiOutlineComputerDesktop,
} from "react-icons/hi2";
import { MdOutlineBackupTable,
         MdOutlineDesignServices,
 } from "react-icons/md";
import { CiMicrochip } from "react-icons/ci";
import { DiMysql } from "react-icons/di";
import { IoIosCloudOutline } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript,
         SiSpring,
         SiSpringboot,
         SiOracle,
         SiRazorpay,
         SiAzuredevops,
         SiGooglecloud,
         SiCanva,
         SiAdobephotoshop,
         SiAdobelightroom,
         SiVisualstudiocode,
         SiEclipseide,
         SiIntellijidea,
         SiPostman,
         SiJquery,
         SiGraphql,
         SiApachetomcat,
         SiNpm,
         SiApachemaven,
         SiHeroku,
         SiMarkdown,
         SiVercel,
         SiWebpack,
         SiRedux,
         SiSwagger,
         SiJson,
         SiSonarqube,
 } from "react-icons/si";
 import { TbApi,
          TbApiApp,
          TbUxCircle,
          TbFileTypeJsx,
          TbBrandFramerMotion,
  } from "react-icons/tb";
import { RiNextjsFill,
         RiTailwindCssFill,
 } from "react-icons/ri";
import { GiTortoise } from "react-icons/gi";
import { GoVersions } from "react-icons/go";
import { FaPlusCircle,
         FaJava,
         FaHtml5,
         FaCss3Alt,
         FaReact,
         FaAngular,
         FaBootstrap,
         FaSass,
         FaNodeJs,
         FaGitAlt,
         FaGithub,
         FaAws,
         FaFigma,
         FaJira,
         FaBitbucket,
         FaJenkins,
         FaTrello,
         FaConfluence,
         FaWindows,
         FaMicrosoft,
         FaLinux,
 } from "react-icons/fa";
import { CgIfDesign } from "react-icons/cg";
import { PiFileSql,
         PiMicrosoftExcelLogoFill,
 } from "react-icons/pi";
import {
  BsChevronDown,
  BsServer,
  BsWindowFullscreen,
} from 'react-icons/bs';

const Menus = [
  {
    title: 'Programming Languages',
    src: 'Programming Languages',
    icon: <FaPlusCircle />,
    subMenu1: [
      {
        title: 'JavaScript',
        src: '@/app/versionControl/page',
        icon: <IoLogoJavascript />,

        cName: 'sub-nav',
      },
      {
        title: 'Java',
        src: '/services/services2',
        icon: <FaJava />,

        cName: 'sub-nav',
      },
      {
        title: 'TypeScript',
        src: '/services/services3',
        icon: <SiTypescript />,
      },
    ],
  },
  {
    title: 'Frontend',
    src: 'Frontend',
    icon: <HiOutlineComputerDesktop />,
    subMenu3: [
      {
        title: 'HTML',
        src: '/services/services1',
        icon: <FaHtml5 />,

        cName: 'sub-nav',
      },
      {
        title: 'CSS',
        src: '/services/services2',
        icon: <FaCss3Alt />,

        cName: 'sub-nav',
      },
      {
        title: 'React.js',
        src: '/services/services3',
        icon: <FaReact />,

        cName: 'sub-nav',
      },
      {
        title: 'Next.js',
        src: '/services/services3',
        icon: <RiNextjsFill />,

        cName: 'sub-nav',
      },
      {
        title: 'Angular',
        src: '/services/services3',
        icon: <FaAngular />,

        cName: 'sub-nav',
      },
      {
        title: 'Tailwind',
        src: '/services/services3',
        icon: <RiTailwindCssFill />,

        cName: 'sub-nav',
      },
      {
        title: 'Bootstrap',
        src: '/services/services3',
        icon: <FaBootstrap />,

        cName: 'sub-nav',
      },
      {
        title: 'SASS',
        src: '/services/services3',
        icon: <FaSass />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Backend',
    src: 'Backend',
    icon: <MdOutlineBackupTable />,
    subMenu4: [
      {
        title: 'Node.js',
        src: '/services/services1',
        icon: <FaNodeJs />,

        cName: 'sub-nav',
      },
      {
        title: 'Spring',
        src: '/services/services2',
        icon: <SiSpring />,

        cName: 'sub-nav',
      },
      {
        title: 'SpringBoot',
        src: '/services/services3',
        icon: <SiSpringboot />,

        cName: 'sub-nav',
      },
      {
        title: 'NPM',
        src: '/services/services3',
        icon: <SiNpm />,

        cName: 'sub-nav',
      },
      {
        title: 'Microservices',
        src: '/services/services3',
        icon: <CiMicrochip />,

        cName: 'sub-nav',
      },
      {
        title: 'API REST',
        src: '/services/services3',
        icon: <TbApiApp />,

        cName: 'sub-nav',
      },
      {
        title: 'API SOAP',
        src: '/services/services3',
        icon: <TbApi />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Database',
    src: 'Database',
    icon: <BsServer />,
    subMenu5: [
      {
        title: 'SQL',
        src: '/services/services1',
        icon: <PiFileSql />,

        cName: 'sub-nav',
      },
      {
        title: 'MySQL',
        src: '/services/services2',
        icon: <DiMysql />,

        cName: 'sub-nav',
      },
      {
        title: 'Oracle Database',
        src: '/services/services3',
        icon: <SiOracle />,

        cName: 'sub-nav',
      },
      {
        title: 'Razor',
        src: '/services/services3',
        icon: <SiRazorpay />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Version Control',
    src: 'Version Control',
    icon: <GoVersions />,
    subMenu6: [
      {
        title: 'Git',
        src: '/services/services1',
        icon: <FaGitAlt />,

        cName: 'sub-nav',
      },
      {
        title: 'GitHub',
        src: '/services/services2',
        icon: <FaGithub />,

        cName: 'sub-nav',
      },
      {
        title: 'TortoiseSVN',
        src: '/services/services3',
        icon: <GiTortoise />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Cloud',
    src: 'Cloud',
    icon: <IoIosCloudOutline />,
    subMenu7: [
      {
        title: 'Azure DevOps',
        src: '/services/services1',
        icon: <SiAzuredevops />,

        cName: 'sub-nav',
      },
      {
        title: 'AWS',
        src: '/services/services2',
        icon: <FaAws />,

        cName: 'sub-nav',
      },
      {
        title: 'Google Cloud',
        src: '/services/services3',
        icon: <SiGooglecloud />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Design',
    src: 'Design',
    icon: <CgIfDesign />,
    subMenu8: [
      {
        title: 'Figma',
        src: '/services/services1',
        icon: <FaFigma />,

        cName: 'sub-nav',
      },
      {
        title: 'Canva',
        src: '/services/services2',
        icon: <SiCanva />,

        cName: 'sub-nav',
      },
      {
        title: 'UX/UI',
        src: '/services/services3',
        icon: <TbUxCircle />,

        cName: 'sub-nav',
      },
      {
        title: 'Adobe Photoshop',
        src: '/services/services3',
        icon: <SiAdobephotoshop />,

        cName: 'sub-nav',
      },
      {
        title: 'Adobe Lightroom',
        src: '/services/services3',
        icon: <SiAdobelightroom />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: "IDE's",
    src: 'IDEs',
    icon: <BsWindowFullscreen />,
    subMenu9: [
      {
        title: 'Visual Studio Code',
        src: '/services/services1',
        icon: <SiVisualstudiocode />,

        cName: 'sub-nav',
      },
      {
        title: 'Eclipse',
        src: '/services/services2',
        icon: <SiEclipseide />,

        cName: 'sub-nav',
      },
      {
        title: 'Intellij Idea',
        src: '/services/services3',
        icon: <SiIntellijidea />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Tools',
    src: 'Tools',
    icon: <MdOutlineDesignServices />,
    subMenu2: [
      {
        title: 'Postman',
        src: '/services/services1',
        icon: <SiPostman />,

        cName: 'sub-nav',
      },
      {
        title: 'Jira',
        src: '/services/services2',
        icon: <FaJira />,

        cName: 'sub-nav',
      },
      {
        title: 'JQuery',
        src: '/services/services3',
        icon: <SiJquery />,

        cName: 'sub-nav',
      },
      {
        title: 'GraphQL',
        src: '/services/services3',
        icon: <SiGraphql />,

        cName: 'sub-nav',
      },
      {
        title: 'BitBucket',
        src: '/services/services3',
        icon: <FaBitbucket />,

        cName: 'sub-nav',
      },
      {
        title: 'Jenkins',
        src: '/services/services3',
        icon: <FaJenkins />,

        cName: 'sub-nav',
      },
      {
        title: 'Apache Tomcat',
        src: '/services/services3',
        icon: <SiApachetomcat />,

        cName: 'sub-nav',
      },
      {
        title: 'Apache Maven',
        src: '/services/services3',
        icon: <SiApachemaven />,

        cName: 'sub-nav',
      },
      {
        title: 'Trello',
        src: '/services/services3',
        icon: <FaTrello />,

        cName: 'sub-nav',
      },
      {
        title: 'Heroku',
        src: '/services/services3',
        icon: <SiHeroku />,

        cName: 'sub-nav',
      },
      {
        title: 'Markdown',
        src: '/services/services3',
        icon: <SiMarkdown />,

        cName: 'sub-nav',
      },
      {
        title: 'Vercel',
        src: '/services/services3',
        icon: <SiVercel />,

        cName: 'sub-nav',
      },
      {
        title: 'Webpack',
        src: '/services/services3',
        icon: <SiWebpack />,

        cName: 'sub-nav',
      },
      {
        title: 'Confluence',
        src: '/services/services3',
        icon: <FaConfluence />,

        cName: 'sub-nav',
      },
      {
        title: 'Windows',
        src: '/services/services3',
        icon: <FaWindows />,

        cName: 'sub-nav',
      },
      {
        title: 'Microsoft Office',
        src: '/services/services3',
        icon: <FaMicrosoft />,

        cName: 'sub-nav',
      },
      {
        title: 'Microsoft Excel',
        src: '/services/services3',
        icon: <PiMicrosoftExcelLogoFill />,

        cName: 'sub-nav',
      },
      {
        title: 'Redux',
        src: '/services/services3',
        icon: <SiRedux />,

        cName: 'sub-nav',
      },
      {
        title: 'Swagger',
        src: '/services/services3',
        icon: <SiSwagger />,

        cName: 'sub-nav',
      },
      {
        title: 'JSON',
        src: '/services/services3',
        icon: <SiJson />,

        cName: 'sub-nav',
      },
      {
        title: 'JSX',
        src: '/services/services3',
        icon: <TbFileTypeJsx />,

        cName: 'sub-nav',
      },
      {
        title: 'Framermotion',
        src: '/services/services3',
        icon: <TbBrandFramerMotion />,

        cName: 'sub-nav',
      },
      {
        title: 'Linux Shell',
        src: '/services/services3',
        icon: <FaLinux />,

        cName: 'sub-nav',
      },
      {
        title: 'SonarQube',
        src: '/services/services3',
        icon: <SiSonarqube />,

        cName: 'sub-nav',
      },
    ],
  },
];

const SideBar = () => {

  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuOpen2, setSubMenuOpen2] = useState(false);
  const [subMenuOpen3, setSubMenuOpen3] = useState(false);
  const [subMenuOpen4, setSubMenuOpen4] = useState(false);
  const [subMenuOpen5, setSubMenuOpen5] = useState(false);
  const [subMenuOpen6, setSubMenuOpen6] = useState(false);
  const [subMenuOpen7, setSubMenuOpen7] = useState(false);
  const [subMenuOpen8, setSubMenuOpen8] = useState(false);
  const [subMenuOpen9, setSubMenuOpen9] = useState(false);
  const toggleSideBar = ()=> {
    setOpen(!open);
  };

  return (
 <div className='h-screen flex'>

<button className="fixed md:hidden z-90 bottom-10 right-10 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg
flex justify-center items-center text-white text-2xl hover:bg-teal-800 duration-300" onClick={toggleSideBar}>
<span className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
</button>
<div className={` ${open ? 'w-screen' : 'w-0'} md:w-72 overflow-auto bg-teal-800 h-screen duration-500`}>

<div className="justify-center mt-3">
    <h1 className={`text-white font-medium text-2xl text-center duration-200 ${!open && 'invisible'} md:visible`}>All</h1>
</div>

<ul className={`${!open && 'invisible'} md:visible`}>
{Menus.map((Menu, index)=>(
<div key={index}>
<li  className={`flex rounded-md p-2 cursor-pointer hover:bg-teal-400 text-white text-lg items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'}`}>
{Menu.icon}
<span className="flex-1">
  {Menu.title}
</span>

{/* SUBMENU */}
{Menu.subMenu1 && <BsChevronDown className={`${subMenuOpen && 'rotate-180'}`} onClick={()=> setSubMenuOpen(!subMenuOpen)}/>}
{Menu.subMenu2 && <BsChevronDown className={`${subMenuOpen2 && 'rotate-180'}`} onClick={()=> setSubMenuOpen2(!subMenuOpen2)}/>}
{Menu.subMenu3 && <BsChevronDown className={`${subMenuOpen3 && 'rotate-180'}`} onClick={()=> setSubMenuOpen3(!subMenuOpen3)}/>}
{Menu.subMenu4 && <BsChevronDown className={`${subMenuOpen4 && 'rotate-180'}`} onClick={()=> setSubMenuOpen4(!subMenuOpen4)}/>}
{Menu.subMenu5 && <BsChevronDown className={`${subMenuOpen5 && 'rotate-180'}`} onClick={()=> setSubMenuOpen5(!subMenuOpen5)}/>}
{Menu.subMenu6 && <BsChevronDown className={`${subMenuOpen6 && 'rotate-180'}`} onClick={()=> setSubMenuOpen6(!subMenuOpen6)}/>}
{Menu.subMenu7 && <BsChevronDown className={`${subMenuOpen2 && 'rotate-180'}`} onClick={()=> setSubMenuOpen7(!subMenuOpen7)}/>}
{Menu.subMenu8 && <BsChevronDown className={`${subMenuOpen2 && 'rotate-180'}`} onClick={()=> setSubMenuOpen8(!subMenuOpen8)}/>}
{Menu.subMenu9 && <BsChevronDown className={`${subMenuOpen2 && 'rotate-180'}`} onClick={()=> setSubMenuOpen9(!subMenuOpen9)}/>}

</li>

{Menu.subMenu1 && subMenuOpen && open && (
  <ul>
                  {Menu.subMenu1.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                    >
                      <Link className="flex px-5 cursor-pointer items-center text-center text-sm text-gray-200 py-1"
                      href={subMenuItem.src}>
                      {subMenuItem.icon} &nbsp;&nbsp;
                      {subMenuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu2 && subMenuOpen2 && open && (
  <ul>
                  {Menu.subMenu2.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-gray-200 py-1"
                      > {subMenuItem.icon} &nbsp;&nbsp;
                        {subMenuItem.title}
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu3 && subMenuOpen3 && open && (
  <ul>
                  {Menu.subMenu3.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-gray-200 py-1"
                    > {subMenuItem.icon} &nbsp;&nbsp;
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu4 && subMenuOpen4 && open && (
  <ul>
                  {Menu.subMenu4.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-gray-200 py-1"
                    > {subMenuItem.icon} &nbsp;&nbsp;
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu5 && subMenuOpen5 && open && (
  <ul>
                  {Menu.subMenu5.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-gray-200 py-1"
                    > {subMenuItem.icon} &nbsp;&nbsp;
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu6 && subMenuOpen6 && open && (
  <ul>
                  {Menu.subMenu6.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-gray-200 py-1"
                    > {subMenuItem.icon} &nbsp;&nbsp;
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu7 && subMenuOpen7 && open && (
  <ul>
                  {Menu.subMenu7.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-gray-200 py-1"
                    > {subMenuItem.icon} &nbsp;&nbsp;
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu8 && subMenuOpen8 && open && (
  <ul>
                  {Menu.subMenu8.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-gray-200 py-1"
                    > {subMenuItem.icon} &nbsp;&nbsp;
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu9 && subMenuOpen9 && open && (
  <ul>
                  {Menu.subMenu9.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-gray-200 py-1"
                    > {subMenuItem.icon} &nbsp;&nbsp;
                      {subMenuItem.title}
                    </li>
                  ))}
                </ul>

)}

</div>

))}
</ul>

</div>

 </div>
)
}

export default SideBar