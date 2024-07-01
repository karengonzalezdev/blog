import SideBar from "@/components/sideBar";

const JavascriptPage = () => {
    return (
        <div className='md:h-screen md:overflow-auto flex'>

            {/* FILL */}
            <div className="md:relative md:w-1/5">
            </div>

            {/* SIDEBAR */}
            <div className="absolute w-full md:w-1/5">
                <SideBar />
            </div>

            {/* TEXT */}
            <div className="text-white py-8 px-20 md:w-4/5 flex flex-col">
                <h1 className="text-3xl md:text-7xl text-neonPink text-center pb-5">Javascript</h1>
                <p className="text-justify text-xl md:text-2xl py-2">JavaScript es el motor que impulsa la interactividad en la web moderna. Desde su creación en 1995 por Brendan Eich, este lenguaje de programación ha evolucionado para convertirse en una herramienta esencial para desarrolladores de todo el mundo. Pero, ¿qué hace que JavaScript sea tan especial?</p>
                <h2 className="text-2xl md:text-4xl py-2">La Magia de la Interactividad</h2>
                <p className="text-justify text-xl md:text-2xl py-2">A diferencia de HTML y CSS, que se encargan de la estructura y el estilo de las páginas web, JavaScript añade una capa dinámica, permitiendo que las páginas web respondan a las acciones del usuario. Esto incluye desde la validación de formularios en tiempo real hasta la creación de juegos y aplicaciones web complejas.</p>
                <h2 className="text-2xl md:text-4xl py-2">Versatilidad y Potencia</h2>
                <p className="text-justify text-xl md:text-2xl py-2">JavaScript no se limita solo a la web del lado del cliente. Con la llegada de Node.js, este lenguaje ha saltado al ámbito del servidor, permitiendo la creación de aplicaciones backend robustas y eficientes. Esta versatilidad hace que JavaScript sea una elección popular tanto para startups como para grandes corporaciones.</p>
                <h2 className="text-2xl md:text-4xl py-2">Ecosistema y Comunidad</h2>
                <p className="text-justify text-xl md:text-2xl py-2">El ecosistema de JavaScript es vasto y en constante crecimiento. Con bibliotecas y frameworks como React, Angular y Vue.js, los desarrolladores pueden construir interfaces de usuario avanzadas de manera más rápida y eficiente. Además, la comunidad de JavaScript es una de las más activas, ofreciendo innumerables recursos, tutoriales y soporte.</p>
                <h2 className="text-2xl md:text-4xl py-2">Aprendizaje y Futuro</h2>
                <p className="text-justify text-xl md:text-2xl py-2">Aprender JavaScript es una inversión inteligente para cualquier aspirante a desarrollador. Su sintaxis relativamente sencilla y la abundancia de recursos de aprendizaje facilitan la entrada al mundo de la programación. Además, con la constante evolución del lenguaje y su adopción en nuevas áreas como el desarrollo móvil y la inteligencia artificial, el futuro de JavaScript promete ser brillante.</p>
                <h2 className="text-2xl md:text-4xl py-2">Conclusión</h2>
                <p className="text-justify text-xl md:text-2xl py-2">JavaScript es mucho más que un simple lenguaje de scripting; es el alma de la web interactiva. Su capacidad para adaptarse y evolucionar con las necesidades de la industria tecnológica lo convierte en una herramienta imprescindible para desarrolladores actuales y futuros. Si aún no te has sumergido en el mundo de JavaScript, ahora es el momento perfecto para empezar.</p>
            </div>
        </div>
    )
}

export default JavascriptPage