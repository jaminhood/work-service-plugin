import useAdminContext from "../../../context/useAdminContext"
import ChatCover from "./ChatCover"
import MessageForm from "./MessageForm"

const ChatBlock = () => {
 const { activeChat } = useAdminContext()

 return (
  <div className="grid w-full grid-rows-6 p-4 h-96 bg-gray-50 border-x border-l-gray-100 border-r-gray-50">
   <div className="row-span-5">
    <ChatCover />
   </div>
   <div className="row-span-1 border-t-2 border-zinc-100">{activeChat?.booking_id && <MessageForm />}</div>
  </div>
 )
}

export default ChatBlock
