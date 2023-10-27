import CustomerChatBlock from "./CustomerChatBlock"
import CustomerChatHeader from "./CustomerChatHeader"

const CustomerChatsContainer = () => {
 return (
  <div className="col-span-2 bg-main-primary">
   <CustomerChatHeader />
   <CustomerChatBlock />
  </div>
 )
}

export default CustomerChatsContainer
