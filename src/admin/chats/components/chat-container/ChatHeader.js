import { getStatus } from "../../../../utils"
import useAdminContext from "../../../context/useAdminContext"

const ChatHeader = () => {
 const { activeChat } = useAdminContext()

 return (
  <div className="p-4 border-b border-zinc-100">
   <h4 className="pb-0 mb-0 text-sm text-gray-50 font-sansation-bold">{activeChat.service_name ? activeChat.service_name : `No Chat Opened`}</h4>
   <h6 className="font-jost-regular text-gray-50 mb-0 pb-0 text-[.6rem] capitalize">{activeChat.booking_rate ? getStatus(activeChat.booking_status) : `Open Chat`}</h6>
  </div>
 )
}

export default ChatHeader
