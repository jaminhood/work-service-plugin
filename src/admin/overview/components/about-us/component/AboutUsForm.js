import useAdminContext from "../../../../context/useAdminContext"
import { useEffect, useState } from "react"

const AboutUsForm = () => {
 const { about, handleAboutSubmit } = useAdminContext()
 const [aboutStmt, setAboutStmt] = useState(``)
 const [vision, setVision] = useState(``)
 const [mission, setMission] = useState(``)

 useEffect(() => {
  setAboutStmt(about.about_paragraph)
  setVision(about.about_vision)
  setMission(about.about_mission)
 }, [about])

 const handleSubmission = async () => {
  const params = { about_paragraph: aboutStmt, about_vision: vision, about_mission: mission }
  if (aboutStmt !== `` && vision !== `` && mission !== ``) {
   await handleAboutSubmit(params)
  }
 }

 return (
  <div className="grid gap-4 py-4">
   <div className="flex flex-col gap-2">
    <h4 className="text-base font-sansation-bold text-main-primary">About Us</h4>
    <textarea
     className="w-full h-40 px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
     placeholder="lorem ipsum"
     value={aboutStmt}
     onInput={(e) => setAboutStmt(e.target.value)}></textarea>
   </div>
   <div className="flex flex-col gap-2">
    <h4 className="text-base font-sansation-bold text-main-primary">~ Vision</h4>
    <textarea
     className="w-full h-20 px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
     placeholder="lorem ipsum"
     value={vision}
     onInput={(e) => setVision(e.target.value)}></textarea>
   </div>
   <div className="flex flex-col gap-2">
    <h4 className="text-base font-sansation-bold text-main-primary">~ Mission</h4>
    <textarea
     className="w-full h-20 px-4 py-2 text-sm rounded-md resize-none placeholder:text-sm font-jost-regular"
     placeholder="lorem ipsum"
     value={mission}
     onInput={(e) => setMission(e.target.value)}></textarea>
   </div>
   <div className="flex flex-col gap-2">
    <button
     type="button"
     onClick={handleSubmission}
     className="px-[2rem!important] py-[.5rem!important] transition-all duration-300 ease-in-out bg-green-100 border rounded-md cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
     Submit About.
    </button>
   </div>
  </div>
 )
}

export default AboutUsForm
