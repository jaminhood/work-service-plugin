import { leftMenuLinks } from "../../../../data"
import LeftMenuLink from "./LeftMenuLink"

const LeftMenu = () => {
 return (
  <div className="flex flex-col items-center justify-center w-full gap-8 px-4 py-8">
   {leftMenuLinks.map((data) => (
    <LeftMenuLink data={data} key={data.path} />
   ))}
  </div>
 )
}

export default LeftMenu
