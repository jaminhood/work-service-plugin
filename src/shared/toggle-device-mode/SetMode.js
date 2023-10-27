import useDeviceTheme from "../../hooks/useDeviceTheme"

const SetMode = () => {
 const { currentMode, currentIcon, handleMode } = useDeviceTheme()

 return (
  <>
   <span
    onClick={() => handleMode(currentMode)}
    className="flex items-center justify-center w-8 h-8 text-gray-900 bg-gray-300 rounded-full shadow-xl cursor-pointer dark:bg-gray-950 dark:text-gray-50">
    {currentIcon}
   </span>
  </>
 )
}

export default SetMode
