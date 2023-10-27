import { useEffect } from "react"
import useAdminContext from "../../../context/useAdminContext"
import MessageBlock from "./MessageBlock"

const ChatCover = () => {
 const { activeChat, messages } = useAdminContext()

 useEffect(() => {
  document.querySelector(`.chat__box`) && document.querySelector(`.chat__box`).scrollTo(0, document.querySelector(`.chat__box`).scrollHeight)
 }, [messages])

 return (
  <div className="w-full h-full overflow-hidden overflow-y-auto overflow-lines chat__box">
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
    <MessageBlock message={msg} key={i} />
   ))}
  </div>
 )
}

export default ChatCover
