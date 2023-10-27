import useAdminContext from "../../../context/useAdminContext"

const ChatServiceHeader = () => {
 const { activeChat } = useAdminContext()

 return (
  <div className="p-4 border-b border-l border-main-primary">
   <h4 className="pb-0 mb-0 text-sm text-gray-50 font-sansation-bold">{activeChat.service_name ? `Service` : `No Chat Opened`}</h4>
   <h6 className="font-jost-regular text-gray-50 mb-0 pb-0 text-[.6rem] capitalize">{activeChat.booking_rate ? activeChat.service_name : `Open Chat`}</h6>
  </div>
 )
}

export default ChatServiceHeader
