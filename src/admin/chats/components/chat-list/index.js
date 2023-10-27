import useAdminContext from "../../../context/useAdminContext"
import ChatListBox from "./ChatListBox"
import ChatListHeader from "./ChatListHeader"

const ChatList = () => {
 const { bookings } = useAdminContext()

 return (
  <div className="h-full col-span-1 bg-gray-50">
   <ChatListHeader />
   <div className="w-full overflow-hidden overflow-y-auto h-96 overflow-lines">
    {bookings.map((booking) => (
     <ChatListBox booking={booking} key={booking.booking_id} />
    ))}
   </div>
  </div>
 )
}

export default ChatList
