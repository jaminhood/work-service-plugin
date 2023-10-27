import { useEffect } from "react"
import CustomerMessageBlock from "./CustomerMessageBlock"
import useCustomerContext from "../../../context/useCustomerContext"

const CustomerChatCover = () => {
 const { activeChat, messages } = useCustomerContext()

 useEffect(() => {
  document.querySelector(`.chat__box`) && document.querySelector(`.chat__box`).scrollTo(0, document.querySelector(`.chat__box`).scrollHeight)
 })

 return (
  <div className="w-full h-full px-4 overflow-hidden overflow-lines chat__box">
   {activeChat?.booking_name !== undefined && (
    <p className="p-3 rounded-lg my-2 text-[.7rem] font-jost-regular w-full bg-zinc-200 leading-6 text-main-primary">
     <strong className="font-sansation-bold">Name -</strong> {activeChat?.booking_name}
    </p>
   )}
   {activeChat?.booking_desc !== undefined && (
    <p className="p-3 rounded-lg my-2 text-[.7rem] font-jost-regular w-full bg-zinc-200 leading-6 text-main-primary">
     <strong className="font-sansation-bold">Description -</strong> {activeChat?.booking_desc}
    </p>
   )}
   {messages.map((msg, i) => (
    <CustomerMessageBlock message={msg} key={i} />
   ))}
  </div>
 )
}

export default CustomerChatCover
