import { BiMoon } from "react-icons/bi"

const DarkMode = ({ handleMode }) => {
 return (
  <>
   <span
    onClick={() => handleMode("dark")}
    className="flex items-center justify-center w-8 h-8 text-gray-900 bg-gray-300 rounded-full shadow-xl cursor-pointer dark:bg-gray-950 dark:text-gray-50">
    <BiMoon size={20} />
   </span>
  </>
 )
}

export default DarkMode
