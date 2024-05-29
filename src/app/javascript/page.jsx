import SideBar from "@/components/sideBar";
import Image from "next/image";

const JavascriptPage = () => {
    return (
    <div className='md:h-screen md:overflow-auto flex'>
        
    {/* FILL */}
    <div className="md:relative md:w-1/5">
    </div>

    {/* SIDEBAR */}
    <div className="relative md:absolute w-full md:w-1/5">
        <SideBar />
    </div>

    {/* TEXT */}
    <div className="text-white py-8 px-20 md:w-4/5 flex flex-col">
        <h1 className="text-3xl md:text-7xl text-center pb-5">Javascript</h1>
        <p className="text-justify text-xl md:text-2xl py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia illum provident unde suscipit repellat nostrum, expedita quos totam qui, exercitationem numquam maiores iure dolorum nulla voluptatem praesentium placeat ut ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam laudantium minima? Vero, at consequatur debitis adipisci ex iusto rerum! Sapiente exercitationem esse labore architecto, voluptatem rerum velit distinctio soluta.</p>
        <p className="text-justify text-xl md:text-2xl py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, culpa ducimus eveniet eos quisquam obcaecati. Odit harum nisi, ratione vitae excepturi, repudiandae, doloremque quod commodi sit molestias ea ut. Neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus soluta a, nam quidem sint eum consequatur harum molestiae assumenda inventore atque repudiandae ut, repellendus voluptate rerum quas? Porro, esse quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam laudantium minima? Vero, at consequatur debitis adipisci ex iusto rerum! Sapiente exercitationem esse labore architecto, voluptatem rerum velit distinctio soluta.</p>
        <p className="text-justify text-xl md:text-2xl py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia illum provident unde suscipit repellat nostrum, expedita quos totam qui, exercitationem numquam maiores iure dolorum nulla voluptatem praesentium placeat ut ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam laudantium minima? Vero, at consequatur debitis adipisci ex iusto rerum! Sapiente exercitationem esse labore architecto, voluptatem rerum velit distinctio soluta.</p>
    </div>

    </div>
   )
   }
   
   export default JavascriptPage