import { useEffect, useState } from "react"
import { themeData } from "../data"

const useDeviceTheme = () => {
 const [theme, setTheme] = useState("")
 const [currentMode, setCurrentMode] = useState("")
 const [currentIcon, setCurrentIcon] = useState("")

 useEffect(() => {
  setTheme(localStorage.getItem(`theme`) || `dark`)
 }, [])

 useEffect(() => {
  if (theme === "dark") {
   document.documentElement.classList.add("dark")
   setCurrentMode(themeData.dark.mode)
   setCurrentIcon(themeData.dark.icon)
  } else {
   document.documentElement.classList.remove("dark")
   setCurrentMode(themeData.light.mode)
   setCurrentIcon(themeData.light.icon)
  }
 }, [theme])

 const handleMode = (theme) => {
  setTheme(theme)
  localStorage.setItem(`theme`, theme)
 }

 return { currentMode, currentIcon, handleMode }
}

export default useDeviceTheme
