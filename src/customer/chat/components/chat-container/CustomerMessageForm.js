import { useState } from "react"
import useCustomerContext from "../../../context/useCustomerContext"

const CustomerMessageForm = () => {
 const { handleMessage } = useCustomerContext()
 const [msg, setMsg] = useState(``)

 const handleSend = () => {
  try {
   handleMessage(msg)
  } catch (e) {
   console.log(e.messsage)
  } finally {
   setMsg(``)
  }
 }

 return (
  <div className="grid items-stretch grid-cols-6 mt-2">
   <div className="h-full col-span-5">
    <input
     type="text"
     className="w-full h-full py-[.25rem!important] px-[1rem!important] font-semibold rounded-[0!important] border border-main-primary"
     placeholder="Type Message.."
     value={msg}
     onInput={(e) => setMsg(e.target.value)}
     min="900"
    />
   </div>
   <div className="h-full col-span-1">
    <button
     type="text"
     onClick={handleSend}
     className="w-full h-full px-4 py-2 font-semibold transition-all duration-300 ease-in-out bg-green-100 border cursor-pointer text-main-primary border-main-primary hover:bg-main-primary hover:text-green-100 focus:outline-none">
     Send
    </button>
   </div>
  </div>
 )
}

export default CustomerMessageForm
