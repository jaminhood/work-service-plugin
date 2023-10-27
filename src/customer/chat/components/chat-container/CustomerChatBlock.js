import useCustomerContext from "../../../context/useCustomerContext"
import CustomerChatCover from "./CustomerChatCover"
import CustomerMessageForm from "./CustomerMessageForm"

const CustomerChatBlock = () => {
 const { activeChat } = useCustomerContext()

 return (
  <div className="grid w-full grid-rows-6 py-4 h-96 bg-zinc-50 border-x border-l-zinc-100 border-r-zinc-50">
   <div className="row-span-5">
    <CustomerChatCover />
   </div>
   <div className="row-span-1 border-t-2 border-zinc-100">{activeChat?.booking_id && <CustomerMessageForm />}</div>
  </div>
 )
}

export default CustomerChatBlock
