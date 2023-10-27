import axios from "axios"
import { useEffect } from "react"

const Logout = () => {
 useEffect(async () => {
  await axios
   .post(`http://localhost/dev/wp-json/ws-auth/v1/logout`)
   .then(() => location.reload())
 }, [])

 return (
  <>
   <div className="flex items-center justify-center h-screen">
    <div className="w-20 h-20 border-4 border-gray-300 rounded-full border-l-green-500 animate-spin"></div>
   </div>
  </>
 )
}

export default Logout
