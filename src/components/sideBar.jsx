"use client"

import { useState } from "react"
import NavSrc from "./navSrc";

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
    subMenu: [
      {
        title: 'JavaScript',
        url: '/javascript',
        icon: <IoLogoJavascript />,

        cName: 'sub-nav',
      },
      {
        title: 'Java',
        url: '/java',
        icon: <FaJava />,

        cName: 'sub-nav',
      },
      {
        title: 'TypeScript',
        url: '/typescript',
        icon: <SiTypescript />,
      },
    ],
  },
  {
    title: 'Frontend',
    src: 'Frontend',
    icon: <HiOutlineComputerDesktop />,
    subMenu2: [
      {
        title: 'HTML',
        url: '/html',
        icon: <FaHtml5 />,

        cName: 'sub-nav',
      },
      {
        title: 'CSS',
        url: '/css',
        icon: <FaCss3Alt />,

        cName: 'sub-nav',
      },
      {
        title: 'React.js',
        url: '/reactjs',
        icon: <FaReact />,

        cName: 'sub-nav',
      },
      {
        title: 'Next.js',
        url: '/nextjs',
        icon: <RiNextjsFill />,

        cName: 'sub-nav',
      },
      {
        title: 'Angular',
        url: '/angular',
        icon: <FaAngular />,

        cName: 'sub-nav',
      },
      {
        title: 'Tailwind CSS',
        url: '/tailwind-css',
        icon: <RiTailwindCssFill />,

        cName: 'sub-nav',
      },
      {
        title: 'Bootstrap',
        url: '/bootstrap',
        icon: <FaBootstrap />,

        cName: 'sub-nav',
      },
      {
        title: 'SASS',
        url: '/sass',
        icon: <FaSass />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Backend',
    src: 'Backend',
    icon: <MdOutlineBackupTable />,
    subMenu3: [
      {
        title: 'Node.js',
        url: '/nodejs',
        icon: <FaNodeJs />,

        cName: 'sub-nav',
      },
      {
        title: 'Spring',
        url: '/spring',
        icon: <SiSpring />,

        cName: 'sub-nav',
      },
      {
        title: 'SpringBoot',
        url: '/springboot',
        icon: <SiSpringboot />,

        cName: 'sub-nav',
      },
      {
        title: 'Spring Security',
        url: '/spring-security',
        icon: <SiSpringboot />,

        cName: 'sub-nav',
      },
      {
        title: 'NPM',
        url: '/npm',
        icon: <SiNpm />,

        cName: 'sub-nav',
      },
      {
        title: 'Microservices',
        url: '/microservices',
        icon: <CiMicrochip />,

        cName: 'sub-nav',
      },
      {
        title: 'API REST',
        url: '/api-rest',
        icon: <TbApiApp />,

        cName: 'sub-nav',
      },
      {
        title: 'API SOAP',
        url: '/api-soap',
        icon: <TbApi />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Database',
    src: 'Database',
    icon: <BsServer />,
    subMenu4: [
      {
        title: 'SQL',
        url: '/sql',
        icon: <PiFileSql />,

        cName: 'sub-nav',
      },
      {
        title: 'MySQL',
        url: '/mysql',
        icon: <DiMysql />,

        cName: 'sub-nav',
      },
      {
        title: 'Oracle Database',
        url: '/oracle-database',
        icon: <SiOracle />,

        cName: 'sub-nav',
      },
      {
        title: 'Razor',
        url: '/razor',
        icon: <SiRazorpay />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Version Control',
    src: 'Version Control',
    icon: <GoVersions />,
    subMenu5: [
      {
        title: 'Git',
        url: '/git',
        icon: <FaGitAlt />,

        cName: 'sub-nav',
      },
      {
        title: 'GitHub',
        url: '/github',
        icon: <FaGithub />,

        cName: 'sub-nav',
      },
      {
        title: 'Tortoise SVN',
        url: '/tortoise-svn',
        icon: <GiTortoise />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Cloud',
    url: 'Cloud',
    icon: <IoIosCloudOutline />,
    subMenu6: [
      {
        title: 'Azure DevOps',
        url: '/azure-devops',
        icon: <SiAzuredevops />,

        cName: 'sub-nav',
      },
      {
        title: 'AWS',
        url: '/aws',
        icon: <FaAws />,

        cName: 'sub-nav',
      },
      {
        title: 'Google Cloud',
        url: '/google-cloud',
        icon: <SiGooglecloud />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Design',
    src: 'Design',
    icon: <CgIfDesign />,
    subMenu7: [
      {
        title: 'Figma',
        url: '/figma',
        icon: <FaFigma />,

        cName: 'sub-nav',
      },
      {
        title: 'Canva',
        url: '/canva',
        icon: <SiCanva />,

        cName: 'sub-nav',
      },
      {
        title: 'UX/UI',
        url: '/ux-ui',
        icon: <TbUxCircle />,

        cName: 'sub-nav',
      },
      {
        title: 'Adobe Photoshop',
        url: '/photoshop',
        icon: <SiAdobephotoshop />,

        cName: 'sub-nav',
      },
      {
        title: 'Adobe Lightroom',
        url: '/lightroom',
        icon: <SiAdobelightroom />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: "IDE's",
    src: 'IDEs',
    icon: <BsWindowFullscreen />,
    subMenu8: [
      {
        title: 'Visual Studio Code',
        url: '/visual-studio-code',
        icon: <SiVisualstudiocode />,

        cName: 'sub-nav',
      },
      {
        title: 'Eclipse',
        url: '/eclipse',
        icon: <SiEclipseide />,

        cName: 'sub-nav',
      },
      {
        title: 'Intellij Idea',
        url: '/intellij-idea',
        icon: <SiIntellijidea />,

        cName: 'sub-nav',
      },
    ],
  },
  {
    title: 'Tools',
    src: 'Tools',
    icon: <MdOutlineDesignServices />,
    subMenu9: [
      {
        title: 'Postman',
        url: '/postman',
        icon: <SiPostman />,

        cName: 'sub-nav',
      },
      {
        title: 'Jira',
        url: '/jira',
        icon: <FaJira />,

        cName: 'sub-nav',
      },
      {
        title: 'JQuery',
        url: '/jquery',
        icon: <SiJquery />,

        cName: 'sub-nav',
      },
      {
        title: 'GraphQL',
        url: '/graphQL',
        icon: <SiGraphql />,

        cName: 'sub-nav',
      },
      {
        title: 'BitBucket',
        url: '/bitbucket',
        icon: <FaBitbucket />,

        cName: 'sub-nav',
      },
      {
        title: 'Jenkins',
        url: '/jenkins',
        icon: <FaJenkins />,

        cName: 'sub-nav',
      },
      {
        title: 'Apache Tomcat',
        url: '/apache-tomcat',
        icon: <SiApachetomcat />,

        cName: 'sub-nav',
      },
      {
        title: 'Apache Maven',
        url: '/apache-maven',
        icon: <SiApachemaven />,

        cName: 'sub-nav',
      },
      {
        title: 'Trello',
        url: '/trello',
        icon: <FaTrello />,

        cName: 'sub-nav',
      },
      {
        title: 'Heroku',
        url: '/heroku',
        icon: <SiHeroku />,

        cName: 'sub-nav',
      },
      {
        title: 'Markdown',
        url: '/markdown',
        icon: <SiMarkdown />,

        cName: 'sub-nav',
      },
      {
        title: 'Vercel',
        url: '/vercel',
        icon: <SiVercel />,

        cName: 'sub-nav',
      },
      {
        title: 'Webpack',
        url: '/webpack',
        icon: <SiWebpack />,

        cName: 'sub-nav',
      },
      {
        title: 'Confluence',
        url: '/confluence',
        icon: <FaConfluence />,

        cName: 'sub-nav',
      },
      {
        title: 'Windows',
        url: '/windows',
        icon: <FaWindows />,

        cName: 'sub-nav',
      },
      {
        title: 'Office Package',
        url: '/office-package',
        icon: <FaMicrosoft />,

        cName: 'sub-nav',
      },
      {
        title: 'Microsoft Excel',
        url: '/excel',
        icon: <PiMicrosoftExcelLogoFill />,

        cName: 'sub-nav',
      },
      {
        title: 'Redux',
        url: '/redux',
        icon: <SiRedux />,

        cName: 'sub-nav',
      },
      {
        title: 'Swagger',
        url: '/swagger',
        icon: <SiSwagger />,

        cName: 'sub-nav',
      },
      {
        title: 'JSON',
        url: '/json',
        icon: <SiJson />,

        cName: 'sub-nav',
      },
      {
        title: 'JSX',
        url: '/jsx',
        icon: <TbFileTypeJsx />,

        cName: 'sub-nav',
      },
      {
        title: 'Framermotion',
        url: '/framermotion',
        icon: <TbBrandFramerMotion />,

        cName: 'sub-nav',
      },
      {
        title: 'Linux Shell',
        url: '/linux-shell',
        icon: <FaLinux />,

        cName: 'sub-nav',
      },
      {
        title: 'SonarQube',
        url: '/sonarQube',
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

<button className="fixed md:hidden z-90 bottom-10 right-10 bg-purple-950 w-20 h-20 rounded-full drop-shadow-lg
flex justify-center items-center text-neonGreen text-2xl hover:bg-purple-700 duration-300" onClick={toggleSideBar}>
<span className="text-neonGreen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-10 m-auto"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
            />
          </svg>
        </span>
</button>
<div className={` ${open ? 'w-screen' : 'w-0'} md:w-72 overflow-auto bg-borgonia text-neonYellow h-screen duration-500`}>

<div className="justify-center mt-3">
    <h1 className={`text-neonGreen font-medium text-2xl text-center duration-200 ${!open && 'invisible'} md:visible`}>All</h1>
</div>

<ul className={`${!open && 'invisible'} md:visible`}>
{Menus.map((Menu, index)=>(
<div key={index}>
<li  className={`flex rounded-md p-2 cursor-pointer hover:bg-purple-700 hover:text-neonBlue text-neonYellow text-lg items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'}`}>
{Menu.icon}
<span className="flex-1">
  {Menu.title}
</span>

{/* SUBMENU */}
{Menu.subMenu && <BsChevronDown className={`${subMenuOpen && 'rotate-180'}`} onClick={()=> setSubMenuOpen(!subMenuOpen)}/>}
{Menu.subMenu2 && <BsChevronDown className={`${subMenuOpen2 && 'rotate-180'}`} onClick={()=> setSubMenuOpen2(!subMenuOpen2)}/>}
{Menu.subMenu3 && <BsChevronDown className={`${subMenuOpen3 && 'rotate-180'}`} onClick={()=> setSubMenuOpen3(!subMenuOpen3)}/>}
{Menu.subMenu4 && <BsChevronDown className={`${subMenuOpen4 && 'rotate-180'}`} onClick={()=> setSubMenuOpen4(!subMenuOpen4)}/>}
{Menu.subMenu5 && <BsChevronDown className={`${subMenuOpen5 && 'rotate-180'}`} onClick={()=> setSubMenuOpen5(!subMenuOpen5)}/>}
{Menu.subMenu6 && <BsChevronDown className={`${subMenuOpen6 && 'rotate-180'}`} onClick={()=> setSubMenuOpen6(!subMenuOpen6)}/>}
{Menu.subMenu7 && <BsChevronDown className={`${subMenuOpen7 && 'rotate-180'}`} onClick={()=> setSubMenuOpen7(!subMenuOpen7)}/>}
{Menu.subMenu8 && <BsChevronDown className={`${subMenuOpen8 && 'rotate-180'}`} onClick={()=> setSubMenuOpen8(!subMenuOpen8)}/>}
{Menu.subMenu9 && <BsChevronDown className={`${subMenuOpen9 && 'rotate-180'}`} onClick={()=> setSubMenuOpen9(!subMenuOpen9)}/>}

</li>

{Menu.subMenu && subMenuOpen && open && (
  <ul>
                  {Menu.subMenu.map((subMenuItem, idx) => (
                    <li
                    key={idx}
                    className="flex px-5 cursor-pointer items-center text-center text-sm text-neonYellow py-1"
                    >
                      <NavSrc link={subMenuItem} key={subMenuItem.title} />
                  </li>
                  ))}
                </ul>

)}

{Menu.subMenu2 && subMenuOpen2 && open && (
  <ul>
                  {Menu.subMenu2.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-neonYellow py-1"
                      > 
                      <NavSrc link={subMenuItem} key={subMenuItem.title} />
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu3 && subMenuOpen3 && open && (
  <ul>
                  {Menu.subMenu3.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-neonYellow py-1"
                    > 
                    <NavSrc link={subMenuItem} key={subMenuItem.title} />
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu4 && subMenuOpen4 && open && (
  <ul>
                  {Menu.subMenu4.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-neonYellow py-1"
                    > 
                    <NavSrc link={subMenuItem} key={subMenuItem.title} />
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu5 && subMenuOpen5 && open && (
  <ul>
                  {Menu.subMenu5.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-neonYellow py-1"
                    > 
                    <NavSrc link={subMenuItem} key={subMenuItem.title} />
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu6 && subMenuOpen6 && open && (
  <ul>
                  {Menu.subMenu6.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-neonYellow py-1"
                    > 
                    <NavSrc link={subMenuItem} key={subMenuItem.title} />
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu7 && subMenuOpen7 && open && (
  <ul>
                  {Menu.subMenu7.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-neonYellow py-1"
                    > 
                    <NavSrc link={subMenuItem} key={subMenuItem.title} />
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu8 && subMenuOpen8 && open && (
  <ul>
                  {Menu.subMenu8.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-neonYellow py-1"
                    > 
                    <NavSrc link={subMenuItem} key={subMenuItem.title} />
                    </li>
                  ))}
                </ul>

)}

{Menu.subMenu9 && subMenuOpen9 && open && (
  <ul>
                  {Menu.subMenu9.map((subMenuItem, idx) => (
                    <li
                      key={idx}
                      className="flex px-5 cursor-pointer items-center text-center text-sm text-neonYellow py-1"
                    > 
                    <NavSrc link={subMenuItem} key={subMenuItem.title} />
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