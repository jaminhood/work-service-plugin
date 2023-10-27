import useAdminContext from "../../../context/useAdminContext"
import ChatServiceForm from "./ChatServiceForm"
import ChatServiceInfo from "./ChatServiceInfo"

const ChatServiceBlock = () => {
 const { activeChat } = useAdminContext()

 return (
  <div className="grid w-full grid-rows-6 p-4 border-l h-96 border-gray-50">
   {activeChat.booking_id !== undefined && (
    <>
     <div className="row-span-5">
      <ChatServiceInfo />
     </div>
     <div className="row-span-1 border-t-2 border-gray-50">
      <ChatServiceForm />
     </div>
    </>
   )}
  </div>
 )
}

export default ChatServiceBlock
