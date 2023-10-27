import useAuthContext from "../../context/useAuthContext"
import WSLogin from "../../login"
import WSRegister from "../../register"
import ActionSectionNavbar from "./ActionSectionNavbar"

const ActionSection = () => {
 const { actionScreen } = useAuthContext()

 return (
  <div className="col-span-1 md:h-screen bg-zinc-50 text-zinc-950 rounded-tl-[3rem] flex justify-center items-center">
   <div className="flex items-center justify-center w-full px-4 py-20">
    <div className="w-full max-w-xl overflow-hidden bg-gray-100 rounded-lg shadow-md">
     <ActionSectionNavbar />
     <div className="p-4">
      {actionScreen === `login` && <WSLogin />}
      {actionScreen === `register` && <WSRegister />}
     </div>
    </div>
   </div>
  </div>
 )
}

export default ActionSection
