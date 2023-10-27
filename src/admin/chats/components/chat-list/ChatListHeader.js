import useAdminContext from "../../../context/useAdminContext"

const ChatListHeader = () => {
 const { bookings } = useAdminContext()

 return (
  <div className="p-4 border-b border-gray-100">
   <h4 className="text-sm font-bold">Chat List</h4>
   <h6 className="font-normal text-[.7rem]">{bookings.length <= 1 ? `${bookings.length} Chat` : `${bookings.length} Chats`}.</h6>
  </div>
 )
}

export default ChatListHeader
