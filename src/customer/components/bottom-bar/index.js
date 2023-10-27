import { navLinks } from "../../../data"
import BottomBarLink from "./BottomBarLink"

const BottomBar = () => {
 return (
  <div className="fixed bottom-0 left-0 z-50 w-full p-4 text-gray-900 bg-gray-200 rounded-t-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
   <ul className="flex items-center justify-between">
    {navLinks.map((data) => (
     <BottomBarLink key={data.render} data={data} />
    ))}
   </ul>
  </div>
 )
}

export default BottomBar
