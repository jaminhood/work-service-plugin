import useCustomerContext from "../../../context/useCustomerContext"

const CustomerChatListHeader = () => {
 const { bookings } = useCustomerContext()

 return (
  <div className="p-4 border-b border-zinc-100">
   <h4 className="pb-0 mb-0 text-base font-sansation-bold text-main-primary">Bookings List</h4>
   <h6 className="font-jost-regular text-main-primary mb-0 pb-0 text-[.6rem] capitalize">{bookings.length <= 1 ? `${bookings.length} Chat` : `${bookings.length} Chats`}.</h6>
  </div>
 )
}

export default CustomerChatListHeader
