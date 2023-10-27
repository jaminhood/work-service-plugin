import img from "../../../../assets/logo-light.png"
import useAdminContext from "../../../context/useAdminContext"

const ChatListBox = ({ booking }) => {
 const { activeChat, handleActiveChat } = useAdminContext()

 const handleChat = () => handleActiveChat(booking)

 return (
  <div
   className={`flex items-center gap-2 p-4 transition-all duration-300 ease-in-out border-b cursor-pointer border-zinc-100 hover:bg-zinc-100 ${
    activeChat.booking_id === booking.booking_id && `bg-zinc-100`
   }`}
   onClick={handleChat}>
   <div className="flex items-center justify-center w-12 h-12 overflow-hidden rounded-full bg-main-primary text-zinc-50">
    <span className="relative z-0 flex items-center justify-center w-12 h-12 overflow-hidden rounded-full">
     <div className="absolute inset-0 before:absolute before:content-[''] before:inset-0 before:bg-main-primary before:opacity-70 -z-10">
      <img src={booking.service_icon != 0 ? booking.service_icon : img} className="object-cover w-full h-full" />
     </div>
    </span>
   </div>
   <div>
    <h4 className="pb-0 mb-1 text-sm text-main-primary font-sansation-bold">{booking.service_name}</h4>
    <h6 className="font-jost-regular text-main-primary mb-0 pb-0 text-[.6rem] capitalize">{booking.service_category}.</h6>
   </div>
  </div>
 )
}

export default ChatListBox
