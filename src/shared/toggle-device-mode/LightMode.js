import { BiSun } from "react-icons/bi"

const LightMode = ({ handleMode }) => {
 return (
  <>
   <span
    onClick={() => handleMode("light")}
    className="flex items-center justify-center w-8 h-8 text-gray-900 bg-gray-300 rounded-full shadow-xl cursor-pointer dark:bg-gray-950 dark:text-gray-50">
    <BiSun size={30} />
   </span>
  </>
 )
}

export default LightMode
