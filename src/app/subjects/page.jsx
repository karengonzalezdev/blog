import SideBar from "@/components/sideBar";

const SubjectsPage = () => {
 return (
 <div className='h-screen flex'>
    {/* SIDEBAR */}
    <div className="w-1/5">
    <SideBar />
    </div>
    {/* TEXT */}
    <div className="w-4/5 bg-red-500">
    <h1>Start exploring</h1>
    </div>
 </div>
)
}

export default SubjectsPage