import useCustomerContext from "../../../context/useCustomerContext"
import CustomerChatListBox from "./CustomerChatListBox"
import CustomerChatListHeader from "./CustomerChatListHeader"

const CustomerChatList = () => {
 const { bookings } = useCustomerContext()

 return (
  <div className="col-span-1 bg-zinc-50">
   <CustomerChatListHeader />
   <div className="w-full overflow-hidden overflow-y-auto h-96 overflow-lines">
    {bookings.map((booking) => (
     <CustomerChatListBox booking={booking} key={booking.booking_id} />
    ))}
   </div>
  </div>
 )
}

export default CustomerChatList
